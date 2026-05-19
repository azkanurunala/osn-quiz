// Achievements.jsx — koleksi pencapaian belajar OSN, derived purely dari stats + progress.
// Props: { stats, progress }
//   stats    = { xp, streak, medals: { gold, silver, bronze } }
//   progress = { [subBabId]: { answered: {...}, correct: {...}, completed: bool } }
// Wiring (mis. di App.jsx atau halaman pencapaian):
//   <Achievements stats={stats} progress={progress} />

import {
  Trophy, Award, Flame, Star, Crown, Sparkles,
  Compass, Medal, Zap, Lock,
} from 'lucide-react';

function deriveTotals(progress) {
  let totalAnswered = 0;
  let totalCorrect = 0;
  let subBabTouched = 0;
  const perSubBab = [];

  Object.entries(progress || {}).forEach(([id, p]) => {
    const answeredCount = p?.answered ? Object.keys(p.answered).length : 0;
    const correctCount = p?.correct ? Object.keys(p.correct).length : 0;
    if (answeredCount > 0) subBabTouched += 1;
    totalAnswered += answeredCount;
    totalCorrect += correctCount;
    perSubBab.push({ id, answered: answeredCount, correct: correctCount });
  });

  // approx "10 benar berturut" — kalau di salah satu sub-bab jumlah benar ≥ 10
  const tenInARow = perSubBab.some((s) => s.correct >= 10);

  return { totalAnswered, totalCorrect, subBabTouched, tenInARow };
}

function buildAchievements(stats, progress) {
  const t = deriveTotals(progress);
  const m = stats?.medals || { gold: 0, silver: 0, bronze: 0 };
  const xp = stats?.xp || 0;
  const streak = stats?.streak || 0;

  return [
    {
      id: 'langkah-pertama',
      title: 'Langkah Pertama',
      criterion: 'Jawab 1 soal pertama',
      Icon: Sparkles,
      tone: 'red',
      unlocked: t.totalAnswered >= 1,
      progressText: `${Math.min(t.totalAnswered, 1)}/1 soal`,
    },
    {
      id: 'pemanasan',
      title: 'Pemanasan',
      criterion: 'Jawab 10 soal',
      Icon: Zap,
      tone: 'orange',
      unlocked: t.totalAnswered >= 10,
      progressText: `${Math.min(t.totalAnswered, 10)}/10 soal`,
    },
    {
      id: 'atlet-tekun',
      title: 'Atlet Tekun',
      criterion: 'Jawab 100 soal',
      Icon: Trophy,
      tone: 'yellow',
      unlocked: t.totalAnswered >= 100,
      progressText: `${Math.min(t.totalAnswered, 100)}/100 soal`,
    },
    {
      id: 'streak-awal',
      title: 'Streak Awal',
      criterion: 'Belajar 3 hari beruntun',
      Icon: Flame,
      tone: 'orange',
      unlocked: streak >= 3,
      progressText: `${Math.min(streak, 3)}/3 hari`,
    },
    {
      id: 'streak-konsisten',
      title: 'Streak Konsisten',
      criterion: 'Belajar 7 hari beruntun',
      Icon: Flame,
      tone: 'red',
      unlocked: streak >= 7,
      progressText: `${Math.min(streak, 7)}/7 hari`,
    },
    {
      id: 'streak-legenda',
      title: 'Streak Legenda',
      criterion: 'Belajar 30 hari beruntun',
      Icon: Crown,
      tone: 'purple',
      unlocked: streak >= 30,
      progressText: `${Math.min(streak, 30)}/30 hari`,
    },
    {
      id: 'sempurna',
      title: 'Sempurna',
      criterion: '10 jawaban benar di satu sub-bab',
      Icon: Star,
      tone: 'yellow',
      unlocked: t.tenInARow,
      progressText: t.tenInARow ? 'Tercapai' : 'Belum tercapai',
    },
    {
      id: 'penjelajah',
      title: 'Penjelajah',
      criterion: 'Coba 3 sub-bab berbeda',
      Icon: Compass,
      tone: 'blue',
      unlocked: t.subBabTouched >= 3,
      progressText: `${Math.min(t.subBabTouched, 3)}/3 sub-bab`,
    },
    {
      id: 'pencipta-xp',
      title: 'Pencipta XP',
      criterion: 'Kumpulkan 500 XP',
      Icon: Award,
      tone: 'blue',
      unlocked: xp >= 500,
      progressText: `${Math.min(xp, 500)}/500 XP`,
    },
    {
      id: 'kolektor-medali',
      title: 'Kolektor Medali',
      criterion: 'Minimal 1 medali tiap warna',
      Icon: Medal,
      tone: 'amber',
      unlocked: m.gold >= 1 && m.silver >= 1 && m.bronze >= 1,
      progressText: `${m.gold}🥇 ${m.silver}🥈 ${m.bronze}🥉`,
    },
  ];
}

const TONE_STYLES = {
  red:    { bg: 'bg-red-100',    text: 'text-brand-primary', glow: 'shadow-red-500/30',    ring: 'ring-red-500/30' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-500',    glow: 'shadow-orange-500/30', ring: 'ring-orange-500/30' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600',    glow: 'shadow-yellow-500/30', ring: 'ring-yellow-500/30' },
  amber:  { bg: 'bg-amber-100',  text: 'text-amber-700',     glow: 'shadow-amber-500/30',  ring: 'ring-amber-500/30' },
  blue:   { bg: 'bg-blue-100',   text: 'text-brand-accent',  glow: 'shadow-blue-500/30',   ring: 'ring-blue-500/30' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600',    glow: 'shadow-purple-500/30', ring: 'ring-purple-500/30' },
};

export default function Achievements({ stats, progress }) {
  const items = buildAchievements(stats, progress);
  const unlockedCount = items.filter((a) => a.unlocked).length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="flex items-center justify-between relative">
          <div>
            <span className="bg-yellow-500/10 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {unlockedCount}/{items.length} Terbuka
            </span>
            <h2 className="text-2xl font-bold font-heading mt-3 mb-1 flex items-center gap-2">
              <Trophy className="text-yellow-500 w-6 h-6" /> Pencapaianmu
            </h2>
            <p className="text-gray-500 text-sm">
              Kumpulkan lencana sembari menaklukkan soal. Tiap pencapaian membuka kebanggaan baru!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {items.map((a) => {
          const tone = TONE_STYLES[a.tone] || TONE_STYLES.yellow;
          const { Icon } = a;
          return (
            <div
              key={a.id}
              className={`glass-card rounded-2xl p-5 flex flex-col items-center text-center transition-all ${
                a.unlocked
                  ? `ring-1 ${tone.ring} shadow-lg ${tone.glow} animate-float`
                  : 'opacity-60 grayscale'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl ${a.unlocked ? tone.bg : 'bg-gray-100'} flex items-center justify-center mb-3`}>
                {a.unlocked ? (
                  <Icon className={`w-7 h-7 ${tone.text}`} />
                ) : (
                  <Lock className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <h4 className={`font-bold font-heading text-sm mb-1 ${a.unlocked ? 'text-gray-800' : 'text-gray-500'}`}>
                {a.title}
              </h4>
              <p className="text-xs text-gray-500 mb-2 leading-snug">{a.criterion}</p>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                a.unlocked ? `${tone.bg} ${tone.text}` : 'bg-gray-100 text-gray-400'
              }`}>
                {a.unlocked ? 'Terbuka' : a.progressText}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
