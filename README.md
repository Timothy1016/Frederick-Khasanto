## v35 report preview update

- Removed the 50-word / 100-word bio copy controls from Home and Connect.
- Added in-site PDF preview for report-backed projects, matching the existing CV preview experience.
- Project cards and featured work now open report previews inside the site, with Open PDF and Download actions available in the preview.
- Case-study modals also expose a Preview full report action.

## v34 course-project update

- Added the DDA4300 **Online Linear Programming and Resource Allocation** final project with a real report visual, team credit, case-study details, and downloadable PDF.
- Captured the report's key online-allocation results: Dynamic SLPM 96.9% of offline optimum, Dynamic Convex 90.0%, Action-History 99.8%, and SGD 99.1%.
- Renamed the source PDF to `Frederick_Khasanto_Project_Online_Linear_Programming_Resource_Allocation.pdf` under `reports/`.
- Updated project search and the Research page's report-backed project count.


## v33 project evidence update

- Added the CSC4100 **LLM Jailbreak & Adversarial Attack Evaluation** project with real metrics, report visual, team credit, and downloadable PDF.
- Added the **RAG System for Internal Knowledge Management** capstone with architecture, stack, latency result, team credit, and downloadable PDF.
- Upgraded the **X-ray Diffusion Models** project with the actual DDPM vs. DiNO-Diffusion comparison, dataset/evaluation details, real report visuals, and downloadable PDF.
- Replaced the About-page X-ray/placeholder feature visuals with real project-report artifacts.
- Added clean report filenames under `reports/` and report CTAs in project cards and case-study modals.
# Frederick Research Portfolio v23

This version is a PhD-first academic portfolio refresh.

## Main changes
- Home positioning updated to PhD in Intelligent Transportation at HKUST (Guangzhou)
- Advisor: Prof. Benedict Jun MA
- Current doctoral direction and research-focus strip added
- Academic timeline added
- Advisor / doctoral-research panels added to Home, About, and Research
- Publications section is prepared but stays hidden until publication entries are added
- Connect page now has Academic / Social filters; Google Scholar and ORCID hooks are prepared but hidden until URLs are available
- Project cards now show Role, Method, and Outcome
- Research collaboration CTA added
- Avatar orbit ring removed; only small contextual nodes react on hover / interaction
- Mini companion changes expression by page context
- Updated PhD-focused social / OG cover
- Updated JSON-LD academic profile metadata
- Added Academic CV and a one-page Research Profile PDF
- Added lazy loading, prefetch links, print styles, focus states, and reduced-motion support

## CV files
- `Frederick_Academic_CV.pdf` — updated academic CV
- `Frederick_Research_Profile.pdf` — one-page research profile

## Publications
The Publications section in `research.html` is hidden automatically while it has no `.publication-item` entries. Add publication items inside `[data-publication-list]` and the section will appear.

## Academic profile links
Google Scholar and ORCID hooks exist in `connect.html` but remain hidden until real URLs are available.


## v25 premium refinement
- Shorter, cleaner home hero headline and compact academic identity line.
- Rebalanced avatar/bubble composition with calmer idle behavior and hover previews.
- Sticky research section navigation with scrollspy.
- Refined project hover interactions and visual timeline styling.
- Lighter navbar scroll state and stronger mobile layout.
- WebP image variants, skip links, reduced-motion and keyboard/accessibility polish.
- CV modal metadata and `/` command-palette shortcut.


## v26 Academic Brand Refinement
- Reduced rounded-card treatment across Home, Research, and About for a more editorial academic layout.
- Added Selected Research Questions, explicitly framed as broad exploratory directions rather than fixed dissertation claims.
- Expanded project detail modal into Problem / Context / What I did / Result / What I learned / Tools.
- Added more expressive avatar states for thinking, listening, curious, answering, and easter-egg reactions.
- Audited typography and spacing with a consistent spacing scale and a system sans-serif for UI/meta labels while preserving Times New Roman for editorial content.


## v27 — Editorial Academic Brand Pass
- Rebalanced the Home hero into a single art-directed composition with a restrained research motif.
- Rebuilt the avatar interaction controller to prevent overlapping state timers, sticky press classes, and eye-tracking/expression transform conflicts.
- Eye tracking now runs on dedicated SVG wrapper groups so blink/expression transforms cannot corrupt cursor tracking.
- Added more distinct companion states for thinking, listening, answering, curious, and Easter-egg reactions.
- Reworked Research into a numbered academic index (01–05) while keeping the sticky section navigator.
- Refined About into a more editorial profile with a calmer portrait treatment and stronger academic timeline.
- Unified interface motion timing/easing across page, controls, avatar, and modal interactions.
- Rebuilt project details as compact case-study sheets: Brief, Question, Context, My role & approach, Outcome, Reflection, Methods & tools.
- Project images remain representative placeholders until original project screenshots/results are supplied.


