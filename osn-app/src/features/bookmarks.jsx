/*
  Exports: useBookmarks(), <BookmarkButton subBabId qIndex />, <BookmarksPanel questionsData onJump? />
  Wiring example:
    import { useBookmarks, BookmarkButton, BookmarksPanel } from './features/bookmarks';
    // <BookmarkButton subBabId="ipa-04b" qIndex={12} /> inside a soal card
*/

import { useCallback, useMemo } from 'react';
import { Star, StarOff, Bookmark, Trash2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { usePersistedState } from '../hooks/usePersistedState';

const STORAGE_KEY = 'osn-bookmarks';

function keyOf(subBabId, qIndex) {
  return `${subBabId}:${qIndex}`;
}

function parseKey(k) {
  const idx = k.lastIndexOf(':');
  return { subBabId: k.slice(0, idx), qIndex: Number(k.slice(idx + 1)) };
}

export function useBookmarks() {
  // Persisted as an array of "subBabId:qIndex" strings; exposed as a Set for O(1) checks.
  const [list, setList] = usePersistedState(STORAGE_KEY, []);

  const set = useMemo(() => new Set(Array.isArray(list) ? list : []), [list]);

  const isBookmarked = useCallback(
    (subBabId, qIndex) => set.has(keyOf(subBabId, qIndex)),
    [set]
  );

  const toggle = useCallback(
    (subBabId, qIndex) => {
      const k = keyOf(subBabId, qIndex);
      let added = false;
      setList((prev) => {
        const arr = Array.isArray(prev) ? prev : [];
        if (arr.includes(k)) return arr.filter((x) => x !== k);
        added = true;
        return [...arr, k];
      });
      return added;
    },
    [setList]
  );

  const remove = useCallback(
    (subBabId, qIndex) => {
      const k = keyOf(subBabId, qIndex);
      setList((prev) => (Array.isArray(prev) ? prev.filter((x) => x !== k) : []));
    },
    [setList]
  );

  const clear = useCallback(() => setList([]), [setList]);

  const entries = useMemo(
    () => (Array.isArray(list) ? list.map(parseKey) : []),
    [list]
  );

  return { bookmarks: set, entries, isBookmarked, toggle, remove, clear, count: set.size };
}

export function BookmarkButton({ subBabId, qIndex, className = '' }) {
  const { isBookmarked, toggle } = useBookmarks();
  const active = isBookmarked(subBabId, qIndex);

  const handleClick = (e) => {
    e.stopPropagation();
    const btn = e.currentTarget;
    const added = toggle(subBabId, qIndex);
    if (added) {
      // Subtle confetti burst anchored on the button position
      const rect = btn.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 24,
        spread: 50,
        startVelocity: 22,
        scalar: 0.7,
        ticks: 80,
        origin: { x, y },
        colors: ['#e53935', '#2563eb', '#eab308', '#10b981'],
      });
    }
  };

  const Icon = active ? Star : StarOff;
  const label = active ? 'Hapus dari favorit' : 'Tandai sebagai favorit';

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={active}
      aria-label={label}
      title={label}
      className={
        'inline-flex items-center justify-center w-9 h-9 rounded-full border transition ' +
        (active
          ? 'bg-yellow-50 border-yellow-300 text-yellow-500 hover:bg-yellow-100'
          : 'bg-white/60 border-gray-200 text-gray-400 hover:text-brand-primary hover:border-brand-primary/40') +
        ' ' +
        className
      }
    >
      <Icon size={18} fill={active ? 'currentColor' : 'none'} strokeWidth={2} />
    </button>
  );
}

function previewText(q, fallback) {
  const txt = (q?.question || fallback || '').toString().replace(/\s+/g, ' ').trim();
  return txt.length > 140 ? txt.slice(0, 137) + '…' : txt;
}

export function BookmarksPanel({ questionsData, onJump }) {
  const { entries, remove, clear, count } = useBookmarks();

  // questionsData can be either { [subBabId]: { questions: [...] } } or a single { questions: [...] }.
  const resolveQ = (subBabId, qIndex) => {
    if (!questionsData) return null;
    if (Array.isArray(questionsData?.questions)) {
      return questionsData.questions[qIndex] || null;
    }
    const bucket = questionsData?.[subBabId];
    if (bucket && Array.isArray(bucket.questions)) return bucket.questions[qIndex] || null;
    return null;
  };

  return (
    <div className="glass-card rounded-3xl p-6 animate-slide-in">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-yellow-50 border border-yellow-200 flex items-center justify-center">
            <Bookmark size={18} className="text-yellow-500" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-lg text-gray-900">Soal Favorit</h2>
            <p className="text-xs text-gray-500">
              {count > 0 ? `${count} soal tersimpan` : 'Belum ada soal yang ditandai'}
            </p>
          </div>
        </div>
        {count > 0 && (
          <button
            type="button"
            onClick={clear}
            className="text-xs font-semibold text-gray-500 hover:text-brand-primary inline-flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-red-500/5 transition"
          >
            <Trash2 size={14} /> Bersihkan
          </button>
        )}
      </div>

      {count === 0 ? (
        <div className="text-center py-8 text-sm text-gray-500">
          Tekan ikon <Star size={14} className="inline -mt-0.5 text-yellow-500" fill="currentColor" /> pada soal untuk menyimpan ke sini.
        </div>
      ) : (
        <ul className="space-y-2">
          {entries.map(({ subBabId, qIndex }) => {
            const q = resolveQ(subBabId, qIndex);
            const num = q?.number ?? qIndex + 1;
            const level = q?.level;
            return (
              <li key={`${subBabId}:${qIndex}`}>
                <div className="group flex items-start gap-3 p-3 rounded-2xl border border-gray-200/70 bg-white/60 hover:border-brand-accent/40 hover:bg-white transition">
                  <button
                    type="button"
                    onClick={() => onJump?.({ subBabId, qIndex })}
                    className="flex-1 text-left"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent bg-blue-500/10 px-2 py-0.5 rounded-full">
                        {subBabId}
                      </span>
                      <span className="text-xs font-semibold text-gray-700">Soal #{num}</span>
                      {level && (
                        <span className="text-[10px] text-gray-500 uppercase">{level}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700 leading-snug">
                      {previewText(q, 'Soal belum dimuat.')}
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => remove(subBabId, qIndex)}
                    aria-label="Hapus dari favorit"
                    title="Hapus"
                    className="opacity-0 group-hover:opacity-100 transition text-gray-400 hover:text-brand-primary p-1"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
