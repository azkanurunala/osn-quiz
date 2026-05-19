// useSubBabData / useManifest — load data from public/data lazily.
// Usage:
//   const { manifest, loading } = useManifest();
//   const { data: questionsData, loading: subLoading } = useSubBabData(subBabId);

import { useEffect, useState } from 'react';

const cache = new Map();

export function useManifest() {
  const [state, setState] = useState({ manifest: null, loading: true, error: null });
  useEffect(() => {
    let cancelled = false;
    fetch('/data/_manifest.json', { cache: 'force-cache' })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((manifest) => { if (!cancelled) setState({ manifest, loading: false, error: null }); })
      .catch((err) => { if (!cancelled) setState({ manifest: null, loading: false, error: err.message }); });
    return () => { cancelled = true; };
  }, []);
  return state;
}

// Picks a 'campur' tier file for the requested subBabId/chapter; tries multiple fallbacks.
export function pickFile(manifest, requestedId, preferredTier = 'campur') {
  if (!manifest?.items) return null;
  const items = manifest.items;
  // 1. exact subBab match (sub-bab files use subBab field)
  let candidates = items.filter((it) => it.subBab === requestedId);
  if (candidates.length === 0) {
    // 2. chapter-level match (chapter files)
    candidates = items.filter((it) => it.chapter === requestedId);
  }
  if (candidates.length === 0) return null;
  
  const exactMatch = candidates.find((c) => c.tier === preferredTier);
  if (exactMatch) return exactMatch;
  
  const campurMatch = candidates.find((c) => c.tier === 'campur');
  if (campurMatch) return campurMatch;

  return candidates.find((c) => c.tier === 'sedang')
      || candidates.find((c) => c.tier === 'mudah')
      || candidates.find((c) => c.tier === 'sulit')
      || candidates[0];
}

export function useSubBabData(subBabId, manifest, preferredTier = 'campur') {
  const [state, setState] = useState({ data: null, loading: !!subBabId, error: null, fileMeta: null });

  useEffect(() => {
    if (!subBabId || !manifest) { setState({ data: null, loading: false, error: null, fileMeta: null }); return; }
    const meta = pickFile(manifest, subBabId, preferredTier);
    if (!meta) { setState({ data: null, loading: false, error: 'Sub-bab tidak ditemukan di manifest', fileMeta: null }); return; }

    if (cache.has(meta.file)) {
      setState({ data: cache.get(meta.file), loading: false, error: null, fileMeta: meta });
      return;
    }

    let cancelled = false;
    setState({ data: null, loading: true, error: null, fileMeta: meta });
    fetch(`/data/${meta.file}`, { cache: 'force-cache' })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        cache.set(meta.file, data);
        if (!cancelled) setState({ data, loading: false, error: null, fileMeta: meta });
      })
      .catch((err) => { if (!cancelled) setState({ data: null, loading: false, error: err.message, fileMeta: meta }); });
    return () => { cancelled = true; };
  }, [subBabId, manifest, preferredTier]);

  return state;
}

// Build a roadmap shape grouped by subject + chapter from the manifest.
export function buildRoadmap(manifest) {
  if (!manifest?.items) return { ipa: [], mtk: [] };
  const seenSubBab = new Map(); // subBab id → meta
  const seenChapter = new Map();

  for (const it of manifest.items) {
    if (it.type === 'subbab' && it.subBab) {
      if (!seenSubBab.has(it.subBab) || it.tier === 'campur') seenSubBab.set(it.subBab, it);
    } else if (it.type === 'chapter' && it.chapter) {
      if (!seenChapter.has(it.chapter) || it.tier === 'campur') seenChapter.set(it.chapter, it);
    }
  }

  // Prefer sub-bab when available; fall back to chapter-level entries
  const subBabBySubject = { ipa: [], mtk: [] };
  for (const meta of seenSubBab.values()) {
    if (subBabBySubject[meta.subject]) subBabBySubject[meta.subject].push(meta);
  }
  // If a subject has no sub-bab entries, fall back to chapter-level items
  for (const subj of ['ipa', 'mtk']) {
    if (subBabBySubject[subj].length === 0) {
      for (const meta of seenChapter.values()) {
        if (meta.subject === subj) subBabBySubject[subj].push(meta);
      }
    }
  }
  // Sort by sub-bab id (alphanumeric)
  for (const subj of ['ipa', 'mtk']) {
    subBabBySubject[subj].sort((a, b) => (a.subBab || a.chapter).localeCompare(b.subBab || b.chapter));
  }
  return subBabBySubject;
}

// Human label for a sub-bab from the slug + title
export function labelOf(item) {
  if (!item) return '';
  const t = item.title || '';
  const m = t.match(/(?:Sub-Bab|Sub-bab)\s+\S+\s*:?\s*(.+?)\s*(?:\(.*)?$/i);
  if (m) return m[1].trim();
  // Fallback: pretty slug
  return (item.slug || '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}
