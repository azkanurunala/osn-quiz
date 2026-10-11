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

## Object images: prompts & review (`osn-app/image-prompts`, `osn-app/image-results`)

Gemini image prompts for every visual object used in the soal (organs, animals, plants, cells, tools, planets, geometric solids…), and a results folder that the user fills with generated images for Claude to verify.

- [osn-app/image-prompts/](osn-app/image-prompts/): one `.md` per object, generated from `_src/catalog-*.mjs` (object data) plus `_src/penampang.mjs` (cross-section parts and colors). **Never edit the `.md` files by hand.** Edit the source files, then run `node image-prompts/_src/gen.mjs` from `osn-app/`. Each file has A. Realistis, B. Ilustrasi, and, where interior parts matter, C. Penampang (cut-open schematic plus see-through, regions separated by dashed lines, empty callout circles for labels added later in the app). Every prompt: full body, no 3/4 angle, solid white or black background, no text.
- **Views per object (`views` in the catalog).** The app only ever uses the front picture (ilustrasi-depan, realistis-depan as fallback), the side picture when the soal stem literally says samping/menyamping/tampak sisi/gurat sisi/sirip, and a labelled cut-open picture. A back view is never selected, and no organ soal asks for a side or back view. So organs get only the views they need: `views: ['depan']` for most organs, `['depan','kiri']` where the side view shows what the front cannot (tengkorak, otak), `['depan','belakang']` where the back does (kerangka-manusia, otot-lengan: triceps), `['depan','belakang','kiri']` for tulang-belakang (S-curve from the side, scoliosis from behind). Only one side view (kiri) is kept; the right view is a mirror. Slot numbers stay those of the full set (existing files, verdicts and the app keep working), the turnaround sheet only exists when all four views are wanted, `gen.mjs` writes the expected slots to `image-results/_slots.json`, and the gallery, `_STATUS.md` and the montage follow it; pictures of views no longer needed stay in the folder as archive (collapsed in the gallery). Add `views` to a new organ instead of generating all four views. For the brain the catalog `f` says LEFT/RIGHT = full side profile, so build-objek-foto leads with the lateral view.
- [osn-app/image-results/](osn-app/image-results/): same folder tree, one folder per object, one slot per prompt: `pNN-<versi>-<tampak>.png` (the save path is printed under every prompt). Empty slots hold a `.svg` placeholder; running the generator deletes the placeholder once a `.png`/`.jpg`/`.webp` with the same name exists. `_STATUS.md` (generated) summarises filled and approved slots. `_review.json` holds review verdicts. It is the only file in this folder Claude edits by hand.

### Web sources & reference images (done per bab, in order IPA 01 → … → MTK 08)

Every object must be verified against web sources before the user generates it.
- `_src/sumber.mjs`: per id, Wikipedia EN titles (`w`), optional Commons override (`img: 'File:…'`), extra refs (`x`).
- `node image-prompts/_src/fetch-acuan.mjs [ids…] [--force]` (from `osn-app/`): fetches the article summary + ID langlink and downloads the lead image, or the `img` override, to `image-results/…/<id>/acuan.jpg`. Only free licenses are accepted (CC0 / CC BY / CC BY-SA / public domain; GFDL, NC and ND are rejected). Results are cached in `_src/sumber.cache.json`.
- Then **look at every acuan image** (build a PIL contact sheet) and replace any that do not match the object: wrong species or stage, a non-anatomy photo, a portrait instead of the subject, etc. Search Commons, view candidates, and pin the chosen file with `img`.
- **Read the article extracts and fix catalog facts that contradict them.** Earlier examples: fruit bats do not echolocate, so a separate microbat object was added; Indonesian "teratai" is *Nymphaea*, not lotus; *Tarsius spectrum* has no adhesive toe pads.
- Reference images are for Gemini input only and must never be used directly in the app or videos.
- Stock images used directly in the app (only when Gemini and the vector scripts cannot produce the picture, e.g. a realistic organ that kept failing) must be CC0 / public domain, or Pixabay / Pexels / Unsplash with the license page saved as proof. Never CC BY or CC BY-SA. The picture itself stays free of text, letters, and URLs, and its pixels are not edited. Record each one in `osn-app/image-results/_stok.json` (source URL, author, exact license, download date, object and slot, proof screenshot) instead of writing anything on the image. A slot the app does not publish needs no stock picture: check `scripts/build-objek-foto.mjs` slot order first.
- Up to 5 references per object (`acuan-1..5.*`). Workflow per bab: fetch candidates (article images + optional Commons search `q`) → build a PIL contact sheet (one row per object, 5 columns) → view it → pin the good ones with `img: [...], only: true` (and drop `q`) so refetches are deterministic → refetch. Never keep nudity/genital photos, gore, alcohol, people-centric photos, icons, maps, charts, or wrong species. For reproduction, keep clinical diagrams only.
- Status: ALL 306 objects done: 768 visually verified references, all pinned (`only: true`). Only `tekanan-hidrostatis-botol` has no reference, because no suitable free image was found; its prompt text is the only guide.
- Contact-sheet gotcha: composite RGBA onto white before converting to RGB. Transparent PNG diagrams otherwise render as solid black and look like broken images.

