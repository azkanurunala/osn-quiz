{/*
  LevelAccuracyChart — Akurasi per Tingkat Soal (Kabupaten / Provinsi / Nasional).
  Props:
    - progress: { [subBabId]: { answered: { [qIndex]: 'A'|'B'|'C'|'D' }, correct: number } }
    - questionsData: { [subBabId]: { questions: [{ level: 'Kab'|'Prov'|'Nas', answerKey, ... }] } }

  Wiring:
    <LevelAccuracyChart progress={progress} questionsData={questionsData} />
*/}
import { useMemo } from 'react';
import { Trophy, MapPin, Flag } from 'lucide-react';

const LEVEL_CONFIG = [
  {
    key: 'Kab',
    label: 'Kabupaten',
    icon: MapPin,
    barClass: 'bg-emerald-500',
    softBg: 'bg-emerald-50/60',
    softBorder: 'border-emerald-100',
    pillClass: 'bg-emerald-50 text-emerald-600',
    iconClass: 'text-emerald-600',
    trackClass: 'bg-emerald-100/70',
  },
  {
    key: 'Prov',
    label: 'Provinsi',
    icon: Flag,
    barClass: 'bg-yellow-500',
    softBg: 'bg-yellow-50/60',
    softBorder: 'border-yellow-100',
    pillClass: 'bg-yellow-50 text-yellow-700',
    iconClass: 'text-yellow-600',
    trackClass: 'bg-yellow-100/70',
  },
  {
    key: 'Nas',
    label: 'Nasional',
    icon: Trophy,
    barClass: 'bg-red-500',
    softBg: 'bg-red-50/60',
    softBorder: 'border-red-100',
    pillClass: 'bg-red-50 text-red-600',
    iconClass: 'text-red-600',
    trackClass: 'bg-red-100/70',
  },
];

export default function LevelAccuracyChart({ progress = {}, questionsData = {} }) {
  const stats = useMemo(() => {
    const tally = { Kab: { answered: 0, correct: 0 }, Prov: { answered: 0, correct: 0 }, Nas: { answered: 0, correct: 0 } };

    for (const [subBabId, subProgress] of Object.entries(progress || {})) {
      const answeredMap = subProgress?.answered;
      if (!answeredMap) continue;
      const questions = questionsData?.[subBabId]?.questions;
      if (!Array.isArray(questions)) continue;

      for (const [idxStr, userAnswer] of Object.entries(answeredMap)) {
        const idx = Number(idxStr);
        const q = questions[idx];
        if (!q || !tally[q.level]) continue;
        tally[q.level].answered += 1;
        if (userAnswer === q.answerKey) tally[q.level].correct += 1;
      }
    }

    return tally;
  }, [progress, questionsData]);

  return (
    <div className="glass-card rounded-3xl p-6 space-y-6">
      <div>
        <h3 className="text-lg font-bold font-heading">Akurasi per Tingkat Soal</h3>
        <p className="text-xs text-gray-400">Pisahkan performa pada tingkat Kabupaten, Provinsi, dan Nasional</p>
      </div>

      <div className="space-y-4">
        {LEVEL_CONFIG.map((cfg) => {
          const { answered, correct } = stats[cfg.key];
          const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
          const Icon = cfg.icon;
          const isEmpty = answered === 0;

          return (
            <div
              key={cfg.key}
              className={`p-4 rounded-2xl border ${isEmpty ? 'bg-gray-50/60 border-gray-100' : `${cfg.softBg} ${cfg.softBorder}`}`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <span className="flex items-center gap-1.5 text-gray-700">
                  <Icon className={`w-3.5 h-3.5 ${isEmpty ? 'text-gray-400' : cfg.iconClass}`} />
                  {cfg.label}
                </span>

                {isEmpty ? (
                  <span className="px-2 py-0.5 rounded text-[10px] bg-gray-100 text-gray-400 font-medium">
                    Belum dilatih
                  </span>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 font-medium">{correct}/{answered}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] ${cfg.pillClass}`}>
                      {cfg.label}
                    </span>
                    <span className="text-gray-800">{pct}%</span>
                  </div>
                )}
              </div>

              {isEmpty ? (
                <div className="w-full bg-gray-200/70 rounded-full h-3.5 overflow-hidden">
                  <div className="h-full rounded-full bg-gray-300/0" style={{ width: '0%' }}></div>
                </div>
              ) : (
                <div className={`w-full rounded-full h-3.5 overflow-hidden ${cfg.trackClass}`}>
                  <div
                    className={`h-full rounded-full ${cfg.barClass} transition-[width] duration-500`}
                    style={{ width: `${pct}%` }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-100 pt-3 flex items-center justify-center">
        <span className="text-[10px] text-gray-400 font-medium">
          Tingkat soal ditarik otomatis dari metadata bank soal OSN SD
        </span>
      </div>
    </div>
  );
}
