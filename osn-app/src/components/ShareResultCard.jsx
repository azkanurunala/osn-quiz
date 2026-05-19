/**
 * ShareResultCard
 * Renders a downloadable 800x800 PNG card of a tryout result using a canvas 2D ref.
 *
 * Props:
 *   - score:       number  (e.g. correctCount or percent — caller decides what /total means)
 *   - total:       number  (denominator displayed next to score, e.g. 10 or 100)
 *   - medal:       'gold' | 'silver' | 'bronze' | null
 *   - subBabTitle: string  (e.g. "Pecahan, Desimal & Persen")
 *   - dateStr:     string  (e.g. "2026-05-19" — also used in the download filename)
 *
 * Wiring example (inside TryoutArea.jsx result screen):
 *
 *   import ShareResultCard from './ShareResultCard';
 *   // ...
 *   {isSubmitted && (
 *     <ShareResultCard
 *       score={examQuestions.filter((q, i) => answers[i] === q.answerKey).length}
 *       total={examQuestions.length}
 *       medal={medalEarned}
 *       subBabTitle={questionsData?.title ?? 'Tryout OSN-SD'}
 *       dateStr={new Date().toISOString().slice(0, 10)}
 *     />
 *   )}
 */
import { useEffect, useRef, useState } from 'react';
import { Download, Link2, Check } from 'lucide-react';

const MEDAL_META = {
  gold:   { emoji: '🥇', label: 'Medali Emas',    accent: '#eab308' },
  silver: { emoji: '🥈', label: 'Medali Perak',   accent: '#9ca3af' },
  bronze: { emoji: '🥉', label: 'Medali Perunggu', accent: '#b45309' },
};