### Coverage audit (every soal in every video)

`node image-prompts/_src/audit-cakupan.mjs` (from `osn-app/`) maps each soal of each video in `recordings-final/` (numbered like `scripts/record-videos.mjs`) to: `foto` (a reviewed object picture the app shows), `diagram` (an app SVG diagram), `objek` (a catalog object is named but no approved picture is shown yet) or `tidak` (nothing). It writes `image-prompts/_CAKUPAN.md` and `_src/cakupan.json`. New objects found this way go in `_src/catalog-tambahan.mjs` (single view, `v: 1`). The remaining `tidak` soal are mostly abstract (definitions, unit conversions, hormones, years, arithmetic) and have no meaningful single picture; MTK soal are covered by diagrams, not photos.

- Pair review (2026-10-11): `node image-prompts/_src/audit-alasan.mjs <out.json>` lists, for every soal in every package, the picture/diagram the app shows and, for a soal that names exactly one catalog object but gets no picture, the rule that rejected it. A text review of every shown (soal, picture) pair found keyword collisions ("gempa bumi" showing the planet, "gas rumah kaca" showing states of matter, "venus flytrap" showing the planet, ...); they are fixed with `REQUIRE_EXTRA` / `NOT_FOR_EXTRA` in `src/features/diagrams/objekFoto.js`. After changing those, diff two audit runs: pairs may only disappear where the soal is not about the object. About 140 catalog pictures are shown for no soal at all; that is intended (precision over coverage): no soal names them as the single subject.
- MTK plain solids with an exact picture (`kubus`, `balok`, `tabung`, `kerucut`, `limas-segiempat`) are in `MTK_PHOTO_IDS` of `scripts/build-objek-foto.mjs`; the concept diagram still wins when both match. State-dependent props (clock time, speedometer reading, pizza slices, dice face, cards, spinner, geoboard, matchsticks, unit-cube stacks) and set pictures stay out: a fixed picture would contradict the soal's own numbers. A soal-specific clock drawn from the stated time would be the right fix for the ~135 jam-analog soal.

### Automated generation

