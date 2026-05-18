import React from 'react';
import { Award, Flame, Star, Compass, Zap, CheckCircle2, ChevronRight, Lock, BookOpen } from 'lucide-react';

export default function Dashboard({ stats, onSelectSubBab }) {
  const ipaRoadmap = [
    { id: 'ipa-01', title: 'Ciri Makhluk Hidup', progress: 100, completed: true, questionsCount: 100 },
    { id: 'ipa-02', title: 'Sistem Organ Manusia', progress: 100, completed: true, questionsCount: 100 },
    { id: 'ipa-03', title: 'Gaya & Gerak', progress: 100, completed: true, questionsCount: 100 },
    { id: 'ipa-04b', title: 'Optika & Cermin', progress: 0, completed: false, active: true, questionsCount: 100 },
    { id: 'ipa-04c', title: 'Pembiasan Lensa', progress: 0, completed: false, questionsCount: 100, locked: true },
    { id: 'ipa-05', title: 'Bumi & Antariksa', progress: 0, completed: false, questionsCount: 100, locked: true }
  ];

  const mathRoadmap = [
    { id: 'mtk-01', title: 'Bilangan & Operasi', progress: 100, completed: true, questionsCount: 100 },
    { id: 'mtk-02', title: 'Pecahan & Persentase', progress: 60, completed: false, active: true, questionsCount: 100 },
    { id: 'mtk-03', title: 'Geometri Bidang Datar', progress: 0, completed: false, questionsCount: 100, locked: true },
    { id: 'mtk-04', title: 'Geometri Bangun Ruang', progress: 0, completed: false, questionsCount: 100, locked: true },
    { id: 'mtk-05', title: 'Aritmetika Sosial', progress: 0, completed: false, questionsCount: 100, locked: true }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome & Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 glass-card rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute right-0 top-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
          <div>
            <span className="bg-red-500/10 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Level 12 • Ksatria Sains</span>
            <h2 className="text-2xl font-bold font-heading mt-3 mb-1">Halo, Calon Medali Emas! 👋</h2>
            <p className="text-gray-500 text-sm">Kemajuan belajarmu sangat luar biasa minggu ini. Lanjutkan latihanmu untuk merebut posisi puncak!</p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="text-brand-accent animate-spin-slow w-5 h-5" />
              <span className="text-sm font-semibold">Tujuan Berikutnya: Optika & Cermin</span>
            </div>
            <button 
              onClick={() => onSelectSubBab('ipa-04b')}
              className="bg-brand-primary hover:bg-brand-hover text-white px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-md shadow-red-500/20"
            >
              Mulai Belajar <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats box 1: Streak */}
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
            <p className="text-xs text-orange-500 font-semibold mt-1">Luar biasa! 2 hari lagi untuk Klaim Chest Emas</p>
          </div>
        </div>

        {/* Stats box 2: XP */}
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
            <p className="text-xs text-gray-400 mt-1">Latih terus untuk naik level</p>
          </div>
        </div>
      </div>

      {/* Achievements Card */}
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

      {/* Roadmaps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* IPA Roadmap */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center">
              <Compass className="text-brand-primary w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading">Roadmap IPA (Olimpiade Sains)</h3>
              <p className="text-xs text-gray-400">Taksonomi konsep fisika, biologi, & bumi</p>
            </div>
          </div>

          <div className="space-y-4">
            {ipaRoadmap.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => !item.locked && onSelectSubBab(item.id)}
                className={`glass-card rounded-2xl p-5 flex items-center justify-between transition-all ${
                  item.locked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:border-red-500/30 hover:shadow-lg'
                } ${item.active ? 'ring-2 ring-brand-primary/50 bg-red-500/5' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    item.completed ? 'bg-emerald-100 text-emerald-600' :
                    item.active ? 'bg-red-100 text-brand-primary' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {item.completed ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800 flex items-center gap-1.5">
                      {item.title}
                      {item.active && <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-extrabold animate-pulse">Aktif</span>}
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
                          className={`h-full rounded-full ${item.completed ? 'bg-emerald-500' : 'bg-brand-primary'}`} 
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

        {/* Matematika Roadmap */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center">
              <BookOpen className="text-brand-accent w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading">Roadmap Matematika</h3>
              <p className="text-xs text-gray-400">Asah logika, pecahan, hingga geometri</p>
            </div>
          </div>

          <div className="space-y-4">
            {mathRoadmap.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => !item.locked && onSelectSubBab(item.id)}
                className={`glass-card rounded-2xl p-5 flex items-center justify-between transition-all ${
                  item.locked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:border-blue-500/30 hover:shadow-lg'
                } ${item.active ? 'ring-2 ring-brand-accent/50 bg-blue-500/5' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    item.completed ? 'bg-emerald-100 text-emerald-600' :
                    item.active ? 'bg-blue-100 text-brand-accent' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {item.completed ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800 flex items-center gap-1.5">
                      {item.title}
                      {item.active && <span className="bg-brand-accent text-white text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-extrabold animate-pulse">Lanjutkan</span>}
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
                          className={`h-full rounded-full ${item.completed ? 'bg-emerald-500' : 'bg-brand-accent'}`} 
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
      </div>
    </div>
  );
}
