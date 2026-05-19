/**
 * QuickQuiz — streamlined "5-soal kilat" mini-quiz.
 *
 * Props:
 *   - questionsData: { questions: [{ question, options:{A,B,C,D}, answerKey, concept, analysis }, ...] }
 *   - onComplete:    ({ score, answers }) => void   // answers: [{ index, selected, correct }]
 *   - onCancel:      () => void
 *
 * Wiring example (inside a parent component):
 *
 *   import QuickQuiz from './components/QuickQuiz.jsx';
 *   import questionsData from './data/questions.json';
 *   ...
 *   {showQuickQuiz && (
 *     <QuickQuiz
 *       questionsData={questionsData}
 *       onComplete={({ score, answers }) => {
 *         console.log('Skor kilat:', score, answers);
 *         setShowQuickQuiz(false);
 *       }}
 *       onCancel={() => setShowQuickQuiz(false)}
 *     />
 *   )}
 */
import { useState, useMemo, useCallback, useEffect } from 'react';
import { CheckCircle, XCircle, ChevronRight, Lightbulb, Zap, X, RotateCcw, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { InlineMarkdown } from '../utils/markdown.jsx';

const QUIZ_SIZE = 5;

function sampleQuestions(all, n) {
  if (!Array.isArray(all) || all.length === 0) return [];
  if (all.length <= n) return all.map((_, i) => i);
  const indices = all.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, n);
}

