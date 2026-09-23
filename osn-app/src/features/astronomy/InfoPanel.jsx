import { X } from 'lucide-react';

export function InfoPanel({ eyebrow, title, body, onClose }) {
  return (
    <div className="absolute bottom-3 left-3 right-3 md:right-auto md:w-72 glass-card rounded-2xl p-4 shadow-lg space-y-1.5 animate-fade-in">
      <div className="flex items-start justify-between gap-3">
        <div>
          {eyebrow && <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">{eyebrow}</span>}
          <h4 className="text-sm font-black font-heading text-gray-800">{title}</h4>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-700 shrink-0" aria-label="Tutup">
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
}