## v28 production notes
- Clickable research-focus glossary added for Intelligent Transportation, Machine Learning, Data Science, Multimodal AI, and NLP.
- Publication renderer is ready in `script.js`; the `publications` array is intentionally empty until real paper metadata exists.
- Google Scholar and ORCID are intentionally hidden until real URLs are added to `siteConfig`.
- Privacy-friendly analytics are local-only (`localStorage`) and do not send visitor data to a server.
- `sitemap.xml` contains a deliberate `YOUR-DOMAIN.example` placeholder because no final public domain was provided. Replace it before deployment and then add the sitemap URL to `robots.txt`.
- `_headers` is included for hosts that support Netlify-style headers; GitHub Pages ignores this file.
- Browser resilience: the avatar has a no-JavaScript static fallback, reduced-motion support, and mobile layouts that avoid SVG transform dependencies.


## v29 — Editorial motion & research narrative
- 120 ms page exit and 220 ms page-entry choreography with the headline arriving first.
- One shared motion curve for buttons, project imagery, avatar UI, modals, and timeline interactions.
- Refined Times New Roman editorial typesetting with a disciplined system sans-serif layer for UI/meta text.
- Added a Research Perspective pull statement on the Research page.
- Academic timelines on Home and About now reveal short contextual notes on hover/focus and can be expanded by click/tap.


## v32 — Premium academic production pass

- Real-world field reference photography is loaded from Wikimedia Commons when online, with the original local project art kept as an offline/no-JavaScript fallback. These photographs are **contextual references, not project outputs**.
- Publication cards are production-ready and remain hidden until `publications` in `script.js` contains real entries. Supported fields: title, authors, venue, year, status, abstract, Paper, Code, DOI, arXiv, citation, and BibTeX.
- Dark mode now uses a warm charcoal / ivory art direction instead of a simple inversion.
- Signature visual language uses the companion's twin-eye + node motif across favicon, dividers, modals, and social artwork.
- About includes a more personal research perspective and the academic timeline now filters by Research / Teaching / Education.
- Mobile has dedicated hero, project, modal, and timeline composition.
- Mini floating companion was removed in the final deletion pass because the main interactive avatar already carries the character identity.

### Field-reference photo credits

1. X-ray project: **Arria Belli**, “Salle radiologie 1” — public domain, Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Salle_radiologie_1.jpg
2. KnowYourBody: **Nenad Stojković**, “Doctor stands in clinic holding tablet and discussing with patient” — CC BY 2.0, Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Doctor_stands_in_clinic_holding_tablet_and_discussing_with_patient.jpg
3. SmartBot: **Drnabeelmohdkk1**, “New Alma Hospital Reception” — CC0, Wikimedia Commons. https://commons.wikimedia.org/wiki/File:New_Alma_Hospital_Reception.jpg
4. Intelligent Transportation field reference: **Christophe95**, “Intersection in Central Jakarta” — CC BY-SA 4.0, Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Intersection_in_Central_Jakarta.jpg

### Final custom-domain step

A real domain was not supplied, so the package intentionally does **not invent one**. After the domain is connected, run:

`python finalize_deployment.py https://your-real-domain.com`

This fills `site-config.js`, `robots.txt`, `sitemap.xml`, static canonical URLs, and `og:url` values. Everything else is deployment-ready now.


## v32 production caveat
The project is deployment-ready, but the final public domain was not supplied. `finalize_deployment.py` intentionally leaves the production host unset until the real URL is known. Run `python finalize_deployment.py https://your-domain.com` before publishing to write canonical URLs, `og:url`, `robots.txt`, and `sitemap.xml`.

The project photographs used in v32 are contextual field references rather than claims of project output. If the remote Wikimedia image cannot load, the site keeps the bundled local project artwork as a graceful fallback.


### v32 layout fixes
The v32 repair pass corrects the Home/About academic timeline control geometry and the Research hero imbalance reported during visual QA. Timeline controls now render a true centered plus/minus without relying on font glyph rotation. The Research hero now uses explicit structural wrappers and compact academic metadata so its whitespace remains intentional across desktop, tablet, and mobile.
