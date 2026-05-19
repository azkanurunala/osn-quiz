import { useState, useMemo } from 'react';
import { Award, Flame, Star, Compass, CheckCircle2, ChevronRight, Lock, BookOpen, Zap, X, Search } from 'lucide-react';
import DailyChallenge from './DailyChallenge';
import ActivityHeatmap from './ActivityHeatmap';
import QuickQuiz from './QuickQuiz';
import { buildRoadmap, labelOf } from '../hooks/useSubBabData';
import { useT } from '../i18n';

function decorateFromManifest(metaList, progress) {
  let firstUnstartedSeen = false;
  return metaList.map((m) => {
    const id = m.subBab || m.chapter;
    const total = m.questionCount || 100;
    const p = progress?.[id];
    const answered = p?.answered ? Object.keys(p.answered).length : 0;
    const pct = p?.completed ? 100 : Math.min(100, Math.round((answered / total) * 100));
    const completed = !!p?.completed || pct >= 100;
    let active = false;
    if (!completed && !firstUnstartedSeen) {
      active = true;
      firstUnstartedSeen = true;
    }
    return {
      id,
      title: labelOf(m),
      questionsCount: total,
      progress: pct,
      completed,
      active,
      locked: false,
    };
  });
}

export default function Dashboard({ stats, progress, manifest, manifestLoading, onSelectSubBab, onAddXp, questionsData }) {
  const t = useT();
  const [quickQuizOpen, setQuickQuizOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const grouped = useMemo(() => buildRoadmap(manifest), [manifest]);
  const ipaRoadmap = useMemo(() => decorateFromManifest(grouped.ipa || [], progress), [grouped.ipa, progress]);
  const mathRoadmap = useMemo(() => decorateFromManifest(grouped.mtk || [], progress), [grouped.mtk, progress]);

  const q = searchQuery.trim().toLowerCase();
  const filterByQuery = (items) => {
    if (!q) return items;
    return items.filter((it) => it.title.toLowerCase().includes(q) || it.id.toLowerCase().includes(q));
  };
  const ipaFiltered = filterByQuery(ipaRoadmap);
  const mathFiltered = filterByQuery(mathRoadmap);
  const totalMatches = ipaFiltered.length + mathFiltered.length;

  const next = ipaRoadmap.find((x) => x.active) || mathRoadmap.find((x) => x.active) || ipaRoadmap[0] || mathRoadmap[0] || { id: 'ipa-04b', title: 'Optika & Cermin', progress: 0 };
  const showRoadmapPlaceholder = manifestLoading && !manifest;
  const xpToNextLevel = 250 - (stats.xp % 250);
  const level = Math.floor((stats.xp || 0) / 250) + 1;

  return (
    <div className="space-y-8 animate-fade-in relative">
      {quickQuizOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4 sm:p-8 animate-fade-in">
          <div className="relative w-full max-w-xl mx-auto">
            <button
              onClick={() => setQuickQuizOpen(false)}
              className="absolute -top-2 -right-2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center shadow-md"
              aria-label="Tutup"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
            <QuickQuiz
              questionsData={questionsData}
              onComplete={({ score }) => { onAddXp?.(score * 5); setQuickQuizOpen(false); }}
              onCancel={() => setQuickQuizOpen(false)}
            />
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 glass-card rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute right-0 top-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
          <div>
            <span className="bg-red-500/10 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {t('level', 'Level')} {level} • {level >= 5 ? t('ksatria_sains', 'Ksatria Sains') : level >= 3 ? t('pelajar_tekun', 'Pelajar Tekun') : t('pemula_bersemangat', 'Pemula Bersemangat')}
            </span>
            <h2 className="text-2xl font-bold font-heading mt-3 mb-1">{t('halo_calon_medali_emas', 'Halo, Calon Medali Emas! 👋')}</h2>
            <p className="text-gray-500 text-sm">
              {stats.streak > 0
                ? t('streak_menyala_params', `Streak ${stats.streak} hari menyala 🔥 — pertahankan tempomu untuk merebut posisi puncak!`).replace('${streak}', stats.streak)
                : t('mulai_latihan_streak', 'Mulai latihan pertamamu hari ini untuk membuka streak dan koleksi medali.')}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Compass className="text-brand-accent animate-spin-slow w-5 h-5" />
              <span className="text-sm font-semibold">{t('tujuan_berikutnya', 'Tujuan Berikutnya')}: {next.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuickQuizOpen(true)}
                className="bg-white/80 hover:bg-white text-brand-accent border border-brand-accent/30 px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-sm"
                title={t('kuis_kilat_desc', '5 soal acak — selesai dalam 2 menit')}
              >
                <Zap className="w-3.5 h-3.5 fill-brand-accent" /> {t('kuis_kilat', 'Kuis Kilat')}
              </button>
              <button
                onClick={() => onSelectSubBab(next.id)}
                className="bg-brand-primary hover:bg-brand-hover text-white px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-md shadow-red-500/20"
              >
                {next.progress > 0 ? t('lanjutkan', 'Lanjutkan') : t('mulai_belajar', 'Mulai Belajar')} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-semibold text-sm">{t('daily_streak', 'Daily Streak')}</span>
            <div className="p-3 bg-orange-100 rounded-2xl">
              <Flame className="text-orange-500 fill-orange-500 w-6 h-6 animate-bounce" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading flex items-baseline gap-1">
              {stats.streak} <span className="text-sm font-semibold text-gray-400">{t('hari', 'Hari')}</span>
            </div>
            <p className="text-xs text-orange-500 font-semibold mt-1">
              {stats.streak === 0 ? t('mulai_streak_hari_ini', 'Mulai streak pertamamu hari ini!') :
               stats.streak < 7 ? t('hari_lagi_chest', `${7 - stats.streak} hari lagi untuk Klaim Chest Emas`).replace('${days}', 7 - stats.streak) :
               t('pertahankan_streak', 'Pertahankan streak-mu!')}
            </p>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-semibold text-sm">{t('xp_belajar', 'XP Belajar')}</span>
            <div className="p-3 bg-yellow-100 rounded-2xl">
              <Star className="text-yellow-500 fill-yellow-500 w-6 h-6" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading flex items-baseline gap-1">
              {stats.xp} <span className="text-sm font-semibold text-gray-400">XP</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">{t('xp_lagi_level', `${xpToNextLevel} XP lagi untuk Level ${level + 1}`).replace('${xp}', xpToNextLevel).replace('${level}', level + 1)}</p>
          </div>
        </div>
      </div>

      <DailyChallenge questionsData={questionsData} onAddXp={onAddXp} />

      <div className="glass-card rounded-3xl p-6">
        <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
          <Award className="text-yellow-500 w-5 h-5" /> {t('koleksi_medali', 'Koleksi Medali OSN Anda')}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-4 bg-yellow-500/5 rounded-2xl border border-yellow-500/20 glow-gold">
            <Award className="w-10 h-10 text-yellow-500 fill-yellow-500 mb-2" />
            <span className="text-2xl font-black text-yellow-600">{stats.medals.gold}</span>
            <span className="text-xs font-bold text-yellow-700">{t('medali_emas', 'Medali Emas')}</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-200/40 rounded-2xl border border-slate-300 glow-silver">
            <Award className="w-10 h-10 text-slate-400 fill-slate-400 mb-2" />
            <span className="text-2xl font-black text-slate-600">{stats.medals.silver}</span>
            <span className="text-xs font-bold text-slate-700">{t('medali_perak', 'Medali Perak')}</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-amber-700/5 rounded-2xl border border-amber-700/20 glow-bronze">
            <Award className="w-10 h-10 text-amber-700 fill-amber-700 mb-2" />
            <span className="text-2xl font-black text-amber-700">{stats.medals.bronze}</span>
            <span className="text-xs font-bold text-amber-800">{t('medali_perunggu', 'Medali Perunggu')}</span>
          </div>
        </div>
      </div>

      {showRoadmapPlaceholder ? (
        <div className="glass-card rounded-3xl p-10 text-center text-gray-400 text-sm font-sans">{t('loading_roadmap', 'Memuat daftar bab dan sub-bab…')}</div>
      ) : null}

      {/* Sub-bab search */}
      <div className="glass-card rounded-2xl p-3 flex items-center gap-3 font-sans">
        <Search className="w-4 h-4 text-gray-400 shrink-0 ml-1.5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t('search_placeholder', 'Cari sub-bab… (mis. cermin, fpb, pecahan)')}
          className="flex-1 bg-transparent outline-none text-sm font-medium placeholder:text-gray-400"
        />
        {searchQuery && (
          <>
            <span className="text-[10px] text-gray-400 font-bold tabular-nums">{totalMatches} {t('hasil', 'hasil')}</span>
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-700"
              aria-label="Bersihkan pencarian"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
        <RoadmapColumn
          title={t('roadmap_ipa_title', 'Roadmap IPA (Olimpiade Sains)')}
          subtitle={t('roadmap_ipa_subtitle', 'Taksonomi konsep fisika, biologi, & bumi')}
          icon={<Compass className="text-brand-primary w-5 h-5" />}
          iconBg="bg-red-100"
          items={ipaFiltered}
          emptyHint={q ? t('no_ipa_matches', 'Tidak ada sub-bab IPA cocok.') : null}
          activeBadge={t('aktif', 'Aktif')}
          accent="brand-primary"
          onSelect={onSelectSubBab}
        />

        <RoadmapColumn
          title={t('roadmap_mtk_title', 'Roadmap Matematika')}
          subtitle={t('roadmap_mtk_subtitle', 'Asah logika, pecahan, hingga geometri')}
          icon={<BookOpen className="text-brand-accent w-5 h-5" />}
          iconBg="bg-blue-100"
          items={mathFiltered}
          emptyHint={q ? t('no_mtk_matches', 'Tidak ada sub-bab Matematika cocok.') : null}
          activeBadge={t('lanjutkan', 'Lanjutkan')}
          accent="brand-accent"
          onSelect={onSelectSubBab}
        />
      </div>

      <ActivityHeatmap />
    </div>
  );
}

function RoadmapColumn({ title, subtitle, icon, iconBg, items, activeBadge, accent, onSelect, emptyHint }) {
  const accentText = accent === 'brand-primary' ? 'text-brand-primary' : 'text-brand-accent';
  const accentBg = accent === 'brand-primary' ? 'bg-brand-primary' : 'bg-brand-accent';
  const accentRing = accent === 'brand-primary' ? 'ring-brand-primary/50 bg-red-500/5' : 'ring-brand-accent/50 bg-blue-500/5';
  const accentHover = accent === 'brand-primary' ? 'hover:border-red-500/30' : 'hover:border-blue-500/30';
  const activeNumBg = accent === 'brand-primary' ? 'bg-red-100' : 'bg-blue-100';
  const progressBar = accent === 'brand-primary' ? 'bg-brand-primary' : 'bg-brand-accent';

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-2xl ${iconBg} flex items-center justify-center`}>{icon}</div>
        <div>
          <h3 className="text-xl font-bold font-heading">{title}</h3>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </div>

      <div className="space-y-4">
        {items.length === 0 && emptyHint ? (
          <div className="glass-card rounded-2xl p-5 text-center text-xs text-gray-400 italic">{emptyHint}</div>
        ) : null}
        {items.map((item, index) => (
          <div
            key={item.id}
            onClick={() => !item.locked && onSelect(item.id)}
            className={`glass-card rounded-2xl p-5 flex items-center justify-between transition-all ${
              item.locked ? 'opacity-60 cursor-not-allowed' : `cursor-pointer ${accentHover} hover:shadow-lg`
            } ${item.active ? `ring-2 ${accentRing}` : ''}`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                item.completed ? 'bg-emerald-100 text-emerald-600' :
                item.active ? `${activeNumBg} ${accentText}` : 'bg-gray-100 text-gray-400'
              }`}>
                {item.completed ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-800 flex items-center gap-1.5 font-sans">
                  {item.title}
                  {item.active && <span className={`${accentBg} text-white text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-extrabold animate-pulse`}>{activeBadge}</span>}
                  {item.locked && <span className="bg-gray-200 text-gray-500 text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold">{t('segera', 'Segera')}</span>}
                </h4>
                <p className="text-xs text-gray-400">{item.questionsCount} {t('bank_soal_terstandar', 'Bank Soal Terstandar')}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {item.locked ? (
                <Lock className="w-5 h-5 text-gray-400" />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.completed ? 'bg-emerald-500' : progressBar}`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-gray-600">{item.progress}%</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
