# v30 QA Notes

## Automated checks completed
- JavaScript syntax (`node -c`) passed.
- CSS parsed with `tinycss2` with zero parse errors.
- HTML checked for duplicate IDs, missing `main#main`, and missing local file references.
- `manifest.webmanifest` JSON validation passed.
- `finalize_deployment.py` compiled and was tested against a temporary HTTPS domain; canonical URLs, `og:url`, absolute social-image URLs, `robots.txt`, and `sitemap.xml` were generated correctly.
- Chromium DOM regression checks passed at desktop (1440×1000) and mobile (390×844) dimensions for Home, Research, About, Connect, and 404 with no JavaScript page errors. Checks included theme switching, research glossary modal, project modal, hidden/visible publication renderer, timeline filtering/expansion, and 404 copy.

## Browser compatibility polish
The CSS includes WebKit-specific rendering guards, safe-area handling, reduced-motion behavior, touch targets, bottom-sheet modal rules, and conservative typography fallbacks. The test environment provides Chromium; final device-level verification on Safari/iPhone and Microsoft Edge should still be done after the real deployment URL is connected.

## v32 layout hotfix
- Interactive timeline legacy grid conflict fixed: `.timeline-item` is now a full-width block and the inner trigger owns the desktop grid.
- Timeline titles/institutions no longer collapse into a narrow column on desktop.
- Hero-side decorative corner line/dot removed because it could overlap the avatar speech bubble at some viewport sizes.
- Mobile timeline retains its compact one-column summary layout.


## v32 QA repair pass
- Replaced font-glyph/rotated timeline controls with centered CSS geometry: plus at rest, minus on preview/expanded.
- Rebuilt Research hero into explicit left/right wrappers to prevent implicit CSS Grid auto-placement from leaving the left column visually empty.
- Added compact doctoral metadata to the Research hero and responsive stacking rules.
- Added overflow hardening for sticky research navigation, timeline summaries, project/research grid children, and narrow mobile widths.
- Cache-busting references updated to `?v=32`.

## v34 course-project QA
- Added DDA4300 Online Linear Programming & Resource Allocation as a report-backed project.
- JavaScript syntax check passed after adding the new case-study data and command-palette entry.
- CSS parse check passed with zero errors.
- HTML duplicate-ID and local-reference audit passed with no missing files.
- Manifest JSON validation passed.


## v35 report-preview QA
- Removed all data-copy-bio controls and short-bio JavaScript.
- Added a dedicated project-report PDF preview modal above case-study modals.
- Verified report preview links exist for all four report-backed projects on Research and both featured projects on About.
