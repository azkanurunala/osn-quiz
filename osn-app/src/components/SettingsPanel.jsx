// SettingsPanel — modal untuk mengatur preferensi global aplikasi.
// Props: { open, onClose, settings, setSettings, onShowOnboarding, onResetProgress }
// Usage:
//   <SettingsPanel open={open} onClose={() => setOpen(false)} settings={settings} setSettings={setSettings} />

import { useState } from 'react';
import { X, Sliders, Video, BookOpen, Trash2, RotateCcw, Volume2, VolumeX, Timer, Sparkles, LayoutGrid, GraduationCap } from 'lucide-react';

export const DEFAULT_SETTINGS = {
  unlockAll: true, // semua materi terbuka (default — disarankan ON)
  tierPreference: 'campur',
  videoProduction: {
    timerEnabled: true,
    autoPilot: true,
    layoutSplit: true,
    isMuted: false, // music ON by default (un-muted)
    volume: 0.4,
    showIntro: true, // 3-second cinematic intro
  },
};

function Section({ icon: Icon, title, subtitle, children }) {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-2">
        <div className="p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary shrink-0">
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <h3 className="font-bold font-heading text-sm text-gray-800">{title}</h3>
          {subtitle && <p className="text-[11px] text-gray-400">{subtitle}</p>}
        </div>
      </div>
      <div className="pl-7 space-y-2">{children}</div>
    </div>
  );
}