export default function QuickQuiz({ questionsData, onComplete, onCancel }) {
  const allQuestions = questionsData?.questions || [];

  const [seed, setSeed] = useState(0);
  const pickedIndices = useMemo(() => sampleQuestions(allQuestions, QUIZ_SIZE), [allQuestions, seed]);
  const quiz = useMemo(() => pickedIndices.map((i) => allQuestions[i]), [pickedIndices, allQuestions]);

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const current = quiz[step];
  const total = quiz.length;
  const score = answers.filter((a) => a.correct).length;

  const handleSelect = (key) => {
    if (checked || !current) return;
    setSelected(key);
    const correct = key === current.answerKey;
    setChecked(true);
    setAnswers((prev) => [...prev, { index: pickedIndices[step], selected: key, correct }]);
    if (correct) {
      confetti({
        particleCount: 60,
        spread: 55,
        origin: { y: 0.7 },
        colors: ['#e53935', '#3b82f6', '#10b981', '#eab308'],
      });
    }
  };

  const handleNext = useCallback(() => {
    if (step + 1 >= total) {
      setFinished(true);
    } else {
      setStep((s) => s + 1);
      setSelected(null);
      setChecked(false);
    }
  }, [step, total]);

  // Big confetti burst on result screen when score >= 4
  useEffect(() => {
    if (finished && score >= 4) {
      const burst = (delay) => setTimeout(() => {
        confetti({
          particleCount: 140,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#e53935', '#3b82f6', '#10b981', '#eab308'],
        });
      }, delay);
      const t1 = burst(50);
      const t2 = burst(350);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [finished, score]);

  // Keyboard: A/B/C/D to pick, Enter to advance after reveal
  useEffect(() => {
    if (finished) return;
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key) && !checked && current?.options?.[key]) {
        e.preventDefault();
        handleSelect(key);
      } else if (e.key === 'Enter' && checked) {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [checked, current, finished, handleNext]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleReplay = () => {
    setStep(0);
    setSelected(null);
    setChecked(false);
    setAnswers([]);
    setFinished(false);
    setSeed((s) => s + 1);
  };

  // Empty state
  if (!current && !finished) {
    return (
      <div className="max-w-xl mx-auto glass-card rounded-3xl p-10 text-center animate-fade-in">
        <Zap className="w-12 h-12 mx-auto text-gray-300 mb-3" />
        <h3 className="text-lg font-bold font-heading">Soal Belum Tersedia</h3>
        <p className="text-xs text-gray-400 mt-1">Tidak ada bank soal untuk kuis kilat saat ini.</p>
        <button
          onClick={onCancel}
          className="mt-5 bg-brand-primary hover:bg-brand-hover text-white font-bold px-6 py-2 rounded-2xl text-sm transition shadow-md shadow-red-500/10"
        >
          Tutup
        </button>
      </div>
    );
  }

  // Result screen
  if (finished) {
    const isWin = score >= 4;
    return (
      <div className="max-w-xl mx-auto glass-card rounded-3xl p-8 space-y-6 animate-fade-in font-sans">
        <div className="text-center space-y-2">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${isWin ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-brand-accent'}`}>
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold font-heading text-gray-800">
            {isWin ? 'Mantap! 🎉' : 'Bagus, terus berlatih!'}
          </h2>
          <p className="text-sm text-gray-500">Hasil Kuis Kilat 5-Soal</p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-baseline gap-2">
            <span className={`text-6xl font-black font-heading ${isWin ? 'text-emerald-600' : 'text-brand-accent'}`}>{score}</span>
            <span className="text-2xl font-bold text-gray-400">/ {total}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          {answers.map((a, i) => (
            <div
              key={i}
              title={`Soal ${i + 1}: ${a.correct ? 'Benar' : 'Salah'}`}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black border-2 transition ${
                a.correct
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                  : 'bg-red-50 border-red-300 text-red-700'
              }`}
            >
              {a.correct ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 pt-2 border-t border-gray-100">
          <button
            onClick={handleReplay}
            className="flex items-center gap-1.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold px-5 py-2.5 rounded-2xl text-sm transition"
          >
            <RotateCcw className="w-4 h-4" /> Ulangi
          </button>
          <button
            onClick={() => onComplete?.({ score, answers })}
            className="bg-brand-primary hover:bg-brand-hover text-white font-bold px-6 py-2.5 rounded-2xl text-sm transition shadow-lg shadow-red-500/10"
          >
            Selesai
          </button>
        </div>
      </div>
    );
  }

  const isCorrectOption = (opt) => opt === current.answerKey;
  const isSelectedOption = (opt) => opt === selected;
  const progressPct = Math.round(((step + (checked ? 1 : 0)) / total) * 100);

  return (
    <div className="max-w-xl mx-auto glass-card rounded-3xl p-8 space-y-6 animate-fade-in font-sans">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-red-100 text-brand-primary">
            <Zap className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-sm font-black font-heading text-gray-800 uppercase tracking-wider">Kuis Kilat</h3>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">5 Soal · Cepat & Padat</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-gray-500">Soal {Math.min(step + 1, total)} / {total}</span>
          <button
            onClick={onCancel}
            className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-gray-700 transition"
            title="Tutup kuis kilat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-primary transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Question */}
      <div className="space-y-3">
        <span className="bg-brand-accent/10 text-brand-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {current.subTopic || 'Topik Utama'}
        </span>
        <h2 className="text-lg md:text-xl font-bold font-heading leading-relaxed text-gray-800">
          <InlineMarkdown text={current.question} />
        </h2>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-2.5">
        {Object.entries(current.options).map(([key, value]) => {
          if (!value) return null;
          let optionBg = 'bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300';
          let icon = null;
          if (checked) {
            if (isCorrectOption(key)) {
              optionBg = 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/20 text-emerald-800';
              icon = <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />;
            } else if (isSelectedOption(key)) {
              optionBg = 'bg-red-50 border-red-300 ring-2 ring-red-500/20 text-red-800';
              icon = <XCircle className="w-5 h-5 text-red-500 shrink-0" />;
            } else {
              optionBg = 'bg-gray-50/50 border-gray-100 opacity-60';
            }
          } else if (isSelectedOption(key)) {
            optionBg = 'bg-red-50/60 border-brand-primary ring-2 ring-red-500/10 text-brand-primary font-semibold';
          }
          return (
            <button
              key={key}
              disabled={checked}
              onClick={() => handleSelect(key)}
              className={`w-full flex items-center justify-between text-left p-4 rounded-2xl border transition-all text-sm ${optionBg}`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                  isSelectedOption(key) && !checked ? 'bg-brand-primary text-white' :
                  checked && isCorrectOption(key) ? 'bg-emerald-500 text-white' :
                  checked && isSelectedOption(key) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-500'
                }`}>{key}</span>
                <span className="leading-relaxed"><InlineMarkdown text={value} /></span>
              </div>
              {icon}
            </button>
          );
        })}
      </div>

      {/* Reveal: concept + single-option analysis */}
      {checked && (
        <div className="space-y-3 animate-fade-in">
          {current.concept && (
            <div className="bg-red-50/50 rounded-2xl p-3.5 border border-red-100 flex gap-2.5 items-start">
              <div className="p-1.5 bg-red-100 rounded-lg text-brand-primary shrink-0">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div className="text-xs leading-relaxed">
                <span className="font-bold text-brand-primary uppercase tracking-wider text-[10px] block mb-0.5">Konsep Kunci</span>
                <span className="text-gray-700 font-medium"><InlineMarkdown text={current.concept} /></span>
              </div>
            </div>
          )}
          {current.analysis?.[current.answerKey] && (
            <div className="bg-emerald-50/50 rounded-2xl p-3.5 border border-emerald-100 text-xs text-emerald-800 leading-relaxed">
              <span className="font-bold mr-1.5 text-emerald-700">Pilihan {current.answerKey}:</span>
              <InlineMarkdown text={current.analysis[current.answerKey]} />
            </div>
          )}
        </div>
      )}

      {/* Footer action */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-5">
        <p className="text-[11px] text-gray-400">
          {checked
            ? selected === current.answerKey ? 'Benar! Tekan Enter untuk lanjut.' : `Jawaban benar: ${current.answerKey}`
            : 'Pilih A / B / C / D'}
        </p>
        {checked ? (
          <button
            onClick={handleNext}
            className="bg-brand-accent hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-2xl text-sm flex items-center gap-1 transition shadow-lg shadow-blue-500/10"
          >
            {step + 1 >= total ? 'Lihat Hasil' : 'Soal Berikutnya'} <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            disabled
            className="bg-brand-primary opacity-40 text-white font-bold px-6 py-2.5 rounded-2xl text-sm cursor-not-allowed"
          >
            Cek Jawaban
          </button>
        )}
      </div>
    </div>
  );
}
