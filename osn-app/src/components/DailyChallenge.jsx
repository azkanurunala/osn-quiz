// DailyChallenge.jsx — Widget "Tantangan Hari Ini" yang memilih 3 soal harian
// secara deterministik (seed = tanggal), melacak progress di localStorage
// dengan kunci `osn-daily-{YYYY-MM-DD}`, dan memberi 15 XP per jawaban benar.
//
// Props:
//   - questionsData: objek hasil import('../data/questions.json')
//   - onAddXp(n):    callback dipanggil dengan jumlah XP saat user menjawab benar
//
// Wiring example (mis. di Dashboard.jsx):
//   import questionsData from '../data/questions.json';
//   import DailyChallenge from './DailyChallenge';
//   ...
//   <DailyChallenge
//     questionsData={questionsData}
//     onAddXp={(n) => setXp((xp) => xp + n)}
//   />
//
// Catatan: komponen ini stand-alone, tidak menyentuh file lain. Gunakan
// localStorage langsung; key `osn-daily-{tanggal}` agar otomatis "reset"
// setiap hari (key kemarin tetap ada di storage tapi tidak terbaca lagi).

import { useEffect, useMemo, useState } from 'react';
import {
  CalendarDays,
  Sparkles,
  CheckCircle2,
  XCircle,
  Hourglass,
  Trophy,
  ArrowRight,
  Flame,
} from 'lucide-react';
import { todayKey } from '../utils/streak';
import { InlineMarkdown } from '../utils/markdown';

const XP_PER_CORRECT = 15;

