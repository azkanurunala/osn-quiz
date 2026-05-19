import { useEffect, useState, useCallback } from 'react';
import { Keyboard, X } from 'lucide-react';

/*
 * ShortcutHelp — modal global daftar pintasan keyboard.
 *
 * Pemakaian (uncontrolled, default): cukup pasang sekali di root App.
 *   import ShortcutHelp from './components/ShortcutHelp';
 *   <ShortcutHelp />
 *   // Tekan "?" di mana saja untuk membuka/menutup. Esc juga menutup.
 *
 * Pemakaian (controlled): kelola sendiri state-nya dari parent.
 *   const [open, setOpen] = useState(false);
 *   <ShortcutHelp open={open} onClose={() => setOpen(false)} />
 */

const SECTIONS = [
  {
    title: 'Latihan Soal',
    items: [
      { keys: ['A', 'B', 'C', 'D'], desc: 'Pilih opsi jawaban' },
      { keys: ['Enter'], desc: 'Cek jawaban atau lanjut ke soal berikutnya' },
    ],
  },
  {
    title: 'Navigasi',
    items: [
      { keys: ['←', '→'], desc: 'Navigasi antar soal' },
    ],
  },
  {
    title: 'Sistem',
    items: [
      { keys: ['Esc'], desc: 'Tutup dialog yang sedang terbuka' },
      { keys: ['?'], desc: 'Buka / tutup bantuan ini' },
    ],
  },
];

function Kbd({ children }) {
  return (
    <kbd className="inline-flex items-center justify-center min-w-[2rem] px-2 py-1 rounded-md border border-slate-300 bg-white/80 text-slate-700 font-heading text-xs font-semibold shadow-sm">
      {children}
    </kbd>
  );
}

export default function ShortcutHelp({ open: controlledOpen, onClose }) {
  const isControlled = controlledOpen !== undefined;
  const [internalOpen, setInternalOpen] = useState(false);
  const open = isControlled ? controlledOpen : internalOpen;

  const close = useCallback(() => {
    if (isControlled) {
      onClose?.();
    } else {
      setInternalOpen(false);
    }
  }, [isControlled, onClose]);

  // Global "?" toggle (skip when user is typing in an input/textarea/contenteditable).
  useEffect(() => {
    const handler = (e) => {
      const target = e.target;
      const tag = target?.tagName;
      const isTyping =
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT' ||
        target?.isContentEditable;
      if (isTyping) return;

      if (e.key === '?') {
        e.preventDefault();
        if (isControlled) {
          // Controlled: hanya bisa "menutup" via prop; buka diserahkan ke parent.
          if (controlledOpen) onClose?.();
        } else {
          setInternalOpen((v) => !v);
        }
      } else if (e.key === 'Escape' && open) {
        e.preventDefault();
        close();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isControlled, controlledOpen, onClose, open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="shortcut-help-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Tutup bantuan"
        onClick={close}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-default"
      />

      {/* Panel */}
      <div className="glass-card relative w-full max-w-lg rounded-2xl p-6 sm:p-7 animate-[slideIn_0.3s_cubic-bezier(0.16,1,0.3,1)]">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
              <Keyboard className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2
                id="shortcut-help-title"
                className="font-heading text-lg font-bold text-slate-900 leading-tight"
              >
                Pintasan Keyboard
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Tekan <Kbd>?</Kbd> kapan saja untuk membuka dialog ini.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Tutup"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-1">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h3 className="font-heading text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">
                {section.title}
              </h3>
              <ul className="divide-y divide-slate-200/70 rounded-xl border border-slate-200/70 bg-white/40">
                {section.items.map((row, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between gap-4 px-3 py-2.5"
                  >
                    <span className="text-sm text-slate-700 leading-snug">
                      {row.desc}
                    </span>
                    <span className="flex items-center gap-1 shrink-0">
                      {row.keys.map((k, i) => (
                        <span key={i} className="flex items-center gap-1">
                          {i > 0 && (
                            <span className="text-xs text-slate-400">/</span>
                          )}
                          <Kbd>{k}</Kbd>
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-5 text-[11px] text-slate-400 text-center">
          Klik di luar panel atau tekan <Kbd>Esc</Kbd> untuk menutup.
        </p>
      </div>
    </div>
  );
}
