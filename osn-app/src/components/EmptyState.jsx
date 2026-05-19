/**
 * EmptyState — reusable empty-state card with themed inline SVG illustration.
 *
 * Variants & usage examples:
 *
 *  1) Belum ada progres tryout / latihan:
 *     <EmptyState
 *       variant="no-progress"
 *       title="Belum Ada Progres"
 *       message="Mulai latihan pertamamu untuk melihat statistik di sini."
 *       action={{ label: 'Mulai Latihan', onClick: () => setMode('practice') }}
 *     />
 *
 *  2) Belum ada bookmark soal:
 *     <EmptyState
 *       variant="no-bookmarks"
 *       title="Belum Ada Bookmark"
 *       message="Tandai soal sulit dengan ikon bintang agar muncul di sini."
 *     />
 *
 *  3) Hasil pencarian / filter kosong:
 *     <EmptyState
 *       variant="no-results"
 *       title="Tidak Ada Hasil"
 *       message="Coba kata kunci lain atau ubah filter tingkat kesulitan."
 *       action={{ label: 'Reset Filter', onClick: clearFilters }}
 *     />
 *
 *  4) Materi / bab belum tersedia:
 *     <EmptyState
 *       variant="no-content"
 *       title="Materi Segera Hadir"
 *       message="Bab ini sedang kami siapkan. Cek kembali nanti, ya!"
 *     />
 */

import React from 'react';

const BRAND = '#e53935';
const BRAND_SOFT = 'rgba(229, 57, 53, 0.12)';
const ACCENT = '#2563eb';
const ACCENT_SOFT = 'rgba(37, 99, 235, 0.12)';
const INK = '#1f2937';
const INK_SOFT = 'rgba(31, 41, 55, 0.15)';

function NoProgressSVG() {
  // Pencil-and-page motif
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      role="img"
      aria-label="Ilustrasi pensil dan kertas"
    >
      {/* paper */}
      <rect x="18" y="20" width="52" height="64" rx="6" fill="#ffffff" stroke={INK_SOFT} strokeWidth="1.5" />
      <rect x="18" y="20" width="52" height="10" rx="6" fill={ACCENT_SOFT} />
      {/* lines */}
      <line x1="26" y1="42" x2="62" y2="42" stroke={INK_SOFT} strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="52" x2="58" y2="52" stroke={INK_SOFT} strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="62" x2="50" y2="62" stroke={INK_SOFT} strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="72" x2="44" y2="72" stroke={INK_SOFT} strokeWidth="2" strokeLinecap="round" />
      {/* pencil body */}
      <g transform="rotate(35 70 60)">
        <rect x="58" y="38" width="10" height="42" rx="2" fill={BRAND} />
        <rect x="58" y="38" width="10" height="6" rx="2" fill={BRAND_SOFT} />
        <polygon points="58,80 68,80 63,90" fill="#fbbf24" />
        <polygon points="60.5,86 65.5,86 63,90" fill={INK} />
        <rect x="58" y="32" width="10" height="6" rx="2" fill="#9ca3af" />
      </g>
    </svg>
  );
}

function NoBookmarksSVG() {
  // Empty star with sparkle dots
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      role="img"
      aria-label="Ilustrasi bintang kosong dengan kilau"
    >
      {/* sparkles */}
      <circle cx="18" cy="22" r="2.5" fill={BRAND} opacity="0.6" />
      <circle cx="84" cy="28" r="2" fill={ACCENT} opacity="0.6" />
      <circle cx="78" cy="74" r="2.5" fill={BRAND} opacity="0.5" />
      <circle cx="14" cy="68" r="2" fill={ACCENT} opacity="0.5" />
      <path d="M88 50 l2 0 M89 49 l0 2" stroke={BRAND} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 44 l2 0 M11 43 l0 2" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
      {/* star outline */}
      <path
        d="M50 22 L58.5 40 L78 42.5 L63.5 56 L67.5 75.5 L50 66 L32.5 75.5 L36.5 56 L22 42.5 L41.5 40 Z"
        fill={BRAND_SOFT}
        stroke={BRAND}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NoResultsSVG() {
  // Magnifying glass with question mark
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      role="img"
      aria-label="Ilustrasi kaca pembesar dengan tanda tanya"
    >
      {/* handle */}
      <line
        x1="68"
        y1="68"
        x2="86"
        y2="86"
        stroke={BRAND}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <line
        x1="68"
        y1="68"
        x2="86"
        y2="86"
        stroke={INK}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.25"
      />
      {/* lens */}
      <circle cx="44" cy="44" r="26" fill="#ffffff" stroke={BRAND} strokeWidth="3.5" />
      <circle cx="44" cy="44" r="26" fill={ACCENT_SOFT} />
      {/* question mark */}
      <path
        d="M37 36 q0 -7 7 -7 q7 0 7 7 q0 5 -5 7 q-5 2 -5 7"
        fill="none"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="44" cy="55" r="2.2" fill={INK} />
      {/* shine */}
      <path d="M28 32 q4 -8 12 -10" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

function NoContentSVG() {
  // Book with a small clock face on cover
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      role="img"
      aria-label="Ilustrasi buku dengan jam kecil"
    >
      {/* book back cover */}
      <rect x="18" y="20" width="60" height="64" rx="4" fill={BRAND} />
      {/* book front cover */}
      <rect x="22" y="20" width="56" height="64" rx="4" fill="#ffffff" stroke={BRAND} strokeWidth="2" />
      {/* spine highlight */}
      <rect x="22" y="20" width="4" height="64" fill={BRAND_SOFT} />
      {/* title bars */}
      <rect x="32" y="30" width="34" height="3" rx="1.5" fill={INK_SOFT} />
      <rect x="32" y="37" width="22" height="3" rx="1.5" fill={INK_SOFT} />
      {/* clock face */}
      <circle cx="50" cy="60" r="14" fill={ACCENT_SOFT} stroke={ACCENT} strokeWidth="2" />
      <circle cx="50" cy="60" r="1.6" fill={ACCENT} />
      {/* clock hands: 10:10-ish */}
      <line x1="50" y1="60" x2="50" y2="50" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="60" x2="58" y2="63" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
      {/* tick marks */}
      <circle cx="50" cy="49" r="0.9" fill={ACCENT} />
      <circle cx="61" cy="60" r="0.9" fill={ACCENT} />
      <circle cx="50" cy="71" r="0.9" fill={ACCENT} />
      <circle cx="39" cy="60" r="0.9" fill={ACCENT} />
    </svg>
  );
}

const ILLUSTRATIONS = {
  'no-progress': NoProgressSVG,
  'no-bookmarks': NoBookmarksSVG,
  'no-results': NoResultsSVG,
  'no-content': NoContentSVG,
};

export default function EmptyState({
  variant = 'no-content',
  title = '',
  message = '',
  action = null,
  className = '',
}) {
  const Illustration = ILLUSTRATIONS[variant] || NoContentSVG;

  return (
    <div
      className={`glass-card rounded-2xl px-6 py-10 flex flex-col items-center justify-center text-center max-w-md mx-auto ${className}`}
    >
      <div className="animate-float mb-5" aria-hidden="false">
        <Illustration />
      </div>

      {title && (
        <h3 className="font-heading font-bold text-xl text-gray-800 mb-2">
          {title}
        </h3>
      )}

      {message && (
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          {message}
        </p>
      )}

      {action && action.label && typeof action.onClick === 'function' && (
        <button
          type="button"
          onClick={action.onClick}
          className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-heading font-bold text-sm text-white bg-brand-primary hover:bg-brand-hover transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          style={{ backgroundColor: BRAND }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c62828')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND)}
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
