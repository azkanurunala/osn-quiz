import React, { useState } from 'react';
import { Award, TrendingUp, Users, Calendar, Activity, BookOpen, ChevronRight, BarChart3, AlertCircle } from 'lucide-react';

export default function Analytics({ stats }) {
  const [activeTab, setActiveTab] = useState('student'); // 'student' | 'parent' | 'teacher'

  const skillMastery = [
    { name: 'Optika & Cermin', mastery: 85, color: 'bg-emerald-500', status: 'Sangat Baik' },
    { name: 'Gaya & Gerak', mastery: 90, color: 'bg-emerald-500', status: 'Sangat Baik' },
    { name: 'Sistem Organ Manusia', mastery: 72, color: 'bg-yellow-500', status: 'Cukup' },
    { name: 'Ciri Makhluk Hidup', mastery: 95, color: 'bg-emerald-500', status: 'Sangat Baik' },
    { name: 'Pembiasan Lensa', mastery: 40, color: 'bg-red-500', status: 'Butuh Latihan' }
  ];

  const parentStats = {
    weeklyHours: '4.5 Jam',
    consistencyScore: '96%',
    focusScore: '92%',
    activeDays: ['Sen', 'Sel', 'Rab', 'Kam', 'Sab', 'Min']
  };

  const coachStats = {
    classAverage: '82.5%',
    percentileRank: '94th',
    strongestConcept: 'Mekanika & Optika Datar',
    improvementNeeded: 'Biologi Reproduksi & Astronomi Dasar'
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-card rounded-2xl p-6">
        <div>
          <h2 className="text-2xl font-bold font-heading">Dasbor Analitik Belajar</h2>
          <p className="text-xs text-gray-400">Pantau kemajuan pemahaman konsep dan statistik kemajuan OSN SD Anda</p>
        </div>

        {/* Tab Selector */}
        <div className="flex p-1.5 bg-gray-100 rounded-2xl shrink-0 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('student')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'student' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Activity className="w-4 h-4" /> Siswa
          </button>
          <button
            onClick={() => setActiveTab('parent')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'parent' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Users className="w-4 h-4" /> Orang Tua
          </button>
          <button
            onClick={() => setActiveTab('teacher')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'teacher' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Award className="w-4 h-4" /> Guru Pembina
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Analytics Left Cards (Col Span 2) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* TAB 1: STUDENT VIEW */}
          {activeTab === 'student' && (
            <div className="glass-card rounded-3xl p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold font-heading">Tingkat Penguasaan Materi IPA</h3>
                <p className="text-xs text-gray-400">Diukur dari akurasi latihan soal terstandar</p>
              </div>

              <div className="space-y-4">
                {skillMastery.map((item) => (
                  <div key={item.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-gray-700">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] ${
                          item.status === 'Sangat Baik' ? 'bg-emerald-50 text-emerald-600' :
                          item.status === 'Cukup' ? 'bg-yellow-50 text-yellow-600' : 'bg-red-50 text-red-500'
                        }`}>
                          {item.status}
                        </span>
                        <span className="text-gray-800">{item.mastery}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3.5 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: `${item.mastery}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PARENT VIEW */}
          {activeTab === 'parent' && (
            <div className="glass-card rounded-3xl p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold font-heading">Konsistensi & Jam Belajar Mingguan</h3>
                <p className="text-xs text-gray-400">Pantau kehadiran aktif harian dan keterlibatan anak</p>
              </div>

              {/* Parent Stats Widgets */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-2xl text-center">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Waktu Belajar</span>
                  <span className="text-xl font-bold font-heading text-blue-700 block mt-1">{parentStats.weeklyHours}</span>
                </div>
                <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl text-center">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Fokus Akurasi</span>
                  <span className="text-xl font-bold font-heading text-emerald-700 block mt-1">{parentStats.focusScore}</span>
                </div>
                <div className="p-4 bg-purple-50/50 border border-purple-100 rounded-2xl text-center">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Konsistensi</span>
                  <span className="text-xl font-bold font-heading text-purple-700 block mt-1">{parentStats.consistencyScore}</span>
                </div>
              </div>

              {/* Study Calendar Log */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Kalender Aktif Minggu Ini</span>
                <div className="flex justify-between items-center gap-2">
                  {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day) => {
                    const isActive = parentStats.activeDays.includes(day);
                    return (
                      <div key={day} className="flex flex-col items-center gap-1.5 flex-1">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-xs font-bold ${
                          isActive ? 'bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-500/10' : 'bg-gray-50 border-gray-200 text-gray-400'
                        }`}>
                          ✓
                        </div>
                        <span className="text-[10px] font-bold text-gray-500">{day}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TEACHER VIEW */}
          {activeTab === 'teacher' && (
            <div className="glass-card rounded-3xl p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold font-heading">Statistik Standar Kompetensi Pembinaan</h3>
                <p className="text-xs text-gray-400">Analisis penguasaan konsep kurikulum olimpiade sains nasional tingkat SD</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Nilai Rata-rata Kelas</span>
                  <span className="text-lg font-bold font-heading text-gray-800 block mt-0.5">{coachStats.classAverage}</span>
                  <p className="text-[10px] text-gray-400 mt-1">Mengungguli 94% dari seluruh pembinaan sekolah.</p>
                </div>
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Percentile Kelompok</span>
                  <span className="text-lg font-bold font-heading text-gray-800 block mt-0.5">{coachStats.percentileRank}</span>
                  <p className="text-[10px] text-gray-400 mt-1">Berada pada zona medali perak/emas kabupaten.</p>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Rekomendasi Pembina Kurikulum</span>
                <div className="space-y-2">
                  <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl text-xs flex gap-2">
                    <span className="font-bold text-emerald-700">Terkuat:</span>
                    <span className="text-gray-600">{coachStats.strongestConcept}</span>
                  </div>
                  <div className="p-3 bg-red-50/50 border border-red-100 rounded-xl text-xs flex gap-2">
                    <span className="font-bold text-red-700">Perlu Fokus:</span>
                    <span className="text-gray-600">{coachStats.improvementNeeded}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Recommendations Card */}
          <div className="p-5 bg-brand-primary/5 rounded-3xl border border-brand-primary/10 flex items-start gap-4">
            <div className="p-2 bg-red-100 rounded-2xl text-brand-primary shrink-0 mt-0.5 animate-bounce">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-gray-800 font-heading">Rekomendasi Belajar Hari Ini</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pemahaman Anda tentang <strong>Pembiasan Lensa</strong> masih lemah (40%). Luangkan waktu 15 menit hari ini untuk melatih sub-bab tersebut guna memuluskan jalur penguasaan bab optika Anda!
              </p>
              <button className="text-brand-primary text-xs font-bold mt-2 flex items-center gap-0.5 hover:underline">
                Pelajari Pembiasan Lensa Sekarang <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Analytics Right Sidebar (Col Span 1) */}
        <div className="space-y-6">
          {/* Quick Stats Summary */}
          <div className="glass-card rounded-3xl p-6 space-y-6">
            <div>
              <h4 className="font-bold font-heading text-sm">Ringkasan Aktivitas</h4>
              <p className="text-[10px] text-gray-400">Statistik performa kuis kumulatif</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-gray-500">XP Terkumpul:</span>
                <span className="font-bold text-gray-800">{stats.xp} XP</span>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-gray-500">Streak Belajar:</span>
                <span className="font-bold text-gray-800">{stats.streak} Hari 🔥</span>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-gray-500">Soal Dijawab:</span>
                <span className="font-bold text-gray-800">230 Soal</span>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-gray-500">Akurasi Rata-rata:</span>
                <span className="font-bold text-emerald-600">88.5%</span>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-4 flex items-center justify-center">
              <span className="text-xs text-gray-400 font-medium">Berdasarkan data 7 hari terakhir</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
