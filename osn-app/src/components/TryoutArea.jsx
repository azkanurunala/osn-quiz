import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, Award, RefreshCw, Eye, BookOpen, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { InlineMarkdown } from '../utils/markdown.jsx';

export default function TryoutArea({ questionsData, onBack, onAddMedal }) {
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // {questionId: selectedOption}
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [medalEarned, setMedalEarned] = useState(null);
  const [isReviewMode, setIsReviewMode] = useState(false);
  
  const timerRef = useRef(null);

  // Initialize tryout with 10 random questions from the question bank
  useEffect(() => {
    if (questionsData?.questions) {
      const shuffled = [...questionsData.questions].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 10);
      setExamQuestions(selected);
    }
  }, [questionsData]);

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
    return () => clearTimeout(timerRef.current);
  }, [timeLeft, isSubmitted]);

  const handleOptionSelect = (option) => {
    if (isSubmitted) return;
    setAnswers(prev => ({
      ...prev,
      [currentIndex]: option
    }));
  };

  const handleSubmit = () => {
    if (isSubmitted) return;
    
    setIsSubmitted(true);
    clearTimeout(timerRef.current);

    // Calculate score
    let correctCount = 0;
    examQuestions.forEach((q, idx) => {
      if (answers[idx] === q.answerKey) {
        correctCount++;
      }
    });

    const percent = (correctCount / examQuestions.length) * 100;
    setScore(percent);

    // Medals logic
    let medal = null;
    if (percent >= 90) {
      medal = 'gold';
      onAddMedal('gold');
      fireConfettiRainbow();
    } else if (percent >= 70) {
      medal = 'silver';
      onAddMedal('silver');
      fireConfettiSimple();
    } else if (percent >= 50) {
      medal = 'bronze';
      onAddMedal('bronze');
      fireConfettiSimple();
    }
    setMedalEarned(medal);
  };

  const fireConfettiRainbow = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#e53935', '#3b82f6', '#10b981', '#eab308']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#e53935', '#3b82f6', '#10b981', '#eab308']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const fireConfettiSimple = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const currentQuestion = examQuestions[currentIndex];

  if (!currentQuestion) {
    return (
      <div className="text-center p-12">
        <RefreshCw className="w-12 h-12 mx-auto text-brand-primary animate-spin mb-4" />
        <h3 className="text-lg font-bold font-heading">Mempersiapkan Simulasi Tryout...</h3>
        <p className="text-xs text-gray-400">Sedang memilah dan mengacak 10 soal standar nasional.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in pb-12">
      {/* Submitted Final Score Page */}
      {isSubmitted && !isReviewMode ? (
        <div className="lg:col-span-3 glass-card rounded-3xl p-12 text-center space-y-8 max-w-2xl mx-auto">
          <div className="space-y-3">
            <span className="bg-red-500/10 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Hasil Tryout Simulasi</span>
            <h2 className="text-3xl font-bold font-heading">Tryout Selesai! 🎉</h2>
            <p className="text-sm text-gray-400">Hasil pengerjaan Anda telah dianalisis berdasarkan kunci jawaban OSN SD terbaru.</p>
          </div>

          {/* Medal Unlock Animation */}
          {medalEarned ? (
            <div className="p-6 bg-yellow-500/5 rounded-3xl border border-yellow-500/20 max-w-sm mx-auto flex flex-col items-center animate-float">
              <Award className={`w-20 h-20 mb-3 ${
                medalEarned === 'gold' ? 'text-yellow-500 fill-yellow-500 glow-gold' : 
                medalEarned === 'silver' ? 'text-slate-400 fill-slate-400 glow-silver' : 'text-amber-700 fill-amber-700 glow-bronze'
              }`} />
              <h3 className="text-xl font-bold uppercase tracking-wider font-heading">
                {medalEarned === 'gold' ? 'Medali Emas Unlocked!' : 
                 medalEarned === 'silver' ? 'Medali Perak Unlocked!' : 'Medali Perunggu Unlocked!'}
              </h3>
              <p className="text-xs text-gray-400 mt-1">Kemampuan Anda setara dengan Juara Tingkat {medalEarned === 'gold' ? 'Nasional' : medalEarned === 'silver' ? 'Provinsi' : 'Kabupaten'}!</p>
            </div>
          ) : (
            <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200 max-w-sm mx-auto flex flex-col items-center">
              <AlertCircle className="w-16 h-16 text-gray-400 mb-3" />
              <h3 className="text-lg font-bold text-gray-700">Tetap Semangat!</h3>
              <p className="text-xs text-gray-400 mt-1">Jangan berkecil hati, pelajari kembali pembahasan materi dan coba lagi.</p>
            </div>
          )}

          {/* Big Score Ring */}
          <div className="flex items-center justify-center gap-8">
            <div className="w-32 h-32 rounded-full border-8 border-brand-primary flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-brand-primary">{score}%</span>
              <span className="text-[10px] uppercase font-bold text-gray-400">Akurasi</span>
            </div>
            <div className="text-left space-y-1 text-sm text-gray-600 font-medium">
              <div>• Total Soal: <span className="font-bold">{examQuestions.length}</span></div>
              <div>• Benar: <span className="font-bold text-emerald-600">{(score / 100) * examQuestions.length} Soal</span></div>
              <div>• Salah: <span className="font-bold text-red-500">{examQuestions.length - (score / 100) * examQuestions.length} Soal</span></div>
              <div>• Sisa Waktu: <span className="font-bold">{formatTime(timeLeft)}</span></div>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="flex items-center justify-center gap-4 border-t border-gray-100 pt-6">
            <button
              onClick={() => setIsReviewMode(true)}
              className="bg-brand-accent hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-2xl transition text-sm flex items-center gap-1.5"
            >
              <Eye className="w-5 h-5" /> Review Jawaban & Pembahasan
            </button>
            <button
              onClick={onBack}
              className="border border-gray-200 hover:bg-gray-50 text-gray-600 font-bold px-6 py-3 rounded-2xl transition text-sm"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Main Tryout Test Section (Col Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-4 flex items-center justify-between">
              <h3 className="font-bold text-sm text-gray-700">Simulasi Tryout Mandiri</h3>
              <div className="flex items-center gap-2 bg-red-50 text-brand-primary px-4 py-2 rounded-xl font-bold text-sm">
                <Clock className="w-5 h-5 animate-pulse" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>

            {/* Question Card */}
            <div className="glass-card rounded-3xl p-8 space-y-6">
              <div className="space-y-3">
                <span className="bg-brand-accent/10 text-brand-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Soal {currentIndex + 1}
                </span>
                <h2 className="text-lg font-bold leading-relaxed text-gray-800">
                  <InlineMarkdown text={currentQuestion.question} />
                </h2>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(currentQuestion.options).map(([key, value]) => {
                  if (!value) return null;
                  
                  let optionBg = 'bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300';
                  
                  if (answers[currentIndex] === key) {
                    optionBg = 'bg-red-50/60 border-brand-primary ring-2 ring-red-500/10 text-brand-primary font-semibold';
                  }

                  // Review mode visuals
                  if (isReviewMode) {
                    const isCorrect = key === currentQuestion.answerKey;
                    const isSelected = answers[currentIndex] === key;
                    if (isCorrect) {
                      optionBg = 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/20 text-emerald-800';
                    } else if (isSelected) {
                      optionBg = 'bg-red-50 border-red-300 ring-2 ring-red-500/20 text-red-800';
                    } else {
                      optionBg = 'bg-gray-50/50 border-gray-100 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={key}
                      disabled={isReviewMode}
                      onClick={() => handleOptionSelect(key)}
                      className={`w-full flex items-center justify-between text-left p-4 rounded-2xl border transition-all text-sm ${optionBg}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                          answers[currentIndex] === key && !isReviewMode ? 'bg-brand-primary text-white' : 
                          isReviewMode && key === currentQuestion.answerKey ? 'bg-emerald-500 text-white' :
                          isReviewMode && answers[currentIndex] === key ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {key}
                        </span>
                        <span><InlineMarkdown text={value} /></span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation and Submit bar */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="p-3 border border-gray-200 hover:bg-gray-50 disabled:opacity-40 rounded-2xl transition"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => setCurrentIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}
                    disabled={currentIndex === examQuestions.length - 1}
                    className="p-3 border border-gray-200 hover:bg-gray-50 disabled:opacity-40 rounded-2xl transition"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {!isSubmitted ? (
                  <button
                    onClick={handleSubmit}
                    className="bg-brand-primary hover:bg-brand-hover text-white font-bold px-8 py-3 rounded-2xl transition shadow-lg shadow-red-500/10 text-sm"
                  >
                    Kumpulkan Jawaban
                  </button>
                ) : (
                  <button
                    onClick={() => setIsReviewMode(false)}
                    className="bg-gray-800 hover:bg-gray-900 text-white font-bold px-6 py-3 rounded-2xl transition text-sm"
                  >
                    Kembali Ke Hasil
                  </button>
                )}
              </div>
            </div>

            {/* Review Mode Pembahasan Panel */}
            {isReviewMode && (
              <div className="glass-card rounded-3xl p-8 border-l-4 border-emerald-500 animate-fade-in space-y-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-emerald-100 rounded-xl">
                    <BookOpen className="text-emerald-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading">Analisis Pembahasan</h3>
                    <p className="text-xs text-gray-400">Pembahasan kunci jawaban no. {currentIndex + 1}</p>
                  </div>
                </div>

                {currentQuestion.concept && (
                  <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Konsep Kunci</span>
                    <p className="text-sm font-semibold text-gray-700 leading-relaxed"><InlineMarkdown text={currentQuestion.concept} /></p>
                  </div>
                )}

                {/* Bongkar Pilihan */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Bongkar Semua Pilihan</span>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(currentQuestion.analysis).map(([key, val]) => {
                      if (!val) return null;
                      const isCorrect = key === currentQuestion.answerKey;
                      return (
                        <div 
                          key={key}
                          className={`p-3 rounded-xl text-xs leading-relaxed border ${
                            isCorrect ? 'bg-emerald-50/30 border-emerald-100 text-emerald-800' : 'bg-gray-50/50 border-gray-100 text-gray-600'
                          }`}
                        >
                          <span className={`font-bold mr-1.5 ${isCorrect ? 'text-emerald-700' : 'text-gray-500'}`}>
                            Pilihan {key}:
                          </span>
                          <InlineMarkdown text={val} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tryout Sidebar Navigator (Col Span 1) */}
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-6 space-y-6">
              <div>
                <h4 className="font-bold font-heading text-sm">Navigasi Soal</h4>
                <p className="text-[10px] text-gray-400">Klik nomor untuk melompati soal secara instan</p>
              </div>

              <div className="grid grid-cols-5 gap-2.5">
                {examQuestions.map((_, idx) => {
                  const isAnswered = answers[idx] !== undefined;
                  const isCurrent = currentIndex === idx;

                  let numberStyle = 'bg-gray-100/50 border-gray-200 text-gray-600 hover:bg-gray-200/50';

                  if (isAnswered) {
                    numberStyle = 'bg-brand-accent/15 border-brand-accent/30 text-brand-accent font-bold';
                  }
                  if (isCurrent) {
                    numberStyle = 'bg-brand-primary border-brand-primary text-white font-bold ring-4 ring-red-500/10 scale-105';
                  }

                  // Review mode colors
                  if (isReviewMode) {
                    const isCorrect = answers[idx] === examQuestions[idx].answerKey;
                    if (isCorrect) {
                      numberStyle = 'bg-emerald-500 border-emerald-500 text-white font-bold';
                    } else {
                      numberStyle = 'bg-red-500 border-red-500 text-white font-bold';
                    }
                    if (isCurrent) {
                      numberStyle += ' ring-4 ring-gray-400/20 scale-105';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-full aspect-square border rounded-2xl flex items-center justify-center text-xs font-semibold transition-all ${numberStyle}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Quick instructions */}
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-start gap-2.5 text-xs text-gray-500 leading-relaxed">
                <AlertCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <p>Ujian bersifat tertutup. Jawaban dan analisis pembahasan hanya akan dimunculkan setelah Anda menekan tombol kumpul.</p>
              </div>

              {isSubmitted && (
                <button
                  onClick={onBack}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3.5 rounded-2xl transition text-xs flex items-center justify-center gap-1.5 shadow-md shadow-gray-800/15"
                >
                  Selesai Ujian & Keluar
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
