import { useState, useMemo } from 'react';
import { Award, Users, Activity, AlertCircle, Trash2 } from 'lucide-react';

const SUBBAB_LABELS = {
  'ipa-01': 'Ciri Makhluk Hidup',
  'ipa-02': 'Sistem Organ Manusia',
  'ipa-03': 'Gaya & Gerak',
  'ipa-04b': 'Optika & Cermin',
  'ipa-04c': 'Pembiasan Lensa',
  'ipa-05': 'Bumi & Antariksa',
  'mtk-01': 'Bilangan & Operasi',
  'mtk-02': 'Pecahan & Persentase',
  'mtk-03': 'Geometri Bidang Datar',
  'mtk-04': 'Geometri Bangun Ruang',
  'mtk-05': 'Aritmetika Sosial',
};

export default function Analytics({ stats, progress, onResetProgress }) {
  const [activeTab, setActiveTab] = useState('student'); // 'student' | 'parent' | 'teacher'
  const [confirmingReset, setConfirmingReset] = useState(false);

  const { skillMastery, totalAnswered, totalCorrect, accuracyPct, weakestId } = useMemo(() => {
    const entries = Object.entries(progress || {});
    const rows = entries
      .map(([id, p]) => {
        const answered = p?.answered ? Object.keys(p.answered).length : 0;
        if (!answered) return null;
        const correct = p?.correct || 0;
        const mastery = Math.round((correct / answered) * 100);
        const color = mastery >= 85 ? 'bg-emerald-500' : mastery >= 65 ? 'bg-yellow-500' : 'bg-red-500';
        const status = mastery >= 85 ? 'Sangat Baik' : mastery >= 65 ? 'Cukup' : 'Butuh Latihan';
        return { id, name: SUBBAB_LABELS[id] || id, mastery, answered, correct, color, status };
      })
      .filter(Boolean)
      .sort((a, b) => b.mastery - a.mastery);

    const ans = rows.reduce((s, r) => s + r.answered, 0);
    const cor = rows.reduce((s, r) => s + r.correct, 0);
    const weakest = [...rows].sort((a, b) => a.mastery - b.mastery)[0];
    return {
      skillMastery: rows,
      totalAnswered: ans,
      totalCorrect: cor,
      accuracyPct: ans ? ((cor / ans) * 100).toFixed(1) : '0.0',
      weakestId: weakest?.name,
    };
  }, [progress]);

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

              {skillMastery.length === 0 ? (
                <div className="text-center py-8 text-xs text-gray-400">
                  Belum ada data latihan. Selesaikan minimal 1 soal untuk melihat penguasaan materimu di sini.
                </div>
              ) : (
                <div className="space-y-4">
                  {skillMastery.map((item) => (
                    <div key={item.id} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-gray-700">{item.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-gray-400 font-medium">{item.correct}/{item.answered}</span>
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
              )}
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
                {weakestId ? (
                  <>Sub-bab <strong>{weakestId}</strong> menjadi area terlemah dari latihanmu. Luangkan 15 menit lagi untuk mempertajam pemahaman dan menutup gap miskonsepsi.</>
                ) : (
                  <>Mulai latihan pertamamu dari roadmap untuk membuka analisis penguasaan materi yang dipersonalisasi.</>
                )}
              </p>
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
                <span className="font-bold text-gray-800">{totalAnswered} Soal</span>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-gray-500">Akurasi Rata-rata:</span>
                <span className="font-bold text-emerald-600">{totalAnswered > 0 ? `${accuracyPct}%` : '—'}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-gray-500">Jawaban Benar:</span>
                <span className="font-bold text-gray-800">{totalCorrect} Soal</span>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-4 flex items-center justify-center">
              <span className="text-xs text-gray-400 font-medium">Berdasarkan data 7 hari terakhir</span>
            </div>
          </div>

          {/* Data settings */}
          <div className="glass-card rounded-3xl p-6 space-y-3">
            <div>
              <h4 className="font-bold font-heading text-sm flex items-center gap-1.5">
                <Trash2 className="w-3.5 h-3.5 text-gray-400" /> Pengaturan Data
              </h4>
              <p className="text-[10px] text-gray-400">Semua progres disimpan lokal di browser-mu.</p>
            </div>
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
                  Yakin ingin menghapus <strong>{totalAnswered} jawaban</strong>, {stats.xp} XP, dan streak {stats.streak} hari? Tindakan ini tidak dapat dibatalkan.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setConfirmingReset(false)}
                    className="text-xs font-bold text-gray-600 border border-gray-200 hover:bg-gray-50 py-2 rounded-xl transition"
                  >
                    Batal
                  </button>
                  <button
                    onClick={() => { onResetProgress?.(); setConfirmingReset(false); }}
                    className="text-xs font-extrabold text-white bg-brand-primary hover:bg-brand-hover py-2 rounded-xl transition shadow-md shadow-red-500/10"
                  >
                    Ya, Hapus
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
