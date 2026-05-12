# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **content-generation workspace** — not a software project. It packages and produces Indonesian elementary-school olympiad (OSN/KSN SD) prep materials. There is no build, no tests, no runtime: the "code" is a Claude Skill bundle plus its generated output files.

Three top-level directories:

- [osn-sd-prep.skill](osn-sd-prep.skill) — the distributable, a zip archive (~35 KB) containing the full skill bundle. Treat as a build artifact: regenerate from the extracted source, don't edit directly.
- [osn-sd-prep-extracted/osn-sd-prep/](osn-sd-prep-extracted/osn-sd-prep/) — the **canonical source** of the skill. Edit here.
  - [SKILL.md](osn-sd-prep-extracted/osn-sd-prep/SKILL.md) — the skill spec (~490 lines): trigger phrases, three operating modes, quality rules, anti-patterns. Read this end-to-end before changing skill behavior.
  - [references/](osn-sd-prep-extracted/osn-sd-prep/references/) — five reference files the skill loads on demand. `template-html-interaktif.md` (default HTML output template) and `template-materi.md` (markdown alt) define output structure; `taksonomi-matematika.md` and `taksonomi-ipa.md` define per-chapter sub-topic distribution; `contoh-kualitas.md` is the quality benchmark.
- [output/](output/) — generated prep packages, one file per (chapter × difficulty) cell. [_MASTER-INDEX.md](output/_MASTER-INDEX.md) is the 96-file roadmap with `[ ] / [x]` status checkboxes — update it as files are produced.

## Repackaging the skill

After editing anything under `osn-sd-prep-extracted/osn-sd-prep/`, rebuild the `.skill` zip so the distributable matches source. From the repo root in PowerShell:

```powershell
Remove-Item osn-sd-prep.skill -Force
Compress-Archive -Path osn-sd-prep-extracted\osn-sd-prep -DestinationPath osn-sd-prep.skill.zip
Rename-Item osn-sd-prep.skill.zip osn-sd-prep.skill
```

The zip's top-level entry must be the `osn-sd-prep/` folder (not its contents loose).

## Generating prep files (the actual work)

When asked to "generate file X" or "lanjutkan dari MASTER-INDEX", you are executing the skill's Per-Materi or Komprehensif mode against this repo. The skill's full ruleset lives in `SKILL.md`; the load-bearing constraints worth surfacing here:

- **100 PG (multiple-choice) soal per file. Not 5, not 25 — exactly 100.** A and D are the only valid option counts (always 4: A–D).
- **Pembahasan must analyze ALL FOUR options A/B/C/D** — not just the correct one. Each wrong option needs a *pedagogical* reason it was chosen (a specific misconception), not "this one is just wrong."
- **Default output format is single-file interactive HTML** with the Velo CT design system (DM Sans + IBM Plex Sans, glassmorphism, red CTA `#E53935`, Lucide icons). Use the template in `references/template-html-interaktif.md` verbatim and inject a `SOAL_DATA` array of 100 objects. Markdown `.md` only on explicit request ("format markdown", "versi teks").
- **Save into [output/](output/)** — file naming follows `osn-sd-{mapel}-{kode}-{slug}-{tingkat}.{html|md}` (e.g. `osn-sd-mtk-02-pecahan-desimal-persen-campur.html`). The skill text mentions `/mnt/user-data/outputs/` — that's the claude.ai sandbox path; in this local repo, write to `output/` instead.
- **After each file, tick its box in [output/_MASTER-INDEX.md](output/_MASTER-INDEX.md)** (`[ ]` → `[x]`). The index is the source of truth for what's done.
- One file per turn. Each file is ~60K output tokens (100 soal × ~280 words including 4-option analysis + steps + tips + SVG diagrams where geometry/circuits/charts are involved). If you near the context limit mid-file, stop and instruct the user how to resume — never deliver a half-file.

## Language & audience

All generated content is **Bahasa Indonesia, ramah anak SD kelas 5–6**. Conversation with the user is also typically in Indonesian. The skill spec, references, and master index are all in Indonesian — match that register when editing them.

## Difficulty tier conventions

Six tiers per chapter (defined in `output/_MASTER-INDEX.md`): `campur` (50 Kab + 30 Prov + 20 Nas, the default OSN profile), `mudah` (100% Kab), `sedang` (100% Prov), `sulit` (100% Nas), `mudah-sedang` (50/50), `sedang-sulit` (50/50). The tier slug is the last token of the filename and drives both the cognitive level (C2–C3 / C3–C4 / C4–C5) and the step count per soal.

## Things to avoid

- Don't edit `osn-sd-prep.skill` directly — edit the extracted source and repackage.
- Don't shorten a generated file below 100 soal "to save tokens." If capacity is the issue, defer the file.
- Don't skip the 4-option analysis in pembahasan even on "easy" Kab-tier soal — it's the skill's defining quality bar.
- Don't invent justifications for distractors. If a distractor is a pure-guess "umpan," label it as such honestly.
