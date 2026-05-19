// ReviewQueueWidget.jsx — glass-card mini-stats SRS + CTA "Mulai Review".
// Props: { onStart(subBabIdHint?) }  -- callback saat tombol ditekan.
// Usage:
//   import ReviewQueueWidget from './components/ReviewQueueWidget';
//   <ReviewQueueWidget onStart={(hint) => navigateToPractice(hint)} />

import { RotateCcw, Clock, Layers, Sparkles } from 'lucide-react';
import { getStats } from '../utils/spacedRepetition';

export default function ReviewQueueWidget({ onStart }) {
  const { totalTracked, dueNow, retentionPct } = getStats();
  const hasQueue = dueNow > 0;

  return (
    <div className="glass-card rounded-3xl p-6 relative overflow-hidden animate-fade-in">
      <div className="absolute right-0 top-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl"></div>

      <div className="relative flex items-start justify-between gap-4 mb-5">
        <div>
          <span className="bg-brand-primary/10 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Spaced Repetition
          </span>
          <h3 className="text-xl font-bold font-heading mt-3 mb-1 flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-brand-primary" /> Antrean Review
          </h3>
          <p className="text-gray-500 text-sm">
            Ulangi soal yang sudah lama tak disentuh supaya ingatanmu tetap kuat.
          </p>
        </div>
      </div>

      <div className="relative grid grid-cols-3 gap-3 mb-5">
        <MiniStat
          Icon={Clock}
          label="Jatuh tempo"
          value={dueNow}
          tone="red"
        />
        <MiniStat
          Icon={Layers}
          label="Terlacak"
          value={totalTracked}
          tone="blue"
        />
        <MiniStat
          Icon={Sparkles}
          label="Retensi"
          value={`${retentionPct}%`}
          tone="yellow"
        />
      </div>

      <button
        type="button"
        onClick={() => onStart && onStart()}
        disabled={!hasQueue}
        className={`relative w-full font-bold font-heading text-sm rounded-2xl px-5 py-3 flex items-center justify-center gap-2 transition-all ${
          hasQueue
            ? 'bg-brand-primary text-white hover:brightness-110 shadow-lg shadow-red-500/30'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        <RotateCcw className="w-4 h-4" />
        {hasQueue ? `Mulai Review (${dueNow})` : 'Belum ada antrean'}
      </button>
    </div>
  );
}

const TONE = {
  red:    { bg: 'bg-red-100',    text: 'text-brand-primary' },
  blue:   { bg: 'bg-blue-100',   text: 'text-brand-accent' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
};

function MiniStat({ Icon, label, value, tone }) {
  const t = TONE[tone] || TONE.blue;
  return (
    <div className="glass-card rounded-2xl p-3 flex flex-col items-center text-center">
      <div className={`w-9 h-9 rounded-xl ${t.bg} flex items-center justify-center mb-2`}>
        <Icon className={`w-4 h-4 ${t.text}`} />
      </div>
      <div className="text-lg font-bold font-heading text-gray-800 leading-tight">{value}</div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-0.5">{label}</div>
    </div>
  );
}
