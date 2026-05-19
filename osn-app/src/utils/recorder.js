// recorder.js — In-app screen recording via MediaRecorder + getDisplayMedia.
//
// Usage:
//   const rec = await startRecording({ filename: 'session.webm' });
//   // ... do stuff (UI continues, audio captured if user shared audio)
//   const blob = await rec.stop(); // auto-downloads webm
//
// Limitations (browser-level):
//   - User must grant screen-share permission on EACH startRecording() call.
//   - Tab should stay in foreground; backgrounded tabs are throttled.
//   - File grows ~14 MB/min at 2 Mbps; long sessions will hit memory limits.

export function isRecordingSupported() {
  if (typeof window === 'undefined') return false;
  if (!navigator.mediaDevices?.getDisplayMedia) return false;
  if (typeof MediaRecorder === 'undefined') return false;
  return true;
}

function pickMimeType() {
  if (typeof MediaRecorder === 'undefined') return 'video/webm';
  const candidates = [
    'video/webm;codecs=vp9,opus',
    'video/webm;codecs=vp8,opus',
    'video/webm',
    'video/mp4',
  ];
  for (const m of candidates) {
    try { if (MediaRecorder.isTypeSupported(m)) return m; } catch { /* ignore */ }
  }
  return 'video/webm';
}

export async function startRecording({
  filename = 'osn-record.webm',
  videoBitsPerSecond = 2_000_000,
  audio = true,
} = {}) {
  if (!isRecordingSupported()) {
    throw new Error('Browser tidak mendukung perekaman layar in-app.');
  }

  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: { frameRate: 30 },
    audio,
  });

  const mime = pickMimeType();
  const recorder = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond });
  const chunks = [];

  recorder.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };

  let resolveStop;
  const stopped = new Promise((r) => { resolveStop = r; });
  recorder.onstop = () => resolveStop(new Blob(chunks, { type: mime }));

  // Detect user clicking browser's native "Stop sharing" → auto-stop recorder + save what we have
  const userStoppedCallbacks = [];
  let userStoppedFlag = false;
  const onTrackEnded = () => {
    if (userStoppedFlag) return;
    userStoppedFlag = true;
    if (recorder.state !== 'inactive') recorder.stop();
    // Auto-download what we have so far (partial recording > nothing)
    stopped.then((blob) => {
      if (blob.size > 0) downloadBlob(blob, filename);
    }).catch(() => {});
    userStoppedCallbacks.forEach((cb) => { try { cb(); } catch { /* ignore */ } });
  };
  stream.getVideoTracks().forEach((t) => t.addEventListener('ended', onTrackEnded));

  recorder.start(1000); // emit chunks every 1s
  const startedAt = Date.now();

  return {
    recorder,
    stream,
    mime,
    startedAt,
    isActive: () => recorder.state === 'recording',
    onUserStopped: (cb) => userStoppedCallbacks.push(cb),
    async stop({ autoDownload = true, filename: fn = filename } = {}) {
      if (recorder.state !== 'inactive') recorder.stop();
      const blob = await stopped;
      stream.getTracks().forEach((t) => t.stop());
      if (autoDownload && blob.size > 0) downloadBlob(blob, fn);
      return blob;
    },
  };
}

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
    a.remove();
  }, 100);
}

export function estimateFileSize(durationSec, bitrate = 2_000_000) {
  return Math.round((durationSec * bitrate) / 8);
}

export function formatBytes(bytes) {
  if (!bytes) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

export function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}j ${m}m`;
  if (m > 0) return `${m}m ${s}d`;
  return `${s}d`;
}