export default function ShareResultCard({ score, total, medal, subBabTitle, dateStr }) {
  const canvasRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const meta = medal ? MEDAL_META[medal] : { emoji: '💪 Coba Lagi', label: 'Terus Berlatih!', accent: '#2563eb' };
  const safeDate = dateStr || new Date().toISOString().slice(0, 10);
  const safeTitle = subBabTitle || 'Tryout OSN-SD';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = 800;
    const H = 800;

    // Background
    ctx.fillStyle = '#f8f9fb';
    ctx.fillRect(0, 0, W, H);

    // Soft radial mesh accent
    const mesh = ctx.createRadialGradient(W / 2, H * 0.65, 50, W / 2, H * 0.65, 520);
    mesh.addColorStop(0, 'rgba(229, 57, 53, 0.06)');
    mesh.addColorStop(1, 'rgba(248, 249, 251, 0)');
    ctx.fillStyle = mesh;
    ctx.fillRect(0, 0, W, H);

    // Header — brand red gradient (~120px)
    const headerH = 120;
    const headerGrad = ctx.createLinearGradient(0, 0, W, headerH);
    headerGrad.addColorStop(0, '#e53935');
    headerGrad.addColorStop(1, '#c62828');
    ctx.fillStyle = headerGrad;
    ctx.fillRect(0, 0, W, headerH);

    // Header text
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 36px "DM Sans", system-ui, sans-serif';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.fillText('OSN-SD Prep', 48, headerH / 2);

    ctx.font = '500 16px "IBM Plex Sans", system-ui, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.textAlign = 'right';
    ctx.fillText('Kartu Hasil Tryout', W - 48, headerH / 2);

    // Card body — rounded white panel
    const cardX = 60;
    const cardY = headerH + 50;
    const cardW = W - 120;
    const cardH = H - cardY - 140;
    drawRoundedRect(ctx, cardX, cardY, cardW, cardH, 28);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(31, 38, 135, 0.08)';
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 8;
    ctx.fill();
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    // Medal emoji (centered, large)
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    if (medal) {
      ctx.font = '120px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
      ctx.fillText(meta.emoji, W / 2, cardY + 110);
    } else {
      ctx.font = '700 44px "DM Sans", system-ui, sans-serif';
      ctx.fillStyle = '#2563eb';
      ctx.fillText('💪 Coba Lagi', W / 2, cardY + 110);
    }

    // Medal label
    ctx.font = '700 22px "DM Sans", system-ui, sans-serif';
    ctx.fillStyle = meta.accent;
    ctx.fillText(meta.label, W / 2, cardY + 190);

    // Score — big number
    ctx.font = '700 110px "DM Sans", system-ui, sans-serif';
    ctx.fillStyle = '#1f2937';
    const scoreText = `${score}/${total}`;
    ctx.fillText(scoreText, W / 2, cardY + 290);

    // Score caption
    ctx.font = '500 18px "IBM Plex Sans", system-ui, sans-serif';
    ctx.fillStyle = '#6b7280';
    ctx.fillText('Skor Akhir', W / 2, cardY + 360);

    // Divider
    ctx.strokeStyle = 'rgba(229, 231, 235, 0.9)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cardX + 60, cardY + 400);
    ctx.lineTo(cardX + cardW - 60, cardY + 400);
    ctx.stroke();

    // Sub-bab title
    ctx.font = '700 24px "DM Sans", system-ui, sans-serif';
    ctx.fillStyle = '#1f2937';
    wrapText(ctx, safeTitle, W / 2, cardY + 440, cardW - 80, 30);

    // Date
    ctx.font = '500 16px "IBM Plex Sans", system-ui, sans-serif';
    ctx.fillStyle = '#6b7280';
    ctx.fillText(formatDateID(safeDate), W / 2, cardY + cardH - 36);

    // Footer brand mark / tagline
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '700 18px "DM Sans", system-ui, sans-serif';
    ctx.fillStyle = '#e53935';
    ctx.fillText('OSN-SD Prep', W / 2, H - 80);

    ctx.font = '500 14px "IBM Plex Sans", system-ui, sans-serif';
    ctx.fillStyle = '#6b7280';
    ctx.fillText('Platform Latihan OSN SD Olimpiade', W / 2, H - 54);
  }, [score, total, medal, safeTitle, safeDate, meta.accent, meta.emoji, meta.label]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `hasil-osn-${safeDate}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 'image/png');
  };

  const handleCopy = async () => {
    const text = `Saya dapat skor ${score}/${total} di OSN-SD Prep! Yuk latihan juga di Platform Latihan OSN SD Olimpiade.`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn('Clipboard write failed', err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 my-6">
      <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
        <canvas
          ref={canvasRef}
          width={800}
          height={800}
          className="block w-full h-auto max-w-[400px]"
          aria-label="Kartu hasil tryout"
        />
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-primary hover:bg-brand-hover text-white font-heading font-bold shadow-md transition-colors"
        >
          <Download className="w-5 h-5" />
          Unduh Kartu Hasil
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-300 hover:border-brand-primary text-gray-800 font-heading font-bold shadow-sm transition-colors"
        >
          {copied ? <Check className="w-5 h-5 text-green-600" /> : <Link2 className="w-5 h-5" />}
          {copied ? 'Tersalin!' : 'Salin Link Bagikan'}
        </button>
      </div>
    </div>
  );
}

// --- helpers ---------------------------------------------------------------

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = String(text).split(' ');
  const lines = [];
  let line = '';
  for (let i = 0; i < words.length; i++) {
    const test = line ? `${line} ${words[i]}` : words[i];
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = words[i];
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  // Cap to 2 lines with ellipsis
  const visible = lines.slice(0, 2);
  if (lines.length > 2) {
    let last = visible[1];
    while (ctx.measureText(last + '…').width > maxWidth && last.length > 0) {
      last = last.slice(0, -1);
    }
    visible[1] = last + '…';
  }
  visible.forEach((ln, idx) => {
    ctx.fillText(ln, x, y + idx * lineHeight);
  });
}

function formatDateID(iso) {
  // Accept "YYYY-MM-DD" or any Date-parseable string; fall back to raw.
  const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
