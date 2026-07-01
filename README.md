# AIWO Tribe — Flagship Website

A world-class, award-calibre B2B website for the AIWO Corporate Workforce Longevity Programme,
built to the **Website Blueprint, Content & Execution Plan** and grounded in the brochure, board
deck and executive summary.

## What's here
**Twelve pages** — the full blueprint primary navigation plus conversion, templates and legal —
sharing one design system and interaction layer. Production-ready, dependency-free code
(no frameworks, no build step).

```
site/
├─ index.html              # Home flagship (S1–S12 + editorial band + dashboard + estimator)
├─ programme.html          # The Programme — Overview (sticky sub-nav, 12-month journey, BioMAP)
├─ solutions.html          # Solutions — by outcome / by industry / by role (two tabsets)
├─ proof.html              # Proof — Outcomes & KPIs (trajectory, two-level model, KPI scorecard)
├─ deliver.html            # How We Deliver — wave model, privacy, clinical, security, people
├─ pricing.html            # Pricing & Plans (tier toggle, comparison matrix, FAQ)
├─ resources.html          # Resources hub (featured insight, filterable grid, gated assets, glossary)
├─ company.html            # Company (mission, science team, leadership, values, partners, contact)
├─ book.html               # Book a Pilot (4-step form, review, success state)
├─ article.html            # Insights article detail template (prose, pull-quote, related)
├─ case-study.html         # Case study detail template (illustrative, context→trajectory→results)
├─ legal.html              # Legal & Trust Centre (Privacy, Cookies, Terms, DPDPA, Accessibility, Security)
├─ assets/css/styles.css   # "AIWO Longevity Spectrum" design system + all components
└─ assets/js/main.js       # Interaction layer (all guarded, runs across every page)
```

All pages share the mega-menu nav, mobile overlay, and mega-footer, and cross-link correctly —
the full primary nav (Programme · Solutions · Proof · How We Deliver · Pricing · Resources · Company)
plus the Book-a-Pilot flow, content templates, and legal/trust pages all resolve.

## Run it
Open `index.html` directly in a browser, or serve the folder:
```
python -m http.server 4173 --directory site
```
Then visit http://localhost:4173

## Design system (implemented)
- **Foundation:** black & white + neutrals (Ink `#0B0F17`, Mist, Cloud, Slate).
- **Primary — the Vitality Gradient:** Vital Teal `#00C2A8` → Electric Indigo `#4A29C9`.
- **Secondary:** Coral `#FF6B4A`. **Tertiary spectrum:** Sky, Violet, Magenta, Mint, Amber, Cobalt.
- **Type:** Sora (display) · Inter (body/UI) · IBM Plex Mono (eyebrows/data) via Google Fonts.
- Usage discipline: 60% neutral / 30% gradient / 10% accent; one warm CTA per viewport.

## Signature interactions (all transform/opacity, `prefers-reduced-motion` aware)
1. Animated gradient-mesh hero with cursor parallax
2. Floating organ-age dials with count-up + bar fills
3. SIIS 90-day loop — auto-rotating 4-stage ring, click to expand, in-view only
4. Framework quadrant with flow (BioMAP → SIIS → LongeVis → JoySpan)
5. Stat counters on scroll
6. JoySpan trajectory — SVG path draws on scroll with year markers
7. Interactive 11+1 pillar wheel (radial selector + synced detail panel)
8. Value tabs (five enterprise outcomes)
9. Pricing tier toggle (per-employee ↔ membership)
10. Sticky mega-menu nav + full-screen mobile overlay + sticky bottom CTA
11. Magnetic CTAs, gradient link underlines, card lift
12. Scroll progress bar + right-rail section navigation
13. **Art-directed editorial image band** — duotone (Ink + Teal/Indigo) treatment over real photography
14. **Employer Dashboard mock** — privacy-safe, filter by sector (All/Tech/Financial/Manufacturing),
    animated organ-age distribution bars, YoY sparkline, engagement ring, detection themes,
    ESG vitality index, and a visible "no individual data" lock
15. **Workforce Snapshot estimator** — live: headcount + age band + sector → directional risk flags,
    metabolic/GLP-1 priority count, productivity-exposure days, and a pilot recommendation
    (clearly labelled directional, never a guaranteed return)

## Accessibility & performance
- Semantic landmarks, keyboard-navigable, visible focus, reduced-motion support.
- No JS framework, no build tooling — fast first paint; fonts preconnected; SVG data-viz.

## Claims discipline (per source)
"200+" not exact-count boasts · outcomes are **measured trajectories, never guarantees** ·
benchmarks attributed · physician-reviewed, never "AI-diagnosed" · aggregate-only to employers.
Indicative pricing (₹30,000 flagship etc.) is confirmed in proposal.

## Next pages to layer in (Phases 3–5)
The Programme — Overview (+ SIIS sub-page), Proof — Outcomes & KPIs, full Pricing & Plans,
Book a Pilot conversion flow, then Solutions / Industries / Resources per the blueprint sitemap.
The design system and component classes here are reused directly across those templates.
