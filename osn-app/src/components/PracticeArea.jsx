import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle, CheckCircle, XCircle, Lightbulb, Compass, Play, Pause, Volume2, VolumeX, Eye, ToggleLeft, ToggleRight, LayoutGrid, Columns, Settings, Video } from 'lucide-react';
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
  const [layoutSplit, setLayoutSplit] = useState(true); // Split Screen by default!

  const audioRef = useRef(null);

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

  // Dramatic countdown and auto-loop logic for both Question (10s) and Explanation (15s)
  useEffect(() => {
    if (!timerEnabled) {
      return;
    }

    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
        // Dramatic low ticking sound in last 4 seconds of question answering
        if (!isMuted && timerPhase === 'question' && timeLeft <= 4) {
          const tick = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAAAD");
          tick.volume = 0.1;
          tick.play().catch(() => {});
        }
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Time is up!
      if (timerPhase === 'question') {
        // End of Question answering phase -> Automatically select the correct option at EXACTLY 0 seconds
        const correctAns = currentQuestion?.answerKey;
        setSelectedOption(correctAns);
        
        setIsChecked(true);
        setShowPembahasan(true);

        // Treat as correct since autopilot auto-selects the right answer at 0s
        setScore(prev => prev + 1);
        onAddXp(10);
        
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#e53935', '#3b82f6', '#10b981', '#eab308']
        });

        // Transition seamlessly to the Explanation phase
        setTimerPhase('explanation');
        setTimeLeft(15); // 15 seconds for reading explanation!
      } else {
        // End of Explanation reading phase -> Auto-advance loop to next question!
        if (currentIndex < questions.length - 1) {
          handleNextQuestion();
        } else {
          // Finished all questions in the sub-bab!
          setIsCleanMode(false); // Bring back standard view
          alert("Produksi Video Selesai! 🎉 Seluruh soal kuis telah selesai secara otomatis.");
        }
      }
    }
  }, [timeLeft, timerEnabled, timerPhase, autoPilot, currentQuestion, currentIndex, isMuted]);

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
    if (isChecked) return; // Prevent changing after check
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || isChecked) return;

    setIsChecked(true);
    setShowPembahasan(true);

    const isCorrect = selectedOption === currentQuestion.answerKey;
    if (isCorrect) {
      setScore(prev => prev + 1);
      onAddXp(10); // Reward 10 XP for correct answer
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e53935', '#3b82f6', '#10b981', '#eab308']
      });
    }

    // If timer is active, trigger the 15-second explanation countdown immediately
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

  // 1. Premium Full Viewport layout specifically for Clean Recording Mode!
  if (isCleanMode) {
    return (
      <div className="fixed inset-0 w-screen h-screen overflow-hidden flex flex-col justify-between bg-gradient-to-tr from-rose-50 via-slate-50 to-blue-50 font-sans z-40">
        
        {/* Floating REC Studio controller */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-3 bg-white/80 backdrop-blur-md border border-gray-200/50 px-4 py-2.5 rounded-full shadow-lg shadow-black/5 hover:bg-white transition animate-fade-in">
          <span className="flex h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse shrink-0"></span>
          <span className="text-[10px] font-black uppercase tracking-wider text-red-600 shrink-0">REC STUDIO</span>
          
          <div className="h-4 w-px bg-gray-200"></div>
          
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className={`p-1.5 rounded-lg transition ${isMuted ? 'text-gray-400 hover:text-gray-600' : 'text-red-500 hover:text-red-600'}`}
            title={isMuted ? "Putar Musik" : "Senapkan Musik"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-bounce" />}
          </button>

          <div className="h-4 w-px bg-gray-200"></div>

          <button 
            onClick={() => setIsCleanMode(false)}
            className="p-1.5 text-gray-500 hover:text-gray-800 rounded-lg transition flex items-center gap-1 text-[10px] font-bold"
            title="Keluar dari Rekam Studio"
          >
            <Settings className="w-4 h-4 animate-spin-slow" />
            <span>KONTROL</span>
          </button>
        </div>

        {/* Full Screen Split Layout */}
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
          
          {/* Left side: Question card area (Perfect vertical and horizontal center) */}
          <div className={`h-full flex flex-col justify-center p-12 overflow-y-auto ${isSplitActive ? 'lg:col-span-6' : 'lg:col-span-12 max-w-4xl mx-auto'}`}>
            <div className="glass-card rounded-3xl p-8 space-y-6 shadow-xl border border-gray-200/20 max-w-2xl w-full mx-auto">
              
              {/* Level indicator */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="bg-red-500/10 text-brand-primary text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  OSN SD IPA — {currentQuestion.level === 'Kab' ? 'Kabupaten' : currentQuestion.level === 'Prov' ? 'Provinsi' : 'Nasional'}
                </span>
                <span className="text-[10px] font-bold text-gray-400">
                  Soal Ke-{currentIndex + 1}
                </span>
              </div>

              {/* Dynamic Timer Bar */}
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

              {/* Question */}
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
          </div>

          {/* Right side: Solid, borderless explanation filling 100% height of page */}
          {isSplitActive && (
            <div className="lg:col-span-6 h-full bg-white/95 backdrop-blur-md border-l border-gray-200/50 p-12 overflow-y-auto animate-slide-in flex flex-col justify-start space-y-6 rounded-none">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
                <div className="p-2.5 bg-red-100 rounded-xl">
                  <Lightbulb className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading">Pembahasan Komprehensif</h3>
                  <p className="text-xs text-gray-400">Analisis konsep & opsi salah untuk mencegah miskonsepsi</p>
                </div>
              </div>

              {/* Konsep yang Diuji */}
              {currentQuestion.concept && (
                <div className="bg-red-50/50 rounded-2xl p-5 border border-red-100">
                  <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Konsep Kunci</span>
                  <p className="text-sm font-semibold text-gray-700 leading-relaxed">{renderMarkdown(currentQuestion.concept)}</p>
                </div>
              )}

              {/* Analisis Pilihan Jawaban */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Bongkar Semua Pilihan (Penting!)</span>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(currentQuestion.analysis).map(([key, val]) => {
                    if (!val) return null;
                    const isCorrect = key === currentQuestion.answerKey;
                    return (
                      <div 
                        key={key}
                        className={`p-4 rounded-xl text-xs leading-relaxed border ${
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
                <div className="bg-yellow-50/30 rounded-2xl p-5 border border-yellow-200/50 flex items-start gap-3">
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
      </div>
    );
  }

  // 2. Standard Learning Mode Layout (Rendered when isCleanMode is false)
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
            onClick={() => setIsCleanMode(true)}
            className="bg-brand-primary hover:bg-brand-hover text-white font-extrabold px-6 py-2.5 rounded-2xl text-xs transition shadow-md shadow-red-500/10 flex items-center gap-1.5 animate-bounce"
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
          <div className="lg:col-span-6 glass-card rounded-3xl p-8 border-l-4 border-brand-primary animate-slide-in space-y-6 max-h-[540px] overflow-y-auto pr-3">
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
