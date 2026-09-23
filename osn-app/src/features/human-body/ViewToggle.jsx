export function ViewToggle({ mode, onChange }) {
  return (
    <div className="absolute top-3 left-3 flex gap-2">
      <button
        onClick={() => onChange('in-body')}
        className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition ${mode === 'in-body' ? 'bg-brand-primary text-white' : 'bg-white/80 text-gray-600 hover:bg-white'}`}
      >
        Dalam Tubuh
      </button>
      <button
        onClick={() => onChange('detail')}
        className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition ${mode === 'detail' ? 'bg-brand-primary text-white' : 'bg-white/80 text-gray-600 hover:bg-white'}`}
      >
        Detail Organ
      </button>
    </div>
  );
}
