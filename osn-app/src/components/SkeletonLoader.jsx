/**
 * SkeletonLoader.jsx
 *
 * Reusable skeleton placeholders that mirror the proportions, padding, and
 * rounded shapes of real Velo CT cards (DM Sans + IBM Plex Sans, glassmorphism,
 * #E53935 brand). Use them while data/lazy chunks are loading.
 *
 * Usage examples:
 *
 *   import Skeleton, { QuestionCardSkeleton, PembahasanSkeleton, RoadmapItemSkeleton, StatsCardSkeleton } from './SkeletonLoader';
 *
 *   // 1) Soal card while quiz data hydrates:
 *   {loading ? <QuestionCardSkeleton /> : <PracticeArea ... />}
 *
 *   // 2) Pembahasan panel placeholder during transition:
 *   {checking ? <PembahasanSkeleton /> : <PembahasanContent q={q} />}
 *
 *   // 3) Dashboard roadmap loading state:
 *   <div className="space-y-4">{Array.from({ length: 5 }).map((_, i) => <RoadmapItemSkeleton key={i} />)}</div>
 *
 *   // 4) Stats card grid placeholder:
 *   <div className="grid grid-cols-1 md:grid-cols-4 gap-6">{Array.from({ length: 3 }).map((_, i) => <Skeleton.StatsCard key={i} />)}</div>
 */

import React from 'react';

// Base shimmer block — gray-200/50 + animate-pulse, kept consistent across the file.
const Bar = ({ className = '' }) => (
  <div className={`bg-gray-200/50 rounded-md ${className}`} />
);

/**
 * QuestionCardSkeleton — mirrors the soal card in PracticeArea
 * (glass-card rounded-3xl p-8 space-y-6, pill tag, title lines, 4 option pills, button row).
 */
export function QuestionCardSkeleton() {
  return (
    <div className="glass-card rounded-3xl p-8 space-y-6 animate-pulse max-w-2xl w-full mx-auto">
      {/* Header row: meta pills + level badge */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Bar className="h-5 w-16 rounded-full" />
          <Bar className="h-5 w-20 rounded-full" />
        </div>
        <Bar className="h-6 w-24 rounded-full" />
      </div>

      {/* Title: 2 lines */}
      <div className="space-y-2.5">
        <Bar className="h-5 w-11/12 rounded-lg" />
        <Bar className="h-5 w-3/4 rounded-lg" />
      </div>

      {/* 4 option pills */}
      <div className="grid grid-cols-1 gap-3">
        {['A', 'B', 'C', 'D'].map((k) => (
          <div
            key={k}
            className="w-full flex items-center justify-between p-4 rounded-2xl border border-gray-200/40"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gray-200/60 shrink-0" />
              <Bar className="h-3.5 w-48 rounded" />
            </div>
            <Bar className="h-3 w-6 rounded" />
          </div>
        ))}
      </div>

      {/* Button row: prev/next + primary CTA */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <div className="w-11 h-11 rounded-2xl bg-gray-200/60" />
          <div className="w-11 h-11 rounded-2xl bg-gray-200/60" />
        </div>
        <div className="h-11 w-32 rounded-2xl bg-gray-200/60" />
      </div>
    </div>
  );
}

/**
 * PembahasanSkeleton — mirrors PembahasanContent
 * (heading row with icon, concept box, 4 analysis rows, 3 numbered step rows).
 */
export function PembahasanSkeleton() {
  return (
    <div className="glass-card rounded-3xl p-8 border-l-4 border-gray-200/60 space-y-6 animate-pulse">
      {/* Heading row: icon tile + title/subtitle */}
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-xl bg-gray-200/60 w-9 h-9" />
        <div className="space-y-1.5">
          <Bar className="h-4 w-56 rounded" />
          <Bar className="h-3 w-72 rounded" />
        </div>
      </div>

      {/* Konsep Kunci box */}
      <div className="rounded-2xl p-4 border border-gray-200/40 bg-gray-100/30 space-y-2">
        <Bar className="h-3 w-24 rounded" />
        <Bar className="h-3.5 w-full rounded" />
        <Bar className="h-3.5 w-5/6 rounded" />
      </div>

      {/* 4 analysis rows */}
      <div className="space-y-3">
        <Bar className="h-3 w-48 rounded" />
        <div className="grid grid-cols-1 gap-2.5">
          {['A', 'B', 'C', 'D'].map((k) => (
            <div
              key={k}
              className="p-3.5 rounded-xl border border-gray-200/40 space-y-2"
            >
              <Bar className="h-3 w-11/12 rounded" />
              <Bar className="h-3 w-2/3 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* 3 step rows */}
      <div className="space-y-3">
        <Bar className="h-3 w-40 rounded" />
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-2.5 items-start">
              <div className="w-5 h-5 rounded-full bg-gray-200/60 shrink-0" />
              <div className="flex-1 space-y-1.5 pt-0.5">
                <Bar className="h-3 w-full rounded" />
                <Bar className="h-3 w-4/5 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * RoadmapItemSkeleton — mirrors Dashboard's RoadmapColumn items
 * (glass-card rounded-2xl p-5, circle+title left, progress bar+% right).
 */
export function RoadmapItemSkeleton() {
  return (
    <div className="glass-card rounded-2xl p-5 flex items-center justify-between animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-200/60" />
        <div className="space-y-2">
          <Bar className="h-3.5 w-40 rounded" />
          <Bar className="h-3 w-28 rounded" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-24 h-2 rounded-full bg-gray-200/60 overflow-hidden" />
        <Bar className="h-3 w-8 rounded" />
      </div>
    </div>
  );
}

/**
 * StatsCardSkeleton — mirrors the small Daily Streak / XP cards on the Dashboard
 * (glass-card rounded-3xl p-6 flex flex-col justify-between).
 */
export function StatsCardSkeleton() {
  return (
    <div className="glass-card rounded-3xl p-6 flex flex-col justify-between gap-6 animate-pulse min-h-[148px]">
      <div className="flex items-center justify-between">
        <Bar className="h-3.5 w-24 rounded" />
        <div className="p-3 rounded-2xl bg-gray-200/60 w-12 h-12" />
      </div>
      <div className="space-y-2">
        <Bar className="h-7 w-20 rounded-lg" />
        <Bar className="h-3 w-36 rounded" />
      </div>
    </div>
  );
}

// Grouped namespace object so callers can do Skeleton.QuestionCard etc.
const Skeleton = {
  QuestionCard: QuestionCardSkeleton,
  Pembahasan: PembahasanSkeleton,
  RoadmapItem: RoadmapItemSkeleton,
  StatsCard: StatsCardSkeleton,
};

export default Skeleton;
