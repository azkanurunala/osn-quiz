import { useState, useMemo } from 'react';
import { Award, Flame, Star, Compass, CheckCircle2, ChevronRight, Lock, BookOpen, Zap, X } from 'lucide-react';
import DailyChallenge from './DailyChallenge';
import ActivityHeatmap from './ActivityHeatmap';
import QuickQuiz from './QuickQuiz';
import { buildRoadmap, labelOf } from '../hooks/useSubBabData';

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
  const [quickQuizOpen, setQuickQuizOpen] = useState(false);
  const grouped = useMemo(() => buildRoadmap(manifest), [manifest]);
  const ipaRoadmap = useMemo(() => decorateFromManifest(grouped.ipa || [], progress), [grouped.ipa, progress]);
  const mathRoadmap = useMemo(() => decorateFromManifest(grouped.mtk || [], progress), [grouped.mtk, progress]);

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
              Level {level} • {level >= 5 ? 'Ksatria Sains' : level >= 3 ? 'Pelajar Tekun' : 'Pemula Bersemangat'}
            </span>
            <h2 className="text-2xl font-bold font-heading mt-3 mb-1">Halo, Calon Medali Emas! 👋</h2>
            <p className="text-gray-500 text-sm">
              {stats.streak > 0
                ? `Streak ${stats.streak} hari menyala 🔥 — pertahankan tempomu untuk merebut posisi puncak!`
                : 'Mulai latihan pertamamu hari ini untuk membuka streak dan koleksi medali.'}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Compass className="text-brand-accent animate-spin-slow w-5 h-5" />
              <span className="text-sm font-semibold">Tujuan Berikutnya: {next.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuickQuizOpen(true)}
                className="bg-white/80 hover:bg-white text-brand-accent border border-brand-accent/30 px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-sm"
                title="5 soal acak — selesai dalam 2 menit"
              >
                <Zap className="w-3.5 h-3.5 fill-brand-accent" /> Kuis Kilat
              </button>
              <button
                onClick={() => onSelectSubBab(next.id)}
                className="bg-brand-primary hover:bg-brand-hover text-white px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-md shadow-red-500/20"
              >
                {next.progress > 0 ? 'Lanjutkan' : 'Mulai Belajar'} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-semibold text-sm">Daily Streak</span>
            <div className="p-3 bg-orange-100 rounded-2xl">
              <Flame className="text-orange-500 fill-orange-500 w-6 h-6 animate-bounce" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading flex items-baseline gap-1">
              {stats.streak} <span className="text-sm font-semibold text-gray-400">Hari</span>
            </div>
            <p className="text-xs text-orange-500 font-semibold mt-1">
              {stats.streak === 0 ? 'Mulai streak pertamamu hari ini!' :
               stats.streak < 7 ? `${7 - stats.streak} hari lagi untuk Klaim Chest Emas` :
               'Veteran streak! Pertahankan!'}
            </p>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-semibold text-sm">XP Belajar</span>
            <div className="p-3 bg-yellow-100 rounded-2xl">
              <Star className="text-yellow-500 fill-yellow-500 w-6 h-6" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading flex items-baseline gap-1">
              {stats.xp} <span className="text-sm font-semibold text-gray-400">XP</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">{xpToNextLevel} XP lagi untuk Level {level + 1}</p>
          </div>
        </div>
      </div>

      <DailyChallenge questionsData={questionsData} onAddXp={onAddXp} />

      <div className="glass-card rounded-3xl p-6">
        <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
          <Award className="text-yellow-500 w-5 h-5" /> Koleksi Medali OSN Anda
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-4 bg-yellow-500/5 rounded-2xl border border-yellow-500/20 glow-gold">
            <Award className="w-10 h-10 text-yellow-500 fill-yellow-500 mb-2" />
            <span className="text-2xl font-black text-yellow-600">{stats.medals.gold}</span>
            <span className="text-xs font-bold text-yellow-700">Medali Emas</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-200/40 rounded-2xl border border-slate-300 glow-silver">
            <Award className="w-10 h-10 text-slate-400 fill-slate-400 mb-2" />
            <span className="text-2xl font-black text-slate-600">{stats.medals.silver}</span>
            <span className="text-xs font-bold text-slate-700">Medali Perak</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-amber-700/5 rounded-2xl border border-amber-700/20 glow-bronze">
            <Award className="w-10 h-10 text-amber-700 fill-amber-700 mb-2" />
            <span className="text-2xl font-black text-amber-700">{stats.medals.bronze}</span>
            <span className="text-xs font-bold text-amber-800">Medali Perunggu</span>
          </div>
        </div>
      </div>

      {showRoadmapPlaceholder ? (
        <div className="glass-card rounded-3xl p-10 text-center text-gray-400 text-sm">Memuat daftar bab dan sub-bab…</div>
      ) : null}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RoadmapColumn
          title="Roadmap IPA (Olimpiade Sains)"
          subtitle="Taksonomi konsep fisika, biologi, & bumi"
          icon={<Compass className="text-brand-primary w-5 h-5" />}
          iconBg="bg-red-100"
          items={ipaRoadmap}
          activeBadge="Aktif"
          accent="brand-primary"
          onSelect={onSelectSubBab}
        />

        <RoadmapColumn
          title="Roadmap Matematika"
          subtitle="Asah logika, pecahan, hingga geometri"
          icon={<BookOpen className="text-brand-accent w-5 h-5" />}
          iconBg="bg-blue-100"
          items={mathRoadmap}
          activeBadge="Lanjutkan"
          accent="brand-accent"
          onSelect={onSelectSubBab}
        />
      </div>

      <ActivityHeatmap />
    </div>
  );
}

function RoadmapColumn({ title, subtitle, icon, iconBg, items, activeBadge, accent, onSelect }) {
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
                <h4 className="font-bold text-sm text-gray-800 flex items-center gap-1.5">
                  {item.title}
                  {item.active && <span className={`${accentBg} text-white text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-extrabold animate-pulse`}>{activeBadge}</span>}
                  {item.locked && <span className="bg-gray-200 text-gray-500 text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold">Segera</span>}
                </h4>
                <p className="text-xs text-gray-400">{item.questionsCount} Bank Soal Terstandar</p>
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
