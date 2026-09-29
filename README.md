# Frederick Research Portfolio v47

v47 is a technical-cleanup release focused on maintainability, shorter Home-page copy, page-specific CSS delivery, build-date automation, and another mobile/accessibility pass. The visual direction remains the same as v46.

## What changed in v47

- Shortened the Home hero, featured-project description, recent-path heading, and teaching summaries so the landing page is faster to scan.
- Removed dead Command Palette / Focus Glossary CSS and stale related copy left from earlier versions.
- Renamed the remaining versioned accessibility binder to a final production name.
- Reorganized CSS into `css/core.css` plus page-specific files: `home.css`, `research.css`, `about.css`, and `connect.css`. Each page now loads only `core.css` plus its own page stylesheet.
- Added `buildDate` to `site-config.js`. Footer freshness text and CV-preview metadata are generated from it instead of being manually maintained in JavaScript.
- `finalize_deployment.py` refreshes `buildDate` automatically when preparing a public deployment.
- Updated documentation so it reflects report-backed project visuals, conceptual previews, current avatar behavior, and the current deployment workflow.
- Re-ran mobile and accessibility checks after the cleanup.

## Main files

- `index.html` — Home
- `research.html` — Research & Projects
- `about.html` — About
- `connect.html` — Contact
- `script.js` — shared interaction, bilingual content, project data, report/CV readers, avatar behavior
- `css/core.css` — shared design system and shared components
- `css/home.css` — Home-only styling
- `css/research.css` — Research-only styling
- `css/about.css` — About-only styling
- `css/connect.css` — Connect-only styling
- `site-config.js` — production URL, build date, academic profile URLs, analytics, project Code/Demo links

## Project evidence

Four selected projects use visual artifacts and PDFs from Frederick's actual course-project reports:

- Diffusion Models for X-ray Image Generation
- Evaluation of LLMs on Jailbreak & Adversarial Attacks
- Online Linear Programming & Resource Allocation
- RAG System for Internal Knowledge Management

Group-project credits are preserved. Where the reports do not specify an individual task split, the case study does not invent one.

`KnowYourBody` and `SmartBot` currently use clearly labeled conceptual UI previews because original application screenshots have not been supplied.

## CV files

- `Frederick_Khasanto_CV_2026.pdf` — latest academic CV
- `Frederick_Research_Profile.pdf` — one-page research profile

## Publications

The publication renderer in `script.js` is ready, but the publications array is intentionally empty until real publication metadata is supplied. The section stays hidden while empty.

## Academic profile and project links

Google Scholar, ORCID, Code, and Demo links remain hidden until real URLs are added in `site-config.js` or supplied during deployment. No placeholder account URLs are shown to visitors.

## Deployment

A public domain has not been supplied, so the package intentionally keeps the production host unset. Before publishing, run:

```bash
python finalize_deployment.py https://your-real-domain.com
```

Optional Scholar and ORCID URLs can be passed at the same time. See `DEPLOYMENT.md`.
