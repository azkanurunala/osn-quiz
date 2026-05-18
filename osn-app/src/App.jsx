import React, { useState } from 'react';
import { Compass, BarChart3, Clock, Trophy, Star, Flame, Award, BookOpen, AlertCircle } from 'lucide-react';
import Dashboard from './components/Dashboard';
import PracticeArea from './components/PracticeArea';
import TryoutArea from './components/TryoutArea';
import Analytics from './components/Analytics';
import questionsData from './data/questions.json';

export default function App() {
  const [currentTab, setCurrentTab] = useState('dashboard'); // 'dashboard' | 'practice' | 'tryout' | 'analytics'
  const [selectedSubBab, setSelectedSubBab] = useState(null);
  const [isCleanMode, setIsCleanMode] = useState(false);
  
  // App-wide gamified stats
  const [stats, setStats] = useState({
    xp: 1250,
    streak: 5,
    medals: {
      gold: 2,
      silver: 3,
      bronze: 1
    }
  });

  const handleAddXp = (amount) => {
    setStats(prev => ({
      ...prev,
      xp: prev.xp + amount
    }));
  };

  const handleAddMedal = (type) => {
    setStats(prev => ({
      ...prev,
      medals: {
        ...prev.medals,
        [type]: prev.medals[type] + 1
      }
    }));
  };

  const handleSelectSubBab = (id) => {
    setSelectedSubBab(id);
    setCurrentTab('practice');
  };

  return (
    <div className="min-h-screen bg-mesh flex flex-col font-sans">
      
      {/* Premium Glassmorphic Top Navbar */}
      {!isCleanMode && (
        <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-md border-b border-gray-100 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo & Platform Name */}
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => { setCurrentTab('dashboard'); setSelectedSubBab(null); }}>
              <div className="w-10 h-10 rounded-2xl bg-brand-primary flex items-center justify-center shadow-lg shadow-red-500/20">
                <Trophy className="text-white w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h1 className="text-base font-black font-heading tracking-tight text-gray-800 m-0 leading-none">OSN-SD Prep</h1>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Adaptive Learning</span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-gray-100 p-1.5 rounded-2xl">
              <button
                onClick={() => { setCurrentTab('dashboard'); setSelectedSubBab(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  currentTab === 'dashboard' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <Compass className="w-4 h-4" /> Roadmap Belajar
              </button>
              <button
                onClick={() => { setCurrentTab('tryout'); setSelectedSubBab(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  currentTab === 'tryout' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <Clock className="w-4 h-4" /> Tryout Mandiri
              </button>
              <button
                onClick={() => { setCurrentTab('analytics'); setSelectedSubBab(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  currentTab === 'analytics' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <BarChart3 className="w-4 h-4" /> Analitik Belajar
              </button>
            </nav>

            {/* Gamified Stats Badges */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1.5 rounded-xl font-extrabold text-xs">
                <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
                <span>{stats.streak} Hari</span>
              </div>
              <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-xl font-extrabold text-xs">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span>{stats.xp} XP</span>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 max-w-7xl w-full mx-auto px-6 ${isCleanMode ? 'py-4' : 'py-8'}`}>
        {currentTab === 'dashboard' && (
          <Dashboard stats={stats} onSelectSubBab={handleSelectSubBab} />
        )}
        
        {currentTab === 'practice' && (
          <PracticeArea 
            subBabId={selectedSubBab} 
            questionsData={questionsData}
            onBack={() => { setCurrentTab('dashboard'); setSelectedSubBab(null); setIsCleanMode(false); }}
            onAddXp={handleAddXp}
            isCleanMode={isCleanMode}
            setIsCleanMode={setIsCleanMode}
          />
        )}

        {currentTab === 'tryout' && (
          <TryoutArea 
            questionsData={questionsData}
            onBack={() => setCurrentTab('dashboard')}
            onAddMedal={handleAddMedal}
          />
        )}

        {currentTab === 'analytics' && (
          <Analytics stats={stats} />
        )}
      </main>

      {/* Footer */}
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