`node image-prompts/_src/gemini-gen.mjs <ids…>` (from `osn-app/`) calls the Gemini API with each prompt plus its `acuan-*` images, runs front→back→left→right in one multi-turn session for consistency, and writes straight into the `image-results/` slots. It skips filled slots unless `--force`. Use `--dry-run` to see the plan, `--models` to list image models, and `--slots p03,p04` to redo specific slots. The key comes only from env `GEMINI_API_KEY`; never ask the user to paste it into chat or write it to a file. Every generated image still goes through the review procedure below.
- **Billing:** Google Cloud free-trial credits do **not** apply to the Gemini API / AI Studio (excluded since March 2026). Use `--vertex` instead. It calls Vertex AI in project `project-a087bc92-937b-4ba3-859` (account azukanurunara94@gmail.com), with auth from the separate gcloud configuration `osn-sd` via `gcloud auth print-access-token`, and no API key. Never touch the `default` gcloud config, which belongs to an unrelated client project. Whether Vertex usage is actually deducted from the free-trial credits must be confirmed in Billing → Reports before any large run.
- Turnaround sheets are **not generated** (every model kept getting the 4 panels wrong: duplicate fronts, both profiles facing the same way, 3/4 angles). The generator skips them unless `--turnaround`. Run `python image-prompts/_src/montase-turnaround.py` (from `osn-app/`) after a review round: it builds each turnaround from the four single views (depan, belakang, kiri, kanan) once all four are `ok`, and records an `ok` verdict that says it was assembled.
- Redoing rejected slots: move the image to `*.lama.png` and its verdict to `"<key>.lama"`, then run with `--fix --slots …`. `--fix` appends the quoted English correction prompts from the `.lama` verdict to the prompt. Slots in the same session that are not being redone are fed back as context, not regenerated, so approved images are never overwritten. Vertex model names have no `-preview` suffix (`gemini-3.1-flash-image`, `gemini-3-pro-image`).
- MTK precision props (dadu, spinner, jam-analog, tangram, sempoa, speedometer, kubus, balok, limas-segitiga, limas-segiempat, prisma-segitiga, kerucut p02–p05, bola, bangun-ruang-set, bangun-datar-set, alat-geometri-set, geoboard, batang-korek-pola, cokelat-batang, kue-bolu-pecahan p01, jaring-jaring-kubus, kubus-satuan, kartu-bernomor, susunan-pola-bola, timbangan-aljabar, pizza-pecahan p01) and IPA props where wiring, counts or geometry kept failing (rangkaian-seri, rangkaian-paralel, periskop p11–p12, baterai-set p03–p04, katrol-bergerak, katrol-tetap all eight views, kompas p01; and, drawn by `image-prompts/_src/vektor-ipa.mjs`, ambulans-doppler, distilasi, kromatografi p02, model-atom p04, slinki p02, termos-penampang p03–p04, lensa-cembung-cekung-set, larutan-koloid-suspensi p03–p04, molekul-set p02, termometer-set p03, mikroskop p03/p11/p12, kamera-lubang-jarum p02, periskop p07–p10, bidang-miring-papan p10, dinamo-sepeda p09–p10, transformator p10–p11, kincir-angin p10, kipas-angin p05, bel-listrik p02, gelas-ukur p02–p05, stopwatch all views, neraca-ohauss all views, alat-gelas-lab-set p01, speaker-mikrofon-set p03, teropong-bintang p11–p12, tata-surya-deret, rasi-orion p01, fase-bulan-deret, bumi-lapisan p03–p04, jupiter p11–p12, profil-tanah, pelangi, gunung-meletus p03–p04, pasang-surut-set p02, telur-ayam p03–p04, penampang-daun p03–p04, akar-tunggang-serabut-set p04, sel-tumbuhan p09–p11, sel-hewan p02/p04/p05/p09/p10/p12, alveolus p03–p04, lambung p11, mata p11, mata-penampang p01–p03, lebah p08, hati-empedu p09/p10, lidah p10, sistem-pernapasan p12, kentang-bertunas p12, vaksin-suntik p01, tingkatan-organisasi-makhluk-hidup-set p02, daur-katak-set p03–p04, tulang-rusuk p07–p10 (p02–p05 are Gemini photos), sistem-urinaria p07/p08/p11/p12, tulang-belakang p10–p12, tulang-paha-penampang p03–p04, reproduksi-pria p02–p04, jupiter/merkurius/venus p08–p10, bulan p09–p10, kepiting p08, nyamuk-aedes p08, usus-halus-besar p08) are drawn as exact vectors by `node image-prompts/_src/vektor-mtk.mjs --install [--only=ids] [--empty]` (`--empty` fills only slots that have no picture yet) or, for the `vektor-ipa.mjs` ones, `node image-prompts/_src/vektor-ipa.mjs --install [--only=ids]`, not Gemini, which kept getting counts and angles wrong. Never regenerate those slots with gemini-gen; change the drawing code instead.
- Views Gemini keeps getting wrong (rear / underside / left lateral) and organic organs whose flat vector looks crude: `node image-prompts/_src/gemini-ref.mjs --vertex --guide <image> --species <approved picture> --subject "<parts that must be visible>" --out <dir> [--n 3]` (from `osn-app/`) renders candidates with Gemini from a composition guide (a vector drawing, or an approved picture of the target view) plus an approved picture for style. Use a style picture of a **different** object when restyling a view, otherwise the model copies the style picture's composition. It writes candidates only; review each one (count legs/limbs/vessels by hand, reject floating or duplicated parts), then install by hand: archive the old slot as `<slot>.lamaN.png` and its verdict as `"<key>.lamaN"`. Done this way: kecoak p03, lebah p03, nyamuk-aedes p03, jantung p04/p08/p09/p10, ginjal-penampang p01. Reference photos of the target view (any free license) are fine as `--guide` input, never as the published picture.
- Planet turnarounds (bumi, jupiter, mars, merkurius, venus) are rendered by `python image-prompts/_src/planet-peta.py` (from `osn-app/`) from public-domain NASA maps (orthographic projection, so 90°/180° views are true rotations; Gemini cannot rotate a sphere). It fills only empty slots; the maps are cached in the gitignored `image-prompts/_src/_peta/`. Venus is a procedural pale cloud deck (visible light is featureless), say so in the verdict.
- Biology see-through/cut-away pictures Gemini kept failing (blood cells, blood vessels, intestinal villi, corn/bean seeds, hibiscus, corn and peanut plants) are drawn by `node image-prompts/_src/vektor-bio.mjs --install --empty`. Same rule as above: change the drawing code, never regenerate those slots with gemini-gen.
- Order of preference for a missing slot (user decision, 2026-10-11): 1) exact SVG→PNG drawing or a render from public-domain data, 2) a CC0 / public-domain stock picture (NASA/JPL etc.; record the file, license and credit in the verdict), 3) Gemini last. Never write a verdict for a slot before checking the file is the one you made: another session may have generated the same slot meanwhile.
- `--hemat` generates only the illustration front/top view plus the cut-open cross-section per object (~400 images). `--biaya` totals estimated cost from `image-results/_usage.jsonl`. Pricing per image (paid tier, 2026): Nano Banana `gemini-2.5-flash-image` $0.039 · Nano Banana 2 `gemini-3.1-flash-image` $0.067 (1K) · Nano Banana Pro `gemini-3-pro-image` $0.134 (1K/2K).

