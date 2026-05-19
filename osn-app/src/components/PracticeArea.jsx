import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle, CheckCircle, XCircle, Lightbulb, Compass, Volume2, VolumeX, ToggleLeft, ToggleRight, Settings, Video, BookOpen, GraduationCap, ListChecks, Keyboard, Filter } from 'lucide-react';
import confetti from 'canvas-confetti';
import { InlineMarkdown, MarkdownText } from '../utils/markdown.jsx';
import { logActivity } from '../utils/activityLog';
import { recordReview } from '../utils/spacedRepetition';
import { BookmarkButton } from '../features/bookmarks';
import { fireMilestone } from '../utils/milestones';
import { useT } from '../i18n';
import { startRecording } from '../utils/recorder';

export default function PracticeArea({ subBabId, questionsData, subBabProgress, onUpdateProgress, onBack, onAddXp, isCleanMode, setIsCleanMode, settings, recordingMode, onAutoRecordComplete, bulkQueueRemaining = 0 }) {
  const t = useT();
  const vpDefaults = settings?.videoProduction || {};
  const isAutoRecord = recordingMode === 'auto-record';
  const questions = questionsData?.questions || [];
  const theory = questionsData?.theory || [];

  const initialIndex = Math.min(subBabProgress?.lastIndex || 0, Math.max(0, questions.length - 1));

  const [activeTab, setActiveTab] = useState('quiz');
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(subBabProgress?.correct || 0);
  const [showPembahasan, setShowPembahasan] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'unanswered' | 'wrong'

  const answeredMap = subBabProgress?.answered || {};

  const filterCounts = useMemo(() => {
    let unanswered = 0;
    let wrong = 0;
    questions.forEach((q, i) => {
      const a = answeredMap[i];
      if (!a) unanswered++;
      else if (a !== q.answerKey) wrong++;
    });
    return { all: questions.length, unanswered, wrong };
  }, [questions, answeredMap]);

  const filteredIndices = useMemo(() => {
    if (filterMode === 'all') return questions.map((_, i) => i);
    return questions
      .map((q, i) => {
        const a = answeredMap[i];
        if (filterMode === 'unanswered') return !a ? i : -1;
        if (filterMode === 'wrong') return a && a !== q.answerKey ? i : -1;
        return i;
      })
      .filter((i) => i !== -1);
  }, [questions, answeredMap, filterMode]);

  const positionInFilter = filteredIndices.indexOf(currentIndex);
  const filterTotal = filteredIndices.length;

  const [timerEnabled, setTimerEnabled] = useState(vpDefaults.timerEnabled ?? false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [timerPhase, setTimerPhase] = useState('question');
  const [autoPilot, setAutoPilot] = useState(vpDefaults.autoPilot ?? false);
  const [isMuted, setIsMuted] = useState(vpDefaults.isMuted ?? true);
  const [volume, setVolume] = useState(vpDefaults.volume ?? 0.4);
  const [layoutSplit, setLayoutSplit] = useState(vpDefaults.layoutSplit ?? true);

  const [showIntro, setShowIntro] = useState(false);
  const [introTimeLeft, setIntroTimeLeft] = useState(3);

  const audioRef = useRef(null);
  const explanationScrollRef = useRef(null);
  const autoscrollIntervalRef = useRef(null);
  const recorderRef = useRef(null);
  const recAttemptedRef = useRef(false); // StrictMode-safe init gate
  const recorderStartTickRef = useRef(0);
  const [recElapsed, setRecElapsed] = useState(0);
  const [recError, setRecError] = useState(null);
  // Gate the entire practice UI until recorder confirms started (or user falls back)
  const [recPreparing, setRecPreparing] = useState(isAutoRecord);

  const currentQuestion = questions[currentIndex];

  // ----- Auto-record start logic (extracted so retry button can call it) -----
  const startAutoRecord = useCallback(() => {
    if (!isAutoRecord || !subBabId) return;
    if (recorderRef.current) return; // already running
    setRecError(null);
    setRecPreparing(true);
    const filename = `osn-${subBabId}-${(questionsData?.tier || 'campur')}.webm`;
    startRecording({ filename })
      .then((rec) => {
        if (recorderRef.current) {
          rec.stop({ autoDownload: false }).catch(() => {});
          return;
        }
        recorderRef.current = rec;
        recorderStartTickRef.current = Date.now();
        setRecElapsed(0);

        setTimerEnabled(true);
        setAutoPilot(true);
        setIsMuted(false);
        setLayoutSplit(true);
        setIsCleanMode(true);
        setShowIntro(true);
        setIntroTimeLeft(3);
        setRecPreparing(false);

        rec.onUserStopped(() => {
          recorderRef.current = null;
          const fn = `osn-${subBabId}-${(questionsData?.tier || 'campur')}.webm`;
          setSavedToast({ name: fn, size: 0 });
          setTimeout(() => setSavedToast(null), 8000);
        });
      })
      .catch((err) => {
        console.error('[recorder] startRecording failed:', err);
        const msg = err?.name === 'NotAllowedError'
          ? 'Izin perekaman dibatalkan. Pilih "Coba Lagi" untuk minta izin lagi, atau Kembali untuk pilih mode manual.'
          : (err?.message || 'Gagal memulai perekaman.');
        setRecError(msg);
        setRecPreparing(false);
      });
  }, [isAutoRecord, subBabId, questionsData]);

  // ----- Auto-record mode: kick off recorder on mount -----
  useEffect(() => {
    if (!isAutoRecord || !subBabId) return;
    if (recAttemptedRef.current) return;
    recAttemptedRef.current = true;
    startAutoRecord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoRecord, subBabId]);

  // Tick the REC duration display — poll the ref every 500ms while in auto-record mode
  useEffect(() => {
    if (!isAutoRecord) return;
    const id = setInterval(() => {
      if (recorderRef.current?.isActive()) {
        setRecElapsed(Math.floor((Date.now() - recorderStartTickRef.current) / 1000));
      }
    }, 500);
    return () => clearInterval(id);
  }, [isAutoRecord]);

  // Manual Stop & Save button handler
  const [savedToast, setSavedToast] = useState(null);
  const handleStopAndSave = useCallback(() => {
    if (!recorderRef.current) return;
    const filename = `osn-${subBabId}-${(questionsData?.tier || 'campur')}.webm`;
    const rec = recorderRef.current;
    recorderRef.current = null;
    rec.stop({ autoDownload: true, filename })
      .then((blob) => {
        setSavedToast({ name: filename, size: blob?.size || 0 });
        setTimeout(() => setSavedToast(null), 8000);
      })
      .catch(() => {});
  }, [subBabId, questionsData]);

  // Stop recorder + auto-download when sub-bab completed
  useEffect(() => {
    if (!isAutoRecord) return;
    if (!subBabProgress?.completed) return;
    if (!recorderRef.current) return;
    const filename = `osn-${subBabId}-${(questionsData?.tier || 'campur')}.webm`;
    const rec = recorderRef.current;
    recorderRef.current = null;
    rec.stop({ autoDownload: true, filename })
      .then(() => { onAutoRecordComplete?.(); })
      .catch(() => { onAutoRecordComplete?.(); });
  }, [isAutoRecord, subBabProgress?.completed, subBabId, questionsData, onAutoRecordComplete]);

  // Cleanup recorder if user navigates away mid-recording
  useEffect(() => {
    return () => {
      if (recorderRef.current?.isActive()) {
        recorderRef.current.stop({ autoDownload: true }).catch(() => {});
        recorderRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3');
      audioRef.current.loop = true;
    }
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (isMuted) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(() => {});
    }
    return () => audioRef.current?.pause();
  }, [isMuted]);

  useEffect(() => {
    setTimeLeft(10);
    setTimerPhase('question');
  }, [currentIndex]);

  useEffect(() => {
    if (autoPilot && !timerEnabled && !isChecked && !selectedOption && currentQuestion) {
      const t = setTimeout(() => setSelectedOption(currentQuestion.answerKey), 2000);
      return () => clearTimeout(t);
    }
  }, [currentIndex, autoPilot, timerEnabled, isChecked, selectedOption, currentQuestion]);

  useEffect(() => {
    if (isCleanMode && showIntro) {
      if (introTimeLeft > 0) {
        const t = setTimeout(() => setIntroTimeLeft((p) => p - 1), 1000);
        return () => clearTimeout(t);
      } else {
        setShowIntro(false);
        if (timerEnabled) { setTimeLeft(10); setTimerPhase('question'); }
      }
    }
  }, [isCleanMode, showIntro, introTimeLeft, timerEnabled]);

  useEffect(() => {
    if (autoscrollIntervalRef.current) {
      cancelAnimationFrame(autoscrollIntervalRef.current);
      autoscrollIntervalRef.current = null;
    }
    if (timerEnabled && timerPhase === 'explanation' && explanationScrollRef.current && !showIntro) {
      explanationScrollRef.current.scrollTop = 0;
      const delay = setTimeout(() => {
        const container = explanationScrollRef.current;
        if (!container) return;
        const maxScroll = container.scrollHeight - container.clientHeight;
        if (maxScroll <= 0) return;
        const start = Date.now();
        const duration = 14200;
        const step = () => {
          if (!explanationScrollRef.current || timerPhase !== 'explanation') return;
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          container.scrollTop = progress * maxScroll;
          if (progress < 1) autoscrollIntervalRef.current = requestAnimationFrame(step);
        };
        autoscrollIntervalRef.current = requestAnimationFrame(step);
      }, 150);
      return () => clearTimeout(delay);
    }
    if (explanationScrollRef.current) explanationScrollRef.current.scrollTop = 0;
  }, [timerPhase, timerEnabled, currentIndex, showPembahasan, showIntro]);

  const recordAnswer = useCallback((idx, optionKey, correct) => {
    onUpdateProgress?.((prev) => {
      const wasAnswered = !!prev.answered?.[idx];
      const wasCorrect = prev.answered?.[idx] === questions[idx]?.answerKey;
      const newAnswered = { ...(prev.answered || {}), [idx]: optionKey };
      let newCorrect = prev.correct || 0;
      if (!wasAnswered && correct) newCorrect += 1;
      else if (wasAnswered && !wasCorrect && correct) newCorrect += 1;
      else if (wasAnswered && wasCorrect && !correct) newCorrect = Math.max(0, newCorrect - 1);
      const prevAnsweredCount = prev.answered ? Object.keys(prev.answered).length : 0;
      const totalAnsweredCount = Object.keys(newAnswered).length;

      // Milestone celebrations: only fire when *newly* crossing a threshold this answer
      if (!wasAnswered && questions.length > 0) {
        const prevPct = Math.round((prevAnsweredCount / questions.length) * 100);
        const newPct = Math.round((totalAnsweredCount / questions.length) * 100);
        for (const threshold of [25, 50, 75, 100]) {
          if (prevPct < threshold && newPct >= threshold) {
            fireMilestone(threshold);
            break;
          }
        }
      }

      return {
        ...prev,
        lastIndex: idx,
        answered: newAnswered,
        correct: newCorrect,
        completed: totalAnsweredCount >= questions.length,
      };
    });
  }, [onUpdateProgress, questions]);

  const handleCheckAnswer = useCallback(() => {
    if (!selectedOption || isChecked || !currentQuestion) return;
    setIsChecked(true);
    setShowPembahasan(true);
    const correct = selectedOption === currentQuestion.answerKey;
    if (correct) {
      setScore((p) => p + 1);
      onAddXp(10);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#e53935', '#3b82f6', '#10b981', '#eab308'] });
    }
    recordAnswer(currentIndex, selectedOption, correct);
    logActivity(1);
    if (subBabId) recordReview(subBabId, currentIndex, correct);
    if (timerEnabled) { setTimerPhase('explanation'); setTimeLeft(15); }
  }, [selectedOption, isChecked, currentQuestion, currentIndex, timerEnabled, onAddXp, recordAnswer, subBabId]);

  const handleNextQuestion = useCallback(() => {
    const pos = filteredIndices.indexOf(currentIndex);
    const nextPos = pos === -1 ? 0 : pos + 1;
    if (nextPos >= filteredIndices.length) return;
    const nextIdx = filteredIndices[nextPos];
    setCurrentIndex(nextIdx);
    setSelectedOption(null);
    setIsChecked(false);
    setShowPembahasan(false);
    onUpdateProgress?.((prev) => ({ ...prev, lastIndex: nextIdx }));
  }, [currentIndex, filteredIndices, onUpdateProgress]);

  const handlePrevQuestion = useCallback(() => {
    const pos = filteredIndices.indexOf(currentIndex);
    if (pos <= 0) return;
    const prevIdx = filteredIndices[pos - 1];
    setCurrentIndex(prevIdx);
    setSelectedOption(null);
    setIsChecked(false);
    setShowPembahasan(false);
    onUpdateProgress?.((prev) => ({ ...prev, lastIndex: prevIdx }));
  }, [currentIndex, filteredIndices, onUpdateProgress]);

  // When filter changes and current question is no longer in the filtered set, jump to the first match
  useEffect(() => {
    if (filteredIndices.length === 0) return;
    if (!filteredIndices.includes(currentIndex)) {
      setCurrentIndex(filteredIndices[0]);
      setSelectedOption(null);
      setIsChecked(false);
      setShowPembahasan(false);
    }
  }, [filterMode, filteredIndices, currentIndex]);

  useEffect(() => {
    if (!timerEnabled || showIntro) return;
    if (timeLeft > 0) {
      const t = setTimeout(() => setTimeLeft((p) => p - 1), 1000);
      return () => clearTimeout(t);
    } else {
      if (timerPhase === 'question') {
        const correctAns = currentQuestion?.answerKey;
        setSelectedOption(correctAns);
        setIsChecked(true);
        setShowPembahasan(true);
        setScore((p) => p + 1);
        onAddXp(10);
        recordAnswer(currentIndex, correctAns, true);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#e53935', '#3b82f6', '#10b981', '#eab308'] });
        setTimerPhase('explanation');
        setTimeLeft(15);
      } else {
        if (currentIndex < questions.length - 1) handleNextQuestion();
        else { setIsCleanMode(false); alert(t('video_selesai_alert', 'Produksi Video Selesai! 🎉 Seluruh soal kuis telah selesai secara otomatis.')); }
      }
    }
  }, [timeLeft, timerEnabled, timerPhase, currentQuestion, currentIndex, isMuted, showIntro, onAddXp, handleNextQuestion, questions.length, setIsCleanMode, recordAnswer]);

  // Keyboard shortcuts for quiz tab
  useEffect(() => {
    if (activeTab !== 'quiz' || isCleanMode) return;
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) {
        if (currentQuestion?.options?.[key] && !isChecked) {
          e.preventDefault();
          setSelectedOption(key);
        }
      } else if (e.key === 'Enter') {
        if (!isChecked && selectedOption) { e.preventDefault(); handleCheckAnswer(); }
        else if (isChecked) { e.preventDefault(); handleNextQuestion(); }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault(); handleNextQuestion();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault(); handlePrevQuestion();
      } else if (e.key === '?') {
        setShowShortcuts((s) => !s);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeTab, isCleanMode, currentQuestion, isChecked, selectedOption, handleCheckAnswer, handleNextQuestion, handlePrevQuestion]);

  if (!currentQuestion) {
    return (
      <div className="text-center p-12">
        <HelpCircle className="w-16 h-16 mx-auto text-gray-300 animate-pulse mb-4" />
        <h3 className="text-xl font-bold font-heading">{t('data_soal_tidak_ditemukan', 'Data Soal Tidak Ditemukan')}</h3>
        <p className="text-gray-400 mt-2">{t('gagal_memuat_soal', 'Gagal memuat materi kuis atau data kuis kosong.')}</p>
        <button onClick={onBack} className="mt-4 bg-brand-primary text-white px-6 py-2 rounded-xl text-sm font-bold">{t('kembali', 'Kembali')}</button>
      </div>
    );
  }

  // Auto-record mode: gate practice UI behind share-screen permission flow
  if (isAutoRecord && (recPreparing || (recError && !recorderRef.current))) {
    return (
      <div className="fixed inset-0 z-50 bg-[#7B2CBF] flex flex-col items-center justify-center font-sans select-none p-6">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 100 Q 300 200 600 100 T 1200 100 T 1800 100" fill="none" stroke="white" strokeWidth="4" />
            <path d="M 0 500 Q 400 400 800 500 T 1600 500" fill="none" stroke="white" strokeWidth="4" />
          </svg>
        </div>
        <div className="relative max-w-md text-center space-y-6 animate-fade-in">
          {recError ? (
            <>
              <div className="w-20 h-20 mx-auto rounded-full bg-red-500/20 border-2 border-red-400/40 flex items-center justify-center">
                <XCircle className="w-10 h-10 text-red-200" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white font-heading">Rekaman Tidak Dimulai</h2>
                <p className="text-sm text-white/80 mt-2 leading-relaxed">{recError}</p>
              </div>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => startAutoRecord()}
                  className="bg-white text-[#7B2CBF] hover:bg-white/90 font-extrabold px-5 py-2.5 rounded-xl text-xs transition shadow-lg"
                >
                  Coba Lagi
                </button>
                <button
                  onClick={onBack}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition border border-white/20"
                >
                  Kembali
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="w-20 h-20 mx-auto rounded-full border-4 border-white/20 border-t-white animate-spin"></div>
              <div>
                <h2 className="text-xl font-extrabold text-white font-heading">Menunggu Izin Perekaman…</h2>
                <p className="text-sm text-white/80 mt-2 leading-relaxed">
                  Browser sedang menampilkan popup pilih layar. Pilih <strong className="text-white">tab ini</strong> (atau seluruh layar), centang <strong className="text-white">"Share tab audio"</strong>, lalu klik <strong className="text-white">Bagikan / Share</strong>.
                </p>
                <p className="text-[11px] text-white/60 mt-2">Soal dan timer baru mulai setelah perekaman aktif.</p>
              </div>
              <button
                onClick={onBack}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-2 rounded-xl text-xs transition border border-white/20"
              >
                Batalkan
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  const handleOptionSelect = (option) => { if (!isChecked) setSelectedOption(option); };
  const isCorrectOption = (opt) => opt === currentQuestion.answerKey;
  const isSelectedOption = (opt) => opt === selectedOption;
  const isSplitActive = showPembahasan && layoutSplit;

  const answeredCount = subBabProgress?.answered ? Object.keys(subBabProgress.answered).length : 0;
  const completionPct = Math.round((answeredCount / questions.length) * 100);

  // Cinematic intro
  if (isCleanMode && showIntro) {
    return (
      <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#7B2CBF] flex flex-col items-center justify-center font-sans z-50 select-none">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 120 Q 300 200 600 80 T 1200 120 T 1800 80" fill="none" stroke="white" strokeWidth="4" />
            <path d="M 0 450 Q 400 500 800 400 T 1600 450" fill="none" stroke="white" strokeWidth="4" />
          </svg>
        </div>
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
            <p className="text-xs text-white/70 font-semibold uppercase tracking-widest">{t('menyiapkan_rekaman', 'Menyiapkan Mode Perekaman...')}</p>
          </div>
        </div>
      </div>
    );
  }

  // Clean mode (recording)
  if (isCleanMode) {
    return (
      <div className="fixed inset-0 w-screen h-screen overflow-hidden flex flex-col justify-between bg-[#7B2CBF] font-sans z-50 select-none">
        <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 100 Q 300 200 600 100 T 1200 100 T 1800 100" fill="none" stroke="white" strokeWidth="4" />
            <path d="M 0 500 Q 400 400 800 500 T 1600 500" fill="none" stroke="white" strokeWidth="4" />
          </svg>
        </div>
        <button
          onClick={() => setIsCleanMode(false)}
          className="fixed top-4 right-4 z-50 p-2 bg-white/30 hover:bg-white/80 border border-gray-200/20 hover:border-gray-300/50 text-gray-400 hover:text-gray-700 rounded-full backdrop-blur-sm shadow-sm transition-all duration-300 opacity-25 hover:opacity-100 cursor-pointer"
          title="Keluar Perekaman (Buka Panel)"
        >
          <Settings className="w-4 h-4 animate-spin-slow" />
        </button>

        {/* REC indicator + Stop & Save button (only in auto-record mode) */}
        {isAutoRecord && (
          <div className="fixed top-4 left-4 z-50 flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-red-600/90 text-white rounded-full backdrop-blur-sm shadow-lg font-mono text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              REC
              <span className="text-white/80 tabular-nums">{Math.floor(recElapsed / 60).toString().padStart(2,'0')}:{(recElapsed % 60).toString().padStart(2,'0')}</span>
              {bulkQueueRemaining > 0 && (
                <span className="ml-1 px-1.5 py-0.5 bg-white/20 rounded-full text-[10px]">Antrian: {bulkQueueRemaining + 1}</span>
              )}
            </div>
            <button
              onClick={handleStopAndSave}
              className="px-3 py-1.5 bg-white/90 hover:bg-white text-gray-800 hover:text-brand-primary text-[11px] font-extrabold rounded-full shadow-lg transition flex items-center gap-1.5"
              title="Hentikan rekaman dan simpan file sekarang"
            >
              ⬛ Stop & Save
            </button>
          </div>
        )}
        {recError && (
          <div className="fixed top-16 left-4 z-50 px-3 py-1.5 bg-yellow-100 text-yellow-800 text-[11px] rounded-lg shadow-md max-w-xs">{recError}</div>
        )}
        {savedToast && (
          <div className="fixed top-16 left-4 z-50 px-4 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-lg max-w-sm animate-slide-in">
            ✓ Video tersimpan di folder Downloads
            <div className="text-[10px] font-mono opacity-90 mt-0.5 break-all">{savedToast.name}</div>
            <div className="text-[10px] opacity-80">{(savedToast.size / (1024*1024)).toFixed(1)} MB · Buka folder Downloads browser-mu</div>
          </div>
        )}
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
          <div className={`h-full flex flex-col justify-center p-8 overflow-y-auto relative ${isSplitActive ? 'lg:col-span-6' : 'lg:col-span-12 max-w-4xl mx-auto'}`}>
            <div className="glass-card rounded-3xl p-8 space-y-6 shadow-2xl relative max-w-2xl w-full mx-auto animate-scale-in">
              {timerEnabled && (
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between items-center text-xs font-bold text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <span className={`h-2.5 w-2.5 rounded-full animate-ping ${timerPhase === 'question' ? 'bg-red-500' : 'bg-brand-accent'}`}></span>
                      {timerPhase === 'question' ? t('waktu_menjawab', 'Waktu Menjawab...') : t('durasi_pembahasan', 'Durasi Pembahasan...')}
                    </span>
                    <span className={`text-base font-black ${
                      timerPhase === 'question' && timeLeft <= 3 ? 'text-red-500 animate-bounce' :
                      timerPhase === 'explanation' ? 'text-brand-accent' : 'text-gray-800'
                    }`}>{timeLeft} {t('detik', 'Detik')}</span>
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
              <div className="space-y-3">
                <h2 className="text-xl font-bold font-heading leading-relaxed text-gray-850">
                  <InlineMarkdown text={currentQuestion.question} />
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(currentQuestion.options).map(([key, value]) => {
                  if (!value) return null;
                  let optionBg = 'bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300';
                  let icon = null;
                  if (isChecked) {
                    if (isCorrectOption(key)) { optionBg = 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/20 text-emerald-800'; icon = <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />; }
                    else if (isSelectedOption(key)) { optionBg = 'bg-red-50 border-red-300 ring-2 ring-red-500/20 text-red-800'; icon = <XCircle className="w-5 h-5 text-red-500 shrink-0" />; }
                    else optionBg = 'bg-gray-50/50 border-gray-100 opacity-60';
                  } else if (isSelectedOption(key)) {
                    optionBg = 'bg-red-50/60 border-brand-primary ring-2 ring-red-500/10 text-brand-primary font-semibold';
                  }
                  return (
                    <button key={key} disabled={isChecked} onClick={() => handleOptionSelect(key)} className={`w-full flex items-center justify-between text-left p-4 rounded-2xl border transition-all text-sm ${optionBg}`}>
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelectedOption(key) && !isChecked ? 'bg-brand-primary text-white' :
                          isChecked && isCorrectOption(key) ? 'bg-emerald-500 text-white' :
                          isChecked && isSelectedOption(key) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-500'
                        }`}>{key}</span>
                        <span className="leading-relaxed"><InlineMarkdown text={value} /></span>
                      </div>
                      {icon}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex items-center gap-2">
                  <button onClick={handlePrevQuestion} disabled={positionInFilter <= 0} className="p-3 border border-gray-200 hover:bg-gray-50 disabled:opacity-40 rounded-2xl transition">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button onClick={handleNextQuestion} disabled={positionInFilter >= filterTotal - 1} className="p-3 border border-gray-200 hover:bg-gray-50 disabled:opacity-40 rounded-2xl transition">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                {!isChecked ? (
                  <button onClick={handleCheckAnswer} disabled={!selectedOption} className="bg-brand-primary hover:bg-brand-hover disabled:opacity-40 disabled:hover:bg-brand-primary text-white font-bold px-8 py-3 rounded-2xl transition shadow-lg shadow-red-500/10 text-sm">
                    {t('cek_jawaban', 'Cek Jawaban')}
                  </button>
                ) : (
                  <button onClick={handleNextQuestion} disabled={positionInFilter >= filterTotal - 1} className="bg-brand-accent hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-2xl transition shadow-lg shadow-blue-500/10 text-sm flex items-center gap-1">
                    {t('soal_selanjutnya', 'Soal Selanjutnya')} <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
          {isSplitActive && (
            <div ref={explanationScrollRef} className="lg:col-span-6 h-full bg-slate-900 text-slate-100 border-l border-slate-800 px-10 pb-10 overflow-y-auto animate-slide-in flex flex-col justify-start space-y-5 rounded-none relative">
              <div className="sticky top-0 pt-10 bg-slate-900 z-10 flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2 bg-red-950 border border-red-800/35 rounded-xl text-red-400"><Lightbulb className="w-5 h-5" /></div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">{t('pembahasan_komprehensif', 'Pembahasan Komprehensif')}</h3>
                  <p className="text-xs text-slate-400">{t('analisis_konsep_desc', 'Analisis konsep & opsi salah untuk mencegah miskonsepsi')}</p>
                </div>
              </div>
              {currentQuestion.concept && (
                <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/50 shadow-md">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">{t('konsep_kunci', 'Konsep Kunci')}</span>
                  <p className="text-sm font-semibold text-slate-200 leading-relaxed"><InlineMarkdown text={currentQuestion.concept} dark /></p>
                </div>
              )}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">{t('bongkar_pilihan', 'Bongkar Semua Pilihan (Penting!)')}</span>
                <div className="grid grid-cols-1 gap-2.5">
                  {Object.entries(currentQuestion.analysis).map(([key, val]) => {
                    if (!val) return null;
                    const isCorrect = key === currentQuestion.answerKey;
                    return (
                      <div key={key} className={`p-3.5 rounded-xl text-xs leading-relaxed border ${isCorrect ? 'bg-emerald-950/40 border-emerald-900/60 text-emerald-200' : 'bg-slate-800/40 border-slate-800/60 text-slate-300'}`}>
                        <span className={`font-bold mr-1.5 ${isCorrect ? 'text-emerald-400' : 'text-slate-400'}`}>{t('pilihan', 'Pilihan')} {key}:</span>
                        <InlineMarkdown text={val} dark />
                      </div>
                    );
                  })}
                </div>
              </div>
              {currentQuestion.steps && currentQuestion.steps.length > 0 && (
                <div className="space-y-2.5">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">{t('langkah_penyelesaian', 'Langkah Penyelesaian')}</span>
                  <div className="space-y-2">
                    {currentQuestion.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-blue-950 border border-blue-900 text-blue-400 flex items-center justify-center font-bold shrink-0">{idx + 1}</span>
                        <span className="pt-0.5"><InlineMarkdown text={step} dark /></span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {currentQuestion.tips && (
                <div className="bg-yellow-950/20 rounded-2xl p-4 border border-yellow-900/35 flex items-start gap-3 shadow-md">
                  <div className="p-1 bg-yellow-950/80 rounded-lg text-yellow-500 border border-yellow-800/30 shrink-0 mt-0.5"><Compass className="w-4 h-4" /></div>
                  <div className="text-xs leading-relaxed text-yellow-200/90 font-medium">
                    <span className="font-bold text-yellow-400 block mb-1">{t('tips_olimpiade', 'Tips Olimpiade 💭')}</span>
                    <MarkdownText text={currentQuestion.tips} dark />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Standard learning mode
  return (
    <div className={`mx-auto space-y-6 animate-fade-in pb-12 transition-all duration-500 ease-out ${isSplitActive ? 'max-w-7xl' : 'max-w-4xl'}`}>

      {/* Header */}
      <div className="flex items-center justify-between glass-card rounded-2xl p-4 gap-4 flex-wrap">
        <button onClick={onBack} className="flex items-center gap-1.5 text-gray-500 hover:text-brand-primary font-bold text-sm transition font-sans">
          <ChevronLeft className="w-5 h-5" /> {t('kembali_ke_roadmap', 'Kembali ke Roadmap')}
        </button>
        <div className="flex items-center gap-4 text-xs font-bold font-sans flex-wrap">
          <span className="text-gray-700 truncate max-w-[280px]" title={questionsData?.title}>
            {questionsData?.title || t('subbab_praktik', 'Sub-bab Praktik')}
          </span>
          <span className="bg-emerald-500/10 text-emerald-700 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
            {t('selesai', 'Selesai')} {completionPct}%
          </span>
          {activeTab === 'quiz' && (
            <>
              <span className="bg-red-500/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider">
                {t('level', 'Level')}: {currentQuestion.level === 'Kab' ? t('kabupaten', 'Kabupaten') : currentQuestion.level === 'Prov' ? t('provinsi', 'Provinsi') : t('nasional', 'Nasional')}
              </span>
              <span className="text-gray-400 font-sans">
                {filterMode === 'all'
                  ? t('soal_n_dari_m', 'Soal ${n} dari ${m}').replace('${n}', currentIndex + 1).replace('${m}', questions.length)
                  : t('n_dari_m_terfilter', '${n} dari ${m} terfilter').replace('${n}', Math.max(0, positionInFilter) + 1).replace('${m}', filterTotal)}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Tab switcher */}
      <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md p-1.5 rounded-2xl border border-white/60 w-fit mx-auto">
        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
            activeTab === 'quiz' ? 'bg-brand-primary text-white shadow-sm shadow-red-500/20' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <ListChecks className="w-4 h-4" /> {t('latihan_soal', 'Latihan Soal')}
        </button>
        <button
          onClick={() => setActiveTab('theory')}
          disabled={theory.length === 0}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
            activeTab === 'theory' ? 'bg-brand-accent text-white shadow-sm shadow-blue-500/20' : 'text-gray-500 hover:text-gray-800'
          } disabled:opacity-40 disabled:cursor-not-allowed`}
        >
          <GraduationCap className="w-4 h-4" /> {t('pelajari_materi', 'Pelajari Materi')}
          {theory.length > 0 && <span className="bg-white/30 text-[10px] px-1.5 py-0.5 rounded-full">{theory.length}</span>}
        </button>
      </div>

      {activeTab === 'theory' ? (
        <TheoryView theory={theory} title={questionsData?.title} onStartQuiz={() => setActiveTab('quiz')} />
      ) : (
        <>
          {/* Filter chips */}
          <div className="flex items-center gap-2 flex-wrap font-sans">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">
              <Filter className="w-3.5 h-3.5" /> {t('filter', 'Filter')}
            </div>
            {[
              { id: 'all', label: t('semua_chip', 'Semua'), count: filterCounts.all, cls: 'brand-accent' },
              { id: 'unanswered', label: t('belum_dijawab_chip', 'Belum Dijawab'), count: filterCounts.unanswered, cls: 'gray' },
              { id: 'wrong', label: t('salah_chip', 'Salah'), count: filterCounts.wrong, cls: 'red' },
            ].map((chip) => {
              const active = filterMode === chip.id;
              const baseColor =
                chip.cls === 'red'
                  ? active ? 'bg-red-500 text-white border-red-500' : 'bg-red-50 text-red-600 border-red-100 hover:bg-red-100'
                  : chip.cls === 'gray'
                  ? active ? 'bg-gray-700 text-white border-gray-700' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                  : active ? 'bg-brand-accent text-white border-brand-accent' : 'bg-blue-50 text-brand-accent border-blue-100 hover:bg-blue-100';
              const disabled = chip.id !== 'all' && chip.count === 0;
              return (
                <button
                  key={chip.id}
                  disabled={disabled}
                  onClick={() => setFilterMode(chip.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border transition ${baseColor} disabled:opacity-40 disabled:cursor-not-allowed`}
                >
                  {chip.label}
                  <span className={`text-[10px] font-black ${active ? 'bg-white/20' : 'bg-white/60'} px-1.5 py-0.5 rounded-full`}>{chip.count}</span>
                </button>
              );
            })}
          </div>

          {filterTotal === 0 ? (
            <div className="glass-card rounded-3xl p-10 text-center space-y-2 font-sans">
              <HelpCircle className="w-10 h-10 mx-auto text-gray-300" />
              <h3 className="text-base font-bold font-heading">{t('tidak_ada_soal_filter', 'Tidak ada soal dalam filter ini 🎉')}</h3>
              <p className="text-xs text-gray-400">
                {filterMode === 'wrong' ? t('belum_ada_salah_desc', 'Belum ada jawaban salah — bagus! ') : t('semua_soal_dijawab_desc', 'Semua soal sudah dijawab. ')}
                <button onClick={() => setFilterMode('all')} className="text-brand-primary font-bold underline">{t('reset_filter', 'Reset filter')}</button>
              </p>
            </div>
          ) : null}

          {/* Video Producer Studio */}
          <div className="glass-card rounded-3xl p-6 border border-brand-primary/20 shadow-lg shadow-red-500/5 space-y-4 font-sans">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-red-600 animate-ping"></span>
                <h3 className="text-sm font-black uppercase tracking-wider text-gray-800 font-heading">{t('video_producer_studio', '🎬 Video Producer Studio')}</h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowShortcuts((s) => !s)}
                  className="flex items-center gap-1 text-[10px] font-bold text-gray-500 hover:text-brand-primary uppercase tracking-wider"
                  title="Tampilkan pintasan keyboard (?)"
                >
                  <Keyboard className="w-3.5 h-3.5" /> {t('pintasan', 'Pintasan')}
                </button>
                <span className="text-[10px] text-gray-400 font-bold">{t('video_loop_desc', 'Menjawab 10s → Pembahasan 15s (Loop)')}</span>
              </div>
            </div>

            {showShortcuts && (
              <div className="bg-gray-50 rounded-2xl p-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px] text-gray-600 font-sans">
                <div><kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded font-mono">A·B·C·D</kbd> {t('shortcut_select', 'pilih opsi')}</div>
                <div><kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded font-mono">Enter</kbd> {t('shortcut_check', 'cek / lanjut')}</div>
                <div><kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded font-mono">←  →</kbd> {t('shortcut_nav', 'navigasi soal')}</div>
                <div><kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded font-mono">?</kbd> {t('shortcut_help', 'toggle bantuan')}</div>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              <ToggleTile label={t('timer_soal_opt', 'Timer Soal (10s)')} value={timerEnabled} onToggle={() => setTimerEnabled((v) => !v)} color="red" />
              <ToggleTile label={t('auto_pilot_opt', 'Auto-Pilot')} value={autoPilot} onToggle={() => setAutoPilot((v) => !v)} color="emerald" />
              <ToggleTile label={t('in_frame_split_opt', 'In-Frame Split')} value={layoutSplit} onToggle={() => setLayoutSplit((v) => !v)} color="red" />
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-xs font-bold text-gray-600">{t('music_loop_opt', 'Music Loop')}</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsMuted(!isMuted)} className={`p-2 rounded-xl transition ${isMuted ? 'bg-gray-200 text-gray-500' : 'bg-red-500 text-white shadow-md shadow-red-500/10'}`}>
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 animate-bounce" />}
                  </button>
                  <input type="range" min="0" max="1" step="0.1" value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} className="w-12 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500" />
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-4 flex justify-end">
              <button
                onClick={() => { setIsCleanMode(true); setShowIntro(vpDefaults.showIntro ?? true); setIntroTimeLeft(3); }}
                className="bg-brand-primary hover:bg-brand-hover text-white font-extrabold px-6 py-2.5 rounded-2xl text-xs transition shadow-md shadow-red-500/10 flex items-center gap-1.5 font-sans"
              >
                <Video className="w-3.5 h-3.5 fill-white animate-pulse" /> {t('mulai_rekam_btn', 'Mulai Rekam (Layar Bersih)')}
              </button>
            </div>
          </div>

          {/* Question + Pembahasan */}
          <div className={`grid grid-cols-1 ${isSplitActive ? 'lg:grid-cols-12' : ''} gap-6 transition-all duration-500 ease-out`}>
            <div className={`glass-card rounded-3xl p-8 space-y-6 ${isSplitActive ? 'lg:col-span-6' : ''} transition-all duration-500`}>
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
                    }`}>{timeLeft} Detik</span>
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

              <div className="space-y-3">
                {subBabId && (
                  <div className="flex justify-end">
                    <BookmarkButton subBabId={subBabId} qIndex={currentIndex} />
                  </div>
                )}
                <h2 className="text-xl font-bold font-heading leading-relaxed text-gray-800">
                  <InlineMarkdown text={currentQuestion.question} />
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {Object.entries(currentQuestion.options).map(([key, value]) => {
                  if (!value) return null;
                  let optionBg = 'bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300';
                  let icon = null;
                  if (isChecked) {
                    if (isCorrectOption(key)) { optionBg = 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/20 text-emerald-800'; icon = <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />; }
                    else if (isSelectedOption(key)) { optionBg = 'bg-red-50 border-red-300 ring-2 ring-red-500/20 text-red-800'; icon = <XCircle className="w-5 h-5 text-red-500 shrink-0" />; }
                    else optionBg = 'bg-gray-50/50 border-gray-100 opacity-60';
                  } else if (isSelectedOption(key)) {
                    optionBg = 'bg-red-50/60 border-brand-primary ring-2 ring-red-500/10 text-brand-primary font-semibold';
                  }
                  return (
                    <button key={key} disabled={isChecked} onClick={() => handleOptionSelect(key)} className={`w-full flex items-center justify-between text-left p-4 rounded-2xl border transition-all text-sm font-sans ${optionBg}`}>
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelectedOption(key) && !isChecked ? 'bg-brand-primary text-white' :
                          isChecked && isCorrectOption(key) ? 'bg-emerald-500 text-white' :
                          isChecked && isSelectedOption(key) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-500'
                        }`}>{key}</span>
                        <span className="leading-relaxed"><InlineMarkdown text={value} /></span>
                      </div>
                      {icon}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex items-center gap-2">
                  <button onClick={handlePrevQuestion} disabled={positionInFilter <= 0} className="p-3 border border-gray-200 hover:bg-gray-50 disabled:opacity-40 rounded-2xl transition">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button onClick={handleNextQuestion} disabled={positionInFilter >= filterTotal - 1} className="p-3 border border-gray-200 hover:bg-gray-50 disabled:opacity-40 rounded-2xl transition">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                {!isChecked ? (
                  <button onClick={handleCheckAnswer} disabled={!selectedOption} className="bg-brand-primary hover:bg-brand-hover disabled:opacity-40 disabled:hover:bg-brand-primary text-white font-bold px-8 py-3 rounded-2xl transition shadow-lg shadow-red-500/10 text-sm font-sans">
                    Cek Jawaban
                  </button>
                ) : (
                  <button onClick={handleNextQuestion} disabled={positionInFilter >= filterTotal - 1} className="bg-brand-accent hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-2xl transition shadow-lg shadow-blue-500/10 text-sm flex items-center gap-1 font-sans">
                    Soal Selanjutnya <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {isSplitActive && (
              <div ref={explanationScrollRef} className="lg:col-span-6 glass-card rounded-3xl p-8 border-l-4 border-brand-primary animate-slide-in space-y-6 max-h-[540px] overflow-y-auto pr-3 font-sans">
                <PembahasanContent q={currentQuestion} />
              </div>
            )}
          </div>

          {showPembahasan && !layoutSplit && (
            <div className="glass-card rounded-3xl p-8 border-l-4 border-brand-primary animate-fade-in space-y-6 font-sans">
              <PembahasanContent q={currentQuestion} />
            </div>
          )}

          <div className="text-center text-[11px] text-gray-400 font-sans">
            {t('skor_sesi', 'Skor sesi:')} <span className="font-bold text-gray-600">{score}</span> · {t('tekan_key_shortcuts', 'Tekan ${key} untuk pintasan keyboard').replace('${key}', '?')}
          </div>
        </>
      )}
    </div>
  );
}

function ToggleTile({ label, value, onToggle, color }) {
  const onColors = {
    red: 'text-red-500 fill-red-100',
    emerald: 'text-emerald-500 fill-emerald-100',
    blue: 'text-brand-accent fill-blue-100',
  }[color] || 'text-brand-primary fill-red-100';
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
      <span className="text-xs font-bold text-gray-600">{label}</span>
      <button onClick={onToggle} className="text-brand-primary transition">
        {value ? <ToggleRight className={`w-10 h-10 ${onColors}`} /> : <ToggleLeft className="w-10 h-10 text-gray-400" />}
      </button>
    </div>
  );
}

function PembahasanContent({ q }) {
  const t = useT();
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="p-2 bg-red-100 rounded-xl"><Lightbulb className="text-brand-primary w-5 h-5" /></div>
        <div>
          <h3 className="text-lg font-bold font-heading">Pembahasan Komprehensif</h3>
          <p className="text-xs text-gray-400">Analisis konsep & opsi salah untuk mencegah miskonsepsi</p>
        </div>
      </div>

      {q.concept && (
        <div className="bg-red-50/50 rounded-2xl p-4 border border-red-100">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Konsep Kunci</span>
          <p className="text-sm font-semibold text-gray-700 leading-relaxed"><InlineMarkdown text={q.concept} /></p>
        </div>
      )}

      <div className="space-y-3">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Bongkar Semua Pilihan (Penting!)</span>
        <div className="grid grid-cols-1 gap-2.5">
          {Object.entries(q.analysis).map(([key, val]) => {
            if (!val) return null;
            const isCorrect = key === q.answerKey;
            return (
              <div key={key} className={`p-3.5 rounded-xl text-xs leading-relaxed border ${isCorrect ? 'bg-emerald-50/40 border-emerald-100 text-emerald-800' : 'bg-gray-50/50 border-gray-100 text-gray-600'}`}>
                <span className={`font-bold mr-1.5 ${isCorrect ? 'text-emerald-700' : 'text-gray-500'}`}>{t('pilihan_n', 'Pilihan ${n}:').replace('${n}', key)}</span>
                <InlineMarkdown text={val} />
              </div>
            );
          })}
        </div>
      </div>

      {q.steps && q.steps.length > 0 && (
        <div className="space-y-3">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Langkah Penyelesaian</span>
          <div className="space-y-2">
            {q.steps.map((step, idx) => (
              <div key={idx} className="flex gap-2.5 text-xs text-gray-600 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center font-bold shrink-0">{idx + 1}</span>
                <span className="pt-0.5"><InlineMarkdown text={step} /></span>
              </div>
            ))}
          </div>
        </div>
      )}

      {q.tips && (
        <div className="bg-yellow-50/30 rounded-2xl p-4 border border-yellow-200/50 flex items-start gap-3">
          <div className="p-1 bg-yellow-100 rounded-lg text-yellow-600 shrink-0 mt-0.5"><Compass className="w-4 h-4" /></div>
          <div className="text-xs leading-relaxed">
            <span className="font-bold text-yellow-800 block mb-1">Tips Olimpiade 💭</span>
            <div className="text-yellow-900 font-medium"><MarkdownText text={q.tips} /></div>
          </div>
        </div>
      )}
    </>
  );
}

function TheoryView({ theory, title, onStartQuiz }) {
  const t = useT();
  const [openIndex, setOpenIndex] = useState(0);
  if (!theory || theory.length === 0) {
    return (
      <div className="glass-card rounded-3xl p-12 text-center space-y-3 font-sans">
        <BookOpen className="w-12 h-12 mx-auto text-gray-300" />
        <h3 className="text-lg font-bold font-heading">{t('materi_teori_empty', 'Materi Teori Belum Tersedia')}</h3>
        <p className="text-xs text-gray-400 max-w-md mx-auto">{t('materi_teori_empty_desc', 'Sub-bab ini belum dilengkapi materi teori. Mulai latihan untuk belajar lewat pembahasan tiap soal.')}</p>
      </div>
    );
  }
  return (
    <div className="space-y-4 font-sans">
      <div className="glass-card rounded-3xl p-6 flex items-start gap-4">
        <div className="p-3 bg-blue-100 rounded-2xl shrink-0"><GraduationCap className="w-6 h-6 text-brand-accent" /></div>
        <div className="flex-1">
          <h2 className="text-lg font-bold font-heading">{t('materi_pelajaran', 'Materi Pelajaran')}</h2>
          <p className="text-xs text-gray-500 mt-0.5">{title || t('pelajari_konsep_inti_desc', 'Pelajari konsep inti sebelum mengerjakan soal.')}</p>
        </div>
        <button onClick={onStartQuiz} className="bg-brand-primary hover:bg-brand-hover text-white font-bold px-4 py-2 rounded-xl text-xs transition shadow-md shadow-red-500/10 flex items-center gap-1 shrink-0">
          {t('mulai_latihan_btn', 'Mulai Latihan')} <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        {theory.map((section, idx) => {
          const open = openIndex === idx;
          return (
            <div key={idx} className={`glass-card rounded-2xl overflow-hidden transition-all ${open ? 'ring-1 ring-brand-accent/30' : ''}`}>
              <button
                onClick={() => setOpenIndex(open ? -1 : idx)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/40 transition"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${open ? 'bg-brand-accent text-white' : 'bg-blue-100 text-brand-accent'}`}>
                    {idx + 1}
                  </span>
                  <h3 className="font-bold font-heading text-sm text-gray-800">{section.title}</h3>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-90' : ''}`} />
              </button>
              {open && (
                <div className="px-6 pb-6 pt-2 border-t border-white/40 animate-fade-in">
                  <MarkdownText text={section.content} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
