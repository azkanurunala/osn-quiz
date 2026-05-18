import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle, CheckCircle, XCircle, Lightbulb, Compass, Play, Pause, Volume2, VolumeX, Eye, ToggleLeft, ToggleRight, LayoutGrid, Columns, Settings, Video, Search, BookOpen, Star, Sparkles, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

const renderMarkdown = (text) => {
  if (!text) return '';
  const parts = text.split('**');
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="font-extrabold text-gray-900">{part}</strong>;
    }
    return part;
  });
};

const renderMarkdownDark = (text) => {
  if (!text) return '';
  const parts = text.split('**');
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="font-extrabold text-white">{part}</strong>;
    }
    return part;
  });
};

export default function PracticeArea({ subBabId, questionsData, onBack, onAddXp, isCleanMode, setIsCleanMode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [showPembahasan, setShowPembahasan] = useState(false);

  // Video Producer Studio States
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [timerPhase, setTimerPhase] = useState('question'); // 'question' | 'explanation'
  const [autoPilot, setAutoPilot] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.4);
  const [layoutSplit, setLayoutSplit] = useState(true);

  // Cinematic Minimalist Countdown Intro Screen States
  const [showIntro, setShowIntro] = useState(false);
  const [introTimeLeft, setIntroTimeLeft] = useState(3); // 3 seconds circular countdown

  const audioRef = useRef(null);
  const explanationScrollRef = useRef(null);
  const autoscrollIntervalRef = useRef(null);

  const questions = questionsData?.questions || [];
  const currentQuestion = questions[currentIndex];

  // Initialize and manage loop background music
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3");
      audioRef.current.loop = true;
    }
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (isMuted) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(err => {
        console.log("Audio play blocked by browser:", err);
      });
    }
    return () => {
      audioRef.current?.pause();
    };
  }, [isMuted]);

  // Reset timer on question change
  useEffect(() => {
    setTimeLeft(10);
    setTimerPhase('question');
  }, [currentIndex]);

  // Autopilot auto-select logic (ONLY when timer is DISABLED so it acts as instant helper)
  useEffect(() => {
    if (autoPilot && !timerEnabled && !isChecked && !selectedOption && currentQuestion) {
      const autoSelectTimer = setTimeout(() => {
        setSelectedOption(currentQuestion.answerKey);
      }, 2000);
      return () => clearTimeout(autoSelectTimer);
    }
  }, [currentIndex, autoPilot, timerEnabled, isChecked, selectedOption, currentQuestion]);

  // Cinematic 3s Circular Countdown Intro effect
  useEffect(() => {
    if (isCleanMode && showIntro) {
      if (introTimeLeft > 0) {
        const timer = setTimeout(() => {
          setIntroTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setShowIntro(false);
        // Start the question timer phase seamlessly after the intro!
        if (timerEnabled) {
          setTimeLeft(10);
          setTimerPhase('question');
        }
      }
    }
  }, [isCleanMode, showIntro, introTimeLeft, timerEnabled]);

  // High-performance smooth autoscroll loop for Explanation sidebar
  useEffect(() => {
    if (autoscrollIntervalRef.current) {
      cancelAnimationFrame(autoscrollIntervalRef.current);
      autoscrollIntervalRef.current = null;
    }

    if (timerEnabled && timerPhase === 'explanation' && explanationScrollRef.current && !showIntro) {
      explanationScrollRef.current.scrollTop = 0;

      const delayScrollTimer = setTimeout(() => {
        const container = explanationScrollRef.current;
        if (!container) return;

        const maxScroll = container.scrollHeight - container.clientHeight;
        if (maxScroll <= 0) return;

        const startTime = Date.now();
        const duration = 14200; // Complete scroll in 14.2s (leaves 800ms buffer at bottom)

        const scrollStep = () => {
          if (!explanationScrollRef.current || timerPhase !== 'explanation') return;

          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          container.scrollTop = progress * maxScroll;

          if (progress < 1) {
            autoscrollIntervalRef.current = requestAnimationFrame(scrollStep);
          }
        };

        autoscrollIntervalRef.current = requestAnimationFrame(scrollStep);
      }, 150);

      return () => clearTimeout(delayScrollTimer);
    }

    if (explanationScrollRef.current) {
      explanationScrollRef.current.scrollTop = 0;
    }
  }, [timerPhase, timerEnabled, currentIndex, showPembahasan, showIntro]);

  // Dramatic countdown and auto-loop logic for both Question (10s) and Explanation (15s)
  useEffect(() => {
    if (!timerEnabled || showIntro) {
      return;
    }

    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
        if (!isMuted && timerPhase === 'question' && timeLeft <= 4) {
          const tick = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAAAD");
          tick.volume = 0.1;
          tick.play().catch(() => {});
        }
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      if (timerPhase === 'question') {
        const correctAns = currentQuestion?.answerKey;
        setSelectedOption(correctAns);
        
        setIsChecked(true);
        setShowPembahasan(true);

        setScore(prev => prev + 1);
        onAddXp(10);
        
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#e53935', '#3b82f6', '#10b981', '#eab308']
        });

        setTimerPhase('explanation');
        setTimeLeft(15);
      } else {
        if (currentIndex < questions.length - 1) {
          handleNextQuestion();
        } else {
          setIsCleanMode(false);
          alert("Produksi Video Selesai! 🎉 Seluruh soal kuis telah selesai secara otomatis.");
        }
      }
    }
  }, [timeLeft, timerEnabled, timerPhase, autoPilot, currentQuestion, currentIndex, isMuted, showIntro]);

  if (!currentQuestion) {
    return (
      <div className="text-center p-12">
        <HelpCircle className="w-16 h-16 mx-auto text-gray-300 animate-pulse mb-4" />
        <h3 className="text-xl font-bold font-heading">Data Soal Tidak Ditemukan</h3>
        <p className="text-gray-400 mt-2">Gagal memuat materi kuis atau data kuis kosong.</p>
        <button onClick={onBack} className="mt-4 bg-brand-primary text-white px-6 py-2 rounded-xl text-sm font-bold">Kembali</button>
      </div>
    );
  }

  const handleOptionSelect = (option) => {
    if (isChecked) return;
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || isChecked) return;

    setIsChecked(true);
    setShowPembahasan(true);

    const isCorrect = selectedOption === currentQuestion.answerKey;
    if (isCorrect) {
      setScore(prev => prev + 1);
      onAddXp(10);
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e53935', '#3b82f6', '#10b981', '#eab308']
      });
    }

    if (timerEnabled) {
      setTimerPhase('explanation');
      setTimeLeft(15);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsChecked(false);
      setShowPembahasan(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedOption(null);
      setIsChecked(false);
      setShowPembahasan(false);
    }
  };

  const isCorrectOption = (opt) => opt === currentQuestion.answerKey;
  const isSelectedOption = (opt) => opt === selectedOption;

  const isSplitActive = showPembahasan && layoutSplit;

  // --- RENDERING: 1. Sleek Minimalist Glowing 3s Circular Countdown Intro Screen ---
  if (isCleanMode && showIntro) {
    return (
      <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#7B2CBF] flex flex-col items-center justify-center font-sans z-50 select-none">
        
        {/* Decorative waveform background lines */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 120 Q 300 200 600 80 T 1200 120 T 1800 80" fill="none" stroke="white" strokeWidth="4" />
            <path d="M 0 450 Q 400 500 800 400 T 1600 450" fill="none" stroke="white" strokeWidth="4" />
          </svg>
        </div>

        {/* Minimalist Glowing Countdown Ring */}
        <div className="relative flex flex-col items-center justify-center space-y-8 animate-scale-in">
          <div className="w-36 h-36 rounded-full border-4 border-white/20 flex items-center justify-center relative shadow-2xl">
            <div className="absolute inset-0 rounded-full border-4 border-t-white border-r-white/40 border-b-white/10 border-l-white/10 animate-spin"></div>
            <span className="text-6xl font-black text-white font-heading tracking-tight drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)] animate-pulse">
              {introTimeLeft > 0 ? introTimeLeft : 'Mulai!'}
            </span>
          </div>
          <div className="text-center space-y-1">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase font-heading">
              {questionsData?.title || 'CERDAS CERMAT OSN'}
            </h2>
            <p className="text-xs text-white/70 font-semibold uppercase tracking-widest">
              Menyiapkan Mode Perekaman...
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDERING: 2. Restored Modern Glassmorphism Clean Mode! ---
  if (isCleanMode) {
    return (
      <div className="fixed inset-0 w-screen h-screen overflow-hidden flex flex-col justify-between bg-[#7B2CBF] font-sans z-50 select-none">
        
        {/* Wave background decor */}
        <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 100 Q 300 200 600 100 T 1200 100 T 1800 100" fill="none" stroke="white" strokeWidth="4" />
            <path d="M 0 500 Q 400 400 800 500 T 1600 500" fill="none" stroke="white" strokeWidth="4" />
          </svg>
        </div>

        {/* Spotless Gear exit button */}
        <button 
          onClick={() => setIsCleanMode(false)}
          className="fixed top-4 right-4 z-50 p-2 bg-white/30 hover:bg-white/80 border border-gray-200/20 hover:border-gray-300/50 text-gray-400 hover:text-gray-700 rounded-full backdrop-blur-sm shadow-sm transition-all duration-300 opacity-25 hover:opacity-100 cursor-pointer"
          title="Keluar Perekaman (Buka Panel)"
        >
          <Settings className="w-4 h-4 animate-spin-slow" />
        </button>

        {/* Responsive Grid Split */}
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
          
          {/* Left panel: Restored Glassmorphic Question Card */}
          <div className={`h-full flex flex-col justify-center p-8 overflow-y-auto relative ${isSplitActive ? 'lg:col-span-6' : 'lg:col-span-12 max-w-4xl mx-auto'}`}>
            
            <div className="glass-card rounded-3xl p-8 space-y-6 shadow-2xl relative max-w-2xl w-full mx-auto animate-scale-in">
              
              {/* Dynamic countdown slider */}
              {timerEnabled && (
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between items-center text-xs font-bold text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <span className={`h-2.5 w-2.5 rounded-full animate-ping ${timerPhase === 'question' ? 'bg-red-500' : 'bg-brand-accent'}`}></span>
                      {timerPhase === 'question' ? 'Waktu Menjawab...' : 'Durasi Pembahasan...'}
                    </span>
                    <span className={`text-base font-black ${
                      timerPhase === 'question' && timeLeft <= 3 ? 'text-red-500 animate-bounce' : 
                      timerPhase === 'explanation' ? 'text-brand-accent' : 'text-gray-800'
                    }`}>
                      {timeLeft} Detik
                    </span>
                  </div>
                  <div className="w-full bg-gray-200/50 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${
                        timerPhase === 'question' 
                          ? (timeLeft > 5 ? 'bg-emerald-500' : timeLeft > 2 ? 'bg-yellow-500' : 'bg-red-500') 
                          : 'bg-brand-accent animate-pulse'
                      }`}
                      style={{ width: `${(timeLeft / (timerPhase === 'question' ? 10 : 15)) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Question tags */}
              <div className="space-y-3">
                <span className="bg-brand-accent/10 text-brand-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {currentQuestion.subTopic || 'Topik Utama'}
                </span>
                <h2 className="text-xl font-bold font-heading leading-relaxed text-gray-850">
                  {renderMarkdown(currentQuestion.question)}
                </h2>
              </div>

              {/* Options (Standard beautiful modern option card layout) */}
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(currentQuestion.options).map(([key, value]) => {
                  if (!value) return null;

                  let optionBg = 'bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300';
                  let icon = null;

                  if (isChecked) {
                    if (isCorrectOption(key)) {
                      optionBg = 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/20 text-emerald-800';
                      icon = <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />;
                    } else if (isSelectedOption(key)) {
                      optionBg = 'bg-red-50 border-red-300 ring-2 ring-red-500/20 text-red-800';
                      icon = <XCircle className="w-5 h-5 text-red-500 shrink-0" />;
                    } else {
                      optionBg = 'bg-gray-50/50 border-gray-100 opacity-60';
                    }
                  } else if (isSelectedOption(key)) {
                    optionBg = 'bg-red-50/60 border-brand-primary ring-2 ring-red-500/10 text-brand-primary font-semibold';
                  }

                  return (
                    <button
                      key={key}
                      disabled={isChecked}
                      onClick={() => handleOptionSelect(key)}
                      className={`w-full flex items-center justify-between text-left p-4 rounded-2xl border transition-all text-sm ${optionBg}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelectedOption(key) && !isChecked ? 'bg-brand-primary text-white' : 
                          isChecked && isCorrectOption(key) ? 'bg-emerald-500 text-white' :
                          isChecked && isSelectedOption(key) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {key}
                        </span>
                        <span className="leading-relaxed">{renderMarkdown(value)}</span>
                      </div>
                      {icon}
                    </button>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevQuestion}
                    disabled={currentIndex === 0}
                    className="p-3 border border-gray-200 hover:bg-gray-50 disabled:opacity-40 rounded-2xl transition"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={handleNextQuestion}
                    disabled={currentIndex === questions.length - 1}
                    className="p-3 border border-gray-200 hover:bg-gray-50 disabled:opacity-40 rounded-2xl transition"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {!isChecked ? (
                  <button
                    onClick={handleCheckAnswer}
                    disabled={!selectedOption}
                    className="bg-brand-primary hover:bg-brand-hover disabled:opacity-40 disabled:hover:bg-brand-primary text-white font-bold px-8 py-3 rounded-2xl transition shadow-lg shadow-red-500/10 text-sm"
                  >
                    Cek Jawaban
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    disabled={currentIndex === questions.length - 1}
                    className="bg-brand-accent hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-2xl transition shadow-lg shadow-blue-500/10 text-sm flex items-center gap-1"
                  >
                    Soal Selanjutnya <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right panel: HIGH-CONTRAST SOLID DARK PANEL FOR EXPLANATION */}
          {isSplitActive && (
            <div 
              ref={explanationScrollRef}
              className="lg:col-span-6 h-full bg-slate-900 text-slate-100 border-l border-slate-800 p-10 overflow-y-auto animate-slide-in flex flex-col justify-start space-y-5 rounded-none relative"
            >
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2 bg-red-950 border border-red-800/35 rounded-xl text-red-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">Pembahasan Komprehensif</h3>
                  <p className="text-xs text-slate-400">Analisis konsep & opsi salah untuk mencegah miskonsepsi</p>
                </div>
              </div>

              {/* Concept (Dark Mode) */}
              {currentQuestion.concept && (
                <div className="bg-slate-800/80 rounded-2xl p-4.5 border border-slate-700/50 shadow-md">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">Konsep Kunci</span>
                  <p className="text-sm font-semibold text-slate-200 leading-relaxed">{renderMarkdownDark(currentQuestion.concept)}</p>
                </div>
              )}

              {/* Breakdown List */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Bongkar Semua Pilihan (Penting!)</span>
                <div className="grid grid-cols-1 gap-2.5">
                  {Object.entries(currentQuestion.analysis).map(([key, val]) => {
                    if (!val) return null;
                    const isCorrect = key === currentQuestion.answerKey;
                    return (
                      <div 
                        key={key}
                        className={`p-3.5 rounded-xl text-xs leading-relaxed border ${
                          isCorrect ? 'bg-emerald-950/40 border-emerald-900/60 text-emerald-200' : 'bg-slate-800/40 border-slate-800/60 text-slate-300'
                        }`}
                      >
                        <span className={`font-bold mr-1.5 ${isCorrect ? 'text-emerald-400' : 'text-slate-400'}`}>
                          Pilihan {key}:
                        </span>
                        {renderMarkdownDark(val)}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step Counters */}
              {currentQuestion.steps && currentQuestion.steps.length > 0 && (
                <div className="space-y-2.5">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Langkah Penyelesaian</span>
                  <div className="space-y-2">
                    {currentQuestion.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-blue-950 border border-blue-900 text-blue-400 flex items-center justify-center font-bold shrink-0">{idx + 1}</span>
                        <span className="pt-0.5">{renderMarkdownDark(step)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gold Box Tips */}
              {currentQuestion.tips && (
                <div className="bg-yellow-950/20 rounded-2xl p-4 border border-yellow-900/35 flex items-start gap-3 shadow-md">
                  <div className="p-1 bg-yellow-950/80 rounded-lg text-yellow-500 border border-yellow-800/30 shrink-0 mt-0.5">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="text-xs leading-relaxed">
                    <span className="font-bold text-yellow-400 block mb-1">Tips Olimpiade 💭</span>
                    <p className="text-yellow-200/90 font-medium">{renderMarkdownDark(currentQuestion.tips)}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // 3. Standard Learning Mode Layout (Rendered when isCleanMode is false)
  return (
    <div className={`mx-auto space-y-6 animate-fade-in pb-12 transition-all duration-500 ease-out ${isSplitActive ? 'max-w-7xl' : 'max-w-4xl'}`}>
      
      {/* Header Info */}
      <div className="flex items-center justify-between glass-card rounded-2xl p-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-1.5 text-gray-500 hover:text-brand-primary font-bold text-sm transition font-sans"
        >
          <ChevronLeft className="w-5 h-5" /> Kembali ke Roadmap
        </button>
        <div className="flex items-center gap-4 text-xs font-bold font-sans">
          <span className="bg-red-500/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider">
            Tingkat: {currentQuestion.level === 'Kab' ? 'Kabupaten' : currentQuestion.level === 'Prov' ? 'Provinsi' : 'Nasional'}
          </span>
          <span className="text-gray-400 font-sans">
            Soal {currentIndex + 1} dari {questions.length}
          </span>
        </div>
      </div>

      {/* Futuristic Video Producer Panel */}
      <div className="glass-card rounded-3xl p-6 border border-brand-primary/20 shadow-lg shadow-red-500/5 space-y-4 font-sans">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-red-600 animate-ping"></span>
            <h3 className="text-sm font-black uppercase tracking-wider text-gray-800 font-heading">🎬 Video Producer Studio</h3>
          </div>
          <span className="text-[10px] text-gray-400 font-bold">Durasi: Menjawab 10 Detik $\rightarrow$ Pembahasan 15 Detik (Loop Otomatis)</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {/* Toggle 10s Timer */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
            <span className="text-xs font-bold text-gray-600">Timer Soal (10s)</span>
            <button 
              onClick={() => setTimerEnabled(!timerEnabled)}
              className="text-brand-primary transition animate-pulse"
            >
              {timerEnabled ? (
                <ToggleRight className="w-10 h-10 text-red-500 fill-red-100" />
              ) : (
                <ToggleLeft className="w-10 h-10 text-gray-400" />
              )}
            </button>
          </div>

          {/* Toggle AutoPilot */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
            <span className="text-xs font-bold text-gray-600">Auto-Pilot</span>
            <button 
              onClick={() => setAutoPilot(!autoPilot)}
              className="text-brand-primary transition"
            >
              {autoPilot ? (
                <ToggleRight className="w-10 h-10 text-emerald-500 fill-emerald-100" />
              ) : (
                <ToggleLeft className="w-10 h-10 text-gray-400" />
              )}
            </button>
          </div>

          {/* Toggle Split Layout */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
            <span className="text-xs font-bold text-gray-600">In-Frame Split</span>
            <button 
              onClick={() => setLayoutSplit(!layoutSplit)}
              className="text-brand-primary transition"
            >
              {layoutSplit ? (
                <ToggleRight className="w-10 h-10 text-brand-primary fill-red-100" />
              ) : (
                <ToggleLeft className="w-10 h-10 text-gray-400" />
              )}
            </button>
          </div>

          {/* Upbeat Music Controller */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
            <span className="text-xs font-bold text-gray-600">Music Loop</span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className={`p-2 rounded-xl transition ${isMuted ? 'bg-gray-200 text-gray-500' : 'bg-red-500 text-white shadow-md shadow-red-500/10'}`}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 animate-bounce" />}
              </button>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1" 
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-12 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
            </div>
          </div>
        </div>

        {/* Mulai Produksi Button to Enter Clean Mode */}
        <div className="border-t border-gray-100 pt-4 flex justify-end">
          <button
            onClick={() => {
              setIsCleanMode(true);
              setShowIntro(true);
              setIntroTimeLeft(3);
            }}
            className="bg-brand-primary hover:bg-brand-hover text-white font-extrabold px-6 py-2.5 rounded-2xl text-xs transition shadow-md shadow-red-500/10 flex items-center gap-1.5"
          >
            <Video className="w-3.5 h-3.5 fill-white animate-pulse" /> Mulai Rekam (Layar Bersih)
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`grid grid-cols-1 ${isSplitActive ? 'lg:grid-cols-12' : ''} gap-6 transition-all duration-500 ease-out`}>
        
        {/* Left Column: Question Card */}
        <div className={`glass-card rounded-3xl p-8 space-y-6 ${isSplitActive ? 'lg:col-span-6' : ''} transition-all duration-500`}>
          
          {/* Dynamic Timer Bar (Supports Question 10s and Explanation 15s) */}
          {timerEnabled && (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-gray-500">
                <span className="flex items-center gap-1.5 font-sans">
                  <span className={`h-2.5 w-2.5 rounded-full animate-ping ${timerPhase === 'question' ? 'bg-red-500' : 'bg-brand-accent'}`}></span>
                  {timerPhase === 'question' ? 'Waktu Menjawab...' : 'Durasi Membaca Pembahasan...'}
                </span>
                <span className={`text-base font-black tracking-tight font-sans ${
                  timerPhase === 'question' && timeLeft <= 3 ? 'text-red-500 animate-bounce' : 
                  timerPhase === 'explanation' ? 'text-brand-accent' : 'text-gray-800'
                }`}>
                  {timeLeft} Detik
                </span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${
                    timerPhase === 'question' 
                      ? (timeLeft > 5 ? 'bg-emerald-500' : timeLeft > 2 ? 'bg-yellow-500' : 'bg-red-500') 
                      : 'bg-brand-accent animate-pulse'
                  }`}
                  style={{ width: `${(timeLeft / (timerPhase === 'question' ? 10 : 15)) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Question tag & text */}
          <div className="space-y-3">
            <span className="bg-brand-accent/10 text-brand-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">
              {currentQuestion.subTopic || 'Topik Utama'}
            </span>
            <h2 className="text-xl font-bold font-heading leading-relaxed text-gray-800">
              {renderMarkdown(currentQuestion.question)}
            </h2>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-3">
            {Object.entries(currentQuestion.options).map(([key, value]) => {
              if (!value) return null;

              let optionBg = 'bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300';
              let icon = null;

              if (isChecked) {
                if (isCorrectOption(key)) {
                  optionBg = 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/20 text-emerald-800';
                  icon = <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />;
                } else if (isSelectedOption(key)) {
                  optionBg = 'bg-red-50 border-red-300 ring-2 ring-red-500/20 text-red-800';
                  icon = <XCircle className="w-5 h-5 text-red-500 shrink-0" />;
                } else {
                  optionBg = 'bg-gray-50/50 border-gray-100 opacity-60';
                }
              } else if (isSelectedOption(key)) {
                optionBg = 'bg-red-50/60 border-brand-primary ring-2 ring-red-500/10 text-brand-primary font-semibold';
              }

              return (
                <button
                  key={key}
                  disabled={isChecked}
                  onClick={() => handleOptionSelect(key)}
                  className={`w-full flex items-center justify-between text-left p-4 rounded-2xl border transition-all text-sm font-sans ${optionBg}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                      isSelectedOption(key) && !isChecked ? 'bg-brand-primary text-white' : 
                      isChecked && isCorrectOption(key) ? 'bg-emerald-500 text-white' :
                      isChecked && isSelectedOption(key) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {key}
                    </span>
                    <span className="leading-relaxed">{renderMarkdown(value)}</span>
                  </div>
                  {icon}
                </button>
              );
            })}
          </div>

          {/* Action Controls */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevQuestion}
                disabled={currentIndex === 0}
                className="p-3 border border-gray-200 hover:bg-gray-50 disabled:opacity-40 rounded-2xl transition"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={handleNextQuestion}
                disabled={currentIndex === questions.length - 1}
                className="p-3 border border-gray-200 hover:bg-gray-50 disabled:opacity-40 rounded-2xl transition"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {!isChecked ? (
              <button
                onClick={handleCheckAnswer}
                disabled={!selectedOption}
                className="bg-brand-primary hover:bg-brand-hover disabled:opacity-40 disabled:hover:bg-brand-primary text-white font-bold px-8 py-3 rounded-2xl transition shadow-lg shadow-red-500/10 text-sm font-sans"
              >
                Cek Jawaban
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                disabled={currentIndex === questions.length - 1}
                className="bg-brand-accent hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-2xl transition shadow-lg shadow-blue-500/10 text-sm flex items-center gap-1 font-sans"
              >
                Soal Selanjutnya <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Right Column: In-Frame Pembahasan Panel */}
        {isSplitActive && (
          <div 
            ref={explanationScrollRef}
            className="lg:col-span-6 glass-card rounded-3xl p-8 border-l-4 border-brand-primary animate-slide-in space-y-6 max-h-[540px] overflow-y-auto pr-3 font-sans"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 bg-red-100 rounded-xl">
                <Lightbulb className="text-brand-primary w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading">Pembahasan Komprehensif</h3>
                <p className="text-xs text-gray-400">Analisis konsep & opsi salah untuk mencegah miskonsepsi</p>
              </div>
            </div>

            {/* Konsep yang Diuji */}
            {currentQuestion.concept && (
              <div className="bg-red-50/50 rounded-2xl p-4 border border-red-100">
                <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Konsep Kunci</span>
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">{renderMarkdown(currentQuestion.concept)}</p>
              </div>
            )}

            {/* Analisis Pilihan Jawaban */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Bongkar Semua Pilihan (Penting!)</span>
              <div className="grid grid-cols-1 gap-2.5">
                {Object.entries(currentQuestion.analysis).map(([key, val]) => {
                  if (!val) return null;
                  const isCorrect = key === currentQuestion.answerKey;
                  return (
                    <div 
                      key={key}
                      className={`p-3.5 rounded-xl text-xs leading-relaxed border ${
                        isCorrect ? 'bg-emerald-50/40 border-emerald-100 text-emerald-800' : 'bg-gray-50/50 border-gray-100 text-gray-600'
                      }`}
                    >
                      <span className={`font-bold mr-1.5 ${isCorrect ? 'text-emerald-700' : 'text-gray-500'}`}>
                        Pilihan {key}:
                      </span>
                      {renderMarkdown(val)}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Langkah Penyelesaian */}
            {currentQuestion.steps && currentQuestion.steps.length > 0 && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Langkah Penyelesaian</span>
                <div className="space-y-2">
                  {currentQuestion.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-2.5 text-xs text-gray-600 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center font-bold shrink-0">{idx + 1}</span>
                      <span className="pt-0.5">{renderMarkdown(step)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tips Cepat */}
            {currentQuestion.tips && (
              <div className="bg-yellow-50/30 rounded-2xl p-4 border border-yellow-200/50 flex items-start gap-3">
                <div className="p-1 bg-yellow-100 rounded-lg text-yellow-600 shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="text-xs leading-relaxed">
                  <span className="font-bold text-yellow-800 block mb-1">Tips Olimpiade 💭</span>
                  <p className="text-yellow-900 font-medium">{renderMarkdown(currentQuestion.tips)}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Classic bottom Pembahasan Panel (if split layout is disabled) */}
      {showPembahasan && !layoutSplit && (
        <div className="glass-card rounded-3xl p-8 border-l-4 border-brand-primary animate-fade-in space-y-6 font-sans">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-red-100 rounded-xl">
              <Lightbulb className="text-brand-primary w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading">Pembahasan Komprehensif</h3>
              <p className="text-xs text-gray-400">Analisis konsep & opsi salah untuk mencegah miskonsepsi</p>
            </div>
          </div>

          {/* Konsep yang Diuji */}
          {currentQuestion.concept && (
            <div className="bg-red-50/50 rounded-2xl p-4 border border-red-100">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Konsep Kunci</span>
              <p className="text-sm font-semibold text-gray-700 leading-relaxed">{renderMarkdown(currentQuestion.concept)}</p>
            </div>
          )}

          {/* Analisis Pilihan Jawaban */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Bongkar Semua Pilihan (Penting!)</span>
            <div className="grid grid-cols-1 gap-2.5">
              {Object.entries(currentQuestion.analysis).map(([key, val]) => {
                if (!val) return null;
                const isCorrect = key === currentQuestion.answerKey;
                return (
                  <div 
                    key={key}
                    className={`p-3.5 rounded-xl text-xs leading-relaxed border ${
                      isCorrect ? 'bg-emerald-50/40 border-emerald-100 text-emerald-800' : 'bg-gray-50/50 border-gray-100 text-gray-600'
                    }`}
                  >
                    <span className={`font-bold mr-1.5 ${isCorrect ? 'text-emerald-700' : 'text-gray-500'}`}>
                      Pilihan {key}:
                    </span>
                    {renderMarkdown(val)}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Langkah Penyelesaian */}
          {currentQuestion.steps && currentQuestion.steps.length > 0 && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Langkah Penyelesaian</span>
              <div className="space-y-2">
                {currentQuestion.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-2.5 text-xs text-gray-600 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center font-bold shrink-0">{idx + 1}</span>
                    <span className="pt-0.5">{renderMarkdown(step)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips Cepat */}
          {currentQuestion.tips && (
            <div className="bg-yellow-50/30 rounded-2xl p-4 border border-yellow-200/50 flex items-start gap-3">
              <div className="p-1 bg-yellow-100 rounded-lg text-yellow-600 shrink-0 mt-0.5">
                <Compass className="w-4 h-4" />
              </div>
              <div className="text-xs leading-relaxed">
                <span className="font-bold text-yellow-850 block mb-1">Tips Olimpiade 💭</span>
                <p className="text-yellow-900 font-medium">{renderMarkdown(currentQuestion.tips)}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