### Pictures in the app (`osn-app/scripts/build-objek-foto.mjs`)

- `node scripts/build-objek-foto.mjs` (from `osn-app/`) publishes only `ok` slots to `public/objek/`: a main picture per object (animals use their side profile), plus optional `-samping` and `-penampang` views. Re-run it after every review round.
- Penampang part names live in `image-prompts/_src/label-penampang.mjs` (`x, y` point ON the part, `t` name, `kw` soal words, `sha` of the PNG). The app picks the cut-open view only when a soal names a labelled part, and in the explanation phase (never the question phase) points at the parts the stem or the correct answer names. Read coordinates off a 5% grid overlay at full size, and label only parts the picture draws correctly. A regenerated picture changes its `sha`, so its labels are dropped until they are re-read.

### Reviewing images (when the user says "cek/review gambar…", or `_STATUS.md` shows 🔍)

The goal is that no image misleads students. A wrong picture in a science question is worse than no picture.

1. Run `node image-prompts/_src/gen.mjs` (from `osn-app/`) to refresh `_STATUS.md` and list which slots are 🔍 (have an image, not yet reviewed).
2. For each image: **open it with Read** (never judge from the filename or prompt alone), and read that object's prompt `.md` (the matching `Prompt NN`) plus its `penampang.mjs` entry if it is a C slot, and compare against the object's `acuan.*` reference and its Wikipedia sources. If the result copies the acuan's composition too closely, mark it `revisi`, because that is a licensing risk.
3. Check **scientific accuracy** against real science, not just against the prompt (the prompt can be wrong too):
   - Part counts: insect legs 6, spider legs 8, frog 4 front / 5 back toes, shark gill slits, lung lobes (right 3, left 2), heart 4 chambers, rib pairs 12, cube edges/vertices, etc.
   - Positions and anatomical left/right: in a front view the person's left appears on the viewer's right (heart apex and stomach on the image's right, liver on the image's left).
   - Shape, proportion, color, and textbook color conventions (red = oxygen-rich, blue = oxygen-poor), and correct species features (e.g. female Aedes has pilose antennae, swallowtail pupa is attached upright with a girdle).
   - Physics/chemistry setups behave correctly (condenser water in at the bottom, series vs parallel wiring, chromatography spot above the solvent line).
4. Check **prompt compliance**: correct view (front/back/left/right/top; no 3/4), full body with nothing cropped, solid clean background, no text/letters/numbers/logos/hands, correct style (A photoreal / B illustration / C schematic with dashed region borders and empty callout circles), consistency with the same object's other views.
   - Exception (user decision, 2026-10-09): dial numerals and letters that belong to the instrument (stopwatch 5–60, compass N-E-S-W and degrees, scale markings) and battery +/− polarity symbols are allowed **only when correct and in order**. Garbled, duplicated, out-of-order, or wrong ones still fail. Brand names and labels are still not allowed.
5. Write the verdict into `osn-app/image-results/_review.json`, key `"<id>/<pNN-file>"` (no extension):
   `{ "status": "ok" | "revisi" | "salah", "catatan": "<Indonesian, specific: what is wrong + a ready-to-paste English correction prompt for Gemini>" }`
   - `ok` only when fully confident it is scientifically correct and compliant.
   - `revisi` = small fixable issue, or uncertain detail that needs a human (say exactly what to verify).
   - `salah` = misleading science. Must be regenerated.
6. Re-run the generator, then report a short summary (lolos / revisi / salah with reasons).

Rules: never approve when unsure. Mark it `revisi` and name the doubt (Claude can miss tiny details such as fin rays or bristle counts). Never edit or "fix" image pixels. If the error comes from the prompt text itself, fix the catalog/penampang source, regenerate, and note it in the verdict. Organ, cell, and reproduction images should additionally be signed off by a science teacher before release. Say so in the summary.