function ToggleRow({ label, hint, value, onChange, icon: Icon }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className="w-full flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition text-left"
    >
      <div className="flex items-center gap-2.5 min-w-0">
        {Icon && <Icon className="w-4 h-4 text-gray-400 shrink-0" />}
        <div className="min-w-0">
          <div className="text-sm font-semibold text-gray-800 truncate">{label}</div>
          {hint && <div className="text-[10px] text-gray-400 truncate">{hint}</div>}
        </div>
      </div>
      <div className={`relative w-9 h-5 rounded-full transition-colors shrink-0 ${value ? 'bg-brand-primary' : 'bg-gray-300'}`}>
        <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-md transition-transform ${value ? 'translate-x-4' : ''}`} />
      </div>
    </button>
  );
}

export default function SettingsPanel({ open, onClose, settings, setSettings, onShowOnboarding, onResetProgress }) {
  const [confirmingReset, setConfirmingReset] = useState(false);
  if (!open) return null;

  const s = { ...DEFAULT_SETTINGS, ...settings, videoProduction: { ...DEFAULT_SETTINGS.videoProduction, ...(settings?.videoProduction || {}) } };

  const updateVP = (patch) => setSettings({ ...s, videoProduction: { ...s.videoProduction, ...patch } });
  const resetVPDefaults = () => setSettings({ ...s, videoProduction: { ...DEFAULT_SETTINGS.videoProduction } });

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4 sm:p-8 animate-fade-in" onClick={onClose}>
      <div
        className="relative w-full max-w-lg mx-auto glass-card rounded-3xl p-6 space-y-6 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center shadow-md"
          aria-label="Tutup pengaturan"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

 
        <div className="flex items-center gap-2">
          <Sliders className="w-5 h-5 text-brand-primary" />
          <div>
            <h2 className="text-lg font-bold font-heading">Pengaturan</h2>
            <p className="text-[11px] text-gray-400">Semua perubahan tersimpan otomatis di browser-mu</p>
          </div>
        </div>

        <Section icon={BookOpen} title="Akses Materi" subtitle="Atur ketersediaan semua sub-bab di Roadmap.">
          <ToggleRow
            label="Buka semua materi"
            hint="Semua bab & sub-bab langsung tersedia tanpa harus dibuka berurutan."
            value={s.unlockAll}
            onChange={(v) => setSettings({ ...s, unlockAll: v })}
          />
          <div className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition text-left mt-2">
            <div>
              <div className="text-sm font-semibold text-gray-800">Tingkat Kesulitan Default</div>
              <div className="text-[10px] text-gray-400">Pilih kesulitan paket soal utama di Praktik</div>
            </div>
            <select
              value={s.tierPreference || 'campur'}
              onChange={(e) => setSettings({ ...s, tierPreference: e.target.value })}
              className="text-xs font-bold text-gray-750 bg-gray-50 border border-gray-200 rounded-lg p-2 focus:ring-1 focus:ring-brand-primary"
            >
              <option value="campur">Campur</option>
              <option value="mudah">Mudah</option>
              <option value="sedang">Sedang</option>
              <option value="sulit">Sulit</option>
            </select>
          </div>
        </Section>

        <Section icon={Video} title="Default Video Producer" subtitle="Nilai awal saat membuka halaman Latihan Soal.">
          <ToggleRow
            label="Timer Soal (10s) aktif"
            hint="Hitung mundur otomatis 10 detik per soal."
            icon={Timer}
            value={s.videoProduction.timerEnabled}
            onChange={(v) => updateVP({ timerEnabled: v })}
          />
          <ToggleRow
            label="Auto-Pilot aktif"
            hint="Otomatis memilih jawaban benar setelah 2 detik (saat timer off)."
            icon={Sparkles}
            value={s.videoProduction.autoPilot}
            onChange={(v) => updateVP({ autoPilot: v })}
          />
          <ToggleRow
            label="In-Frame Split aktif"
            hint="Tampilkan soal + pembahasan berdampingan dalam satu layar."
            icon={LayoutGrid}
            value={s.videoProduction.layoutSplit}
            onChange={(v) => updateVP({ layoutSplit: v })}
          />
          <ToggleRow
            label="Musik Loop aktif"
            hint="Putar musik latar otomatis (bisa dimute kapan saja)."
            icon={s.videoProduction.isMuted ? VolumeX : Volume2}
            value={!s.videoProduction.isMuted}
            onChange={(v) => updateVP({ isMuted: !v })}
          />
          <ToggleRow
            label="Intro 3 detik saat rekam"
            hint="Tampilkan countdown cinematic sebelum mode rekam."
            icon={GraduationCap}
            value={s.videoProduction.showIntro}
            onChange={(v) => updateVP({ showIntro: v })}
          />
          <div className="flex items-center gap-2 pt-1">
            <div className="flex-1 flex items-center gap-2">
              <Volume2 className="w-3.5 h-3.5 text-gray-400" />
              <input
                type="range" min="0" max="1" step="0.1"
                value={s.videoProduction.volume}
                onChange={(e) => updateVP({ volume: parseFloat(e.target.value) })}
                className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
              <span className="text-[10px] font-bold text-gray-500 tabular-nums w-8">{Math.round(s.videoProduction.volume * 100)}%</span>
            </div>
            <button
              onClick={resetVPDefaults}
              className="text-[10px] font-bold text-brand-primary hover:underline px-2 py-1 rounded-md flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>
        </Section>

        <Section icon={Sparkles} title="Bantuan & Tur" subtitle="Tampilkan ulang panduan awal aplikasi.">
          <button
            onClick={() => { onShowOnboarding?.(); onClose(); }}
            className="w-full text-xs font-bold text-gray-700 border border-gray-200 hover:border-brand-primary/40 hover:text-brand-primary py-2.5 rounded-xl transition"
          >
            Buka Ulang Tur Onboarding
          </button>
        </Section>

        {onResetProgress && (
          <Section icon={Trash2} title="Pengaturan Data" subtitle="Semua progres disimpan lokal di browser.">
            {!confirmingReset ? (
              <button
                onClick={() => setConfirmingReset(true)}
                className="w-full text-xs font-bold text-gray-600 border border-gray-200 hover:border-red-300 hover:text-brand-primary hover:bg-red-50/40 py-2.5 rounded-xl transition"
              >
                Reset Semua Progres
              </button>
            ) : (
              <div className="space-y-2">
                <p className="text-[11px] text-red-700 bg-red-50 border border-red-100 rounded-xl p-2.5 leading-relaxed">
                  Yakin hapus semua progres (XP, streak, jawaban, bookmark, dst)? Tindakan tidak dapat dibatalkan.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setConfirmingReset(false)}
                    className="text-xs font-bold text-gray-600 border border-gray-200 hover:bg-gray-50 py-2 rounded-xl transition"
                  >Batal</button>
                  <button
                    onClick={() => { onResetProgress(); setConfirmingReset(false); onClose(); }}
                    className="text-xs font-extrabold text-white bg-brand-primary hover:bg-brand-hover py-2 rounded-xl transition shadow-md shadow-red-500/10"
                  >Ya, Hapus</button>
                </div>
              </div>
            )}
          </Section>
        )}
      </div>
    </div>
  );
}