// ---------- Deterministic RNG ----------
function hashString(str) {
  // xfnv1a — small, deterministic 32-bit hash
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pickDailyIndexes(dateKey, total, count = 3) {
  const n = Math.min(count, total);
  if (n <= 0) return [];
  const rng = mulberry32(hashString(`osn-daily::${dateKey}`));
  const picked = new Set();
  // Reservoir-ish: keep drawing until we have `n` unique indexes.
  let safety = total * 10;
  while (picked.size < n && safety-- > 0) {
    const idx = Math.floor(rng() * total);
    if (idx >= 0 && idx < total) picked.add(idx);
  }
  return Array.from(picked);
}

// ---------- localStorage helpers ----------
function storageKey(dateKey) {
  return `osn-daily-${dateKey}`;
}

function loadProgress(dateKey) {
  try {
    const raw = localStorage.getItem(storageKey(dateKey));
    if (!raw) return { completed: [], correct: 0 };
    const parsed = JSON.parse(raw);
    return {
      completed: Array.isArray(parsed?.completed) ? parsed.completed : [],
      correct: typeof parsed?.correct === 'number' ? parsed.correct : 0,
    };
  } catch {
    return { completed: [], correct: 0 };
  }
}

function saveProgress(dateKey, progress) {
  try {
    localStorage.setItem(storageKey(dateKey), JSON.stringify(progress));
  } catch {
    /* ignore quota errors */
  }
}

// ---------- Component ----------
export default function DailyChallenge({ questionsData, onAddXp }) {
  const dateKey = useMemo(() => todayKey(), []);
  const allQuestions = useMemo(
    () => (Array.isArray(questionsData?.questions) ? questionsData.questions : []),
    [questionsData]
  );

  const dailyIndexes = useMemo(
    () => pickDailyIndexes(dateKey, allQuestions.length, 3),
    [dateKey, allQuestions.length]
  );

  const dailySoal = useMemo(
    () => dailyIndexes.map((i) => ({ idx: i, q: allQuestions[i] })).filter((x) => x.q),
    [dailyIndexes, allQuestions]
  );

  const [progress, setProgress] = useState(() => loadProgress(dateKey));
  const [mode, setMode] = useState('idle'); // 'idle' | 'playing' | 'done'
  const [playPos, setPlayPos] = useState(0); // index within dailySoal that we are answering next
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);

  // If user opens after already completing 3/3, jump to done view
  useEffect(() => {
    if (dailySoal.length > 0 && progress.completed.length >= dailySoal.length) {
      setMode('done');
    }
  }, [dailySoal.length, progress.completed.length]);

  if (dailySoal.length === 0) {
    return null;
  }

  const allDone = progress.completed.length >= dailySoal.length;

  function statusFor(idx) {
    if (!progress.completed.includes(idx)) return 'pending';
    // We don't store per-soal correctness; reconstruct from current answer trail:
    // simpler approach — show check vs cross based on whether it was the last one
    // and we tracked it. To stay simple & deterministic we mark all completed as ok;
    // detailed correctness lives in `progress.perItem` if available.
    if (progress.perItem && typeof progress.perItem[idx] === 'boolean') {
      return progress.perItem[idx] ? 'correct' : 'wrong';
    }
    return 'correct';
  }

  function startChallenge() {
    // Resume at first not-yet-completed soal
    const nextPos = dailySoal.findIndex(({ idx }) => !progress.completed.includes(idx));
    setPlayPos(nextPos === -1 ? 0 : nextPos);
    setPicked(null);
    setChecked(false);
    setMode(allDone ? 'done' : 'playing');
  }

  function handleCheck() {
    if (picked == null || checked) return;
    const current = dailySoal[playPos];
    if (!current) return;
    const isCorrect = picked === current.q.answerKey;
    if (isCorrect && typeof onAddXp === 'function') {
      onAddXp(XP_PER_CORRECT);
    }
    const nextProgress = {
      completed: Array.from(new Set([...progress.completed, current.idx])),
      correct: progress.correct + (isCorrect ? 1 : 0),
      perItem: { ...(progress.perItem || {}), [current.idx]: isCorrect },
    };
    setProgress(nextProgress);
    saveProgress(dateKey, nextProgress);
    setChecked(true);
  }

  function handleNext() {
    const isLast = playPos >= dailySoal.length - 1;
    if (isLast) {
      setMode('done');
    } else {
      setPlayPos(playPos + 1);
      setPicked(null);
      setChecked(false);
    }
  }

  // ---------- DONE view ----------
  if (mode === 'done') {
    return (
      <div className="glass-card rounded-3xl p-6 relative overflow-hidden animate-fade-in">
        <div className="absolute right-0 top-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="relative">
          <span className="bg-brand-primary/10 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Tantangan Hari Ini
          </span>
          <h3 className="text-xl font-bold font-heading mt-3 mb-1 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-brand-primary" /> Selesai!
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Skor harianmu: <strong className="text-gray-900">{progress.correct}/{dailySoal.length}</strong>
            {progress.correct === dailySoal.length && (
              <span className="ml-2 inline-flex items-center gap-1 text-yellow-600 font-bold">
                <Flame className="w-4 h-4" /> Sempurna!
              </span>
            )}
          </p>
          <div className="bg-blue-50/60 border border-blue-100 text-blue-900 rounded-2xl p-4 text-sm flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
            <span>Datang lagi besok untuk tantangan baru! Konsistensi adalah kunci juara OSN.</span>
          </div>
        </div>
      </div>
    );
  }

  // ---------- PLAYING view ----------
  if (mode === 'playing') {
    const current = dailySoal[playPos];
    const q = current.q;
    const isCorrect = picked === q.answerKey;

    return (
      <div className="glass-card rounded-3xl p-6 relative overflow-hidden animate-fade-in">
        <div className="absolute right-0 top-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-brand-primary/10 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Soal {playPos + 1} / {dailySoal.length}
            </span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              {q.level || 'Kab'} · +{XP_PER_CORRECT} XP
            </span>
          </div>

          {q.subTopic && (
            <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">
              {q.subTopic}
            </p>
          )}
          <p className="text-gray-800 text-base leading-relaxed mb-4">
            <InlineMarkdown text={q.question} />
          </p>

          <div className="space-y-2 mb-4">
            {['A', 'B', 'C', 'D'].map((key) => {
              const text = q.options?.[key];
              if (text == null) return null;
              const isPicked = picked === key;
              const isAnswer = q.answerKey === key;
              let cls =
                'w-full text-left rounded-2xl px-4 py-3 border text-sm flex items-start gap-3 transition-all ';
              if (checked) {
                if (isAnswer) {
                  cls += 'bg-green-50 border-green-300 text-green-900';
                } else if (isPicked) {
                  cls += 'bg-red-50 border-red-300 text-red-900';
                } else {
                  cls += 'bg-white/60 border-gray-200 text-gray-600';
                }
              } else if (isPicked) {
                cls += 'bg-brand-primary/5 border-brand-primary text-gray-900';
              } else {
                cls += 'bg-white/70 border-gray-200 text-gray-800 hover:border-brand-primary/50';
              }
              return (
                <button
                  key={key}
                  type="button"
                  disabled={checked}
                  onClick={() => setPicked(key)}
                  className={cls}
                >
                  <span className="font-bold font-heading">{key}.</span>
                  <span className="flex-1">
                    <InlineMarkdown text={text} />
                  </span>
                </button>
              );
            })}
          </div>

          {checked && (
            <div
              className={`rounded-2xl p-3 text-sm mb-4 border ${
                isCorrect
                  ? 'bg-green-50 border-green-200 text-green-900'
                  : 'bg-red-50 border-red-200 text-red-900'
              }`}
            >
              <div className="font-bold mb-1 flex items-center gap-2">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Benar! +{XP_PER_CORRECT} XP
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4" /> Belum tepat — kunci: {q.answerKey}
                  </>
                )}
              </div>
              {q.concept && (
                <p className="text-xs leading-relaxed">
                  <InlineMarkdown text={q.concept} />
                </p>
              )}
            </div>
          )}

          {!checked ? (
            <button
              type="button"
              onClick={handleCheck}
              disabled={picked == null}
              className={`w-full font-bold font-heading text-sm rounded-2xl px-5 py-3 flex items-center justify-center gap-2 transition-all ${
                picked == null
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-brand-primary text-white hover:brightness-110 shadow-lg shadow-red-500/30'
              }`}
            >
              Periksa Jawaban
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="w-full font-bold font-heading text-sm rounded-2xl px-5 py-3 flex items-center justify-center gap-2 bg-brand-accent text-white hover:brightness-110 shadow-lg shadow-blue-500/30 transition-all"
            >
              {playPos >= dailySoal.length - 1 ? 'Lihat Hasil' : 'Soal Berikutnya'}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // ---------- IDLE (overview) view ----------
  return (
    <div className="glass-card rounded-3xl p-6 relative overflow-hidden animate-fade-in">
      <div className="absolute right-0 top-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl"></div>

      <div className="relative flex items-start justify-between gap-4 mb-5">
        <div>
          <span className="bg-brand-primary/10 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Daily Quest
          </span>
          <h3 className="text-xl font-bold font-heading mt-3 mb-1 flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-brand-primary" /> Tantangan Hari Ini
          </h3>
          <p className="text-gray-500 text-sm">
            3 soal pilihan untuk {dateKey}. Selesaikan untuk +{XP_PER_CORRECT * dailySoal.length} XP maksimal.
          </p>
        </div>
      </div>

      <ul className="relative space-y-2 mb-5">
        {dailySoal.map(({ idx, q }, i) => {
          const status = statusFor(idx);
          const tone =
            status === 'correct'
              ? 'bg-green-50 border-green-200 text-green-800'
              : status === 'wrong'
              ? 'bg-red-50 border-red-200 text-red-800'
              : 'bg-white/70 border-gray-200 text-gray-700';
          const Icon =
            status === 'correct' ? CheckCircle2 : status === 'wrong' ? XCircle : Hourglass;
          const label =
            status === 'correct' ? 'Benar' : status === 'wrong' ? 'Salah' : 'Belum';
          return (
            <li
              key={idx}
              className={`flex items-center justify-between gap-3 rounded-2xl px-3 py-2 border text-sm ${tone}`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xs font-bold font-heading bg-white/70 text-gray-600 rounded-full px-2 py-0.5">
                  #{i + 1}
                </span>
                <span className="truncate font-medium">
                  {q.subTopic || q.concept || `Soal ${q.number ?? idx + 1}`}
                </span>
              </div>
              <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider flex-shrink-0">
                <Icon className="w-4 h-4" />
                {label}
              </span>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={startChallenge}
        className="relative w-full font-bold font-heading text-sm rounded-2xl px-5 py-3 flex items-center justify-center gap-2 bg-brand-primary text-white hover:brightness-110 shadow-lg shadow-red-500/30 transition-all"
      >
        <Sparkles className="w-4 h-4" />
        {progress.completed.length > 0 && !allDone
          ? `Lanjutkan Tantangan (${progress.completed.length}/${dailySoal.length})`
          : 'Mulai Tantangan'}
      </button>

      {progress.completed.length > 0 && (
        <p className="relative text-center text-xs text-gray-500 mt-3">
          Progres hari ini: <strong className="text-gray-700">{progress.correct}</strong> benar dari{' '}
          {progress.completed.length} terjawab.
        </p>
      )}
    </div>
  );
}
