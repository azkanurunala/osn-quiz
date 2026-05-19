import { useState, useCallback } from 'react';
import { Compass, BarChart3, Clock, Trophy, Star, Flame } from 'lucide-react';
import Dashboard from './components/Dashboard';
import PracticeArea from './components/PracticeArea';
import TryoutArea from './components/TryoutArea';
import Analytics from './components/Analytics';
import OnboardingTour from './components/OnboardingTour';
import ShortcutHelp from './components/ShortcutHelp';
import SplashScreen from './components/SplashScreen';
import PomodoroTimer from './components/PomodoroTimer';
import { usePersistedState } from './hooks/usePersistedState';
import { tickStreak } from './utils/streak';
import { fireLevelUp } from './utils/milestones';
import { useManifest, useSubBabData } from './hooks/useSubBabData';
import { LanguageToggle, useT } from './i18n';

export default function App() {
  const t = useT();
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [selectedSubBab, setSelectedSubBab] = useState(null);
  const [isCleanMode, setIsCleanMode] = useState(false);

  const { manifest, loading: manifestLoading } = useManifest();
  const defaultSubBabId = manifest?.items?.find((i) => i.type === 'subbab')?.subBab || 'ipa-04b';
  const effectiveSubBabId = selectedSubBab || defaultSubBabId;
  const { data: questionsData, loading: dataLoading } = useSubBabData(effectiveSubBabId, manifest);

  const [stats, setStats] = usePersistedState('osn-stats', {
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    medals: { gold: 0, silver: 0, bronze: 0 }
  });

  const [progress, setProgress] = usePersistedState('osn-progress', {});

  const tickEngagement = useCallback(() => {
    setStats(prev => tickStreak(prev));
  }, [setStats]);

  const handleAddXp = useCallback((amount) => {
    setStats(prev => {
      const prevXp = prev.xp || 0;
      const newXp = prevXp + amount;
      const prevLevel = Math.floor(prevXp / 250);
      const newLevel = Math.floor(newXp / 250);
      if (newLevel > prevLevel) fireLevelUp();
      return { ...prev, xp: newXp };
    });
  }, [setStats]);

  const handleAddMedal = useCallback((type) => {
    setStats(prev => ({
      ...prev,
      medals: { ...prev.medals, [type]: (prev.medals?.[type] || 0) + 1 }
    }));
  }, [setStats]);

  const handleSubBabProgress = useCallback((subBabId, updater) => {
    setProgress(prev => {
      const current = prev[subBabId] || { lastIndex: 0, answered: {}, correct: 0, completed: false };
      const next = typeof updater === 'function' ? updater(current) : updater;
      return { ...prev, [subBabId]: next };
    });
  }, [setProgress]);

  const handleSelectSubBab = (id) => {
    setSelectedSubBab(id);
    setCurrentTab('practice');
    tickEngagement();
  };

  const handleResetProgress = useCallback(() => {
    try { localStorage.removeItem('osn-stats'); } catch {}
    try { localStorage.removeItem('osn-progress'); } catch {}
    setStats({ xp: 0, streak: 0, lastActiveDate: null, medals: { gold: 0, silver: 0, bronze: 0 } });
    setProgress({});
  }, [setStats, setProgress]);

  return (
    <div className="min-h-screen bg-mesh flex flex-col font-sans">

      <SplashScreen durationMs={1800} />
      {!isCleanMode && <OnboardingTour />}
      {!isCleanMode && <ShortcutHelp />}
      {!isCleanMode && <PomodoroTimer />}

      {!isCleanMode && (
        <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-md border-b border-gray-100 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => { setCurrentTab('dashboard'); setSelectedSubBab(null); }}>
              <div className="w-10 h-10 rounded-2xl bg-brand-primary flex items-center justify-center shadow-lg shadow-red-500/20">
                <Trophy className="text-white w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h1 className="text-base font-black font-heading tracking-tight text-gray-800 m-0 leading-none">OSN-SD Prep</h1>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">{t('adaptive_learning', 'Adaptive Learning')}</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-1 bg-gray-100 p-1.5 rounded-2xl">
              <button
                onClick={() => { setCurrentTab('dashboard'); setSelectedSubBab(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  currentTab === 'dashboard' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <Compass className="w-4 h-4" /> {t('roadmap_belajar', 'Roadmap Belajar')}
              </button>
              <button
                onClick={() => { setCurrentTab('tryout'); setSelectedSubBab(null); tickEngagement(); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  currentTab === 'tryout' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <Clock className="w-4 h-4" /> {t('tryout_mandiri', 'Tryout Mandiri')}
              </button>
              <button
                onClick={() => { setCurrentTab('analytics'); setSelectedSubBab(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  currentTab === 'analytics' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <BarChart3 className="w-4 h-4" /> {t('analitik_belajar', 'Analitik Belajar')}
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <LanguageToggle />
              <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1.5 rounded-xl font-extrabold text-xs">
                <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
                <span>{stats.streak} {t('hari', 'Hari')}</span>
              </div>
              <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-xl font-extrabold text-xs">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span>{stats.xp} XP</span>
              </div>
            </div>
          </div>
        </header>
      )}

      <main className={`flex-1 max-w-7xl w-full mx-auto px-6 ${isCleanMode ? 'py-4' : 'py-8 pb-24 md:pb-8'}`}>
        {currentTab === 'dashboard' && (
          <Dashboard
            stats={stats}
            progress={progress}
            manifest={manifest}
            manifestLoading={manifestLoading}
            onSelectSubBab={handleSelectSubBab}
            onAddXp={handleAddXp}
            questionsData={questionsData}
          />
        )}

        {currentTab === 'practice' && (
          dataLoading || !questionsData ? (
            <div className="text-center p-12 text-gray-400 text-sm">Memuat materi…</div>
          ) : (
            <PracticeArea
              subBabId={selectedSubBab}
              questionsData={questionsData}
              subBabProgress={progress[selectedSubBab]}
              onUpdateProgress={(updater) => handleSubBabProgress(selectedSubBab, updater)}
              onBack={() => { setCurrentTab('dashboard'); setSelectedSubBab(null); setIsCleanMode(false); }}
              onAddXp={handleAddXp}
              isCleanMode={isCleanMode}
              setIsCleanMode={setIsCleanMode}
            />
          )
        )}

        {currentTab === 'tryout' && (
          <TryoutArea
            questionsData={questionsData}
            onBack={() => setCurrentTab('dashboard')}
            onAddMedal={handleAddMedal}
          />
        )}

        {currentTab === 'analytics' && (
          <Analytics
            stats={stats}
            progress={progress}
            manifest={manifest}
            onResetProgress={handleResetProgress}
            questionsData={questionsData}
            onJumpToSubBab={handleSelectSubBab}
          />
        )}
      </main>

      {/* Mobile bottom nav */}
      {!isCleanMode && (
        <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/85 backdrop-blur-md border-t border-gray-100 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex items-center justify-around">
          {[
            { id: 'dashboard', icon: Compass, label: t('roadmap_belajar', 'Roadmap').split(' ')[0] },
            { id: 'tryout', icon: Clock, label: t('tryout_mandiri', 'Tryout').split(' ')[0] },
            { id: 'analytics', icon: BarChart3, label: t('analitik_belajar', 'Analitik').split(' ')[0] },
          ].map(({ id, icon: Icon, label }) => {
            const active = currentTab === id;
            return (
              <button
                key={id}
                onClick={() => {
                  setCurrentTab(id);
                  setSelectedSubBab(null);
                  if (id === 'tryout') tickEngagement();
                }}
                className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1.5 rounded-xl transition ${
                  active ? 'text-brand-primary' : 'text-gray-400'
                }`}
                aria-label={label}
              >
                <Icon className={`w-5 h-5 ${active ? 'scale-110' : ''} transition-transform`} />
                <span className={`text-[10px] font-bold tracking-wide ${active ? 'text-brand-primary' : ''}`}>{label}</span>
              </button>
            );
          })}
        </nav>
      )}

      {!isCleanMode && (
        <footer className="w-full bg-white/50 border-t border-gray-100 py-6 px-6 text-center text-xs font-semibold text-gray-400">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <span>© 2026 OSN-SD Prep. Hak Cipta Dilindungi.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Syarat & Ketentuan</a>
              <a href="#" className="hover:underline">Kebijakan Privasi</a>
              <a href="#" className="hover:underline">Bantuan Belajar</a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
