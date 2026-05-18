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

  // Cinematic Cheerful Intro Screen States (Multi-stage flow!)
  const [showIntro, setShowIntro] = useState(false);
  const [introStage, setIntroStage] = useState('title'); // 'title' | 'rules' | 'ready'
  const [introTimeLeft, setIntroTimeLeft] = useState(4); // seconds per stage

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

  // Cinematic Multi-stage Cheerful Intro Countdown Timer effect
  useEffect(() => {
    if (isCleanMode && showIntro) {
      if (introTimeLeft > 0) {
        const timer = setTimeout(() => {
          setIntroTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        // Stage complete! Transition to next or start quiz
        if (introStage === 'title') {
          setIntroStage('rules');
          setIntroTimeLeft(4);
        } else if (introStage === 'rules') {
          setIntroStage('ready');
          setIntroTimeLeft(3);
        } else {
          setShowIntro(false);
          // Start the question timer phase seamlessly after the intro!
          if (timerEnabled) {
            setTimeLeft(10);
            setTimerPhase('question');
          }
        }
      }
    }
  }, [isCleanMode, showIntro, introTimeLeft, introStage, timerEnabled]);

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

  // --- RENDERING: 1. Cinematic Cheerful Multi-Stage Intro Screens ---
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

        {/* Dynamic Stage Rendering */}
        {introStage === 'title' && (
          <div className="relative w-full max-w-2xl px-6 flex flex-col items-center justify-center">
            
            {/* Clean Emojis and Lucide icons around the main card */}
            <div className="absolute -top-8 -left-8 bg-white/95 text-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl border-4 border-pink-400 text-3xl animate-bounce">
              📚
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white/95 text-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl border-4 border-pink-400 text-3xl animate-spin-slow">
              🔍
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white/95 text-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl border-4 border-pink-400 text-3xl animate-pulse">
              🎨
            </div>

            {/* Main Title Desktop Window Panel */}
            <div className="bg-[#FDF7F4] border-[8px] border-pink-400 rounded-[2rem] p-10 text-center shadow-2xl relative w-full space-y-6 animate-scale-in">
              {/* Desktop Window Controls */}
              <div className="absolute top-4 right-6 flex gap-2 text-pink-500 font-extrabold text-sm">
                <span>_</span>
                <span className="ml-1">o</span>
                <span className="ml-1">x</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-black tracking-widest text-[#7B2CBF] uppercase font-heading flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" /> Quiz <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
                </h3>
                <h1 className="text-4xl sm:text-5xl font-black text-[#1E293B] font-heading tracking-tight uppercase leading-none">
                  CERDAS CERMAT
                </h1>
                <p className="text-base font-extrabold text-slate-500">
                  {questions.length} Soal dan Pembahasan
                </p>
              </div>

              {/* Colorful Tag Pills */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <span className="bg-[#3B82F6] text-white font-black px-6 py-2 rounded-full uppercase tracking-wider text-xs shadow-md border-2 border-white/20">
                  IPA SD
                </span>
                <span className="bg-[#F97316] text-white font-black px-6 py-2 rounded-full uppercase tracking-wider text-xs shadow-md border-2 border-white/20">
                  {currentQuestion.level === 'Kab' ? 'SEDANG' : 'SULIT'}
                </span>
              </div>

              <div className="pt-4 border-t border-dashed border-slate-200">
                <p className="text-xs font-black text-slate-600 tracking-wider">
                  Materi: {currentQuestion.subTopic || 'Cermin Pemantul & Optik'}
                </p>
              </div>
            </div>

            <div className="mt-8 text-center text-xs font-bold text-white/80 tracking-widest uppercase flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse"></span>
              Menyiapkan video... {introTimeLeft}s
            </div>
          </div>
        )}

        {introStage === 'rules' && (
          <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center px-6 animate-fade-in">
            
            {/* Left Column: Energetic Rocket Emoji inside a gorgeous clean card */}
            <div className="md:col-span-4 bg-[#FF758F] border-[6px] border-pink-400 rounded-3xl p-6 flex flex-col items-center justify-center shadow-xl h-80 relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/20 to-transparent"></div>
              <div className="text-7xl mb-4 animate-bounce select-none">🚀</div>
              <span className="text-white font-black text-lg tracking-wider font-heading">Mari Belajar!</span>
              <span className="text-white/85 text-xs font-semibold mt-1">Siapkan fokus terbaikmu</span>
            </div>

            {/* Right Column: Rules Desktop Window Card */}
            <div className="md:col-span-8 bg-[#FDF7F4] border-[6px] border-pink-400 rounded-3xl p-8 shadow-xl relative h-80 flex flex-col justify-between">
              {/* Vintage control buttons */}
              <div className="absolute top-4 right-6 flex gap-2 text-pink-500 font-extrabold text-xs">
                <span>_</span>
                <span className="ml-1">o</span>
                <span className="ml-1">x</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-black text-[#EF4899] font-heading tracking-wide">PERATURAN</h2>
                <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                  Bersenang-senanglah! Jadikan setiap pertanyaan sebagai tantangan seru dan nikmati setiap momennya.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#FF758F] text-white font-black flex items-center justify-center text-xs shrink-0 shadow-md">
                    1
                  </span>
                  <p className="text-xs font-semibold text-slate-700 leading-relaxed pt-0.5">
                    Gunakan kesempatan ini untuk bersaing sehat dengan teman sebaya dan saling memotivasi.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#FF758F] text-white font-black flex items-center justify-center text-xs shrink-0 shadow-md">
                    2
                  </span>
                  <p className="text-xs font-semibold text-slate-700 leading-relaxed pt-0.5">
                    Tetap santai, nikmati prosesnya, dan biarkan semangat bersaing membuat latihan ini menyenangkan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {introStage === 'ready' && (
          <div className="relative flex flex-col items-center justify-center space-y-6 animate-scale-in">
            {/* Clean student emoji inside round gradient border */}
            <div className="bg-[#FDF7F4] border-[6px] border-pink-400 rounded-full p-6 shadow-2xl w-40 h-40 flex items-center justify-center relative bg-gradient-to-tr from-rose-100 to-white">
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-pink-500 animate-spin-slow"></div>
              <div className="text-6xl animate-pulse">🧑‍🎓</div>
            </div>

            {/* CSS-only Ribbed Ribbon Banner */}
            <div className="relative">
              <div className="bg-white border-2 border-slate-200 px-12 py-3 shadow-xl rounded-xl text-center relative z-10">
                <h2 className="text-2xl font-black text-red-500 tracking-widest uppercase font-heading">
                  KAMU SIAP?
                </h2>
              </div>
            </div>
            
            <p className="text-xs font-bold text-white/80 tracking-widest uppercase animate-pulse">
              Perekaman soal dimulai dalam {introTimeLeft}s...
            </p>
          </div>
        )}
      </div>
    );
  }

  // --- RENDERING: 2. Premium Full Viewport layout specifically for Clean Recording Mode! ---
  if (isCleanMode) {
    return (
      <div className="fixed inset-0 w-screen h-screen overflow-hidden flex flex-col justify-between bg-[#7B2CBF] font-sans z-40 relative select-none">
        
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
          
          {/* Left panel: Neat Vintage Pink Browser Card */}
          <div className={`h-full flex flex-col justify-center p-8 overflow-y-auto relative ${isSplitActive ? 'lg:col-span-6' : 'lg:col-span-12 max-w-4xl mx-auto'}`}>
            
            {/* Clean floating icon badges wrapped in Tailwind cards */}
            <div className="absolute top-8 left-8 bg-white/95 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg border-2 border-pink-300 text-2xl hidden xl:flex animate-bounce">
              🔍
            </div>
            <div className="absolute bottom-8 right-8 bg-white/95 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg border-2 border-pink-300 text-2xl hidden xl:flex animate-pulse">
              🎨
            </div>

            {/* Pink window container card */}
            <div className="bg-[#FDF7F4] border-[8px] border-pink-400 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl relative max-w-2xl w-full mx-auto animate-scale-in">
              
              {/* Window exit/size markers */}
              <div className="absolute top-4 right-6 flex gap-2 text-pink-500 font-extrabold text-xs">
                <span>_</span>
                <span className="ml-1">o</span>
                <span className="ml-1">x</span>
              </div>

              {/* Centered Hanging Ribbon for dynamic question number */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-white border-2 border-slate-200 px-8 py-1 shadow-md rounded-lg text-center">
                  <span className="text-red-500 font-black tracking-widest text-[10px] uppercase font-heading">
                    SOAL {currentIndex + 1}
                  </span>
                </div>
              </div>

              {/* Dynamic countdown slider */}
              {timerEnabled && (
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between items-center text-xs font-bold text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <span className={`h-2.5 w-2.5 rounded-full animate-ping ${timerPhase === 'question' ? 'bg-red-500' : 'bg-brand-accent'}`}></span>
                      {timerPhase === 'question' ? 'Waktu Menjawab...' : 'Durasi Membaca Pembahasan...'}
                    </span>
                    <span className={`text-sm font-black ${
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
              <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-2.5 pt-1">
                <span className="bg-red-500/10 text-brand-primary text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  OSN SD IPA — {currentQuestion.level === 'Kab' ? 'Kabupaten' : 'Provinsi'}
                </span>
                <span className="bg-[#FF758F]/15 text-[#FF758F] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {currentQuestion.subTopic || 'Topik Utama'}
                </span>
              </div>

              {/* Question Text */}
              <div className="space-y-1">
                <h2 className="text-lg sm:text-xl font-black font-heading leading-relaxed text-[#1E293B]">
                  {renderMarkdown(currentQuestion.question)}
                </h2>
              </div>

              {/* Options - Pristine Coral Buttons matching the screenshots exactly */}
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(currentQuestion.options).map(([key, value]) => {
                  if (!value) return null;

                  // Coral/pink color theme as default in image 4
                  let optionBg = 'bg-[#FF85A2] text-white border border-[#FFA6C9] hover:bg-[#FF7096] transition-all font-semibold shadow-sm';
                  let icon = null;

                  if (isChecked) {
                    if (isCorrectOption(key)) {
                      optionBg = 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-white border-emerald-300 shadow-md ring-4 ring-emerald-500/15 font-bold';
                      icon = <CheckCircle className="w-5 h-5 text-white shrink-0" />;
                    } else if (isSelectedOption(key)) {
                      optionBg = 'bg-gradient-to-r from-red-500 to-red-400 text-white border-red-300 shadow-md ring-4 ring-red-500/15 font-bold';
                      icon = <XCircle className="w-5 h-5 text-white shrink-0" />;
                    } else {
                      optionBg = 'bg-gray-100 border-gray-200 text-gray-400 opacity-50';
                    }
                  } else if (isSelectedOption(key)) {
                    optionBg = 'bg-[#FF4D6D] border-[#FFB3C1] ring-4 ring-[#FF758F]/30 text-white font-extrabold';
                  }

                  return (
                    <button
                      key={key}
                      disabled={isChecked}
                      onClick={() => handleOptionSelect(key)}
                      className={`w-full flex items-center justify-between text-left p-3.5 rounded-full border transition-all text-sm ${optionBg}`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Perfect white circle indicator inside button */}
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0 ${
                          isChecked && isCorrectOption(key) ? 'bg-white text-emerald-600' :
                          isChecked && isSelectedOption(key) ? 'bg-white text-red-600' : 'bg-white text-[#FF758F]'
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

              {/* Window footer */}
              <div className="flex items-center justify-between border-t border-dashed border-slate-200 pt-4">
                <div className="text-xl font-black text-red-500 tracking-wider">
                  0{currentIndex + 1}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevQuestion}
                    disabled={currentIndex === 0}
                    className="p-2.5 bg-white hover:bg-slate-50 border border-slate-200 disabled:opacity-40 rounded-full shadow-sm transition"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-700" />
                  </button>
                  <button
                    onClick={handleNextQuestion}
                    disabled={currentIndex === questions.length - 1}
                    className="p-2.5 bg-white hover:bg-slate-50 border border-slate-200 disabled:opacity-40 rounded-full shadow-sm transition"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-700" />
                  </button>
                </div>

                <button
                  onClick={isChecked ? handleNextQuestion : handleCheckAnswer}
                  disabled={!selectedOption && !isChecked}
                  className="p-3 bg-red-500 hover:bg-red-600 disabled:opacity-40 text-white rounded-full shadow-lg shadow-red-500/20 transition-all font-black"
                >
                  <span className="text-lg leading-none">→</span>
                </button>
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
          className="flex items-center gap-1.5 text-gray-500 hover:text-brand-primary font-bold text-sm transition"
        >
          <ChevronLeft className="w-5 h-5" /> Kembali ke Roadmap
        </button>
        <div className="flex items-center gap-4 text-xs font-bold">
          <span className="bg-red-500/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider">
            Tingkat: {currentQuestion.level === 'Kab' ? 'Kabupaten' : currentQuestion.level === 'Prov' ? 'Provinsi' : 'Nasional'}
          </span>
          <span className="text-gray-400">
            Soal {currentIndex + 1} dari {questions.length}
          </span>
        </div>
      </div>

      {/* Futuristic Video Producer Panel */}
      <div className="glass-card rounded-3xl p-6 border border-brand-primary/20 shadow-lg shadow-red-500/5 space-y-4">
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
              className="text-brand-primary transition"
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
              setIntroStage('title');
              setIntroTimeLeft(4);
            }}
            className="bg-brand-primary hover:bg-brand-hover text-white font-extrabold px-6 py-2.5 rounded-2xl text-xs transition shadow-md shadow-red-500/10 flex items-center gap-1.5"
          >
            <Video className="w-3.5 h-3.5 fill-white" /> Mulai Rekam (Layar Bersih)
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
                <span className="flex items-center gap-1.5">
                  <span className={`h-2.5 w-2.5 rounded-full animate-ping ${timerPhase === 'question' ? 'bg-red-500' : 'bg-brand-accent'}`}></span>
                  {timerPhase === 'question' ? 'Waktu Menjawab...' : 'Durasi Membaca Pembahasan...'}
                </span>
                <span className={`text-base font-black tracking-tight ${
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
            <span className="bg-brand-accent/10 text-brand-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
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

        {/* Right Column: In-Frame Pembahasan Panel */}
        {isSplitActive && (
          <div 
            ref={explanationScrollRef}
            className="lg:col-span-6 glass-card rounded-3xl p-8 border-l-4 border-brand-primary animate-slide-in space-y-6 max-h-[540px] overflow-y-auto pr-3"
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
        <div className="glass-card rounded-3xl p-8 border-l-4 border-brand-primary animate-fade-in space-y-6">
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
  );
}
