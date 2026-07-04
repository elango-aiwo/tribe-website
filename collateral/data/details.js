/* =============================================================
   AIWO Tribe - Collateral Detail Content
   Self-describing briefs keyed by piece ID. Filled wave by wave.
   Each entry powers piece.html?id=<ID>.
   ============================================================= */
window.AIWO_DETAILS = {

/* ============================================================
   WAVE 1 - THOUGHT LEADERSHIP (TL)
   ============================================================ */

"TL-01": {
  title: "Ebook - The Indian Workforce Longevity Report 2026",
  cat: "Thought Leadership", catKey: "TL", icon: "doc", status: "LIVE",
  tagline: "The flagship reference that defines the category of measured workforce longevity.",
  stage: "Awareness → Consideration",
  format: "Gated PDF · ~80 pages · designed long-form report",
  audience: ["CEO / MD / Founder", "CHRO / Head of People", "Chief Medical / Wellbeing Officer", "Analysts & press"],
  channels: ["Website (gated)", "LinkedIn", "Email nurture", "Sales leave-behind", "Webinars"],
  overview: "The cornerstone thought-leadership asset for AIWO Tribe. It establishes a new category - Measured Workforce Longevity - by documenting, with attributed data, why most corporate health spend buys numbers instead of outcomes, and what changes when an enterprise can prove its workforce is getting biologically younger year over year. Written for the C-suite but rigorous enough for a CMO, it is the single download that reframes the entire conversation away from 'wellness activity' and toward board-reportable proof.",
  contents: [
    { heading: "01 · The value leak", body: "How one-time tests, vanity engagement and unowned outcomes quietly drain productivity, continuity and retention value - with a framework for sizing the leak in any workforce." },
    { heading: "02 · The under-measured workforce", body: "Why chronological age, BMI and a basic annual panel miss the reversible decline that actually costs enterprises - and what 200+ biomarkers across 7 panels surface instead." },
    { heading: "03 · From event to operating system", body: "The shift from a diagnostic moment to a 12-month measured relationship: BioMAP → SIIS → LongeVis → JoySpan, explained for a non-clinical reader." },
    { heading: "04 · The economics of proof", body: "A directional model linking measured organ-age improvement to productivity, critical-role continuity, retention and ESG - framed as trajectories, never guarantees." },
    { heading: "05 · The GLP-1 inflection", body: "Why the metabolic-medication shift already moving through workforces creates a new duty of care that only objective baselines and physician oversight can meet." },
    { heading: "06 · What boards will ask for next", body: "Aggregate, anonymised, year-over-year human-capital evidence - and how to put a JoySpan trajectory in the annual report." }
  ],
  messages: [
    "We don't sell tests. We sell outcomes - and we prove them.",
    "Lengthen the joyspan. Compress the sufferspan. Prove it - year over year.",
    "200+ biomarkers, 7 panels, 8–10 organ ages, one JoySpan Score, one prioritised plan.",
    "The first measurable answer to the only question a board cares about: did our people get healthier?"
  ],
  proof: [
    "200+ biomarkers from a single annual draw",
    "8–10 organ-level biological ages; 12 longevity scores",
    "SIIS 90-day cycle: annual full panel + 3 quarterly re-tests",
    "Aggregate-only to employers; individual data never shared"
  ],
  specs: { Format: "PDF report (gated)", Length: "~80 pages", Owner: "Content & Brand", Stage: "Top of funnel", Cadence: "Annual flagship, refreshed each year" },
  usage: "Lead-gen anchor: gate behind a work-email form and route to nurture. Use chapter pull-outs as standalone LinkedIn posts. All benchmarks must be externally attributed and labelled; outcomes framed as measured trajectories, not guarantees.",
  related: ["TL-03", "TL-07", "TL-08", "EB-02"],
  cta: { label: "Request the report", href: "../book.html" }
},

"TL-02": {
  title: "Ebook - From Wellness to Longevity",
  cat: "Thought Leadership", catKey: "TL", icon: "doc", status: "LIVE",
  tagline: "How a one-time health camp becomes a 12-month, measured, behaviour-change relationship.",
  stage: "Awareness → Consideration",
  format: "Gated PDF · ~40 pages",
  audience: ["CHRO / Head of People", "Heads of Benefits", "Wellbeing leads"],
  channels: ["Website (gated)", "Email nurture", "LinkedIn", "Events"],
  overview: "A focused narrative ebook that contrasts the dominant 'corporate wellness' model - activity, perks and engagement metrics - with measured longevity, where the unit of value is a proven change in biology. It is the persuasion piece for people leaders who already run wellness initiatives and need a clear, non-defensive way to see why the next step is measurement and proof.",
  contents: [
    { heading: "01 · The wellness plateau", body: "Why engagement dashboards stopped moving outcomes - and why participation became the metric of convenience." },
    { heading: "02 · What 'measured' actually means", body: "Baseline, plan, re-measure, prove - the difference between a report and a result." },
    { heading: "03 · The 11+1 pillars in practice", body: "How the LongeVis Matrix turns clinical findings into two or three livable actions per person." },
    { heading: "04 · A year in the life", body: "The member journey from a 20-minute draw to a year-on JoySpan trajectory, in plain language." },
    { heading: "05 · Making the case internally", body: "How to position measured longevity to finance, leadership and employees without over-claiming." }
  ],
  messages: [
    "Activity is not an outcome. Engagement is not proof.",
    "Every finding becomes a livable action.",
    "A programme that measurably improves a life is hard to leave."
  ],
  proof: [
    "11+1 LongeVis pillars; physician-signed Smart Report",
    "LifeOS app for every employee, for 12 months",
    "Quarterly re-tests show the score moving"
  ],
  specs: { Format: "PDF (gated)", Length: "~40 pages", Owner: "Content & Brand", Stage: "Top–mid funnel", Cadence: "Evergreen" },
  usage: "Best for HR audiences who own existing wellness budgets. Pair with the Retention & Culture playbook in nurture. Avoid disparaging named vendors; contrast the model, not the company.",
  related: ["TL-05", "OP-03", "AP-04"],
  cta: { label: "See the programme", href: "../programme.html" }
},

"TL-03": {
  title: "Whitepaper - Measuring What Matters",
  cat: "Thought Leadership", catKey: "TL", icon: "doc", status: "LIVE",
  tagline: "Why organ ages and a JoySpan trajectory beat steps, logins and webinar attendance.",
  stage: "Consideration",
  format: "Gated PDF · ~24 pages · references included",
  audience: ["Chief Medical / Wellbeing Officer", "CHRO", "Data & analytics leads"],
  channels: ["Website (gated)", "Sales enablement", "Analyst briefings"],
  overview: "A rigorous, reference-backed argument for changing the workforce-health metric. It makes the case that biological measures - organ ages, longevity scores and an aggregate JoySpan trajectory - are the only outputs that connect a wellbeing programme to outcomes a board can defend, and shows how 200+ markers are distilled into a surface a non-clinician can act on.",
  contents: [
    { heading: "01 · The metric problem", body: "Why proxy metrics (participation, steps) feel measurable but are decoupled from health outcomes." },
    { heading: "02 · From markers to meaning", body: "200+ biomarkers → 7 panels → 8–10 organ ages → 12 scores → one JoySpan figure. Depth in the engine, simplicity at the surface." },
    { heading: "03 · The organ-age lens", body: "Why 'your heart is 8 years older than you are' drives behaviour change where a lab value does not." },
    { heading: "04 · Aggregation without exposure", body: "How minimum-cohort suppression turns individual measurement into a board-safe workforce view." },
    { heading: "05 · Reading a trajectory", body: "What a year-over-year aggregate JoySpan line tells leadership - and what it deliberately does not claim." }
  ],
  messages: [
    "Measure biology, not behaviour.",
    "Complexity lives in the engine, never the experience.",
    "Trajectories, not guarantees; benchmarks attributed."
  ],
  proof: [
    "7 BioMAP panels; 8–10 organ ages; 12 longevity scores",
    "Minimum-cohort suppression for re-identification safety",
    "Physician-reviewed methodology, never 'AI-diagnosed'"
  ],
  specs: { Format: "PDF (gated)", Length: "~24 pages", Owner: "Clinical + Content", Stage: "Mid funnel", Cadence: "Evergreen; review with science team" },
  usage: "The asset to send a sceptical CMO or analytics lead. Every claim must be attributable. Reviewed by the clinical/compliance gate before publication.",
  related: ["TL-01", "CL-02", "CL-03", "CS-04"],
  cta: { label: "See proof & KPIs", href: "../proof.html" }
},

"TL-04": {
  title: "Whitepaper - The 90-Day Biology Cycle",
  cat: "Thought Leadership", catKey: "TL", icon: "doc", status: "LIVE",
  tagline: "The science and operating logic behind the SIIS perpetual quarterly cycle.",
  stage: "Consideration",
  format: "Gated PDF · ~20 pages",
  audience: ["Chief Medical / Wellbeing Officer", "CHRO", "Operations leaders"],
  channels: ["Website (gated)", "Sales enablement", "Webinars"],
  overview: "Explains why a 90-day, re-measured loop outperforms an annual check-up for changing human biology. It documents the SIIS method - Signals, Interpretations, Interventions, Systems - and the cadence of one annual full panel plus three quarterly progress re-tests, connecting each stage to what is measured and what is done.",
  contents: [
    { heading: "01 · Why annual fails", body: "Biology moves on a shorter clock than a yearly check-up can capture or correct." },
    { heading: "02 · Signals", body: "200+ biomarkers across metabolic, hormonal, inflammatory and epigenetic systems, plus wearables - the early signals before symptoms." },
    { heading: "03 · Interpretations", body: "Turning data into meaning: trends, deviations and trajectories scored on the LongeVis Matrix and JoySpan." },
    { heading: "04 · Interventions", body: "A personalised, physician-led plan - the two or three changes that move the score most." },
    { heading: "05 · Systems", body: "Daily habits, feedback loops and quarterly reassessment inside the LifeOS app." }
  ],
  messages: [
    "Longevity is engineered, not hoped for.",
    "Symptoms are late signals; we read the early ones.",
    "Re-test the intervention, not the full panel, each quarter."
  ],
  proof: [
    "SIIS 4-stage cycle; annual full panel + 3 quarterly re-tests",
    "Physician-led interventions; in-app systems and nudges",
    "JoySpan re-scored each cycle"
  ],
  specs: { Format: "PDF (gated)", Length: "~20 pages", Owner: "Clinical + Content", Stage: "Mid funnel", Cadence: "Evergreen" },
  usage: "Pairs with the SIIS animation on the site and the How-It-Works page. Use to answer 'why not just an annual camp?'. Clinical review required.",
  related: ["TL-01", "CL-04", "OP-01"],
  cta: { label: "See how it works", href: "../index.html#siis" }
},

"TL-05": {
  title: "Manifesto - We Don't Sell Tests. We Sell Outcomes.",
  cat: "Thought Leadership", catKey: "TL", icon: "doc", status: "LIVE",
  tagline: "The one-page belief statement that frames the whole category.",
  stage: "Awareness",
  format: "Single page · PDF + web + poster variants",
  audience: ["All audiences", "Internal team", "Press"],
  channels: ["Website", "Print", "Social", "Office walls", "Pitch openers"],
  overview: "A short, declarative manifesto that captures the AIWO worldview in under 200 words. It is the emotional and strategic north star used to open pitches, anchor the brand, and align the internal team. Hope, not fear; proof, not promises; outcomes, not activity.",
  contents: [
    { heading: "The belief", body: "Most workforce health spend buys a one-time panel of numbers - a report, no plan, no proof. We exist to change that." },
    { heading: "The shift", body: "We convert a single diagnostic event into a 12-month, measured, behaviour-change relationship for every employee." },
    { heading: "The promise", body: "Lengthen the joyspan. Compress the sufferspan. Prove it - year over year." }
  ],
  messages: [
    "We don't sell tests. We sell outcomes.",
    "Hope, not fear.",
    "Proven, not promised."
  ],
  proof: [
    "Physician-signed Smart Report; renew-on-proof model",
    "Year-over-year JoySpan trajectory as the north-star"
  ],
  specs: { Format: "1 page (PDF / web / poster)", Length: "<200 words", Owner: "Brand", Stage: "All", Cadence: "Stable; rarely changed" },
  usage: "Use as the opening slide of any deck and the closing line of any brochure. Do not dilute; keep the wording consistent across every surface.",
  related: ["TL-01", "BD-04", "GL-02"],
  cta: { label: "Read the promise", href: "../index.html" }
},

"TL-06": {
  title: "Report - GLP-1 in the Indian Workforce",
  cat: "Thought Leadership", catKey: "TL", icon: "doc", status: "LIVE",
  tagline: "The metabolic shift already moving through your people - and the duty of care it creates.",
  stage: "Awareness → Consideration",
  format: "Gated PDF · ~30 pages",
  audience: ["Chief Medical / Wellbeing Officer", "CHRO", "CEO / Board"],
  channels: ["Website (gated)", "Email nurture", "PR", "Webinars"],
  overview: "A timely report on the rise of GLP-1 medications in the workforce and the new employer duty of care it creates. It argues that without objective baselines and physician oversight, a major metabolic shift is happening to employees unmanaged - and shows how measured longevity turns an emerging risk into demonstrable care.",
  contents: [
    { heading: "01 · The quiet shift", body: "GLP-1 adoption is already in your workforce, largely invisible to the employer and unmeasured." },
    { heading: "02 · The duty of care", body: "Why objective metabolic baselines and oversight are now a reasonable-care expectation, not a nice-to-have." },
    { heading: "03 · What to measure", body: "Metabolic panel, organ ages and longevity scores that contextualise medication-driven change." },
    { heading: "04 · Governance & safety", body: "Named physician sign-off, the completeness gate and the same-day critical-value pathway." },
    { heading: "05 · The employer position", body: "How to support employees responsibly while protecting privacy and avoiding clinical overreach." }
  ],
  messages: [
    "Turn an emerging risk into demonstrable care.",
    "Objective baselines and physician oversight for the metabolic shift.",
    "Physician-reviewed, never 'AI-diagnosed'."
  ],
  proof: [
    "Metabolic panel within the 200+ marker set",
    "8–10 organ ages including metabolic age",
    "Same-day critical-value pathway; named physician sign-off"
  ],
  specs: { Format: "PDF (gated)", Length: "~30 pages", Owner: "Clinical + Content", Stage: "Top–mid funnel", Cadence: "Refresh as evidence evolves" },
  usage: "High-relevance, high-sensitivity topic. Lead with care and governance, not sales. Clinical/compliance review mandatory; avoid medical advice or product endorsement.",
  related: ["OP-04", "CL-06", "TL-01"],
  cta: { label: "Explore GLP-1 duty of care", href: "../solutions.html#outcomes" }
},

"TL-07": {
  title: "POV - The Hidden Cost of an Under-Measured Workforce",
  cat: "Thought Leadership", catKey: "TL", icon: "doc", status: "LIVE",
  tagline: "Where productivity, continuity and retention value quietly leaks today.",
  stage: "Awareness",
  format: "Article / short PDF · ~1,500 words",
  audience: ["CEO / MD / Founder", "CFO", "CHRO"],
  channels: ["Website (Insights)", "LinkedIn", "Email", "Sales follow-up"],
  overview: "A punchy point-of-view article that quantifies, directionally, what an organisation loses when workforce health is measured once a year (or not at all). It is the awareness-stage hook that creates urgency and earns the click into the deeper report.",
  contents: [
    { heading: "01 · The invisible line item", body: "Decline that never shows on a P&L until it becomes absence, attrition or a critical-role event." },
    { heading: "02 · Three leaks", body: "Productivity drag, critical-role fragility and avoidable attrition - each sized directionally." },
    { heading: "03 · Why measurement changes the maths", body: "What becomes possible when reversible risk is surfaced early and acted on." },
    { heading: "04 · The first move", body: "A directional workforce snapshot and a managed pilot as the low-risk starting point." }
  ],
  messages: [
    "What you don't measure, you can't protect.",
    "The cheapest risk to fix is the one you catch early.",
    "Start with a snapshot; prove it with a pilot."
  ],
  proof: [
    "Workforce Snapshot estimator (directional)",
    "Reversible flags surfaced via 200+ markers"
  ],
  specs: { Format: "Article + PDF", Length: "~1,500 words", Owner: "Content", Stage: "Top of funnel", Cadence: "Evergreen" },
  usage: "Drive to the Workforce Snapshot tool and the Workforce Longevity Report. Keep figures directional and clearly labelled - no guaranteed-return claims.",
  related: ["TL-01", "PP-03", "PP-04"],
  cta: { label: "Try the workforce snapshot", href: "../index.html#snapshot" }
},

"TL-08": {
  title: "POV - What Boards Actually Want: Proof",
  cat: "Thought Leadership", catKey: "TL", icon: "doc", status: "LIVE",
  tagline: "Turning a wellbeing line item into a human-capital metric investors can read.",
  stage: "Consideration → Decision",
  format: "Article / short PDF · ~1,400 words",
  audience: ["CEO / Board", "CFO", "Investor relations", "ESG leads"],
  channels: ["Website (Insights)", "LinkedIn", "Board pre-reads", "Investor updates"],
  overview: "A board-facing POV arguing that the next phase of wellbeing reporting is evidence, not activity. It shows how an aggregate, anonymised, year-over-year JoySpan trajectory becomes a defensible human-capital metric for ESG and investor narratives - honest about being a trajectory rather than a guarantee.",
  contents: [
    { heading: "01 · The reporting gap", body: "Boards are asked for human-capital evidence they cannot currently produce." },
    { heading: "02 · A metric that travels", body: "Why an aggregate JoySpan movement reads cleanly in an annual report and investor deck." },
    { heading: "03 · Privacy as a feature", body: "Aggregate-only, suppressed-cohort reporting that satisfies governance and trust." },
    { heading: "04 · Honest by design", body: "Trajectories, not guarantees; attributed benchmarks; physician-led rigour." }
  ],
  messages: [
    "Proof, not platitudes.",
    "A trajectory the board can cite.",
    "Aggregate, anonymised, year over year."
  ],
  proof: [
    "Workforce Vitality Index (aggregate, ESG-legible)",
    "Year-over-year JoySpan trajectory; KPI master scorecard"
  ],
  specs: { Format: "Article + PDF", Length: "~1,400 words", Owner: "Content + Clinical", Stage: "Mid–bottom funnel", Cadence: "Evergreen" },
  usage: "Ideal board pre-read and CFO/ESG enabler. Drive to Proof - Outcomes & KPIs. Keep ESG claims aggregate and attributed.",
  related: ["TL-01", "OP-05", "CS-04", "EB-04"],
  cta: { label: "See outcomes & KPIs", href: "../proof.html" }
},

/* ============================================================
   WAVE 2 - EXECUTIVE & BOARD (EB)
   ============================================================ */

"EB-01": {
  title: "Board Deck - AIWO Tribe",
  cat: "Executive & Board", catKey: "EB", icon: "deck", status: "LIVE",
  tagline: "The master board narrative: problem, system, proof, economics and the pilot ask.",
  stage: "Decision",
  format: "Slide deck · ~18–22 slides (Gamma/Keynote)",
  audience: ["CEO / MD / Founder / Chair", "Board members", "Executive committee"],
  channels: ["In-room presentation", "Board pre-read", "Investor-adjacent settings"],
  overview: "The definitive board-level presentation for sponsoring AIWO Tribe. It moves a leadership team from 'another wellness vendor' to 'approve a pilot' in one sitting - opening on the tension, introducing the four-framework operating system, presenting honest proof and economics, and closing on a low-risk, fully-managed pilot ask.",
  contents: [
    { heading: "Slide 1–3 · The tension", body: "Most workforce health spend buys numbers, not outcomes - and no one owns whether health improved." },
    { heading: "Slide 4–7 · The operating system", body: "BioMAP → SIIS → LongeVis → JoySpan, each with one job, presented as a system not a feature list." },
    { heading: "Slide 8–11 · The proof", body: "Organ ages, the JoySpan trajectory and the aggregate employer dashboard - privacy-safe and board-legible." },
    { heading: "Slide 12–15 · The value", body: "Productivity, critical-role de-risking, retention, GLP-1 duty of care, ESG - five outcomes leadership can stand behind." },
    { heading: "Slide 16–18 · Economics & governance", body: "Indicative pricing, consent-first privacy, clinical governance - without exposing internal cost or margin." },
    { heading: "Slide 19–22 · The ask", body: "A 50–100-person managed pilot in weeks; scale on a proven pass." }
  ],
  messages: [
    "Health your board can see.",
    "Start with a pilot. Prove it on your own people.",
    "Outcomes are measured trajectories, not guarantees."
  ],
  proof: [
    "200+ biomarkers; 8–10 organ ages; 12 scores; 11+1 pillars",
    "Year-over-year JoySpan trajectory; aggregate-only dashboard",
    "Consent-first, single-channel, DPDPA-aligned"
  ],
  specs: { Format: "Presentation deck", Length: "18–22 slides", Owner: "Founder + Sales", Stage: "Decision", Cadence: "Versioned per quarter" },
  usage: "The flagship in-room asset. Always pair with the Executive Summary as the leave-behind. Never show internal cost/margin slides from the commercial model.",
  related: ["EB-02", "EB-05", "SE-01", "PP-01"],
  cta: { label: "Book a Pilot", href: "../book.html" }
},

"EB-02": {
  title: "Executive Brief - One-Sitting Overview",
  cat: "Executive & Board", catKey: "EB", icon: "deck", status: "LIVE",
  tagline: "The gated C-suite PDF - the idea, the proof and the ask in minutes.",
  stage: "Consideration → Decision",
  format: "Gated PDF · 4–6 pages",
  audience: ["CEO / MD / Founder", "CHRO", "CFO"],
  channels: ["Website (gated)", "Email", "Sales follow-up", "Exit-intent offer"],
  overview: "A tight, premium 4–6 page brief designed to be read in one sitting by a busy executive. It distils the whole programme - the problem, the four frameworks, the proof and the pilot ask - into a credible document that earns the next meeting. It is the primary secondary-conversion asset across the site.",
  contents: [
    { heading: "Page 1 · The shift", body: "From tests to outcomes; the promise line and the single idea: proof." },
    { heading: "Page 2 · The system", body: "The four frameworks on one spread, with the flow arrow." },
    { heading: "Page 3 · The proof", body: "Key numbers, the JoySpan trajectory and the privacy promise chip." },
    { heading: "Page 4 · The value & the ask", body: "Five enterprise outcomes and the managed-pilot next step." }
  ],
  messages: [
    "Everything a leader needs to say yes to a pilot.",
    "Proof your board can see - in four pages.",
    "Measured trajectories, not guarantees."
  ],
  proof: [
    "200+ markers; 7 panels; JoySpan north-star",
    "Aggregate-only privacy; physician-signed reports"
  ],
  specs: { Format: "PDF (gated)", Length: "4–6 pages", Owner: "Content + Sales", Stage: "Mid–bottom funnel", Cadence: "Quarterly review" },
  usage: "Primary gated asset and exit-intent offer. Instant delivery on form submit, then route to nurture and a specialist follow-up.",
  related: ["EB-01", "TL-01", "SE-06", "EM-04"],
  cta: { label: "Request the Executive Brief", href: "../executive-brief.html" }
},

"EB-03": {
  title: "Investor Deck - Category & Unit Economics",
  cat: "Executive & Board", catKey: "EB", icon: "deck", status: "LIVE",
  tagline: "Category creation, the three-framework moat and the path to scale.",
  stage: "Investor / Strategic",
  format: "Slide deck · ~20–25 slides",
  audience: ["Investors", "Board", "Strategic partners"],
  channels: ["Investor meetings", "Data room", "Strategic partnerships"],
  overview: "The fundraising and strategic-partnership narrative. It frames AIWO as the company creating the Measured Workforce Longevity category, weaving biosensor, biomarker and intervention on one record under physician sign-off, and lays out the market, the defensibility, the delivery engine and the unit economics - at the level of detail an investor expects.",
  contents: [
    { heading: "Market & category", body: "The shift from corporate wellness to measured longevity; TAM framing and timing (GLP-1, ESG, longevity science)." },
    { heading: "The moat", body: "The integrated operating system - measurement, method, app, delivery, governance - as a system competitors can't copy piecemeal." },
    { heading: "Delivery at scale", body: "The Wave Model: pilot → weekly waves of ~1,250 at ~280 draws/day; up to 5,000 dispatches." },
    { heading: "Unit economics", body: "Programme structure and tiers (internal-controlled detail in the data room only)." },
    { heading: "Traction & roadmap", body: "Pilots, references as they mature, and the product/clinical roadmap." }
  ],
  messages: [
    "The world's category-defining measured workforce longevity company.",
    "An operating standard, not a vendor.",
    "Proof compounds: renew-on-proof economics."
  ],
  proof: [
    "Integrated BioMAP/SIIS/LongeVis/JoySpan system",
    "Wave Model delivery proven repeatable, city to city",
    "DPDPA-aligned; ISO/SOC-2 roadmap"
  ],
  specs: { Format: "Presentation deck", Length: "20–25 slides", Owner: "Founder / CFO", Stage: "Investor", Cadence: "Per raise / strategic cycle" },
  usage: "Confidential. Detailed unit economics live only in the data room, never in customer-facing pieces. Keep claims attributed and trajectory-framed.",
  related: ["EB-01", "DL-01", "EB-06"],
  cta: { label: "Contact us", href: "../company.html#contact" }
},

"EB-04": {
  title: "Board Memo - The Duty-of-Care Case",
  cat: "Executive & Board", catKey: "EB", icon: "doc", status: "LIVE",
  tagline: "A one-page memo positioning longevity as governance, not perk.",
  stage: "Decision",
  format: "1-page memo · PDF / doc",
  audience: ["Board members", "General Counsel", "CHRO", "ESG lead"],
  channels: ["Board pack", "Pre-read", "Governance committee"],
  overview: "A concise board memo that reframes workforce longevity as a governance and duty-of-care matter rather than a discretionary benefit. It is written in the register of a board paper - context, rationale, risk, recommendation - to give a sponsor the language to table the pilot formally.",
  contents: [
    { heading: "Context", body: "Rising human-capital scrutiny, the GLP-1 shift, and the absence of measured evidence in current programmes." },
    { heading: "Rationale", body: "Measured longevity as reasonable care: objective baselines, physician oversight, privacy by design." },
    { heading: "Risk & mitigation", body: "Privacy, claims and continuity risks - and how the programme is designed to manage each." },
    { heading: "Recommendation", body: "Approve a managed 50–100-person pilot with defined success criteria." }
  ],
  messages: [
    "Longevity is governance, not a perk.",
    "Reasonable care, demonstrably provided.",
    "Low-risk first step; scale on a pass."
  ],
  proof: [
    "Consent-first, single-channel, aggregate-only",
    "Named physician sign-off; same-day critical-value pathway"
  ],
  specs: { Format: "1-page memo", Length: "~450 words", Owner: "Founder + Legal/Compliance", Stage: "Decision", Cadence: "Stable template" },
  usage: "Give to an internal sponsor to adapt into their board paper. Legal/compliance reviewed. Avoid guarantees; frame as governance and trajectory.",
  related: ["EB-01", "PV-01", "TL-08"],
  cta: { label: "See clinical governance", href: "../deliver.html#clinical" }
},

"EB-05": {
  title: "One-Pager - The Ask",
  cat: "Executive & Board", catKey: "EB", icon: "doc", status: "LIVE",
  tagline: "A 50–100 person pilot, fully managed, in weeks - the low-risk first step.",
  stage: "Decision",
  format: "1 page · PDF",
  audience: ["CEO / Board", "CHRO", "Decision sponsors"],
  channels: ["Leave-behind", "Email", "Deck appendix"],
  overview: "A single, decisive page that crystallises the commitment being requested. It removes ambiguity about scope, cost posture, timeline and success criteria so a sponsor can say yes quickly and defend the decision afterwards.",
  contents: [
    { heading: "What it is", body: "A fully managed pilot for a 50–100 person cohort, delivered on-site in weeks." },
    { heading: "What you get", body: "Baseline Smart Reports, the LifeOS experience, and a first aggregate workforce view." },
    { heading: "What it proves", body: "Fit, employee experience and delivery - before any wider rollout." },
    { heading: "Next step", body: "Confirm cohort and dates; scope in one conversation." }
  ],
  messages: [
    "Start with a pilot. Prove it on your own people.",
    "Low-risk first step; scale on a pass.",
    "Fully managed, in weeks."
  ],
  proof: [
    "Pilot → weekly wave model",
    "Defined success criteria agreed up front"
  ],
  specs: { Format: "1 page", Length: "~250 words", Owner: "Sales", Stage: "Decision", Cadence: "Stable" },
  usage: "The closing leave-behind after the board deck. Keep it about scope and confidence, not detailed pricing.",
  related: ["EB-01", "PP-02", "RK-01"],
  cta: { label: "Book a Pilot", href: "../book.html" }
},

"EB-06": {
  title: "Executive Summary - Board Edition",
  cat: "Executive & Board", catKey: "EB", icon: "doc", status: "LIVE",
  tagline: "The standalone summary document for circulation ahead of the meeting.",
  stage: "Consideration → Decision",
  format: "PDF · 2–3 pages",
  audience: ["Board members", "Executive committee", "CFO"],
  channels: ["Board pre-read", "Email circulation", "Data room"],
  overview: "A polished standalone summary that travels without a presenter. It gives board members the full argument - problem, system, proof, value, ask - in a self-contained read, so the in-room session can focus on decision rather than explanation.",
  contents: [
    { heading: "The opportunity", body: "Measured workforce longevity as a board-reportable investment in people." },
    { heading: "The system & proof", body: "The four frameworks and the year-over-year JoySpan trajectory, summarised." },
    { heading: "Value & governance", body: "Five enterprise outcomes; privacy and clinical governance posture." },
    { heading: "Recommendation", body: "Approve a managed pilot with clear success criteria." }
  ],
  messages: [
    "The whole case, in a three-page read.",
    "Health your board can see.",
    "Proven, not promised."
  ],
  proof: [
    "JoySpan north-star; aggregate-only dashboard",
    "200+ markers; physician-signed reports"
  ],
  specs: { Format: "PDF", Length: "2–3 pages", Owner: "Founder + Content", Stage: "Mid–bottom funnel", Cadence: "Quarterly review" },
  usage: "Circulate as the board pre-read; pair with the Board Deck in the room. Self-contained and on-message; no internal financials.",
  related: ["EB-01", "EB-02", "TL-08"],
  cta: { label: "See the programme", href: "../programme.html" }
},

/* ============================================================
   WAVE 3 - SALES ENABLEMENT (SE)
   ============================================================ */

"SE-01": { title:"Sales Deck - Master", cat:"Sales Enablement", catKey:"SE", icon:"deck", status:"LIVE",
 tagline:"The full pitch: tension, the shift, the four frameworks, proof and pricing.", stage:"Consideration → Decision",
 format:"Slide deck · ~24 slides", audience:["CEO / MD","CHRO","CFO","CMO / Wellbeing"], channels:["In-room","Video call","Leave-behind PDF"],
 overview:"The primary seller-led narrative deck. It runs the full story - the value leak, the shift from tests to outcomes, the four-framework operating system, honest proof, enterprise value and indicative pricing - engineered so a rep can present in 25–30 minutes and adapt by persona.",
 contents:[{heading:"Open · the value leak",body:"Most workforce health spend buys numbers, not outcomes - and no one owns whether health improved."},{heading:"The shift",body:"From a one-time diagnostic event to a 12-month measured relationship."},{heading:"The system",body:"BioMAP → SIIS → LongeVis → JoySpan, one job each."},{heading:"Proof & value",body:"Organ ages, the JoySpan trajectory, and five enterprise outcomes."},{heading:"Pricing & the ask",body:"Indicative tiers and the managed-pilot next step."}],
 messages:["We don't sell tests. We sell outcomes.","Health your board can see.","Start with a pilot."], proof:["200+ markers; 7 panels; 8–10 organ ages","Aggregate-only employer dashboard","Physician-signed Smart Report"],
 specs:{Format:"Presentation deck",Length:"~24 slides",Owner:"Sales",Stage:"Mid–bottom funnel",Cadence:"Quarterly version"},
 usage:"Adapt the value section to the persona in the room; never expose internal cost/margin. Always leave behind the One-Pager or Executive Brief.", related:["EB-01","SE-06","PP-01","EB-02"], cta:{label:"Book a Pilot",href:"../book.html"} },

"SE-02": { title:"Battlecard - vs Corporate Wellness Vendors", cat:"Sales Enablement", catKey:"SE", icon:"deck", status:"LIVE",
 tagline:"How measured outcomes out-position activity and engagement platforms.", stage:"Consideration",
 format:"2-page battlecard (internal)", audience:["Sales reps","SDRs","Partners"], channels:["Internal enablement","CRM"],
 overview:"A rep-facing battlecard that equips the team to win against generic corporate-wellness platforms. It contrasts the model - measured biological outcomes vs engagement activity - and arms the seller with traps, proof points and crisp reframes without naming or disparaging competitors.",
 contents:[{heading:"Their pitch",body:"Steps, EAP, webinars, perks; 'engagement' as the KPI."},{heading:"Our reframe",body:"Measured organ ages and a proven JoySpan trajectory - outcomes, not activity."},{heading:"Traps to set",body:"'Can you prove anyone got healthier?' 'Who owns the outcome?'"},{heading:"Proof points",body:"200+ markers, physician sign-off, aggregate-only privacy."}],
 messages:["Activity is not an outcome.","Engagement is not proof.","Ask: did your people get healthier?"], proof:["12 longevity scores; 8–10 organ ages","Year-over-year JoySpan trajectory"],
 specs:{Format:"Battlecard",Length:"2 pages",Owner:"Sales Enablement",Stage:"Consideration",Cadence:"Refresh quarterly"},
 usage:"Internal only. Contrast the model, never the company; keep all claims attributed and trajectory-framed.", related:["SE-03","SE-04","TL-03"], cta:{label:"See proof & KPIs",href:"../proof.html"} },

"SE-03": { title:"Battlecard - vs One-Time Health Camps", cat:"Sales Enablement", catKey:"SE", icon:"deck", status:"LIVE",
 tagline:"Why a 12-month measured relationship beats an annual diagnostic event.", stage:"Consideration",
 format:"2-page battlecard (internal)", audience:["Sales reps","Partners"], channels:["Internal enablement","CRM"],
 overview:"Equips reps to win against the familiar 'annual health camp' incumbent. It shows why a report without a plan changes nothing, and how the SIIS 90-day cycle plus the LifeOS app convert a one-day event into a year of measured change.",
 contents:[{heading:"Their offer",body:"A camp, a PDF, no plan, no follow-through."},{heading:"Our reframe",body:"Baseline → act → re-measure → prove; an app for the full year."},{heading:"Cost framing",body:"Same draw, far more value - and a renew-on-proof model."},{heading:"Proof points",body:"3 quarterly re-tests; quarterly score movement."}],
 messages:["A report is not a result.","Why a 90-day cycle beats an annual check-up.","One draw, a year of change."], proof:["SIIS cycle; annual panel + 3 re-tests","LifeOS app for 12 months"],
 specs:{Format:"Battlecard",Length:"2 pages",Owner:"Sales Enablement",Stage:"Consideration",Cadence:"Refresh quarterly"},
 usage:"Internal only. Lead with what the buyer already paid for and what it failed to change.", related:["SE-02","TL-04","AP-01"], cta:{label:"See how it works",href:"../index.html#siis"} },

"SE-04": { title:"Objection-Handling Guide", cat:"Sales Enablement", catKey:"SE", icon:"deck", status:"LIVE",
 tagline:"Privacy, cost, science, employee fatigue - answered, with proof points.", stage:"Consideration → Decision",
 format:"Internal guide · ~8 pages", audience:["Sales reps","Partners","CS"], channels:["Internal enablement"],
 overview:"A structured response library for the objections that stall enterprise deals. Each objection has a one-line acknowledgement, a reframe, the proof to cite, and the asset to send next.",
 contents:[{heading:"'Is it private?'",body:"Single-channel, aggregate-only, DPDPA-aligned; send the Trust Centre one-pager."},{heading:"'Too expensive?'",body:"Reframe to value addressed and renew-on-proof; offer a pilot."},{heading:"'Is the science real?'",body:"Physician sign-off, attributed evidence; send the evidence pack."},{heading:"'Will employees engage?'",body:"Leadership participation is the #1 driver; the LifeOS experience and pilot prove it."}],
 messages:["Acknowledge, reframe, prove, advance.","Privacy is a feature, not fine print.","Trajectories, not guarantees."], proof:["DPDPA-aligned; aggregate-only","Named physician sign-off"],
 specs:{Format:"Guide",Length:"~8 pages",Owner:"Sales Enablement",Stage:"Mid funnel",Cadence:"Living document"},
 usage:"Internal. Never over-claim to close; route hard clinical/privacy questions to the right asset and SME.", related:["PV-02","CL-01","SE-05"], cta:{label:"Visit the Trust Centre",href:"../legal.html#security"} },

"SE-05": { title:"Discovery Question Bank", cat:"Sales Enablement", catKey:"SE", icon:"deck", status:"LIVE",
 tagline:"The questions that surface productivity, continuity and ESG pain.", stage:"Discovery",
 format:"Internal guide · 3 pages", audience:["Sales reps","SDRs"], channels:["Internal enablement","CRM"],
 overview:"A curated set of discovery questions organised by persona and outcome, designed to surface measurable pain and qualify for a pilot - moving the conversation from 'what wellness do you run?' to 'what can you prove?'.",
 contents:[{heading:"For the CEO/Board",body:"What can you report to the board today about workforce health?"},{heading:"For the CHRO",body:"How do you know your wellbeing spend changed anyone's health?"},{heading:"For the CFO",body:"What does an under-measured critical role cost you?"},{heading:"Qualifying for a pilot",body:"Headcount, sector, timeline, sponsor, success criteria."}],
 messages:["Ask what they can prove.","Find the owner of the outcome.","Qualify to a pilot."], proof:["Workforce Snapshot estimator as a discovery aid"],
 specs:{Format:"Guide",Length:"3 pages",Owner:"Sales Enablement",Stage:"Top–mid funnel",Cadence:"Living document"},
 usage:"Internal. Use to scope, not to interrogate; pair with the Workforce Snapshot for a directional hook.", related:["SE-04","PP-04","TL-07"], cta:{label:"Try the workforce snapshot",href:"../index.html#snapshot"} },

"SE-06": { title:"One-Pager - The Programme at a Glance", cat:"Sales Enablement", catKey:"SE", icon:"deck", status:"LIVE",
 tagline:"The single-sheet leave-behind: what it is, what's included, the outcome.", stage:"Consideration",
 format:"1 page · PDF (print + digital)", audience:["All buyer personas"], channels:["Leave-behind","Email","Events"],
 overview:"The universal leave-behind. One elegant page that states the promise, the four frameworks, what's included and the proof - enough to brief a colleague who wasn't in the room and earn the next meeting.",
 contents:[{heading:"The promise",body:"Lengthen the joyspan. Compress the sufferspan. Prove it."},{heading:"What's included",body:"200+ panel, Smart Report, LifeOS app, supplements, 3 re-tests."},{heading:"The outcome",body:"A proven year-over-year JoySpan trajectory."},{heading:"Next step",body:"A managed 50–100-person pilot."}],
 messages:["The whole programme on one page.","Health your board can see."], proof:["200+ markers; 12 scores; 11+1 pillars"],
 specs:{Format:"1 page",Length:"~250 words",Owner:"Content + Sales",Stage:"All",Cadence:"Quarterly"},
 usage:"The default leave-behind after any conversation. Keep figures indicative; confirm in proposal.", related:["EB-02","SE-07","BR-02"], cta:{label:"See the programme",href:"../programme.html"} },

"SE-07": { title:"Leave-Behind - The Four Frameworks", cat:"Sales Enablement", catKey:"SE", icon:"deck", status:"LIVE",
 tagline:"BioMAP → SIIS → LongeVis → JoySpan on one elegant page.", stage:"Consideration",
 format:"1 page · PDF", audience:["CMO / Wellbeing","CHRO","CEO"], channels:["Leave-behind","Deck appendix"],
 overview:"A single visual page that makes the operating system memorable: four frameworks, one job each, with the flow arrow that shows how measurement becomes a proven outcome.",
 contents:[{heading:"BioMAP",body:"What we measure - 200+ markers, 7 panels, organ ages."},{heading:"SIIS",body:"The method - the 90-day cycle."},{heading:"LongeVis",body:"How you live it - 11+1 pillars."},{heading:"JoySpan",body:"The proven outcome."}],
 messages:["Four frameworks. One job each.","A system, not a feature list."], proof:["The flow: measure → method → pillars → outcome"],
 specs:{Format:"1 page",Length:"Visual",Owner:"Brand + Content",Stage:"All",Cadence:"Stable"},
 usage:"Use to make the model stick; pairs with the Sales Deck system section and the Programme page.", related:["SE-06","SE-01","GL-01"], cta:{label:"Explore the programme",href:"../programme.html"} },

"SE-08": { title:"Email Templates - Outbound Sequences", cat:"Sales Enablement", catKey:"SE", icon:"deck", status:"LIVE",
 tagline:"Persona-tuned cold and warm sequences for CEO, CHRO and CFO.", stage:"Awareness → Consideration",
 format:"Template set · 3 sequences × 4–5 touches", audience:["Sales reps","SDRs"], channels:["Email","LinkedIn DM"],
 overview:"Ready-to-send outbound sequences by persona, each opening on a measurable pain and offering a low-friction next step (the report, the estimator, or a pilot conversation). Written to be personalised, not blasted.",
 contents:[{heading:"CEO/Board track",body:"Board-reportable proof; opens on the reporting gap."},{heading:"CHRO track",body:"Engagement that moves biology; opens on wellness plateau."},{heading:"CFO track",body:"Cost of an under-measured workforce; opens on directional value."},{heading:"Cadence",body:"4–5 touches across email and LinkedIn, with break-up note."}],
 messages:["Open on pain, not product.","Offer value before the meeting."], proof:["Links to report, estimator, Executive Brief"],
 specs:{Format:"Templates",Length:"3 sequences",Owner:"Sales + Content",Stage:"Top funnel",Cadence:"Refresh quarterly"},
 usage:"Personalise the first line; never over-claim. Route replies to the right nurture track.", related:["EM-01","EM-02","SE-05"], cta:{label:"Request the Executive Brief",href:"../executive-brief.html"} },

"SE-09": { title:"Demo Script - The 12-Month Journey", cat:"Sales Enablement", catKey:"SE", icon:"deck", status:"LIVE",
 tagline:"A repeatable walkthrough of baseline → act → re-measure → prove.", stage:"Consideration → Decision",
 format:"Script + screen flow", audience:["Sales reps","Solutions"], channels:["Live demo","Recorded demo"],
 overview:"A scripted product-and-journey demo that walks a buyer through a member's year - from the 20-minute draw and Smart Report to quarterly re-measures and a year-on JoySpan trajectory - plus the privacy-safe employer view.",
 contents:[{heading:"Baseline",body:"The draw, the Smart Report, the first plan."},{heading:"Act",body:"Pillar actions and nudges in LifeOS."},{heading:"Re-measure",body:"Quarterly re-tests; the score moves."},{heading:"Prove",body:"The aggregate dashboard and YoY trajectory."}],
 messages:["Show the year, not the test.","Privacy by design, visible in the demo."], proof:["LifeOS app; employer dashboard (aggregate)"],
 specs:{Format:"Script",Length:"~15 min",Owner:"Sales + Product",Stage:"Mid–bottom funnel",Cadence:"With product updates"},
 usage:"Use sandbox/illustrative data only; never show real individual data. Label illustrative dashboards.", related:["AP-01","CS-05","SE-01"], cta:{label:"See the journey",href:"../programme.html#journey"} },

/* ============================================================
   WAVE 4 - PRICING & PROPOSALS (PP)
   ============================================================ */

"PP-01": { title:"Pricing Sheet - Flagship / CXO / Membership / Core", cat:"Pricing & Proposals", catKey:"PP", icon:"tag", status:"LIVE",
 tagline:"The tier overview with the all-inclusive ₹30,000 flagship.", stage:"Decision",
 format:"1–2 pages · PDF", audience:["CFO / Procurement","CHRO","CEO"], channels:["Proposal","Email","Leave-behind"],
 overview:"The customer-facing pricing summary. It presents the four tiers, what the flagship includes, the CXO add-ons and the membership range - transparent and indicative, with internal cost and margin never shown.",
 contents:[{heading:"Flagship - Tribe",body:"₹30,000 per employee, all-inclusive."},{heading:"CXO / Apex",body:"Flagship + genomic (₹22,000) / epigenetic (₹60,000) + concierge."},{heading:"Longevity Membership",body:"≈ ₹45,000–57,000 / year, recurring."},{heading:"Core",body:"Lighter tier, scoped on request."}],
 messages:["One all-inclusive programme. Tiers that scale.","Figures indicative; confirmed in proposal."], proof:["Flagship includes 200+ panel, Smart Report, app, supplements, 3 re-tests"],
 specs:{Format:"PDF",Length:"1–2 pages",Owner:"Commercial",Stage:"Decision",Cadence:"Per price review"},
 usage:"Always label indicative; pair with the What's-Included Matrix. Volume terms via proposal only.", related:["PP-05","PP-02","EB-05"], cta:{label:"See pricing & plans",href:"../pricing.html"} },

"PP-02": { title:"Proposal Template - Enterprise Cohort", cat:"Pricing & Proposals", catKey:"PP", icon:"tag", status:"LIVE",
 tagline:"A fill-in proposal scoped to headcount, sector and rollout.", stage:"Decision",
 format:"Editable proposal · ~10 pages", audience:["CFO / Procurement","CHRO","Sponsors"], channels:["Email","Data room"],
 overview:"A structured proposal template that turns a scoped conversation into a signable document - cohort, tier mix, rollout waves, commercials, governance and success criteria - ready to adapt per client.",
 contents:[{heading:"Scope & cohort",body:"Headcount, sites, sector, tier mix."},{heading:"Rollout",body:"Pilot then wave schedule and timeline."},{heading:"Commercials",body:"Indicative pricing and volume terms (customer-facing only)."},{heading:"Governance & success",body:"Privacy posture, clinical governance, agreed KPIs."}],
 messages:["Scope it once; sign it cleanly.","Pilot first; scale on a pass."], proof:["Wave Model delivery; aggregate reporting"],
 specs:{Format:"Editable doc",Length:"~10 pages",Owner:"Commercial",Stage:"Decision",Cadence:"Per deal"},
 usage:"Remove internal cost/margin before sending; legal-reviewed terms. Keep outcomes as trajectories.", related:["PP-01","EB-05","DL-01"], cta:{label:"Request a quote",href:"../book.html"} },

"PP-03": { title:"ROI Framing Model", cat:"Pricing & Proposals", catKey:"PP", icon:"tag", status:"LIVE",
 tagline:"A directional value model - cost base addressed vs measured outcomes.", stage:"Consideration → Decision",
 format:"Spreadsheet + 1-page explainer", audience:["CFO / Finance","Procurement","CHRO"], channels:["Proposal","Workshop"],
 overview:"A disciplined, directional model that frames where value sits - productivity, critical-role continuity, attrition, ESG - without making guaranteed-return claims. It gives finance a defensible way to think about the investment.",
 contents:[{heading:"Cost base addressed",body:"The categories an under-measured workforce leaks value through."},{heading:"Levers",body:"Early detection, engagement, retention, continuity."},{heading:"Directional sizing",body:"Inputs and ranges; clearly labelled as directional."},{heading:"What it is not",body:"Not a guaranteed ROI; outcomes are trajectories."}],
 messages:["Directional value, honestly framed.","No guaranteed-return claims."], proof:["Workforce Snapshot estimator as the front end"],
 specs:{Format:"Spreadsheet + explainer",Length:"1 page",Owner:"Commercial + Finance",Stage:"Mid–bottom",Cadence:"Reviewed annually"},
 usage:"Always present as directional; never promise a return. Pair with the estimator output.", related:["PP-04","TL-07","TL-08"], cta:{label:"Try the estimator",href:"../index.html#snapshot"} },

"PP-04": { title:"Workforce Snapshot Estimator", cat:"Pricing & Proposals", catKey:"PP", icon:"tag", status:"LIVE",
 tagline:"The interactive tool: headcount + sector → directional risk view.", stage:"Awareness → Consideration",
 format:"Interactive web tool", audience:["CHRO","CFO","CEO"], channels:["Website","Sales workshop","Demo"],
 overview:"A live estimator that converts headcount, age band and sector into a directional view of reversible risk, metabolic priority, productivity exposure and a recommended pilot size - the interactive hook that turns interest into a pilot conversation.",
 contents:[{heading:"Inputs",body:"Workforce size, average age band, sector."},{heading:"Outputs",body:"Likely reversible flags; metabolic priority; productivity-exposure days; pilot size."},{heading:"Recommendation",body:"Where to start, by profile."},{heading:"Disclaimer",body:"Directional benchmarks, not a guaranteed return."}],
 messages:["Your workforce snapshot in 20 seconds.","Directional, not a guarantee."], proof:["Sector and demographic benchmarks (attributed)"],
 specs:{Format:"Web tool",Length:"Interactive",Owner:"Growth + Content",Stage:"Top–mid funnel",Cadence:"Tune benchmarks periodically"},
 usage:"Live on the site. Keep all figures directional and labelled; route output to Book a Pilot.", related:["PP-03","TL-07","WB-05"], cta:{label:"Open the estimator",href:"../index.html#snapshot"} },

"PP-05": { title:"What's-Included Matrix", cat:"Pricing & Proposals", catKey:"PP", icon:"tag", status:"LIVE",
 tagline:"The line-by-line tier comparison for procurement.", stage:"Decision",
 format:"1 page · table", audience:["Procurement","CFO","CHRO"], channels:["Proposal","Pricing page"],
 overview:"A clean comparison matrix that maps every inclusion across Core, Flagship and CXO/Apex - the artefact procurement uses to compare tiers and confirm scope.",
 contents:[{heading:"Measurement",body:"Panel size, BioMAP panels, organ ages, scores by tier."},{heading:"Plan & experience",body:"Smart Report, app, supplements, re-tests."},{heading:"Enterprise",body:"Aggregate dashboard, governance, consent."},{heading:"Price",body:"Indicative per-employee figure by tier."}],
 messages:["Compare the tiers line by line.","No hidden add-ons in the flagship."], proof:["Flagship all-inclusive; CXO add-ons itemised"],
 specs:{Format:"Table",Length:"1 page",Owner:"Commercial",Stage:"Decision",Cadence:"Per price review"},
 usage:"Mirror the live pricing page matrix; keep figures indicative.", related:["PP-01","PP-02","RK-03"], cta:{label:"Compare on the pricing page",href:"../pricing.html#compare"} },

"PP-06": { title:"Volume Terms Guide", cat:"Pricing & Proposals", catKey:"PP", icon:"tag", status:"LIVE",
 tagline:"How cohort pricing and wave commercials are structured.", stage:"Decision",
 format:"Internal guide · 3 pages", audience:["Sales","Commercial","Finance"], channels:["Internal enablement"],
 overview:"An internal reference on how volume terms work for workforce cohorts - banding, wave scheduling and the commercial logic - so reps can scope confidently before a formal proposal.",
 contents:[{heading:"Volume banding",body:"How per-employee terms scale with cohort size."},{heading:"Wave commercials",body:"How weekly waves map to billing and delivery."},{heading:"Guardrails",body:"What can be quoted directionally vs confirmed in proposal."}],
 messages:["Scope confidently; confirm in proposal.","Volume terms for cohorts."], proof:["Wave Model delivery economics"],
 specs:{Format:"Guide",Length:"3 pages",Owner:"Commercial",Stage:"Decision",Cadence:"Internal"},
 usage:"Internal-controlled. Never expose internal cost/margin to customers.", related:["PP-01","PP-02","DL-01"], cta:{label:"Request a quote",href:"../book.html"} },

/* ============================================================
   WAVE 5 - BROCHURES & PRINT (BR)
   ============================================================ */

"BR-01": { title:"Corporate Brochure - 24pp", cat:"Brochures & Print", catKey:"BR", icon:"print", status:"LIVE",
 tagline:"The full premium brochure: promise, frameworks, journey, value and pricing.", stage:"Consideration",
 format:"Print + PDF · 24 pages (12 spreads)", audience:["CEO / Board","CHRO","CMO"], channels:["Print leave-behind","Events","Premium mailer"],
 overview:"The flagship print piece - square, minimalist, expensive in feel. Twelve spreads carry the manifesto, the JoySpan promise, the four frameworks, the SIIS method, BioMAP, the 11+1 pillars, the LifeOS experience, the 12-month journey, enterprise value, proof, delivery, trust, the spec table and tiered pricing.",
 contents:[{heading:"Manifesto & promise",body:"From tests to outcomes; JoySpan as the hero metric."},{heading:"The system",body:"Four frameworks, the SIIS method, BioMAP, the pillars."},{heading:"Experience & journey",body:"LifeOS and the baseline-to-prove calendar."},{heading:"Value, proof & trust",body:"Five outcomes, the dashboard, delivery and governance."},{heading:"Spec & pricing",body:"Programme overview table and indicative tiers."}],
 messages:["Quiet and confident - one promise, no bullet clutter.","Lengthen the joyspan. Prove it."], proof:["200+ markers; 7 panels; 12 scores; 11+1 pillars"],
 specs:{Format:"Print/PDF",Length:"24 pages",Owner:"Brand + Content",Stage:"Mid funnel",Cadence:"Annual refresh"},
 usage:"Premium leave-behind for senior leaders. Indicative pricing only; do not show internal cost/margin.", related:["BR-02","SE-06","EB-02"], cta:{label:"See the programme",href:"../programme.html"} },

"BR-02": { title:"Mini Brochure - 8pp", cat:"Brochures & Print", catKey:"BR", icon:"print", status:"LIVE",
 tagline:"The condensed leave-behind for events and meetings.", stage:"Consideration",
 format:"Print + PDF · 8 pages", audience:["All buyer personas"], channels:["Events","Meetings","Mailer"],
 overview:"A condensed version of the corporate brochure for high-volume moments - events, booths and first meetings - covering the promise, the system, the proof and the pilot ask in eight tight pages.",
 contents:[{heading:"Promise & shift",body:"Outcomes, not tests."},{heading:"System & proof",body:"Four frameworks; key numbers."},{heading:"Value & ask",body:"Five outcomes; the pilot."}],
 messages:["The story in eight pages.","Start with a pilot."], proof:["JoySpan north-star; 200+ markers"],
 specs:{Format:"Print/PDF",Length:"8 pages",Owner:"Brand + Content",Stage:"Mid funnel",Cadence:"Annual"},
 usage:"Event and meeting workhorse; pair with the One-Pager for follow-up.", related:["BR-01","SE-06","EV-02"], cta:{label:"Book a Pilot",href:"../book.html"} },

"BR-03": { title:"Capabilities Folder", cat:"Brochures & Print", catKey:"BR", icon:"print", status:"LIVE",
 tagline:"A leadership folder with modular insert sheets.", stage:"Consideration → Decision",
 format:"Print folder + inserts", audience:["CEO / Board","CHRO","Procurement"], channels:["In-room","Premium handover"],
 overview:"A premium presentation folder holding swappable insert sheets - programme overview, proof, pricing, governance, industry one-pagers - so a seller can assemble a bespoke pack for each leadership meeting.",
 contents:[{heading:"Core inserts",body:"Overview, proof, pricing, governance."},{heading:"Modular inserts",body:"Industry and outcome one-pagers."},{heading:"Assembly guide",body:"Which inserts for which persona."}],
 messages:["A bespoke pack, every time.","Premium handover for senior rooms."], proof:["Mirrors the live site sections"],
 specs:{Format:"Folder + inserts",Length:"Modular",Owner:"Brand + Sales",Stage:"Decision",Cadence:"Inserts updated as needed"},
 usage:"Curate inserts to the room; keep pricing indicative.", related:["BR-01","RK-01","IN-01"], cta:{label:"Explore solutions",href:"../solutions.html"} },

"BR-04": { title:"Pilot Pack Insert", cat:"Brochures & Print", catKey:"BR", icon:"print", status:"LIVE",
 tagline:"The single insert that frames the pilot offer.", stage:"Decision",
 format:"1 sheet · print/PDF", audience:["CHRO","CEO","Sponsors"], channels:["Folder insert","Leave-behind"],
 overview:"A single decisive insert that frames the managed pilot - scope, what's included, what it proves and the timeline - designed to slot into the capabilities folder or stand alone.",
 contents:[{heading:"Pilot scope",body:"50–100 person cohort, fully managed, in weeks."},{heading:"What it proves",body:"Fit, experience and delivery before scale."},{heading:"Next step",body:"Confirm cohort and dates."}],
 messages:["Prove it on your own people.","Low-risk first step."], proof:["Pilot → wave model"],
 specs:{Format:"1 sheet",Length:"1 page",Owner:"Sales",Stage:"Decision",Cadence:"Stable"},
 usage:"Pairs with The Ask one-pager; keep it about confidence and scope.", related:["EB-05","BR-03","WB-03"], cta:{label:"Book a Pilot",href:"../book.html"} },

"BR-05": { title:"Pocket Guide - The 11+1 Pillars", cat:"Brochures & Print", catKey:"BR", icon:"print", status:"LIVE",
 tagline:"A take-away card explaining the LongeVis Matrix.", stage:"Awareness → Onboarding",
 format:"Pocket card / fold-out", audience:["Employees","Members","Champions"], channels:["Camp day","Welcome pack","Print"],
 overview:"A pocketable card that makes the 11+1 LongeVis pillars tangible - Sleep, Breathing, Nutrition, Social, Exercise, Stress, Circadian, Purpose, Environmental, Gut Health, Hydration, plus the genetic foundation - each with one livable action.",
 contents:[{heading:"The 11 lifestyle pillars",body:"One line and one action per pillar."},{heading:"The +1 foundation",body:"The genetic & epigenetic base (CXO tier)."},{heading:"How it connects",body:"Each pillar links to a panel and the JoySpan Score."}],
 messages:["Every finding becomes a livable action.","Small changes, measured impact."], proof:["11+1 LongeVis pillars"],
 specs:{Format:"Pocket card",Length:"Fold-out",Owner:"Brand + Member Care",Stage:"Onboarding",Cadence:"Stable"},
 usage:"Great camp-day and welcome-pack insert; keep language warm and non-clinical.", related:["AP-04","ON-06","BR-01"], cta:{label:"See the 11+1 pillars",href:"../index.html#pillars"} },

/* ============================================================
   WAVE 6 - EMAIL & NURTURE (EM)
   ============================================================ */

"EM-01": { title:"Nurture Sequence - People Leaders", cat:"Email & Nurture", catKey:"EM", icon:"mail", status:"LIVE",
 tagline:"A multi-touch journey for CHROs and Heads of Benefits.", stage:"Consideration",
 format:"Email sequence · 6 touches", audience:["CHRO","Head of People","Wellbeing leads"], channels:["Marketing automation","Email"],
 overview:"A six-email nurture that walks a people leader from 'we already run wellness' to 'let's pilot measured longevity' - each touch pairs one idea with one asset and one soft CTA, spaced to respect a senior inbox.",
 contents:[{heading:"1 · The wellness plateau",body:"Why engagement stopped moving outcomes; link the From Wellness to Longevity ebook."},{heading:"2 · What measured means",body:"Baseline → prove; link Measuring What Matters."},{heading:"3 · The experience",body:"The LifeOS year; link the app guide."},{heading:"4 · Privacy",body:"Aggregate-only; link the Trust Centre."},{heading:"5 · Proof",body:"Outcomes & KPIs; link Proof."},{heading:"6 · The pilot",body:"A managed first step; link Book a Pilot."}],
 messages:["One idea, one asset, one CTA per touch.","Respect the senior inbox."], proof:["Links to report, proof, trust centre"],
 specs:{Format:"Sequence",Length:"6 emails",Owner:"Growth",Stage:"Mid funnel",Cadence:"Evergreen automation"},
 usage:"Trigger on report/brief download. Keep claims trajectory-framed; suppress on active opportunity.", related:["EM-02","TL-02","SE-08"], cta:{label:"Book a Pilot",href:"../book.html"} },

"EM-02": { title:"Nurture Sequence - Finance & Procurement", cat:"Email & Nurture", catKey:"EM", icon:"mail", status:"LIVE",
 tagline:"Value, governance and pricing for the CFO track.", stage:"Consideration → Decision",
 format:"Email sequence · 5 touches", audience:["CFO","Procurement","Finance"], channels:["Marketing automation","Email"],
 overview:"A finance-tuned nurture that builds the directional value case, addresses governance and pricing transparency, and routes to a scoped proposal - disciplined about being directional, never promising returns.",
 contents:[{heading:"1 · The hidden cost",body:"The under-measured workforce; link the POV."},{heading:"2 · Directional value",body:"The ROI framing model and estimator."},{heading:"3 · Pricing transparency",body:"Tiers and what's included."},{heading:"4 · Governance",body:"Privacy, consent, clinical sign-off."},{heading:"5 · The proposal",body:"Request a scoped quote."}],
 messages:["Directional value, honestly framed.","Transparent, all-inclusive pricing."], proof:["What's-Included Matrix; estimator"],
 specs:{Format:"Sequence",Length:"5 emails",Owner:"Growth + Commercial",Stage:"Mid–bottom",Cadence:"Evergreen"},
 usage:"No guaranteed-return language. Route to pricing and Request a Quote.", related:["EM-01","PP-03","PP-01"], cta:{label:"Request a quote",href:"../book.html"} },

"EM-03": { title:"Newsletter - The Longevity Brief", cat:"Email & Nurture", catKey:"EM", icon:"mail", status:"LIVE",
 tagline:"The monthly thought-leadership send for people leaders.", stage:"Awareness → retention",
 format:"Monthly email", audience:["People leaders","Subscribers","Members"], channels:["Email","Website signup"],
 overview:"The brand's monthly newsletter - one sharp idea, one piece of evidence, one practical takeaway - that keeps AIWO top-of-mind with people leaders and nurtures the long sales cycle without selling hard.",
 contents:[{heading:"The idea",body:"A single thesis from the Insights pipeline."},{heading:"The evidence",body:"An attributed data point or study."},{heading:"The takeaway",body:"One practical action for a people leader."},{heading:"From AIWO",body:"A light product or event note."}],
 messages:["No fluff, once a month.","Evidence, economics and practice."], proof:["Links to Insights articles and reports"],
 specs:{Format:"Email",Length:"Monthly",Owner:"Content",Stage:"All",Cadence:"Monthly"},
 usage:"Value-first; one soft CTA max. Honour consent and easy unsubscribe.", related:["TL-01","AD-09","WB-06"], cta:{label:"Read Insights",href:"../resources.html#insights"} },

"EM-04": { title:"Pilot Invitation Email", cat:"Email & Nurture", catKey:"EM", icon:"mail", status:"LIVE",
 tagline:"The high-intent invite to book a managed pilot.", stage:"Decision",
 format:"Single email", audience:["CHRO","CEO","Sponsors"], channels:["Email","Sales send"],
 overview:"A concise, high-conviction email inviting a qualified buyer to commit to a managed pilot - recap of value, the low-risk framing and a one-click path to scheduling.",
 contents:[{heading:"Value recap",body:"What the pilot proves, briefly."},{heading:"The offer",body:"50–100 person cohort, fully managed, in weeks."},{heading:"The CTA",body:"Book a pilot / pick a time."}],
 messages:["Prove it on your own people.","Low-risk first step."], proof:["Pilot → wave model"],
 specs:{Format:"Email",Length:"~120 words",Owner:"Sales",Stage:"Decision",Cadence:"On-demand"},
 usage:"Send to qualified, sponsor-backed contacts only. Calendar link for friction-free booking.", related:["EB-05","WB-03","SE-08"], cta:{label:"Book a Pilot",href:"../book.html"} },

"EM-05": { title:"Post-Demo Follow-up Series", cat:"Email & Nurture", catKey:"EM", icon:"mail", status:"LIVE",
 tagline:"Recap, proof and next-step automation after a demo.", stage:"Decision",
 format:"Email series · 3 touches", audience:["Demo attendees","Sponsors"], channels:["Marketing automation","Sales"],
 overview:"A three-touch follow-up triggered after a demo - a same-day recap with the leave-behinds, a proof-and-FAQ touch, and a pilot-scheduling nudge - keeping momentum without nagging.",
 contents:[{heading:"1 · Recap (same day)",body:"Thanks + One-Pager + Executive Brief."},{heading:"2 · Proof & FAQ",body:"Outcomes & KPIs; objection answers."},{heading:"3 · Schedule the pilot",body:"Calendar link and the Ask."}],
 messages:["Keep the momentum, not the pressure.","Make the next step one click."], proof:["Links to proof and brief"],
 specs:{Format:"Series",Length:"3 emails",Owner:"Sales + Growth",Stage:"Decision",Cadence:"Triggered"},
 usage:"Trigger from CRM demo stage; stop on reply. Keep claims accurate.", related:["EM-04","SE-09","CS-04"], cta:{label:"Book a Pilot",href:"../book.html"} },

"EM-06": { title:"Re-engagement / Win-back Series", cat:"Email & Nurture", catKey:"EM", icon:"mail", status:"LIVE",
 tagline:"Reviving stalled opportunities with new proof.", stage:"Re-engagement",
 format:"Email series · 3–4 touches", audience:["Stalled opportunities","Lapsed leads"], channels:["Marketing automation"],
 overview:"A win-back series that re-opens stalled conversations with a fresh hook - a new report, a case study, or a timely angle (e.g. GLP-1) - and a low-friction return path.",
 contents:[{heading:"1 · New evidence",body:"Lead with the latest report or case study."},{heading:"2 · Timely angle",body:"A relevant trigger (board season, GLP-1, ESG)."},{heading:"3 · Soft return",body:"A short call or the estimator."},{heading:"4 · Break-up",body:"Graceful close with an open door."}],
 messages:["A new reason to talk.","No pressure, just proof."], proof:["Latest report / case study"],
 specs:{Format:"Series",Length:"3–4 emails",Owner:"Growth",Stage:"Re-engagement",Cadence:"Triggered on dormancy"},
 usage:"Respect frequency caps and consent; lead with value, not guilt.", related:["TL-06","CS-01","PP-04"], cta:{label:"Try the estimator",href:"../index.html#snapshot"} },

"EM-07": { title:"Event Invite & Reminder Set", cat:"Email & Nurture", catKey:"EM", icon:"mail", status:"LIVE",
 tagline:"Registration, reminder and follow-up emails for webinars.", stage:"Awareness → Consideration",
 format:"Email set · invite + 2 reminders + recap", audience:["People leaders","Prospects","Members"], channels:["Marketing automation"],
 overview:"A complete event email set - invitation, two reminders and a post-event recap with the recording and next step - reusable for the C-suite webinar and roundtables.",
 contents:[{heading:"Invite",body:"The hook, speakers and value of attending."},{heading:"Reminders",body:"Day-before and hour-before nudges."},{heading:"Recap",body:"Recording, key takeaways and CTA."}],
 messages:["Show up for the proof, not the pitch.","Value whether or not you attend."], proof:["Links to webinar kit and recording"],
 specs:{Format:"Email set",Length:"4 emails",Owner:"Growth + Events",Stage:"Top–mid",Cadence:"Per event"},
 usage:"Reuse across events; keep speaker claims accurate.", related:["EV-01","EM-03","AD-09"], cta:{label:"See events",href:"../resources.html"} },

/* ============================================================
   WAVE 7 - ADVERTISING & SOCIAL (AD)
   ============================================================ */

"AD-01": { title:"LinkedIn Carousel - Organ Ages Explained", cat:"Advertising & Social", catKey:"AD", icon:"mega", status:"LIVE",
 tagline:"'Your heart is 8 years older than you are' - the scroll-stopper.", stage:"Awareness",
 format:"LinkedIn carousel · 6–8 slides", audience:["People leaders","Executives"], channels:["LinkedIn (organic + paid)"],
 overview:"A high-performing carousel that teaches organ ages in six slides and lands the emotional hook that makes biological age click for a non-clinical leader - the top-of-funnel asset that earns the profile visit and the report download.",
 contents:[{heading:"Hook slide",body:"'Your heart can be older than you are.'"},{heading:"What organ ages are",body:"8–10 organ-level biological ages from one draw."},{heading:"Why it drives action",body:"A number people understand and act on."},{heading:"CTA slide",body:"Get the Workforce Longevity Report."}],
 messages:["Biological age, made visceral.","One draw, 8–10 organ ages."], proof:["8–10 organ ages; 200+ markers"],
 specs:{Format:"Carousel",Length:"6–8 slides",Owner:"Social + Brand",Stage:"Top funnel",Cadence:"Evergreen + boosts"},
 usage:"Keep clinical claims accurate; drive to the gated report. Label any figures illustrative.", related:["AD-02","TL-01","CL-03"], cta:{label:"Get the report",href:"../book.html"} },

"AD-02": { title:"LinkedIn Post Library (×12)", cat:"Advertising & Social", catKey:"AD", icon:"mega", status:"LIVE",
 tagline:"A quarter of thought-leadership posts for leaders and founders.", stage:"Awareness",
 format:"12 posts + visuals", audience:["People leaders","Executives","Founders"], channels:["LinkedIn organic"],
 overview:"A quarter's worth of ready-to-post thought leadership - one idea each, mapped to the six SEO pillars - with suggested visuals and hooks, so the brand and founders post consistently without scrambling.",
 contents:[{heading:"Pillar coverage",body:"Longevity, ROI, biomarkers, GLP-1, privacy, ESG."},{heading:"Each post",body:"Hook, 120–180 words, one takeaway, soft CTA."},{heading:"Visuals",body:"On-brand stat cards and quote graphics."}],
 messages:["Consistent presence, on message.","One idea per post."], proof:["Tied to Insights and reports"],
 specs:{Format:"Post pack",Length:"12 posts",Owner:"Social + Content",Stage:"Top funnel",Cadence:"Quarterly refresh"},
 usage:"Stagger posting; personalise founder voice. Keep claims attributed.", related:["AD-08","EM-03","TL-01"], cta:{label:"Read Insights",href:"../resources.html#insights"} },

"AD-03": { title:"Display Ad Set - Productivity", cat:"Advertising & Social", catKey:"AD", icon:"mega", status:"LIVE",
 tagline:"Banner creative framed on protecting output.", stage:"Awareness → Consideration",
 format:"Display set · standard IAB sizes", audience:["CEO","COO","CHRO"], channels:["Display","Programmatic","Retargeting"],
 overview:"A display creative set built on the productivity-protection narrative - catch decline before it costs output - with consistent headlines, the gradient system and a clear path to the productivity solution page.",
 contents:[{heading:"Headline system",body:"'Protect the asset that delivers your strategy.'"},{heading:"Sizes",body:"Leaderboard, MPU, half-page, mobile."},{heading:"CTA",body:"Explore productivity protection."}],
 messages:["Decline is invisible until it isn't.","Protect output by measuring early."], proof:["200+ early signals"],
 specs:{Format:"Display",Length:"Full size set",Owner:"Growth + Brand",Stage:"Top–mid",Cadence:"Per campaign"},
 usage:"One warm CTA per creative; drive to the productivity outcome. Keep claims directional.", related:["AD-04","OP-01","SE-08"], cta:{label:"Explore productivity",href:"../solutions.html#outcomes"} },

"AD-04": { title:"Display Ad Set - Retention", cat:"Advertising & Social", catKey:"AD", icon:"mega", status:"LIVE",
 tagline:"Creative for the 'hard to leave' retention story.", stage:"Awareness → Consideration",
 format:"Display set · standard sizes", audience:["CHRO","Heads of People"], channels:["Display","Programmatic","Social"],
 overview:"A retention-themed creative set: a programme that measurably improves a life is hard to leave. Built to reach people leaders in competitive talent markets.",
 contents:[{heading:"Headline system",body:"'A benefit they actually feel - for a year.'"},{heading:"Sizes",body:"Standard display and social variants."},{heading:"CTA",body:"Explore retention & culture."}],
 messages:["Measurable care is hard to leave.","Belonging, built in."], proof:["12 months of engagement per member"],
 specs:{Format:"Display",Length:"Full set",Owner:"Growth + Brand",Stage:"Top–mid",Cadence:"Per campaign"},
 usage:"Drive to the retention outcome; keep tone aspirational, not fearful.", related:["AD-03","OP-03","IN-01"], cta:{label:"Explore retention",href:"../solutions.html#outcomes"} },

"AD-05": { title:"Display Ad Set - GLP-1 Duty of Care", cat:"Advertising & Social", catKey:"AD", icon:"mega", status:"LIVE",
 tagline:"Creative for the metabolic-era care narrative.", stage:"Awareness → Consideration",
 format:"Display + social set", audience:["CMO / Wellbeing","CHRO","CEO"], channels:["Display","LinkedIn","Programmatic"],
 overview:"A timely creative set on the GLP-1 duty of care - turning an emerging, sensitive workforce shift into demonstrable care through objective baselines and physician oversight. Built with extra care on tone and claims.",
 contents:[{heading:"Headline system",body:"'The metabolic shift is already here. Manage it with care.'"},{heading:"Sizes",body:"Display and LinkedIn variants."},{heading:"CTA",body:"Explore GLP-1 duty of care."}],
 messages:["Turn an emerging risk into demonstrable care.","Objective baselines, physician oversight."], proof:["Metabolic panel; physician sign-off"],
 specs:{Format:"Display/social",Length:"Set",Owner:"Growth + Clinical",Stage:"Top–mid",Cadence:"Per campaign"},
 usage:"Clinical review required; no medical advice or product endorsement; lead with care.", related:["OP-04","TL-06","CL-06"], cta:{label:"Explore GLP-1 duty of care",href:"../solutions.html#outcomes"} },

"AD-06": { title:"Video Ad - 30s Brand Film", cat:"Advertising & Social", catKey:"AD", icon:"mega", status:"LIVE",
 tagline:"Storyboard and script for the hero brand spot.", stage:"Awareness",
 format:"30s video · script + storyboard", audience:["Executives","People leaders"], channels:["LinkedIn","YouTube","Events"],
 overview:"The hero brand film concept - from a one-time test to a measured trajectory - told in 30 seconds with the gradient motion system, ending on the promise line and a single CTA.",
 contents:[{heading:"Open",body:"The familiar, forgettable annual test."},{heading:"Turn",body:"A year of measured change in the app."},{heading:"Proof",body:"The JoySpan line rising, year over year."},{heading:"Close",body:"Promise line + CTA."}],
 messages:["From a test to a trajectory.","Prove it - year over year."], proof:["JoySpan trajectory motif"],
 specs:{Format:"Video",Length:"30s",Owner:"Brand + Motion",Stage:"Top funnel",Cadence:"Per campaign"},
 usage:"Respect motion budget and accessibility (captions). Illustrative data only.", related:["VD-01","VD-02","AD-07"], cta:{label:"See the programme",href:"../programme.html"} },

"AD-07": { title:"Retargeting Ad Set", cat:"Advertising & Social", catKey:"AD", icon:"mega", status:"LIVE",
 tagline:"Mid-funnel creative driving to the pilot page.", stage:"Consideration → Decision",
 format:"Display + social set", audience:["Site visitors","Engaged leads"], channels:["Retargeting","Social"],
 overview:"A retargeting set that re-engages site visitors with proof and the pilot offer - sequenced by what they viewed (report readers see proof; pricing viewers see the pilot).",
 contents:[{heading:"Proof creative",body:"For report/insights readers."},{heading:"Pilot creative",body:"For pricing/programme viewers."},{heading:"Sequencing",body:"Frequency caps and message order."}],
 messages:["Come back for the proof.","Start with a pilot."], proof:["Links to proof and Book a Pilot"],
 specs:{Format:"Display/social",Length:"Set",Owner:"Growth",Stage:"Mid–bottom",Cadence:"Always-on"},
 usage:"Respect frequency caps and privacy/consent; one CTA per creative.", related:["AD-03","WB-03","CS-04"], cta:{label:"Book a Pilot",href:"../book.html"} },

"AD-08": { title:"Founder POV Post Pack", cat:"Advertising & Social", catKey:"AD", icon:"mega", status:"LIVE",
 tagline:"Personal-voice posts for executive thought leadership.", stage:"Awareness",
 format:"Post pack · founder voice", audience:["Founder network","Industry peers"], channels:["LinkedIn (personal)"],
 overview:"Personal-voice posts that build the founder's authority in the measured-longevity category - opinionated, evidence-led and human - amplifying the brand through a trusted individual.",
 contents:[{heading:"Category POVs",body:"Why wellness plateaued; why proof matters."},{heading:"Behind the build",body:"Lessons from delivering at scale."},{heading:"Human notes",body:"Why this mission, personally."}],
 messages:["Opinionated, evidence-led, human.","Authority through the founder."], proof:["Tied to category narrative"],
 specs:{Format:"Post pack",Length:"Set",Owner:"Founder + Content",Stage:"Top funnel",Cadence:"Ongoing"},
 usage:"Keep the founder's authentic voice; claims still attributed.", related:["AD-02","TL-05","PRM-03"], cta:{label:"Read Insights",href:"../resources.html#insights"} },

"AD-09": { title:"Messaging & Hashtag Guide", cat:"Advertising & Social", catKey:"AD", icon:"mega", status:"LIVE",
 tagline:"The shared language for paid and organic social.", stage:"Internal",
 format:"Internal guide · 3 pages", audience:["Social team","Agency","Founders"], channels:["Internal enablement"],
 overview:"The reference that keeps every social surface on-message - approved phrases, the promise line, do/don't language, and the hashtag set - so paid, organic and founder content sound like one brand.",
 contents:[{heading:"Approved language",body:"Promise line, pillars, proof points."},{heading:"Do / don't",body:"'200+' not exact counts; trajectories not guarantees."},{heading:"Hashtags",body:"Category and campaign tags."}],
 messages:["One brand, one language.","Hope, not fear."], proof:["Aligned to the messaging house"],
 specs:{Format:"Guide",Length:"3 pages",Owner:"Brand + Social",Stage:"Internal",Cadence:"Living"},
 usage:"Internal. Enforce claims discipline across all social.", related:["GL-02","BD-04","AD-02"], cta:{label:"See the messaging house",href:"piece.html?id=GL-02"} },

/* ============================================================
   WAVE 8 - CASE STUDIES & PROOF (CS)
   ============================================================ */

"CS-01": { title:"Case Study - Technology Workforce", cat:"Case Studies & Proof", catKey:"CS", icon:"chart", status:"LIVE",
 tagline:"A 2,400-person cohort, baseline to a year-one trajectory (illustrative).", stage:"Consideration → Decision",
 format:"Web page + PDF", audience:["CEO / Board","CHRO","CMO"], channels:["Website","Sales follow-up","Proposal"],
 overview:"The flagship case study (illustrative until live references mature, clearly labelled). It tells the story of a 2,400-person technology workforce from baseline to a year-one JoySpan trajectory - context, cohort, what was measured, the movement, a quote and a results panel.",
 contents:[{heading:"Context",body:"Young-but-sedentary workforce; board asking for evidence."},{heading:"What we measured",body:"200+ markers, 7 panels, organ ages at baseline and quarterly."},{heading:"The trajectory",body:"+6.2 aggregate JoySpan, baseline → year one."},{heading:"Results",body:"38% of flags resolved; 81% engaged at month 9."}],
 messages:["Health your board can see.","Illustrative, clearly labelled."], proof:["+6.2 JoySpan; 81% engagement; 38% flags resolved"],
 specs:{Format:"Page + PDF",Length:"~1,000 words",Owner:"Content + Clinical",Stage:"Mid–bottom",Cadence:"Replace with live as available"},
 usage:"Label illustrative until a live reference exists; outcomes as trajectories, aggregate-only.", related:["CS-03","CS-04","IN-01"], cta:{label:"Read the case study",href:"../case-study.html"} },

"CS-02": { title:"Case Study - Financial Services", cat:"Case Studies & Proof", catKey:"CS", icon:"chart", status:"LIVE",
 tagline:"Critical-role de-risking across a leadership cohort (illustrative).", stage:"Consideration → Decision",
 format:"Web page + PDF", audience:["CEO / Board","Risk","CHRO"], channels:["Website","Sales","Proposal"],
 overview:"An illustrative case study focused on critical-role de-risking in financial services - surfacing reversible risk in a leadership cohort and tracking organ ages year over year, framed for a governance-minded buyer.",
 contents:[{heading:"Context",body:"Concentrated value in a few critical leaders."},{heading:"What we measured",body:"Organ ages and longevity scores for the cohort."},{heading:"The movement",body:"Risk surfaced early and acted on."},{heading:"Results",body:"Continuity confidence; governance-grade reporting."}],
 messages:["Continuity you can act on.","Governance-grade proof."], proof:["8–10 organ ages per leader"],
 specs:{Format:"Page + PDF",Length:"~900 words",Owner:"Content + Clinical",Stage:"Mid–bottom",Cadence:"On reference maturity"},
 usage:"Label illustrative; anonymise fully; aggregate-only and trajectory-framed.", related:["CS-01","IN-02","OP-02"], cta:{label:"Explore de-risking",href:"../solutions.html#outcomes"} },

"CS-03": { title:"Case Study Template", cat:"Case Studies & Proof", catKey:"CS", icon:"chart", status:"LIVE",
 tagline:"The reusable context → cohort → measured → trajectory → results layout.", stage:"Internal",
 format:"Template · web + PDF", audience:["Content team","Sales","CS"], channels:["Internal"],
 overview:"The standard structure for every case study so the proof story is consistent and honest - context, cohort, what we measured, the trajectory, a quote and a results panel - with built-in labelling rules.",
 contents:[{heading:"Sections",body:"Context, cohort, measured, trajectory, quote, results."},{heading:"Labelling rules",body:"Illustrative vs live; aggregate-only; attribution."},{heading:"Visuals",body:"Trajectory chart and results panel components."}],
 messages:["Consistent, honest proof every time.","Trajectories, not guarantees."], proof:["Standardised results panel"],
 specs:{Format:"Template",Length:"Structure",Owner:"Content",Stage:"Internal",Cadence:"Stable"},
 usage:"Mandatory structure for all case studies; enforce labelling and privacy rules.", related:["CS-01","CS-02","CS-04"], cta:{label:"See the live template",href:"../case-study.html"} },

"CS-04": { title:"Proof Pack - Outcomes & KPIs", cat:"Case Studies & Proof", catKey:"CS", icon:"chart", status:"LIVE",
 tagline:"The KPI master scorecard and north-star trajectory in one asset.", stage:"Consideration → Decision",
 format:"PDF + web", audience:["CEO / Board","CFO","CMO"], channels:["Website","Sales","Proposal"],
 overview:"The consolidated evidence asset: the north-star JoySpan trajectory, the two-level outcome model and an illustrative KPI master scorecard - the single document that answers 'what exactly do you prove, and to whom?'.",
 contents:[{heading:"The north-star",body:"A proven year-over-year JoySpan trajectory."},{heading:"Two-level model",body:"Private to the individual; aggregate to the employer."},{heading:"KPI scorecard",body:"Illustrative baseline → year-one metrics."},{heading:"Discipline",body:"Trajectories, attributed benchmarks."}],
 messages:["Everything we prove, on one page set.","Aggregate, anonymised, year over year."], proof:["KPI master scorecard; Workforce Vitality Index"],
 specs:{Format:"PDF + web",Length:"~6 pages",Owner:"Content + Clinical",Stage:"Mid–bottom",Cadence:"Quarterly"},
 usage:"Label all figures illustrative until live; keep ESG metrics aggregate.", related:["CS-01","TL-08","CS-05"], cta:{label:"See outcomes & KPIs",href:"../proof.html"} },

"CS-05": { title:"Employer Dashboard Walkthrough", cat:"Case Studies & Proof", catKey:"CS", icon:"chart", status:"LIVE",
 tagline:"A guided tour of the privacy-safe aggregate dashboard.", stage:"Consideration → Decision",
 format:"Interactive demo + PDF", audience:["CHRO","CEO","Data leads"], channels:["Demo","Website","Sales"],
 overview:"A guided walkthrough of the employer dashboard showing exactly what leadership sees - aggregate organ-age distribution, YoY movement, engagement, detection themes and ESG metrics - and, crucially, what it never shows: any individual's data.",
 contents:[{heading:"What you see",body:"Aggregate distributions, trajectory, engagement, themes."},{heading:"Filters",body:"By sector/segment, with suppression."},{heading:"What you never see",body:"Individual results - by design."},{heading:"ESG view",body:"Workforce Vitality Index."}],
 messages:["See the workforce; never the individual.","No individual data - by design."], proof:["Minimum-cohort suppression; aggregate-only"],
 specs:{Format:"Demo + PDF",Length:"Guided",Owner:"Product + Content",Stage:"Mid–bottom",Cadence:"With product"},
 usage:"Use illustrative data; never display real cohorts. Reinforce the privacy boundary.", related:["CS-04","PV-04","WB-06"], cta:{label:"See the dashboard",href:"../index.html#dashboard"} },

"CS-06": { title:"Testimonial Reel - Script & Kit", cat:"Case Studies & Proof", catKey:"CS", icon:"chart", status:"LIVE",
 tagline:"The framework for capturing leader and member testimonials.", stage:"Internal → proof",
 format:"Capture kit + script", audience:["CS team","Brand","Members (consented)"], channels:["Video","Website","Social"],
 overview:"A consent-first framework for capturing authentic testimonials from leaders and members - question sets, release forms and edit guidance - so social proof is genuine, compliant and on-message.",
 contents:[{heading:"Question sets",body:"For sponsors, HR and members."},{heading:"Consent & release",body:"Explicit, revocable consent forms."},{heading:"Edit guidance",body:"On-message, no over-claiming."}],
 messages:["Authentic proof, consent-first.","Real voices, honest claims."], proof:["Consent and release process"],
 specs:{Format:"Kit + script",Length:"Framework",Owner:"Brand + CS + Legal",Stage:"Proof",Cadence:"As references mature"},
 usage:"Consent mandatory and revocable; never imply guaranteed outcomes.", related:["TS-02","CS-01","PV-05"], cta:{label:"See trust & proof",href:"../proof.html"} },

/* ============================================================
   WAVE 9 - CLINICAL & SCIENTIFIC (CL)
   ============================================================ */

"CL-01": { title:"Evidence Pack - The Clinical Model", cat:"Clinical & Scientific", catKey:"CL", icon:"beaker", status:"LIVE",
 tagline:"The gated, attributed evidence dossier behind the programme.", stage:"Consideration → Decision",
 format:"Gated PDF · ~30 pages", audience:["CMO / Wellbeing","Medical advisors","Procurement"], channels:["Website (gated)","Clinical reviews","Data room"],
 overview:"The dossier that satisfies a scientifically literate buyer. It sets out the clinical model end to end - panels, organ-age methodology, scoring, governance and references - with every external benchmark attributed and every claim framed as a measured trajectory.",
 contents:[{heading:"The model",body:"200+ markers → 7 panels → organ ages → 12 scores → JoySpan."},{heading:"Methodology",body:"How organ ages and scores are derived."},{heading:"Governance",body:"Physician sign-off, completeness gate, critical-value pathway."},{heading:"References",body:"Attributed external evidence and benchmarks."}],
 messages:["Physician-reviewed, never 'AI-diagnosed'.","Every claim attributed."], proof:["7 panels; 8–10 organ ages; 12 scores","Named physician sign-off"],
 specs:{Format:"Gated PDF",Length:"~30 pages",Owner:"Clinical",Stage:"Mid–bottom",Cadence:"Reviewed with science team"},
 usage:"Clinical/compliance gate before release; attribution mandatory; no guarantees.", related:["CL-02","CL-03","TL-03"], cta:{label:"See science & evidence",href:"../proof.html#science"} },

"CL-02": { title:"BioMAP Panel Science Explainer", cat:"Clinical & Scientific", catKey:"CL", icon:"beaker", status:"LIVE",
 tagline:"The 200+ markers → 7 panels → organ ages story, made simple.", stage:"Consideration",
 format:"PDF + web · ~8 pages", audience:["CMO / Wellbeing","CHRO","Curious members"], channels:["Website","Sales","Onboarding"],
 overview:"An accessible explainer of BioMAP - what each of the 7 panels covers and how depth in the engine produces a simple surface (organ ages, one score, one plan). Rigorous enough for a clinician, clear enough for a board member.",
 contents:[{heading:"The 7 panels",body:"Metabolic, Hormonal, Inflammatory, Longevity, Nutritional, Genomic, Organ Function."},{heading:"From markers to organ ages",body:"How panels roll into 8–10 organ ages."},{heading:"Front-end simplicity",body:"Panels → organ ages → JoySpan → one plan."}],
 messages:["Depth in the engine, simplicity at the surface.","200+ markers, made simple."], proof:["7 panels; 8–10 organ ages"],
 specs:{Format:"PDF + web",Length:"~8 pages",Owner:"Clinical + Content",Stage:"Mid funnel",Cadence:"Reviewed periodically"},
 usage:"Keep accurate and attributed; pair with the BioMAP section on the Programme page.", related:["CL-03","TL-03","BR-05"], cta:{label:"What we measure",href:"../programme.html#measure"} },

"CL-03": { title:"Organ-Age Methodology Note", cat:"Clinical & Scientific", catKey:"CL", icon:"beaker", status:"LIVE",
 tagline:"How 8–10 organ ages are computed and interpreted.", stage:"Consideration → Decision",
 format:"Technical note · ~6 pages", audience:["Medical advisors","Data leads","CMO"], channels:["Data room","Clinical reviews"],
 overview:"A technical note on the organ-age methodology - inputs, derivation principles and interpretation - written for advisors who need to understand the rigour before recommending the programme.",
 contents:[{heading:"Inputs",body:"Which markers feed which organ age."},{heading:"Derivation principles",body:"How biological age is estimated, at a methodological level."},{heading:"Interpretation",body:"What a gap means and how it informs action."},{heading:"Limits",body:"What organ ages are and are not."}],
 messages:["Rigour, transparently explained.","Estimates with stated limits."], proof:["Established ageing-science basis (attributed)"],
 specs:{Format:"Technical note",Length:"~6 pages",Owner:"Clinical + Data Science",Stage:"Mid–bottom",Cadence:"With methodology updates"},
 usage:"For technical audiences; clinical-reviewed; state limitations honestly.", related:["CL-02","CL-01","CS-04"], cta:{label:"See the evidence",href:"../proof.html#science"} },

"CL-04": { title:"Clinical Governance Charter", cat:"Clinical & Scientific", catKey:"CL", icon:"beaker", status:"LIVE",
 tagline:"Named physician sign-off, completeness gate and oversight model.", stage:"Decision",
 format:"PDF · governance document", audience:["CMO","General Counsel","Risk","Procurement"], channels:["Data room","Proposal","Trust reviews"],
 overview:"The document that defines how clinical safety is governed - roles, sign-off authority, the completeness gate, the critical-value pathway and the claims discipline - giving risk and legal teams confidence in the safety architecture.",
 contents:[{heading:"Roles & authority",body:"Who signs off and on what basis."},{heading:"Completeness gate",body:"No release without a complete, QC'd panel."},{heading:"Critical-value pathway",body:"Same-day escalation and triage."},{heading:"Claims discipline",body:"Physician-reviewed; trajectories not guarantees."}],
 messages:["Safety is governed, not assumed.","A human on every clinical decision."], proof:["Named physician sign-off; completeness gate"],
 specs:{Format:"PDF",Length:"Governance doc",Owner:"Clinical + Legal",Stage:"Decision",Cadence:"Reviewed annually"},
 usage:"Share in trust reviews; legal/compliance owned. Keep claims discipline explicit.", related:["CL-05","CL-06","EB-04"], cta:{label:"See clinical governance",href:"../deliver.html#clinical"} },

"CL-05": { title:"Physician Sign-off Protocol", cat:"Clinical & Scientific", catKey:"CL", icon:"beaker", status:"LIVE",
 tagline:"The hard-gate process before any report is released.", stage:"Internal → Decision",
 format:"SOP · internal + summary", audience:["Clinical ops","CMO","Auditors"], channels:["Internal","Trust reviews"],
 overview:"The standard operating procedure for physician sign-off - the hard gate that ensures no Smart Report reaches a member without a named clinician's review and approval.",
 contents:[{heading:"The gate",body:"No sign-off, no release - no exceptions."},{heading:"Review steps",body:"What the physician checks before approval."},{heading:"Audit trail",body:"How sign-off is recorded and reviewable."}],
 messages:["A hard gate, every time.","Physician-reviewed, never 'AI-diagnosed'."], proof:["100% physician-signed reports"],
 specs:{Format:"SOP",Length:"Internal",Owner:"Clinical Ops",Stage:"Internal",Cadence:"Reviewed annually"},
 usage:"Share a summary externally; full SOP internal. No release without sign-off.", related:["CL-04","CL-06","DL-05"], cta:{label:"See clinical governance",href:"../deliver.html#clinical"} },

"CL-06": { title:"Same-Day Critical-Value Pathway", cat:"Clinical & Scientific", catKey:"CL", icon:"beaker", status:"LIVE",
 tagline:"The defined escalation and triage pathway for critical findings.", stage:"Internal → Decision",
 format:"SOP · internal + summary", audience:["Clinical ops","CMO","Risk"], channels:["Internal","Trust reviews"],
 overview:"The protocol that ensures critical findings trigger a same-day, defined escalation and triage - the safety net that makes the programme responsible at workforce scale.",
 contents:[{heading:"Trigger",body:"What constitutes a critical value."},{heading:"Escalation",body:"Same-day clinician contact and triage."},{heading:"Handoff",body:"Onward care guidance and documentation."}],
 messages:["Safety-first triage.","Same-day, every time."], proof:["Defined critical-value pathway"],
 specs:{Format:"SOP",Length:"Internal",Owner:"Clinical Ops",Stage:"Internal",Cadence:"Reviewed annually"},
 usage:"Summary for trust reviews; full SOP internal. Essential for GLP-1 and high-risk cohorts.", related:["CL-04","CL-05","TL-06"], cta:{label:"See clinical governance",href:"../deliver.html#clinical"} },

"CL-07": { title:"Claims & Language Discipline Guide", cat:"Clinical & Scientific", catKey:"CL", icon:"beaker", status:"LIVE",
 tagline:"'200+', 'trajectories not guarantees', 'never AI-diagnosed'.", stage:"Internal",
 format:"Internal guide · 4 pages", audience:["All teams","Agency","Partners"], channels:["Internal enablement"],
 overview:"The single source of truth for how AIWO talks about outcomes and science across every asset - the approved phrasings, the forbidden claims and the rationale - so marketing never outruns the evidence.",
 contents:[{heading:"Approved",body:"'200+', 'measured trajectory', 'physician-reviewed', 'aggregate-only'."},{heading:"Forbidden",body:"Exact-count boasts, guaranteed outcomes, 'AI-diagnosed', 'cure'."},{heading:"Benchmarks",body:"Always attributed; labelled if illustrative."},{heading:"Why",body:"Trust and compliance protect the category."}],
 messages:["Marketing never outruns the evidence.","Hope, not hype."], proof:["Aligned to clinical governance"],
 specs:{Format:"Guide",Length:"4 pages",Owner:"Clinical + Brand",Stage:"Internal",Cadence:"Living"},
 usage:"Mandatory reference for every customer-facing piece; enforced at review.", related:["CL-04","GL-02","BD-04"], cta:{label:"See the messaging house",href:"piece.html?id=GL-02"} },

/* ============================================================
   WAVE 10 - PRIVACY, SECURITY & TRUST (PV)
   ============================================================ */

"PV-01": { title:"DPDPA Notice - Employee-Facing", cat:"Privacy, Security & Trust", catKey:"PV", icon:"shield", status:"LIVE",
 tagline:"Plain-language data notice for enrolled employees.", stage:"Onboarding",
 format:"PDF + web · plain-language", audience:["Employees / members","Works councils","Legal"], channels:["Enrollment","Website (legal)","Consent flow"],
 overview:"The employee-facing privacy notice written in plain language, explaining what data is collected, how it is used, the single-channel boundary and the member's rights under India's DPDPA - the document that earns trust at enrolment.",
 contents:[{heading:"What we collect",body:"Programme and account data, handled as special-category."},{heading:"How it's used",body:"For the member's report and plan; aggregate-only to employers."},{heading:"Your rights",body:"Access, correct, delete, withdraw consent."},{heading:"Contact",body:"The Data Protection Officer."}],
 messages:["Your results belong to you.","Aggregate-only to employers - never individual."], proof:["Single-channel; DPDPA-aligned"],
 specs:{Format:"PDF + web",Length:"Plain-language",Owner:"Legal + Content",Stage:"Onboarding",Cadence:"Reviewed on regulation change"},
 usage:"Legal-owned; keep plain-language summary atop. Mirror the live legal page.", related:["PV-05","PV-02","ON-04"], cta:{label:"Read the DPDPA notice",href:"../legal.html#dpdpa"} },

"PV-02": { title:"Trust Centre One-Pager", cat:"Privacy, Security & Trust", catKey:"PV", icon:"shield", status:"LIVE",
 tagline:"Controls, certifications roadmap and the data boundary, summarised.", stage:"Consideration → Decision",
 format:"1 page · PDF", audience:["IT / Security","Procurement","Legal","CHRO"], channels:["Sales","Security reviews","Website"],
 overview:"A single page that pre-empts the security and privacy questions IT and risk committees ask - the controls, the certifications roadmap, the data boundary and the responsible-disclosure path - so the deal isn't stalled by a security review.",
 contents:[{heading:"Controls",body:"Encryption, least-access, audit logging."},{heading:"Compliance",body:"DPDPA-aligned; ISO 27001 / SOC-2 roadmap."},{heading:"Boundary",body:"Single-channel, aggregate-only, suppression."},{heading:"Disclosure",body:"Responsible-disclosure path; sub-processor register."}],
 messages:["Privacy is a designed feature.","Pre-empt the security review."], proof:["DPDPA-aligned; ISO/SOC-2 roadmap"],
 specs:{Format:"1 page",Length:"1 page",Owner:"Security + Legal",Stage:"Mid–bottom",Cadence:"Quarterly"},
 usage:"Send ahead of security reviews; keep certification status honest (roadmap vs certified).", related:["PV-03","PV-06","CL-04"], cta:{label:"Visit the Trust Centre",href:"../legal.html#security"} },

"PV-03": { title:"Security & Compliance FAQ", cat:"Privacy, Security & Trust", catKey:"PV", icon:"shield", status:"LIVE",
 tagline:"The answers IT, legal and risk committees ask.", stage:"Decision",
 format:"FAQ · PDF + web", audience:["IT / Security","Legal","Procurement"], channels:["Security reviews","Data room","Website"],
 overview:"A comprehensive FAQ covering data handling, encryption, access, retention, sub-processors, incident response and compliance posture - structured to answer a security questionnaire without a meeting.",
 contents:[{heading:"Data handling",body:"Special-category treatment and retention."},{heading:"Access & encryption",body:"Least-access, RBAC, TLS and at-rest."},{heading:"Incident response",body:"Posture and red-threshold stance."},{heading:"Compliance",body:"DPDPA; ISO/SOC-2 roadmap; sub-processors."}],
 messages:["Answer the questionnaire before it's asked.","A data incident has a red threshold of zero."], proof:["Documented controls; sub-processor register"],
 specs:{Format:"FAQ",Length:"~6 pages",Owner:"Security + Legal",Stage:"Decision",Cadence:"Quarterly"},
 usage:"Keep aligned to actual controls; never overstate certification status.", related:["PV-02","PV-06","DL-07"], cta:{label:"Visit the Trust Centre",href:"../legal.html#security"} },

"PV-04": { title:"Data-Flow & Single-Channel Diagram", cat:"Privacy, Security & Trust", catKey:"PV", icon:"shield", status:"LIVE",
 tagline:"How results reach the individual - and never the employer.", stage:"Consideration → Decision",
 format:"Diagram + 1-page note", audience:["IT / Security","CHRO","Works councils","Members"], channels:["Security reviews","Onboarding","Website"],
 overview:"A clear visual of the trust architecture - from draw to lab to the member's single channel, and separately the suppressed aggregate that reaches the employer - making the privacy boundary tangible and verifiable.",
 contents:[{heading:"Member channel",body:"Results flow only to the individual."},{heading:"Aggregate channel",body:"Suppressed, anonymised data to the employer."},{heading:"Separation",body:"Where and how the boundary is enforced."}],
 messages:["See exactly where your data goes.","The boundary is absolute."], proof:["Single-channel; minimum-cohort suppression"],
 specs:{Format:"Diagram + note",Length:"1 page",Owner:"Security + Brand",Stage:"Mid–bottom",Cadence:"Stable"},
 usage:"Use in onboarding and security reviews; reinforce that employers never see individuals.", related:["PV-01","CS-05","PV-02"], cta:{label:"See the privacy model",href:"../proof.html"} },

"PV-05": { title:"Consent Form & Script", cat:"Privacy, Security & Trust", catKey:"PV", icon:"shield", status:"LIVE",
 tagline:"The hard-stop consent flow: no consent, no draw.", stage:"Onboarding",
 format:"Form + verbal script", audience:["Members","Camp staff","Legal"], channels:["Camp day","App onboarding"],
 overview:"The informed-consent form and the staff script that precede every draw - the hard stop that makes participation voluntary, understood and revocable, and that protects both the member and the programme.",
 contents:[{heading:"The form",body:"What is collected, used and shared; rights and revocation."},{heading:"The script",body:"How staff explain consent before a draw."},{heading:"Revocation",body:"How a member withdraws at any time."}],
 messages:["No consent, no draw - a hard stop.","Voluntary, understood, revocable."], proof:["Informed consent precedes every draw"],
 specs:{Format:"Form + script",Length:"Standard",Owner:"Legal + Clinical Ops",Stage:"Onboarding",Cadence:"Reviewed on regulation change"},
 usage:"Mandatory before any draw; legal-owned; revocation must be easy and honoured.", related:["PV-01","ON-04","DL-02"], cta:{label:"Read the DPDPA notice",href:"../legal.html#dpdpa"} },

"PV-06": { title:"Sub-Processor Register", cat:"Privacy, Security & Trust", catKey:"PV", icon:"shield", status:"LIVE",
 tagline:"The maintained list for procurement and DPAs.", stage:"Decision",
 format:"Register · maintained doc", audience:["Procurement","Legal","IT / Security"], channels:["Data room","Security reviews"],
 overview:"A current register of sub-processors - labs, logistics, cloud and tooling - with purpose and location, maintained for data-processing agreements and procurement diligence.",
 contents:[{heading:"Categories",body:"Labs, logistics, cloud, analytics, comms."},{heading:"Per entry",body:"Purpose, data accessed, location."},{heading:"Change process",body:"How the register is updated and notified."}],
 messages:["Transparent supply chain.","Maintained for diligence."], proof:["Up-to-date sub-processor list"],
 specs:{Format:"Register",Length:"Maintained",Owner:"Legal + Security",Stage:"Decision",Cadence:"Updated on change"},
 usage:"Share under DPA/diligence; keep current. Notify changes per contract.", related:["PV-02","PV-03","CH-01"], cta:{label:"Visit the Trust Centre",href:"../legal.html#security"} },

/* ============================================================
   WAVE 11 - EMPLOYEE ONBOARDING & COMMS (ON)
   ============================================================ */

"ON-01": { title:"Enrollment Kit", cat:"Employee Onboarding & Comms", catKey:"ON", icon:"users", status:"LIVE",
 tagline:"Everything to invite, consent and schedule a workforce.", stage:"Onboarding",
 format:"Kit · emails + forms + scheduler", audience:["HR / People ops","Employees","Champions"], channels:["Email","Intranet","App"],
 overview:"The end-to-end kit HR uses to enrol a workforce - invitation comms, the consent flow, FAQ and the scheduling mechanism - designed to maximise turnout while keeping consent front and centre.",
 contents:[{heading:"Invitation comms",body:"Leadership-backed invite and reminders."},{heading:"Consent & privacy",body:"The form and the plain-language explainer."},{heading:"Scheduling",body:"How members pick a camp slot."},{heading:"FAQ",body:"What it is, what's in it for me, is it private."}],
 messages:["High turnout, consent-first.","Make enrolling effortless."], proof:["Consent precedes every draw"],
 specs:{Format:"Kit",Length:"Multi-asset",Owner:"Member Care + HR",Stage:"Onboarding",Cadence:"Per rollout"},
 usage:"Lead with leadership endorsement; never pressure participation.", related:["ON-02","ON-03","PV-05"], cta:{label:"See delivery at scale",href:"../deliver.html#scale"} },

"ON-02": { title:"Launch Announcement - From the CEO", cat:"Employee Onboarding & Comms", catKey:"ON", icon:"users", status:"LIVE",
 tagline:"The leadership email that signals it matters (the #1 driver).", stage:"Onboarding",
 format:"Email template", audience:["All employees"], channels:["Email","Town hall","Intranet"],
 overview:"A template for the CEO/leadership launch message - because leadership participation is the single biggest driver of engagement. It frames the programme as an investment in people, models personal participation and invites everyone in.",
 contents:[{heading:"Why we're doing this",body:"An investment in your longevity, measured and private."},{heading:"I'm doing it too",body:"Leaders go first."},{heading:"What to expect",body:"A 20-minute draw, your private report, a year of support."},{heading:"How to join",body:"Enrol and pick a slot."}],
 messages:["Leaders go first.","An investment in you - measured, private."], proof:["Leadership participation = #1 engagement driver"],
 specs:{Format:"Email",Length:"~250 words",Owner:"Member Care + Comms",Stage:"Onboarding",Cadence:"Per rollout"},
 usage:"Must come from a named leader; encourage genuine leader participation.", related:["ON-01","HR-04","ON-03"], cta:{label:"See the experience",href:"../index.html#app"} },

"ON-03": { title:"Programme FAQ - Employee", cat:"Employee Onboarding & Comms", catKey:"ON", icon:"users", status:"LIVE",
 tagline:"What it is, what's in it for me, and is it private.", stage:"Onboarding",
 format:"FAQ · web + PDF", audience:["Employees / members"], channels:["Intranet","App","Email"],
 overview:"The employee-facing FAQ that removes friction and fear before enrolment - covering the experience, privacy, the science in plain terms, and what happens with results - written warm and reassuring.",
 contents:[{heading:"What is it?",body:"A measured longevity programme, just for you."},{heading:"Is it private?",body:"Your results are yours; employers see only aggregates."},{heading:"What's involved?",body:"A 20-minute draw, a report, a year in the app."},{heading:"What do I get?",body:"Your JoySpan, organ ages and a personal plan."}],
 messages:["What's in it for me, answered.","Your results are yours."], proof:["Single-channel privacy; physician-signed report"],
 specs:{Format:"FAQ",Length:"~2 pages",Owner:"Member Care",Stage:"Onboarding",Cadence:"Living"},
 usage:"Warm, non-clinical tone; reinforce privacy; no medical advice.", related:["ON-04","AP-02","PV-01"], cta:{label:"See the app experience",href:"../index.html#app"} },

"ON-04": { title:"Consent & Privacy Explainer", cat:"Employee Onboarding & Comms", catKey:"ON", icon:"users", status:"LIVE",
 tagline:"A friendly walk-through of the privacy promise.", stage:"Onboarding",
 format:"1–2 pages · web + PDF", audience:["Employees / members","Works councils"], channels:["Enrollment","App","Intranet"],
 overview:"A plain-language companion to the formal DPDPA notice - the same promises, explained warmly: what consent means, what the employer can and cannot see, and how to withdraw at any time.",
 contents:[{heading:"What you're agreeing to",body:"In plain words."},{heading:"What your employer sees",body:"Only aggregates - never you."},{heading:"Your control",body:"Withdraw consent any time."}],
 messages:["Privacy you can actually understand.","You stay in control."], proof:["Aggregate-only; revocable consent"],
 specs:{Format:"1–2 pages",Length:"Plain-language",Owner:"Member Care + Legal",Stage:"Onboarding",Cadence:"With notice updates"},
 usage:"Plain-language; consistent with the formal notice; reassure, don't legalese.", related:["PV-01","PV-05","ON-03"], cta:{label:"Read the DPDPA notice",href:"../legal.html#dpdpa"} },

"ON-05": { title:"Camp-Day Guide - What to Expect", cat:"Employee Onboarding & Comms", catKey:"ON", icon:"users", status:"LIVE",
 tagline:"The 20-minute draw, demystified.", stage:"Onboarding",
 format:"1 page + signage", audience:["Employees / members"], channels:["Email","Camp day","App"],
 overview:"A short, reassuring guide to camp day - how to prepare, what happens in the 20 minutes, and what comes next - reducing anxiety and no-shows.",
 contents:[{heading:"Before",body:"Simple prep (e.g. fasting guidance if applicable)."},{heading:"On the day",body:"Check-in, consent, the 20-minute draw."},{heading:"After",body:"When your Smart Report and starter pack arrive."}],
 messages:["20 minutes. A year of change.","Calm, quick, private."], proof:["Barcode QC; validated handling"],
 specs:{Format:"1 page + signage",Length:"1 page",Owner:"Member Care + Ops",Stage:"Onboarding",Cadence:"Per rollout"},
 usage:"Set expectations to reduce no-shows; mirror on-site signage.", related:["ON-07","DL-02","AP-02"], cta:{label:"See delivery",href:"../deliver.html#scale"} },

"ON-06": { title:"Welcome Pack", cat:"Employee Onboarding & Comms", catKey:"ON", icon:"users", status:"LIVE",
 tagline:"The first-touch experience for newly enrolled members.", stage:"Onboarding",
 format:"Pack · digital + optional print", audience:["New members"], channels:["App","Email","Print insert"],
 overview:"The warm first-touch a member receives on enrolment - what to expect over the year, how to use the app, the pillar pocket guide and where to get help - setting the tone for 12 months of engagement.",
 contents:[{heading:"Your year ahead",body:"Baseline → act → re-measure → prove."},{heading:"Your app",body:"How to get started in LifeOS."},{heading:"The pillars",body:"The 11+1 pocket guide."},{heading:"Help",body:"Where to get support."}],
 messages:["Welcome to your year of change.","Everything starts here."], proof:["LifeOS app; 11+1 pillars"],
 specs:{Format:"Pack",Length:"Multi-asset",Owner:"Member Care",Stage:"Onboarding",Cadence:"Stable"},
 usage:"Warm, member-first; reinforce privacy and support.", related:["AP-01","BR-05","ON-03"], cta:{label:"See the app",href:"../index.html#app"} },

"ON-07": { title:"On-Site Poster & Signage Set", cat:"Employee Onboarding & Comms", catKey:"ON", icon:"users", status:"LIVE",
 tagline:"Wayfinding and reassurance for the camp.", stage:"Onboarding",
 format:"Print set · posters + signage", audience:["Employees on camp day","Camp staff"], channels:["On-site print"],
 overview:"A branded set of posters and wayfinding signage for the on-site camp - stations, queue guidance, consent reminders and reassurance - keeping the experience calm, premium and clearly privacy-respecting.",
 contents:[{heading:"Wayfinding",body:"Check-in, stations, exit."},{heading:"Reassurance",body:"Calm, premium, private messaging."},{heading:"Consent reminder",body:"No consent, no draw."}],
 messages:["Competence felt as calm.","Calm, premium, private."], proof:["Barcode double-scan QC on site"],
 specs:{Format:"Print set",Length:"Set",Owner:"Brand + Ops",Stage:"Onboarding",Cadence:"Per venue"},
 usage:"Maintain premium, calm tone; reinforce consent and privacy on site.", related:["ON-05","DL-02","BD-05"], cta:{label:"See delivery at scale",href:"../deliver.html#scale"} },

"ON-08": { title:"Manager Talking Points", cat:"Employee Onboarding & Comms", catKey:"ON", icon:"users", status:"LIVE",
 tagline:"A short script so managers can answer team questions.", stage:"Onboarding",
 format:"1 page · talking points", audience:["Line managers","Team leads"], channels:["Manager briefing","Intranet"],
 overview:"A concise set of talking points that equips line managers to answer the questions their teams will ask - what it is, why the company offers it, and the privacy promise - without overstepping into clinical or HR advice.",
 contents:[{heading:"What to say",body:"It's a measured, private longevity programme - an investment in you."},{heading:"Privacy line",body:"The company never sees individual results."},{heading:"Where to point people",body:"The FAQ and enrolment link."}],
 messages:["Equip managers, don't script robots.","Privacy first, always."], proof:["Aggregate-only privacy"],
 specs:{Format:"1 page",Length:"Talking points",Owner:"HR Enablement",Stage:"Onboarding",Cadence:"Per rollout"},
 usage:"Managers signpost, not advise; route detailed questions to HR/Member Care.", related:["HR-07","ON-03","HR-04"], cta:{label:"HR enablement",href:"../solutions.html"} },

/* ============================================================
   WAVE 12 - MEMBER EXPERIENCE & APP (AP)
   ============================================================ */

"AP-01": { title:"LifeOS App Guide", cat:"Member Experience & App", catKey:"AP", icon:"phone", status:"LIVE",
 tagline:"A tour of Home/JoySpan, My Report, Pillars and Community.", stage:"Onboarding → Retention",
 format:"In-app + PDF guide", audience:["Members"], channels:["App","Welcome pack","Email"],
 overview:"The member's orientation to the LifeOS app - the surface that carries the year of change. It walks through the JoySpan home, the Smart Report, guided pillar actions, supplements and JoySpan Live, so members get value from day one.",
 contents:[{heading:"Home / JoySpan",body:"Your score and trajectory at a glance."},{heading:"My Report",body:"Organ ages and panels in plain language."},{heading:"Pillars",body:"Your 2–3 priority actions with nudges."},{heading:"Community",body:"JoySpan Live, challenges and rewards."}],
 messages:["Your year of change, in your pocket.","Value from day one."], proof:["LifeOS for every member, 12 months"],
 specs:{Format:"In-app + PDF",Length:"Guide",Owner:"Product + Member Care",Stage:"Onboarding",Cadence:"With product"},
 usage:"Keep member-first and non-clinical; reinforce privacy.", related:["AP-02","AP-04","ON-06"], cta:{label:"See the app",href:"../index.html#app"} },

"AP-02": { title:"Smart Report Reading Guide", cat:"Member Experience & App", catKey:"AP", icon:"phone", status:"LIVE",
 tagline:"How to read your JoySpan Score, organ ages and panels.", stage:"Onboarding",
 format:"In-app + PDF", audience:["Members"], channels:["App","Email"],
 overview:"A guide that helps a member understand their physician-signed Smart Report - what the JoySpan Score means, how to read organ ages, and how the 7 panels translate into a prioritised plan - turning a clinical document into clear, motivating action.",
 contents:[{heading:"Your JoySpan Score",body:"What it is and how it changes."},{heading:"Organ ages",body:"Reading the gaps without alarm."},{heading:"The 7 panels",body:"Plain-language summaries."},{heading:"Your plan",body:"The 2–3 changes that matter most."}],
 messages:["A clinical report, made human.","Understand it, then act on it."], proof:["Physician-signed; 8–10 organ ages"],
 specs:{Format:"In-app + PDF",Length:"Guide",Owner:"Clinical + Member Care",Stage:"Onboarding",Cadence:"With report format"},
 usage:"Hope, not fear; no medical advice beyond the signed plan; route concerns to clinicians.", related:["AP-01","CL-02","ON-03"], cta:{label:"What we measure",href:"../programme.html#measure"} },

"AP-03": { title:"Supplement Starter Pack Guide", cat:"Member Experience & App", catKey:"AP", icon:"phone", status:"LIVE",
 tagline:"From deficiency to physician-confirmed pack at your door.", stage:"Onboarding → Retention",
 format:"In-app + insert", audience:["Members"], channels:["App","Pack insert"],
 overview:"Explains the one-month personalised supplement starter pack - how deficiencies map to a physician-confirmed formulary SKU, how to take them, and how adherence is tracked in-app, with optional refills.",
 contents:[{heading:"How it's chosen",body:"Deficiency → formulary SKU → physician-confirmed."},{heading:"How to take it",body:"Simple daily guidance."},{heading:"Adherence",body:"Tracked in-app; gentle nudges."},{heading:"Refills",body:"Optional, member-controlled."}],
 messages:["Supplements, done right.","Physician-confirmed, to your door."], proof:["1-month personalised starter pack"],
 specs:{Format:"In-app + insert",Length:"Guide",Owner:"Clinical + Member Care",Stage:"Onboarding",Cadence:"With formulary"},
 usage:"No health claims beyond confirmed need; physician-confirmed only.", related:["AP-01","CL-01","ON-06"], cta:{label:"See the experience",href:"../index.html#app"} },

"AP-04": { title:"Pillar Action Cards (11+1)", cat:"Member Experience & App", catKey:"AP", icon:"phone", status:"LIVE",
 tagline:"One card per pillar with the actions that move the score.", stage:"Retention",
 format:"In-app cards + print", audience:["Members"], channels:["App","Print pocket guide"],
 overview:"A set of 12 action cards - one per LongeVis pillar plus the foundation - each translating a clinical finding into two or three livable actions, with the panel it connects to and a simple way to track progress.",
 contents:[{heading:"Per card",body:"Pillar, why it matters, 2–3 actions, connected panel."},{heading:"Tracking",body:"Mark actions and see streaks."},{heading:"Prioritisation",body:"Your top pillars first."}],
 messages:["Every finding becomes a livable action.","Small steps, measured impact."], proof:["11+1 LongeVis pillars"],
 specs:{Format:"Cards",Length:"12 cards",Owner:"Clinical + Product",Stage:"Retention",Cadence:"Stable"},
 usage:"Actionable and warm; no medical advice beyond the plan.", related:["BR-05","AP-01","CL-02"], cta:{label:"See the 11+1 pillars",href:"../index.html#pillars"} },

"AP-05": { title:"JoySpan Live & Community Guide", cat:"Member Experience & App", catKey:"AP", icon:"phone", status:"LIVE",
 tagline:"Masterclasses, challenges and cohort belonging.", stage:"Retention",
 format:"In-app + comms", audience:["Members","Champions"], channels:["App","Email","Events"],
 overview:"Explains the social engine of the programme - the monthly masterclass, team challenges, rewards and the cohort community - the features that sustain engagement across a full year and make the programme hard to leave.",
 contents:[{heading:"JoySpan Live",body:"One consolidated monthly masterclass."},{heading:"Challenges",body:"Team and cohort challenges."},{heading:"Rewards",body:"Recognition and incentives."},{heading:"Community",body:"Belonging that drives adherence."}],
 messages:["Belonging keeps the habit.","Leadership participation lifts everyone."], proof:["Monthly masterclass; cohort challenges"],
 specs:{Format:"In-app + comms",Length:"Guide",Owner:"Member Care",Stage:"Retention",Cadence:"Monthly programming"},
 usage:"Encourage participation, never pressure; protect privacy in community features.", related:["HR-05","AP-01","HR-04"], cta:{label:"See the experience",href:"../index.html#app"} },

"AP-06": { title:"Quarterly Re-test Reminder Kit", cat:"Member Experience & App", catKey:"AP", icon:"phone", status:"LIVE",
 tagline:"Nudges and comms for the 3 / 6 / 9-month re-measures.", stage:"Retention",
 format:"Comms kit · app + email", audience:["Members","HR ops"], channels:["App","Email"],
 overview:"The comms that keep members on cadence - friendly reminders and booking nudges for the three quarterly progress re-tests, so the SIIS cycle completes and the score visibly moves.",
 contents:[{heading:"Reminder cadence",body:"Pre-test nudges at months 3, 6, 9."},{heading:"Why re-test",body:"See your score move; re-test the intervention."},{heading:"Booking",body:"One-tap scheduling."}],
 messages:["See the score move.","Re-test the intervention, not the full panel."], proof:["3 quarterly re-tests in the SIIS cycle"],
 specs:{Format:"Comms kit",Length:"Set",Owner:"Member Care",Stage:"Retention",Cadence:"Quarterly"},
 usage:"Motivating, not nagging; respect notification preferences.", related:["AP-01","TL-04","HR-03"], cta:{label:"See how it works",href:"../index.html#siis"} },

/* ============================================================
   WAVE 13 - MANAGER & HR ENABLEMENT (HR)
   ============================================================ */

"HR-01": { title:"Rollout Playbook - HR", cat:"Manager & HR Enablement", catKey:"HR", icon:"users", status:"LIVE",
 tagline:"The end-to-end internal launch plan, week by week.", stage:"Onboarding",
 format:"Playbook · ~20 pages", audience:["CHRO","HR ops","Project leads"], channels:["Internal","Kickoff"],
 overview:"The operating manual HR uses to launch the programme successfully - a week-by-week plan from sponsor alignment and comms through enrolment, camp waves and the first aggregate readout - with RACI, checklists and templates.",
 contents:[{heading:"Phase 0 · Align",body:"Sponsor, success criteria, comms plan."},{heading:"Phase 1 · Enrol",body:"Announcement, FAQ, consent, scheduling."},{heading:"Phase 2 · Deliver",body:"Camp waves and member support."},{heading:"Phase 3 · Prove",body:"First aggregate readout and momentum."}],
 messages:["Launch like a pro.","Leadership first; high turnout follows."], proof:["Wave Model; leadership-driven engagement"],
 specs:{Format:"Playbook",Length:"~20 pages",Owner:"Member Care + HR Enablement",Stage:"Onboarding",Cadence:"Per rollout"},
 usage:"Adapt to client; keep consent and privacy central; set realistic timelines.", related:["HR-02","HR-03","ON-01"], cta:{label:"See delivery at scale",href:"../deliver.html#scale"} },

"HR-02": { title:"Wellness Champion Kit", cat:"Manager & HR Enablement", catKey:"HR", icon:"users", status:"LIVE",
 tagline:"Recruit and equip internal champions across sites.", stage:"Onboarding → Retention",
 format:"Kit · guide + assets", audience:["Champions","HR ops"], channels:["Internal","Intranet"],
 overview:"Everything to build a champion network - how to recruit champions, what they do, and the ready-made assets they use to drive enrolment and sustain engagement at the team level across sites.",
 contents:[{heading:"Recruit",body:"Who makes a good champion and how to ask."},{heading:"Equip",body:"Talking points, posters, nudge templates."},{heading:"Sustain",body:"Challenges, recognition and check-ins."}],
 messages:["Local voices drive adoption.","Champions multiply engagement."], proof:["Community and challenge mechanics"],
 specs:{Format:"Kit",Length:"Multi-asset",Owner:"Member Care",Stage:"Onboarding–retention",Cadence:"Per rollout"},
 usage:"Champions encourage, never coerce; protect privacy in team comms.", related:["HR-05","AP-05","ON-07"], cta:{label:"See the experience",href:"../index.html#app"} },

"HR-03": { title:"Internal Comms Calendar", cat:"Manager & HR Enablement", catKey:"HR", icon:"users", status:"LIVE",
 tagline:"A 12-month cadence of nudges, masterclasses and milestones.", stage:"Retention",
 format:"Calendar + templates", audience:["HR ops","Comms","Champions"], channels:["Internal","Email","Intranet"],
 overview:"A ready 12-month communications calendar mapping every touch - launch, camp waves, masterclasses, quarterly re-tests and the year-one readout - with templates, so engagement is designed rather than improvised.",
 contents:[{heading:"Launch window",body:"Announcement and enrolment drive."},{heading:"Quarterly beats",body:"Re-test reminders and masterclasses."},{heading:"Milestones",body:"Mid-year check-in; year-one readout."},{heading:"Templates",body:"Email and intranet copy for each beat."}],
 messages:["Engagement is designed, not hoped for.","A beat for every quarter."], proof:["Aligned to the SIIS cadence"],
 specs:{Format:"Calendar + templates",Length:"12 months",Owner:"Member Care + Comms",Stage:"Retention",Cadence:"Per rollout"},
 usage:"Adapt to client calendar; respect comms frequency norms.", related:["AP-06","HR-01","EM-03"], cta:{label:"See how it works",href:"../index.html#siis"} },

"HR-04": { title:"Leadership Participation Guide", cat:"Manager & HR Enablement", catKey:"HR", icon:"users", status:"LIVE",
 tagline:"Why leaders going first is the #1 engagement driver.", stage:"Onboarding",
 format:"1–2 pages · guide", audience:["CEO / Exec","CHRO"], channels:["Internal","Exec briefing"],
 overview:"A short guide that makes the case for visible leadership participation and shows exactly how leaders can model it - because nothing drives workforce engagement like the C-suite going first and saying so.",
 contents:[{heading:"Why it matters",body:"Leadership participation is the #1 driver of engagement."},{heading:"How to model it",body:"Enrol early, share the why, reference it in town halls."},{heading:"What not to do",body:"Don't mandate; invite and inspire."}],
 messages:["Leaders go first.","Model it, don't mandate it."], proof:["Engagement correlates with leader participation"],
 specs:{Format:"Guide",Length:"1–2 pages",Owner:"Member Care + Exec",Stage:"Onboarding",Cadence:"Stable"},
 usage:"Encourage genuine participation; keep leaders' own data private like everyone's.", related:["ON-02","RK-01","AP-05"], cta:{label:"For the CEO & Board",href:"piece.html?id=RK-01"} },

"HR-05": { title:"Engagement Toolkit", cat:"Manager & HR Enablement", catKey:"HR", icon:"users", status:"LIVE",
 tagline:"Challenges, rewards and recognition mechanics.", stage:"Retention",
 format:"Toolkit · mechanics + assets", audience:["HR ops","Champions"], channels:["App","Internal","Events"],
 overview:"A toolkit of proven engagement mechanics - team challenges, streaks, recognition and rewards - with the assets to run them, designed to sustain participation across the full year without gimmickry.",
 contents:[{heading:"Challenges",body:"Team and cohort formats that fit the pillars."},{heading:"Recognition",body:"Celebrating progress, not just winners."},{heading:"Rewards",body:"Meaningful, privacy-safe incentives."}],
 messages:["Sustain the habit for a year.","Celebrate progress, protect privacy."], proof:["Community and challenge features"],
 specs:{Format:"Toolkit",Length:"Multi-asset",Owner:"Member Care",Stage:"Retention",Cadence:"Refresh quarterly"},
 usage:"Never tie rewards to individual health data; keep it voluntary and inclusive.", related:["AP-05","HR-02","HR-03"], cta:{label:"See the experience",href:"../index.html#app"} },

"HR-06": { title:"HR FAQ", cat:"Manager & HR Enablement", catKey:"HR", icon:"users", status:"LIVE",
 tagline:"Answers for the People team's own questions.", stage:"Onboarding → Decision",
 format:"FAQ · ~4 pages", audience:["CHRO","HR ops","Benefits"], channels:["Internal","Sales handover"],
 overview:"The FAQ that answers the operational questions a People team asks before and during rollout - data handling, employee comms, scheduling logistics, what they will and won't see, and how success is measured.",
 contents:[{heading:"Data & privacy",body:"What HR sees (aggregate) and never sees (individual)."},{heading:"Logistics",body:"Scheduling, waves, site requirements."},{heading:"Comms",body:"What to send, when."},{heading:"Success",body:"How outcomes are reported."}],
 messages:["Everything the People team needs to run it.","Aggregate-only, always."], proof:["Aggregate dashboard; wave delivery"],
 specs:{Format:"FAQ",Length:"~4 pages",Owner:"Member Care + HR Enablement",Stage:"Onboarding",Cadence:"Living"},
 usage:"Reinforce the privacy boundary; set realistic logistics expectations.", related:["HR-01","CS-05","PV-03"], cta:{label:"See the dashboard",href:"../index.html#dashboard"} },

"HR-07": { title:"Manager Briefing Deck", cat:"Manager & HR Enablement", catKey:"HR", icon:"users", status:"LIVE",
 tagline:"A short deck to align line managers before launch.", stage:"Onboarding",
 format:"Slide deck · ~8 slides", audience:["Line managers","Team leads"], channels:["Manager briefing","Intranet"],
 overview:"A brief deck to align managers ahead of launch - what the programme is, the privacy promise, how to encourage (not mandate) participation, and where to send questions - so the rollout has consistent local support.",
 contents:[{heading:"What it is",body:"A measured, private longevity programme."},{heading:"Your role",body:"Encourage, model, signpost."},{heading:"Privacy",body:"You and the company never see individual results."},{heading:"Resources",body:"FAQ, enrolment, support."}],
 messages:["Aligned managers, smoother launch.","Encourage, don't mandate."], proof:["Aggregate-only privacy"],
 specs:{Format:"Deck",Length:"~8 slides",Owner:"HR Enablement",Stage:"Onboarding",Cadence:"Per rollout"},
 usage:"Managers support and signpost; route clinical/HR specifics onward.", related:["ON-08","HR-04","HR-06"], cta:{label:"See delivery",href:"../deliver.html"} },

/* ============================================================
   WAVE 14 - INDUSTRY PLAYBOOKS (IN)
   ============================================================ */

"IN-01": { title:"Technology & GCCs Playbook", cat:"Industry Playbooks", catKey:"IN", icon:"book", status:"LIVE",
 tagline:"Talent markets, sedentary risk, and the differentiated benefit.", stage:"Consideration",
 format:"Playbook · ~12 pages", audience:["Tech/GCC CHRO","CEO","Total rewards"], channels:["Sales","Website","Events"],
 overview:"A vertical playbook for technology and Global Capability Centres - the sector's specific risks (young-but-sedentary, screen-heavy, fierce talent competition) and why measured longevity is a differentiated, measurable benefit, with a sample multi-campus rollout.",
 contents:[{heading:"Risks & drivers",body:"Sedentary work; hidden metabolic risk; talent competition."},{heading:"Why it matters here",body:"A benefit engineers actually feel; retention edge."},{heading:"Tailored proof",body:"Metabolic and retention metrics."},{heading:"Sample rollout",body:"One tower pilot → campus waves → people-leadership dashboard."}],
 messages:["A differentiated benefit in a tight market.","Catch metabolic risk early in a young base."], proof:["200+ markers; retention narrative"],
 specs:{Format:"Playbook",Length:"~12 pages",Owner:"Sales + Content",Stage:"Mid funnel",Cadence:"Annual"},
 usage:"Tailor proof to the account; keep figures directional.", related:["IN-05","OP-03","CS-01"], cta:{label:"Explore by industry",href:"../solutions.html#industries"} },

"IN-02": { title:"Financial Services Playbook", cat:"Industry Playbooks", catKey:"IN", icon:"book", status:"LIVE",
 tagline:"Critical-role de-risking and governance-grade reporting.", stage:"Consideration",
 format:"Playbook · ~12 pages", audience:["FS CHRO","Risk","CEO"], channels:["Sales","Website"],
 overview:"A vertical playbook for financial services - high-stress, high-stakes roles with concentrated value in a few people, and a strong governance culture - positioning critical-role de-risking and board-legible reporting.",
 contents:[{heading:"Risks & drivers",body:"Concentrated value; stress; governance expectations."},{heading:"Why it matters here",body:"De-risk irreplaceable people; reportable evidence."},{heading:"Tailored proof",body:"Organ-age tracking; aggregate reporting."},{heading:"Sample rollout",body:"Leadership cohort → division waves → ESG reporting."}],
 messages:["Continuity you can act on.","Governance-grade proof."], proof:["8–10 organ ages; aggregate dashboard"],
 specs:{Format:"Playbook",Length:"~12 pages",Owner:"Sales + Content",Stage:"Mid funnel",Cadence:"Annual"},
 usage:"Lead with continuity and governance; keep ESG aggregate.", related:["OP-02","CS-02","IN-06"], cta:{label:"Explore by industry",href:"../solutions.html#industries"} },

"IN-03": { title:"Manufacturing & Energy Playbook", cat:"Industry Playbooks", catKey:"IN", icon:"book", status:"LIVE",
 tagline:"Distributed, older workforces and multi-site wave delivery.", stage:"Consideration",
 format:"Playbook · ~12 pages", audience:["Mfg/Energy CHRO","HSE","Ops"], channels:["Sales","Website"],
 overview:"A vertical playbook for manufacturing and energy - older, distributed, physically demanding workforces with higher cardiometabolic baseline risk - emphasising early detection and multi-site wave delivery at scale.",
 contents:[{heading:"Risks & drivers",body:"Older workforce; cardiometabolic risk; safety-critical roles."},{heading:"Why it matters here",body:"Surface risk early; deliver identically across sites."},{heading:"Tailored proof",body:"Cardiometabolic detection; site-level aggregates."},{heading:"Sample rollout",body:"Per-plant camps → ~1,250-person waves → site views."}],
 messages:["One standard, every plant and shift.","Surface cardiometabolic risk early."], proof:["Wave Model; up to 5,000 dispatches"],
 specs:{Format:"Playbook",Length:"~12 pages",Owner:"Sales + Content",Stage:"Mid funnel",Cadence:"Annual"},
 usage:"Emphasise delivery rigour and safety; keep figures directional.", related:["DL-01","OP-01","IN-06"], cta:{label:"See delivery at scale",href:"../deliver.html#scale"} },

"IN-04": { title:"Healthcare & Pharma Playbook", cat:"Industry Playbooks", catKey:"IN", icon:"book", status:"LIVE",
 tagline:"Physician-led rigour for clinically literate staff.", stage:"Consideration",
 format:"Playbook · ~12 pages", audience:["Healthcare/Pharma CHRO","CMO","Clinical leads"], channels:["Sales","Website"],
 overview:"A vertical playbook for healthcare and pharma - clinical, high-burnout workforces with deep scientific literacy - leading with physician-led rigour and burnout/recovery measurement that clinical staff will respect.",
 contents:[{heading:"Risks & drivers",body:"Burnout; high literacy; high rigour expectations."},{heading:"Why it matters here",body:"Trustworthy science; measurable recovery."},{heading:"Tailored proof",body:"Physician sign-off; stress/recovery markers."},{heading:"Sample rollout",body:"Care-unit pilot → department waves → leadership view."}],
 messages:["Rigour your own clinicians respect.","Physician-led, never 'AI-diagnosed'."], proof:["Named physician sign-off; evidence pack"],
 specs:{Format:"Playbook",Length:"~12 pages",Owner:"Sales + Clinical",Stage:"Mid funnel",Cadence:"Annual"},
 usage:"Clinical-reviewed; lead with rigour; attribute all evidence.", related:["CL-01","OP-04","IN-06"], cta:{label:"See science & evidence",href:"../proof.html#science"} },

"IN-05": { title:"Professional Services Playbook", cat:"Industry Playbooks", catKey:"IN", icon:"book", status:"LIVE",
 tagline:"Protecting the human capital that is the product.", stage:"Consideration",
 format:"Playbook · ~12 pages", audience:["Prof. services CHRO","Partners","Ops"], channels:["Sales","Website"],
 overview:"A vertical playbook for professional services - billable-hour intensity, travel, partner-track pressure - where people are the entire product, positioning vitality protection and travel-tuned pillars.",
 contents:[{heading:"Risks & drivers",body:"Billable intensity; travel; partner pressure."},{heading:"Why it matters here",body:"Protect the asset that bills the hours."},{heading:"Tailored proof",body:"Circadian/stress/recovery pillars."},{heading:"Sample rollout",body:"Partner cohort → associate waves → retention view."}],
 messages:["Your firm is your people.","Protect the asset that delivers the work."], proof:["11+1 pillars tuned for travel"],
 specs:{Format:"Playbook",Length:"~12 pages",Owner:"Sales + Content",Stage:"Mid funnel",Cadence:"Annual"},
 usage:"Lead with people-as-product; keep figures directional.", related:["IN-01","OP-03","OP-01"], cta:{label:"Explore by industry",href:"../solutions.html#industries"} },

"IN-06": { title:"Public Sector Playbook", cat:"Industry Playbooks", catKey:"IN", icon:"book", status:"LIVE",
 tagline:"Transparent, aggregate, year-over-year accountability.", stage:"Consideration",
 format:"Playbook · ~12 pages", audience:["Public-sector HR","Programme leads","Audit"], channels:["Sales","Website"],
 overview:"A vertical playbook for the public sector - large, diverse workforces with strong accountability and transparency expectations and budget scrutiny - emphasising transparent aggregate reporting and identical delivery at scale.",
 contents:[{heading:"Risks & drivers",body:"Scale; accountability; budget scrutiny."},{heading:"Why it matters here",body:"Auditable, aggregate, year-over-year evidence."},{heading:"Tailored proof",body:"Transparent aggregate metrics."},{heading:"Sample rollout",body:"Departmental pilot → phased waves → public-reporting metrics."}],
 messages:["Measured wellbeing your stakeholders can audit.","One standard at scale."], proof:["Aggregate-only; Wave Model"],
 specs:{Format:"Playbook",Length:"~12 pages",Owner:"Sales + Content",Stage:"Mid funnel",Cadence:"Annual"},
 usage:"Emphasise transparency and procurement-readiness; keep aggregate.", related:["IN-02","OP-05","DL-01"], cta:{label:"Explore by industry",href:"../solutions.html#industries"} },

/* ============================================================
   WAVE 15 - OUTCOME PLAYBOOKS (OP)
   ============================================================ */

"OP-01": { title:"Productivity Protection Playbook", cat:"Outcome Playbooks", catKey:"OP", icon:"book", status:"LIVE",
 tagline:"Catch decline before it costs output.", stage:"Consideration",
 format:"Playbook · ~10 pages", audience:["CEO","COO","CHRO"], channels:["Sales","Website"],
 overview:"The outcome-first narrative for productivity. It frames silent metabolic, cardiac and mental-health decline as an invisible drag on output, and shows how reading 200+ early signals and acting on the top 2–3 protects the asset that delivers the strategy.",
 contents:[{heading:"The problem",body:"Decline builds for years before it shows as absence or drag."},{heading:"How AIWO addresses it",body:"Early signals → prioritised actions → quarterly re-measure."},{heading:"The proof metric",body:"200+ early signals; organ-age movement."},{heading:"Related industries",body:"Technology, professional services, financial services."}],
 messages:["Protect the asset that delivers your strategy.","Catch it before it costs output."], proof:["200+ early signals; quarterly re-tests"],
 specs:{Format:"Playbook",Length:"~10 pages",Owner:"Sales + Content",Stage:"Mid funnel",Cadence:"Annual"},
 usage:"Keep value directional; pair with the estimator and ROI model.", related:["PP-03","IN-01","CS-01"], cta:{label:"Explore by outcome",href:"../solutions.html#outcomes"} },

"OP-02": { title:"Critical-Role De-risking Playbook", cat:"Outcome Playbooks", catKey:"OP", icon:"book", status:"LIVE",
 tagline:"Protect the few people who carry the most value.", stage:"Consideration",
 format:"Playbook · ~10 pages", audience:["CEO / Board","Risk","CHRO"], channels:["Sales","Website"],
 overview:"The outcome narrative for continuity. Your most irreplaceable people carry the most hidden risk; this playbook shows how surfacing reversible risk early and tracking organ ages turns a continuity gamble into something you can act on.",
 contents:[{heading:"The problem",body:"A single event in a critical role is a continuity crisis."},{heading:"How AIWO addresses it",body:"Surface reversible risk while it's reversible; physician oversight."},{heading:"The proof metric",body:"8–10 organ ages tracked per leader, year over year."},{heading:"Related industries",body:"Financial services, manufacturing, public sector."}],
 messages:["Continuity you can act on.","Protect the irreplaceable."], proof:["8–10 organ ages; physician oversight"],
 specs:{Format:"Playbook",Length:"~10 pages",Owner:"Sales + Content",Stage:"Mid funnel",Cadence:"Annual"},
 usage:"Frame as risk management; aggregate where reporting to the employer.", related:["IN-02","CS-02","OP-01"], cta:{label:"Explore by outcome",href:"../solutions.html#outcomes"} },

"OP-03": { title:"Retention & Culture Playbook", cat:"Outcome Playbooks", catKey:"OP", icon:"book", status:"LIVE",
 tagline:"A measurable investment that's hard to leave.", stage:"Consideration",
 format:"Playbook · ~10 pages", audience:["CHRO","Heads of People","Total rewards"], channels:["Sales","Website"],
 overview:"The outcome narrative for retention. Perks are easy to match and easy to leave; a programme that measurably improves a life - with belonging built through cohorts - is not. This playbook makes the retention and culture case.",
 contents:[{heading:"The problem",body:"Perks are commoditised; measurable care is not."},{heading:"How AIWO addresses it",body:"A year of measured improvement plus cohort belonging."},{heading:"The proof metric",body:"12 months of engagement; member sentiment."},{heading:"Related industries",body:"Technology, healthcare, professional services."}],
 messages:["A programme that improves a life is hard to leave.","'My employer invested in my longevity - and proved it.'"], proof:["12 months of engagement per member"],
 specs:{Format:"Playbook",Length:"~10 pages",Owner:"Sales + Content",Stage:"Mid funnel",Cadence:"Annual"},
 usage:"Aspirational tone; avoid tying retention to individual data.", related:["IN-01","AP-05","TL-02"], cta:{label:"Explore by outcome",href:"../solutions.html#outcomes"} },

"OP-04": { title:"GLP-1 Duty of Care Playbook", cat:"Outcome Playbooks", catKey:"OP", icon:"book", status:"LIVE",
 tagline:"Objective baselines and oversight for the metabolic shift.", stage:"Consideration",
 format:"Playbook · ~10 pages", audience:["CMO / Wellbeing","CHRO","CEO"], channels:["Sales","Website"],
 overview:"The outcome narrative for the GLP-1 era. With metabolic medications already moving through workforces, this playbook positions objective baselines and physician oversight as a reasonable duty of care - turning an emerging, sensitive risk into demonstrable care.",
 contents:[{heading:"The problem",body:"GLP-1 adoption is here, largely unmeasured and unmanaged."},{heading:"How AIWO addresses it",body:"Objective metabolic baselines; physician oversight; privacy."},{heading:"The proof metric",body:"Metabolic age and panel movement; sign-off."},{heading:"Related",body:"All industries; healthcare and financial services lead."}],
 messages:["Turn an emerging risk into demonstrable care.","Physician-reviewed, never 'AI-diagnosed'."], proof:["Metabolic panel; same-day critical-value pathway"],
 specs:{Format:"Playbook",Length:"~10 pages",Owner:"Sales + Clinical",Stage:"Mid funnel",Cadence:"Refresh as evidence evolves"},
 usage:"Clinical-reviewed; lead with care and privacy; no medical advice or endorsement.", related:["TL-06","CL-06","AD-05"], cta:{label:"Explore by outcome",href:"../solutions.html#outcomes"} },

"OP-05": { title:"ESG & Wellbeing Reporting Playbook", cat:"Outcome Playbooks", catKey:"OP", icon:"book", status:"LIVE",
 tagline:"A board- and investor-legible trajectory.", stage:"Consideration → Decision",
 format:"Playbook · ~10 pages", audience:["CEO / Board","ESG lead","IR","CFO"], channels:["Sales","Website","Board pre-read"],
 overview:"The outcome narrative for ESG and human-capital reporting. It shows how an aggregate, anonymised, year-over-year JoySpan trajectory and Workforce Vitality Index become defensible human-capital evidence - honest about being a trajectory, not a guarantee.",
 contents:[{heading:"The problem",body:"Boards lack measured human-capital evidence."},{heading:"How AIWO addresses it",body:"Aggregate, suppressed, year-over-year metrics."},{heading:"The proof metric",body:"Workforce Vitality Index; JoySpan trajectory."},{heading:"Related",body:"Listed companies, public sector, financial services."}],
 messages:["Proof, not platitudes.","A trajectory the board can cite."], proof:["Workforce Vitality Index; aggregate YoY"],
 specs:{Format:"Playbook",Length:"~10 pages",Owner:"Sales + Clinical",Stage:"Mid–bottom",Cadence:"Annual"},
 usage:"Keep ESG metrics aggregate and attributed; trajectories, not guarantees.", related:["TL-08","CS-04","IN-02"], cta:{label:"See outcomes & KPIs",href:"../proof.html"} },

/* ============================================================
   WAVE 16 - EVENTS & WEBINARS (EV)
   ============================================================ */

"EV-01": { title:"Webinar Kit - Measured Longevity for the C-Suite", cat:"Events & Webinars", catKey:"EV", icon:"mic", status:"LIVE",
 tagline:"Run-of-show, slides, promo and follow-up.", stage:"Awareness → Consideration",
 format:"Kit · deck + run-of-show + comms", audience:["People leaders","Executives"], channels:["Webinar","Email","Social"],
 overview:"A turnkey webinar kit for the flagship C-suite session - speaker deck, run-of-show, promotion assets, registration page copy and the follow-up sequence - so the brand can run a credible thought-leadership webinar repeatedly.",
 contents:[{heading:"Speaker deck",body:"The category narrative for a live audience."},{heading:"Run-of-show",body:"Timing, Q&A, polls, CTA."},{heading:"Promo",body:"Invite, reminders, social."},{heading:"Follow-up",body:"Recording, takeaways, next step."}],
 messages:["Show up for the proof, not the pitch.","A repeatable C-suite session."], proof:["Links to report and proof"],
 specs:{Format:"Kit",Length:"Multi-asset",Owner:"Events + Content",Stage:"Top–mid",Cadence:"Per webinar"},
 usage:"Lead with insight; one soft CTA; keep claims attributed.", related:["EM-07","EV-04","TL-01"], cta:{label:"See Resources",href:"../resources.html"} },

"EV-02": { title:"Conference Booth Kit", cat:"Events & Webinars", catKey:"EV", icon:"mic", status:"LIVE",
 tagline:"Stand design, demo flow and lead-capture.", stage:"Awareness → Consideration",
 format:"Kit · design + demo + capture", audience:["Event attendees","Prospects"], channels:["Conferences","Expos"],
 overview:"Everything to run a premium booth - stand design specs, the live estimator/demo flow, the leave-behinds and a privacy-safe lead-capture process - so events generate qualified pipeline, not just badge scans.",
 contents:[{heading:"Stand design",body:"On-brand layout, signage and screen flow."},{heading:"Demo flow",body:"The estimator as the magnet; the journey demo."},{heading:"Leave-behinds",body:"Mini brochure and one-pager."},{heading:"Lead capture",body:"Consent-first capture and routing."}],
 messages:["Qualified pipeline, not badge scans.","The estimator is the magnet."], proof:["Workforce Snapshot estimator on stand"],
 specs:{Format:"Kit",Length:"Multi-asset",Owner:"Events + Brand",Stage:"Top–mid",Cadence:"Per event"},
 usage:"Capture with consent; route to the right nurture track.", related:["BR-02","PP-04","SE-06"], cta:{label:"Try the estimator",href:"../index.html#snapshot"} },

"EV-03": { title:"Executive Roundtable Guide", cat:"Events & Webinars", catKey:"EV", icon:"mic", status:"LIVE",
 tagline:"A facilitated discussion format for senior leaders.", stage:"Consideration",
 format:"Facilitation guide", audience:["CEO / Board","CHRO","CMO"], channels:["Private roundtables","Dinners"],
 overview:"A facilitation guide for intimate, high-trust roundtables - discussion prompts, framing and a light path to follow-up - designed to build relationships with senior leaders without a hard sell.",
 contents:[{heading:"Framing",body:"Set the category, not the product."},{heading:"Prompts",body:"What can your board prove today?"},{heading:"Facilitation",body:"Draw out peer discussion."},{heading:"Follow-up",body:"A natural path to a pilot conversation."}],
 messages:["Build trust, not pressure.","Peer conversation beats pitch."], proof:["Category narrative; proof on request"],
 specs:{Format:"Guide",Length:"Facilitation",Owner:"Events + Sales",Stage:"Mid funnel",Cadence:"Per event"},
 usage:"Facilitate, don't sell; capture interest with consent.", related:["EV-06","RK-01","TL-08"], cta:{label:"Contact us",href:"../company.html#contact"} },

"EV-04": { title:"Speaker Deck Template", cat:"Events & Webinars", catKey:"EV", icon:"mic", status:"LIVE",
 tagline:"A branded talk template for stage and webinar.", stage:"Awareness",
 format:"Slide template", audience:["Speakers","Founders","Partners"], channels:["Stage","Webinar"],
 overview:"A reusable, on-brand talk template that lets any speaker deliver the measured-longevity narrative consistently - title system, section dividers, stat slides and a closing CTA - adaptable to time slot and audience.",
 contents:[{heading:"Title & open",body:"Hook and promise."},{heading:"Section system",body:"Problem, system, proof, value."},{heading:"Stat slides",body:"On-brand data visuals."},{heading:"Close",body:"Promise line and CTA."}],
 messages:["One narrative, any stage.","Consistent and on-brand."], proof:["Aligned to the messaging house"],
 specs:{Format:"Template",Length:"Adaptable",Owner:"Brand + Content",Stage:"Top funnel",Cadence:"Stable"},
 usage:"Keep claims attributed; adapt length to slot.", related:["EV-01","BD-06","GL-02"], cta:{label:"See the programme",href:"../programme.html"} },

"EV-05": { title:"Event Follow-up Pack", cat:"Events & Webinars", catKey:"EV", icon:"mic", status:"LIVE",
 tagline:"Recap, assets and next-step automation.", stage:"Consideration",
 format:"Pack · email + assets", audience:["Event attendees","Leads"], channels:["Email","Marketing automation"],
 overview:"A standard post-event pack - recap email, the relevant leave-behinds, and routing into the right nurture track - so the energy of an event converts into pipeline rather than evaporating.",
 contents:[{heading:"Recap",body:"Thanks, key takeaways, recording."},{heading:"Assets",body:"Report, one-pager, estimator."},{heading:"Routing",body:"Into persona nurture; sales handoff for hot leads."}],
 messages:["Convert the energy, not just the contact.","Make the next step easy."], proof:["Links to report and estimator"],
 specs:{Format:"Pack",Length:"Set",Owner:"Events + Growth",Stage:"Mid funnel",Cadence:"Per event"},
 usage:"Honour consent; segment by interest; prompt the next step.", related:["EM-07","EM-05","EV-01"], cta:{label:"Request the report",href:"../book.html"} },

"EV-06": { title:"CXO Dinner / Salon Kit", cat:"Events & Webinars", catKey:"EV", icon:"mic", status:"LIVE",
 tagline:"An intimate, high-trust acquisition format.", stage:"Consideration → Decision",
 format:"Kit · invites + run-of-show + gifts", audience:["CEO / Board","CHRO","CMO"], channels:["Private dinners","Salons"],
 overview:"A premium kit for hosting curated CXO dinners - invitations, seating and conversation design, a tasteful brand moment and follow-up - the high-touch format for relationship-led enterprise acquisition.",
 contents:[{heading:"Invitations",body:"Curated, personal, exclusive."},{heading:"Run-of-show",body:"Light framing; peer conversation; a single moment."},{heading:"Gift / takeaway",body:"A considered, on-brand piece."},{heading:"Follow-up",body:"Personal, relationship-led."}],
 messages:["Relationship-led, not pitch-led.","One memorable moment."], proof:["Category narrative; proof on request"],
 specs:{Format:"Kit",Length:"Multi-asset",Owner:"Events + Sales",Stage:"Mid–bottom",Cadence:"Per event"},
 usage:"Tasteful and trust-first; no hard sell; follow up personally.", related:["EV-03","DM-02","RK-01"], cta:{label:"Contact us",href:"../company.html#contact"} },

/* ============================================================
   WAVE 17 - PR & MEDIA (PRM)
   ============================================================ */

"PRM-01": { title:"Press Kit / Media Kit", cat:"PR & Media", catKey:"PRM", icon:"mega", status:"LIVE",
 tagline:"Boilerplate, facts, imagery and contacts.", stage:"Awareness",
 format:"Kit · web + downloadable", audience:["Journalists","Editors","Analysts"], channels:["Newsroom","Email","PR outreach"],
 overview:"The standard media kit - company boilerplate, key facts, approved imagery, spokesperson bios and press contacts - so journalists can cover AIWO accurately and quickly.",
 contents:[{heading:"Boilerplate",body:"Approved company description."},{heading:"Fast facts",body:"200+ markers, frameworks, category."},{heading:"Imagery",body:"Logos, product and leadership assets."},{heading:"Contacts",body:"Press and spokesperson details."}],
 messages:["Cover us accurately, easily.","One category-defining story."], proof:["Approved facts and assets"],
 specs:{Format:"Kit",Length:"Multi-asset",Owner:"PR + Brand",Stage:"Top funnel",Cadence:"Living"},
 usage:"Keep facts current and claims attributed; route interviews via PR.", related:["PRM-02","PRM-03","TS-04"], cta:{label:"Visit the newsroom",href:"../resources.html"} },

"PRM-02": { title:"Launch Press Release", cat:"PR & Media", catKey:"PRM", icon:"mega", status:"LIVE",
 tagline:"The category and programme announcement.", stage:"Awareness",
 format:"Press release", audience:["Journalists","Industry","Partners"], channels:["Wire","Newsroom","Email"],
 overview:"The announcement release positioning AIWO Tribe and the measured-workforce-longevity category - newsworthy, quotable and disciplined on claims.",
 contents:[{heading:"Headline & lede",body:"The category and the news."},{heading:"The what",body:"The programme and its frameworks."},{heading:"Quotes",body:"Founder and (where available) partner quotes."},{heading:"Boilerplate",body:"Standard company description."}],
 messages:["A new category: measured workforce longevity.","Newsworthy, quotable, disciplined."], proof:["Approved facts; attributed claims"],
 specs:{Format:"Release",Length:"~600 words",Owner:"PR",Stage:"Top funnel",Cadence:"Per announcement"},
 usage:"Legal/clinical review; trajectories not guarantees; no exact-count boasts.", related:["PRM-01","TL-01","PRM-04"], cta:{label:"Visit the newsroom",href:"../resources.html"} },

"PRM-03": { title:"Founder Bios & Headshots", cat:"PR & Media", catKey:"PRM", icon:"mega", status:"LIVE",
 tagline:"Approved bios and assets for spokespeople.", stage:"Awareness",
 format:"Bios + image assets", audience:["Journalists","Event organisers"], channels:["Newsroom","Email"],
 overview:"Approved short and long bios plus high-resolution headshots for founders and key spokespeople - ready for press, events and speaking engagements.",
 contents:[{heading:"Short bio",body:"50-word version."},{heading:"Long bio",body:"150-word version."},{heading:"Headshots",body:"High-res, approved."}],
 messages:["Consistent, approved spokesperson assets.","One voice, every interview and stage."], proof:["Approved by comms","Aligned to the media FAQ and messaging house"],
 specs:{Format:"Bios + images",Length:"Set",Owner:"PR + Brand",Stage:"Top funnel",Cadence:"As needed"},
 usage:"Use approved versions only; keep current.", related:["PRM-01","AD-08","EV-04"], cta:{label:"Visit the newsroom",href:"../resources.html"} },

"PRM-04": { title:"Media FAQ & Messaging", cat:"PR & Media", catKey:"PRM", icon:"mega", status:"LIVE",
 tagline:"On-message answers for journalists.", stage:"Awareness",
 format:"FAQ · internal + media", audience:["Spokespeople","PR","Journalists"], channels:["PR","Interviews"],
 overview:"A media FAQ that keeps spokespeople on-message and disciplined - the category story, privacy, science and the claims line - with prepared answers to likely tough questions.",
 contents:[{heading:"The story",body:"Category, programme, why now."},{heading:"Privacy & science",body:"Aggregate-only; physician-led."},{heading:"Tough questions",body:"Claims, evidence, comparisons."},{heading:"The line",body:"Trajectories, not guarantees."}],
 messages:["On-message, every interview.","Disciplined on claims."], proof:["Aligned to claims discipline guide"],
 specs:{Format:"FAQ",Length:"~4 pages",Owner:"PR + Clinical",Stage:"Top funnel",Cadence:"Living"},
 usage:"Mandatory prep for interviews; never overstate; attribute benchmarks.", related:["PRM-05","CL-07","PRM-02"], cta:{label:"Contact us",href:"../company.html#contact"} },

"PRM-05": { title:"Spokesperson Briefing", cat:"PR & Media", catKey:"PRM", icon:"mega", status:"LIVE",
 tagline:"Prep for interviews and panels.", stage:"Awareness",
 format:"Briefing doc", audience:["Spokespeople","Founders"], channels:["PR","Internal"],
 overview:"A pre-interview briefing template - audience, format, likely questions, key messages and bridging techniques - so every spokesperson appearance is confident, consistent and compliant.",
 contents:[{heading:"Context",body:"Outlet, audience, format."},{heading:"Messages",body:"Top three to land."},{heading:"Q&A prep",body:"Likely and tough questions."},{heading:"Bridges",body:"How to return to the message."}],
 messages:["Confident, consistent, compliant.","Land three messages."], proof:["Aligned to media FAQ"],
 specs:{Format:"Briefing",Length:"Per appearance",Owner:"PR",Stage:"Top funnel",Cadence:"Per appearance"},
 usage:"Prep before every appearance; reinforce claims discipline.", related:["PRM-04","PRM-03","CL-07"], cta:{label:"Contact us",href:"../company.html#contact"} },

"PRM-06": { title:"Award Submission Templates", cat:"PR & Media", catKey:"PRM", icon:"mega", status:"LIVE",
 tagline:"Reusable entries for wellbeing and innovation awards.", stage:"Awareness",
 format:"Templates", audience:["PR","Marketing"], channels:["Awards programmes"],
 overview:"Reusable award-entry templates - the story, the evidence and the differentiators - so AIWO can efficiently enter relevant wellbeing, HR and innovation awards to build third-party credibility.",
 contents:[{heading:"The story",body:"Category creation and impact."},{heading:"Evidence",body:"Illustrative, attributed proof."},{heading:"Differentiators",body:"The integrated operating system."}],
 messages:["Third-party credibility, efficiently won.","Build the proof shelf."], proof:["Illustrative outcomes, labelled"],
 specs:{Format:"Templates",Length:"Reusable",Owner:"PR + Marketing",Stage:"Top funnel",Cadence:"Per award cycle"},
 usage:"Keep claims honest and attributed; label illustrative results.", related:["TS-04","CS-04","PRM-01"], cta:{label:"See trust & proof",href:"../proof.html"} },

/* ============================================================
   WAVE 18 - PARTNER & CHANNEL (CH)
   ============================================================ */

"CH-01": { title:"Lab Partner Onboarding Kit", cat:"Partner & Channel", catKey:"CH", icon:"hand", status:"LIVE",
 tagline:"Standards, QC and integration for accredited labs.", stage:"Partner",
 format:"Kit · standards + integration", audience:["Lab partners","Ops","QA"], channels:["Partner onboarding","Data room"],
 overview:"The onboarding kit for accredited lab partners - quality standards, barcode and cold-chain protocols, data integration and the red-threshold QC expectations - so every wave meets one standard regardless of location.",
 contents:[{heading:"Standards",body:"Accreditation and quality expectations."},{heading:"Protocols",body:"Barcode double-scan; cold-chain."},{heading:"Integration",body:"Data exchange and completeness gate."},{heading:"QC",body:"Red-threshold and reconciliation."}],
 messages:["One standard, every lab.","Red threshold = any mismatch."], proof:["Barcode double-scan; validated cold-chain"],
 specs:{Format:"Kit",Length:"Multi-asset",Owner:"Ops + Partnerships",Stage:"Partner",Cadence:"On partner change"},
 usage:"Enforce standards; maintain sub-processor register; QC non-negotiable.", related:["DL-03","DL-04","PV-06"], cta:{label:"See delivery & operations",href:"../deliver.html#scale"} },

"CH-02": { title:"Reseller / Broker Enablement Kit", cat:"Partner & Channel", catKey:"CH", icon:"hand", status:"LIVE",
 tagline:"Pitch, pricing and process for benefit intermediaries.", stage:"Partner",
 format:"Kit · pitch + process", audience:["Brokers","Benefit consultants","Resellers"], channels:["Partner portal","Enablement"],
 overview:"Everything a benefits broker or reseller needs to position and sell the programme - the pitch, the value story, indicative pricing guidance and the handoff process - so partners extend reach without diluting the message.",
 contents:[{heading:"The pitch",body:"How to position measured longevity to clients."},{heading:"Value story",body:"Outcomes, privacy, the pilot."},{heading:"Pricing guidance",body:"Indicative, customer-facing only."},{heading:"Process",body:"Lead handoff and co-selling."}],
 messages:["Extend reach, keep the message.","Partners sell outcomes, not tests."], proof:["Programme proof points"],
 specs:{Format:"Kit",Length:"Multi-asset",Owner:"Partnerships",Stage:"Partner",Cadence:"Quarterly"},
 usage:"Partners follow claims discipline; never expose internal margin.", related:["CH-05","CH-06","SE-01"], cta:{label:"See pricing & plans",href:"../pricing.html"} },

"CH-03": { title:"Co-Branding Guidelines", cat:"Partner & Channel", catKey:"CH", icon:"hand", status:"LIVE",
 tagline:"How partners present AIWO correctly.", stage:"Partner",
 format:"Guidelines", audience:["Partners","Partner marketing"], channels:["Partner portal"],
 overview:"The rules that protect the brand in partner contexts - logo lock-ups, clear space, approved language and what partners may and may not claim - so co-branded materials stay premium and compliant.",
 contents:[{heading:"Lock-ups",body:"Approved co-branded logo arrangements."},{heading:"Clear space & don'ts",body:"Protecting the mark."},{heading:"Language",body:"Approved claims; forbidden claims."}],
 messages:["Co-brand without diluting.","One premium standard."], proof:["Aligned to brand guidelines"],
 specs:{Format:"Guidelines",Length:"~6 pages",Owner:"Brand + Partnerships",Stage:"Partner",Cadence:"Stable"},
 usage:"Enforce; review co-branded assets before publication.", related:["BD-01","BD-02","CH-02"], cta:{label:"See brand identity",href:"piece.html?id=BD-01"} },

"CH-04": { title:"Referral Programme One-Pager", cat:"Partner & Channel", catKey:"CH", icon:"hand", status:"LIVE",
 tagline:"The terms and mechanics of referrals.", stage:"Partner",
 format:"1 page", audience:["Partners","Advocates","Clients"], channels:["Partner portal","Email"],
 overview:"A simple one-pager explaining the referral programme - who can refer, how, and the (customer-facing) terms - to turn satisfied clients and partners into a pipeline source.",
 contents:[{heading:"Who can refer",body:"Clients, partners, advocates."},{heading:"How it works",body:"Submit, qualify, reward."},{heading:"Terms",body:"Customer-facing terms only."}],
 messages:["Turn advocates into pipeline.","Simple, transparent referrals."], proof:["Clear referral terms"],
 specs:{Format:"1 page",Length:"1 page",Owner:"Partnerships",Stage:"Partner",Cadence:"Stable"},
 usage:"Keep terms transparent; honour privacy in referrals.", related:["CH-02","TS-02","EM-04"], cta:{label:"Contact us",href:"../company.html#contact"} },

"CH-05": { title:"Partner Pitch Deck", cat:"Partner & Channel", catKey:"CH", icon:"hand", status:"LIVE",
 tagline:"The deck partners use to sell the programme.", stage:"Partner",
 format:"Slide deck · ~16 slides", audience:["Partner sellers","Brokers"], channels:["Partner enablement"],
 overview:"A co-sell-ready deck partners use with their own clients - a streamlined version of the master sales narrative, brand-correct and claims-disciplined, that partners can present confidently.",
 contents:[{heading:"The opportunity",body:"Why measured longevity now."},{heading:"The programme",body:"Frameworks and proof."},{heading:"The offer",body:"Pilot and tiers (indicative)."},{heading:"Working together",body:"Co-sell and handoff."}],
 messages:["Partners pitch with confidence.","Brand-correct, claims-disciplined."], proof:["Mirrors the master sales deck"],
 specs:{Format:"Deck",Length:"~16 slides",Owner:"Partnerships + Sales",Stage:"Partner",Cadence:"Quarterly"},
 usage:"No internal margin; enforce claims discipline; keep brand-correct.", related:["CH-02","SE-01","CH-03"], cta:{label:"See the programme",href:"../programme.html"} },

"CH-06": { title:"Channel Margin & Terms Sheet", cat:"Partner & Channel", catKey:"CH", icon:"hand", status:"LIVE",
 tagline:"Internal-controlled commercial structure.", stage:"Partner (internal)",
 format:"Internal sheet", audience:["Partnerships","Finance","Legal"], channels:["Internal"],
 overview:"The internal-controlled reference for channel commercials - margin structure, tiers and terms for partners - used to negotiate and govern channel relationships. Never customer-facing.",
 contents:[{heading:"Margin structure",body:"By partner type and volume (internal)."},{heading:"Terms",body:"Payment, exclusivity, obligations."},{heading:"Governance",body:"Approval and review process."}],
 messages:["Govern the channel.","Internal-controlled, never exposed."], proof:["Aligned to commercial model"],
 specs:{Format:"Sheet",Length:"Internal",Owner:"Finance + Partnerships",Stage:"Partner",Cadence:"Reviewed annually"},
 usage:"Strictly internal; never share margin externally.", related:["CH-02","PP-06","CH-05"], cta:{label:"Contact us",href:"../company.html#contact"} },

/* ============================================================
   WAVE 19 - DELIVERY & OPERATIONS (DL)
   ============================================================ */

"DL-01": { title:"Wave Model SOP", cat:"Delivery & Operations", catKey:"DL", icon:"gear", status:"LIVE",
 tagline:"Pilot → weekly waves of ~1,250 at ~280 draws/day.", stage:"Internal",
 format:"SOP · operational doc", audience:["Ops","Delivery leads","Partners"], channels:["Internal","Partner onboarding"],
 overview:"The master operating procedure for delivery at scale - how a pilot becomes repeatable weekly waves of ~1,250 people at ~280 draws/day, city to city - covering planning, staffing, the camp, QC and fulfilment.",
 contents:[{heading:"Plan",body:"Cohort, sites, wave schedule."},{heading:"Camp",body:"Stations, flow, staffing ratios."},{heading:"QC",body:"Barcode double-scan; red threshold."},{heading:"Fulfilment",body:"Up to 5,000 dispatches; reconciliation."}],
 messages:["Run for 5,000 - identically.","Repeatable, city to city."], proof:["~1,250/wave; ~280 draws/day; up to 5,000 dispatches"],
 specs:{Format:"SOP",Length:"Operational",Owner:"Operations",Stage:"Internal",Cadence:"Reviewed per cycle"},
 usage:"Internal/partner; uphold QC and certification gates; a human on every clinical decision.", related:["DL-02","DL-03","DL-06"], cta:{label:"See delivery at scale",href:"../deliver.html#scale"} },

"DL-02": { title:"Camp Operations Playbook", cat:"Delivery & Operations", catKey:"DL", icon:"gear", status:"LIVE",
 tagline:"Stations, flow and staffing for the on-site camp.", stage:"Internal",
 format:"Playbook · operational", audience:["Camp leads","Ops","Phlebotomy teams"], channels:["Internal"],
 overview:"The on-the-ground playbook for running a calm, premium, high-throughput camp - 10–14 phlebotomy stations, check-in to draw flow, consent enforcement and member experience - so scale never feels like a factory.",
 contents:[{heading:"Layout",body:"10–14 stations; check-in to exit flow."},{heading:"Flow",body:"Throughput targets; queue management."},{heading:"Consent",body:"No consent, no draw - enforced."},{heading:"Experience",body:"Calm, premium, private."}],
 messages:["Competence felt as calm.","Throughput without losing care."], proof:["10–14 stations; barcode QC"],
 specs:{Format:"Playbook",Length:"Operational",Owner:"Operations",Stage:"Internal",Cadence:"Per venue type"},
 usage:"Internal; uphold consent and QC; protect member experience.", related:["DL-01","ON-05","ON-07"], cta:{label:"See delivery",href:"../deliver.html#scale"} },

"DL-03": { title:"Barcode Double-Scan QC Protocol", cat:"Delivery & Operations", catKey:"DL", icon:"gear", status:"LIVE",
 tagline:"The red-threshold quality control on every draw.", stage:"Internal",
 format:"Protocol · SOP", audience:["Ops","QA","Lab partners"], channels:["Internal","Partner onboarding"],
 overview:"The chain-of-custody protocol that guarantees the right sample maps to the right person - a barcode double-scan on every draw, with any mismatch treated as a red threshold that halts work.",
 contents:[{heading:"Double-scan",body:"Scan at draw and at handoff."},{heading:"Red threshold",body:"Any mismatch stops the line."},{heading:"Resolution",body:"How discrepancies are investigated."}],
 messages:["The right sample, the right person - always.","Red threshold = any mismatch."], proof:["Barcode double-scan on every draw"],
 specs:{Format:"Protocol",Length:"SOP",Owner:"QA + Ops",Stage:"Internal",Cadence:"Stable"},
 usage:"Non-negotiable; partners must comply; document every exception.", related:["DL-01","CH-01","DL-04"], cta:{label:"See delivery & QC",href:"../deliver.html#scale"} },

"DL-04": { title:"Cold-Chain & Logistics Guide", cat:"Delivery & Operations", catKey:"DL", icon:"gear", status:"LIVE",
 tagline:"Validated handling from draw to lab.", stage:"Internal",
 format:"Guide · SOP", audience:["Logistics","Ops","Lab partners"], channels:["Internal","Partner onboarding"],
 overview:"The validated cold-chain and logistics procedures from draw to lab - temperature control, timing, packaging and tracking - protecting sample integrity across distributed, multi-site delivery.",
 contents:[{heading:"Cold-chain",body:"Temperature control and validation."},{heading:"Timing",body:"Draw-to-lab windows."},{heading:"Tracking",body:"Custody and status visibility."}],
 messages:["Sample integrity, guaranteed.","Validated, end to end."], proof:["Validated cold-chain"],
 specs:{Format:"Guide",Length:"SOP",Owner:"Logistics + Ops",Stage:"Internal",Cadence:"Reviewed periodically"},
 usage:"Internal/partner; validate per route; log excursions.", related:["DL-03","CH-01","DL-06"], cta:{label:"See delivery",href:"../deliver.html#scale"} },

"DL-05": { title:"Certification & Academy Curriculum", cat:"Delivery & Operations", catKey:"DL", icon:"gear", status:"LIVE",
 tagline:"The 100%-certified-before-a-live-wave standard.", stage:"Internal",
 format:"Curriculum + certification", audience:["Operators","Trainers","Ops"], channels:["Academy","Internal"],
 overview:"The training curriculum and certification gate behind the people standard - no uncertified operator works a live wave. It covers technique, consent, privacy and member experience, with recertification.",
 contents:[{heading:"Curriculum",body:"Technique, consent, privacy, experience."},{heading:"Certification gate",body:"100% certified before any live wave."},{heading:"Recertification",body:"Ongoing standards maintenance."}],
 messages:["No uncertified operator works a live wave.","100%, every time."], proof:["100% pre-wave certification"],
 specs:{Format:"Curriculum",Length:"Programme",Owner:"Academy + Ops",Stage:"Internal",Cadence:"Ongoing"},
 usage:"Hard gate; no exceptions; track certification status.", related:["DL-01","CL-05","DL-02"], cta:{label:"See people & certification",href:"../deliver.html#people"} },

"DL-06": { title:"Reconciliation Dashboard Guide", cat:"Delivery & Operations", catKey:"DL", icon:"gear", status:"LIVE",
 tagline:"Tracking up to 5,000 personalised dispatches.", stage:"Internal",
 format:"Guide · ops dashboard", audience:["Ops","Fulfilment","Delivery leads"], channels:["Internal"],
 overview:"The guide to the reconciliation dashboard that tracks every sample, report and dispatch to closure - so nothing is lost across up to 5,000 personalised fulfilments per programme.",
 contents:[{heading:"What it tracks",body:"Draws, results, reports, dispatches."},{heading:"Status & exceptions",body:"Open items and red flags."},{heading:"Closure",body:"Reconciled end to end."}],
 messages:["Nothing lost, end to end.","Reconcile to closure."], proof:["Up to 5,000 dispatches tracked"],
 specs:{Format:"Guide",Length:"Operational",Owner:"Operations",Stage:"Internal",Cadence:"With tooling"},
 usage:"Internal; investigate every exception; close the loop.", related:["DL-01","DL-04","AP-03"], cta:{label:"See delivery at scale",href:"../deliver.html#scale"} },

"DL-07": { title:"Incident Response Runbook", cat:"Delivery & Operations", catKey:"DL", icon:"gear", status:"LIVE",
 tagline:"The data-incident posture: red threshold > zero.", stage:"Internal",
 format:"Runbook · SOP", audience:["Security","Ops","Legal","CMO"], channels:["Internal","Trust reviews"],
 overview:"The runbook for responding to data or clinical incidents - detection, containment, notification and review - built around the principle that a data incident carries a red threshold of greater than zero.",
 contents:[{heading:"Detect",body:"How incidents are identified."},{heading:"Contain",body:"Immediate steps and escalation."},{heading:"Notify",body:"Obligations and timelines."},{heading:"Review",body:"Post-incident learning."}],
 messages:["A data incident has a red threshold of zero.","Prepared, not reactive."], proof:["Defined response and notification"],
 specs:{Format:"Runbook",Length:"SOP",Owner:"Security + Legal",Stage:"Internal",Cadence:"Reviewed annually"},
 usage:"Internal; summary for trust reviews; test periodically.", related:["PV-03","CL-06","PV-06"], cta:{label:"Visit the Trust Centre",href:"../legal.html#security"} },

/* ============================================================
   WAVE 20 - BRAND & IDENTITY (BD)
   ============================================================ */

"BD-01": { title:"Brand Guidelines", cat:"Brand & Identity", catKey:"BD", icon:"brush", status:"LIVE",
 tagline:"Logo, spacing, do/don't and applications.", stage:"Internal",
 format:"Guidelines · ~30 pages", audience:["Design","Agency","Partners"], channels:["Internal","Partner portal"],
 overview:"The master brand book - logo system, clear space, colour, type, imagery, motion and applications - the single source that keeps every AIWO surface unmistakable and premium across teams and partners.",
 contents:[{heading:"Logo system",body:"Marks, lock-ups, clear space, misuse."},{heading:"Colour & type",body:"The Longevity Spectrum; Sora/Inter scale."},{heading:"Imagery & motion",body:"Art direction and motion principles."},{heading:"Applications",body:"Decks, docs, web, print, social."}],
 messages:["One brand, everywhere.","Premium, consistent, unmistakable."], proof:["The Longevity Spectrum system"],
 specs:{Format:"Guidelines",Length:"~30 pages",Owner:"Brand",Stage:"Internal",Cadence:"Versioned"},
 usage:"Mandatory for all producers; review partner and agency work.", related:["BD-02","BD-03","BD-04"], cta:{label:"See the design system",href:"piece.html?id=BD-03"} },

"BD-02": { title:"Logo & Wordmark Kit", cat:"Brand & Identity", catKey:"BD", icon:"brush", status:"LIVE",
 tagline:"All approved marks and clear-space rules.", stage:"Internal",
 format:"Asset kit · vector files", audience:["Design","Agency","Partners"], channels:["Internal","Partner portal"],
 overview:"The downloadable logo kit - primary and secondary marks, the Tribe lock-up, mono and reversed versions, and clear-space rules - in production-ready vector formats.",
 contents:[{heading:"Marks",body:"Primary, secondary, mono, reversed."},{heading:"Lock-ups",body:"AIWO · Tribe arrangements."},{heading:"Rules",body:"Clear space and minimum size."}],
 messages:["The right mark, every time.","Production-ready assets."], proof:["Approved vector files"],
 specs:{Format:"Asset kit",Length:"Files",Owner:"Brand",Stage:"Internal",Cadence:"Stable"},
 usage:"Use approved files only; never recreate or distort the mark.", related:["BD-01","CH-03","BD-06"], cta:{label:"See brand guidelines",href:"piece.html?id=BD-01"} },

"BD-03": { title:"Colour & Type System", cat:"Brand & Identity", catKey:"BD", icon:"brush", status:"LIVE",
 tagline:"The 'Longevity Spectrum' palette and Sora/Inter scale.", stage:"Internal",
 format:"Spec · tokens + usage", audience:["Design","Front-end","Agency"], channels:["Internal","Design tokens"],
 overview:"The colour and typography system - the black/white foundation, the teal→indigo Vitality Gradient, the coral and vibrant tertiary spectrum, and the Sora/Inter/IBM Plex Mono type scale - with usage rules and accessibility guidance.",
 contents:[{heading:"Foundations",body:"Ink, white, neutrals."},{heading:"Vitality Gradient",body:"Teal → indigo primary; coral secondary; tertiary spectrum."},{heading:"Type",body:"Sora display, Inter body, Plex Mono data."},{heading:"Rules",body:"60/30/10; AA contrast; one warm CTA per view."}],
 messages:["Black & white, lit by the Vitality Gradient.","Vibrant but professional."], proof:["WCAG AA contrast guidance"],
 specs:{Format:"Spec",Length:"Tokens + usage",Owner:"Brand + Front-end",Stage:"Internal",Cadence:"Versioned"},
 usage:"Use tokens; maintain contrast; reserve the gradient as a signature.", related:["BD-01","BD-06","BD-05"], cta:{label:"See the live site",href:"../index.html"} },

"BD-04": { title:"Tone of Voice Guide", cat:"Brand & Identity", catKey:"BD", icon:"brush", status:"LIVE",
 tagline:"Confident, clear, evidence-led, humane - hope not fear.", stage:"Internal",
 format:"Guide · ~6 pages", audience:["Content","Social","Agency","Founders"], channels:["Internal"],
 overview:"How AIWO sounds - confident, clear, evidence-led and humane, leading with hope rather than fear - with examples, the promise line, and the language rules that keep claims honest.",
 contents:[{heading:"Principles",body:"Confident, clear, evidence-led, humane."},{heading:"Hope, not fear",body:"Lead with what's possible."},{heading:"Language rules",body:"'200+', trajectories not guarantees."},{heading:"Examples",body:"On-voice vs off-voice."}],
 messages:["Hope, not fear.","Evidence-led and humane."], proof:["Aligned to claims discipline"],
 specs:{Format:"Guide",Length:"~6 pages",Owner:"Content + Brand",Stage:"Internal",Cadence:"Living"},
 usage:"Apply to every word; enforce with the claims discipline guide.", related:["CL-07","GL-02","AD-09"], cta:{label:"See the messaging house",href:"piece.html?id=GL-02"} },

"BD-05": { title:"Iconography & Illustration Library", cat:"Brand & Identity", catKey:"BD", icon:"brush", status:"LIVE",
 tagline:"The custom line set and data-meets-biology motifs.", stage:"Internal",
 format:"Asset library", audience:["Design","Front-end","Agency"], channels:["Internal"],
 overview:"The shared visual library - the custom 1.75px line icon set, the gradient-on-active states, and the abstract 'biology meets data' motifs (particle fields, organ-age dials, the SIIS loop, the gradient mesh) used as ambient texture.",
 contents:[{heading:"Icons",body:"Custom line set; usage and states."},{heading:"Motifs",body:"Particle fields, dials, the SIIS loop, gradient mesh."},{heading:"Data viz",body:"Gradient + tertiary spectrum styles."}],
 messages:["Biology meets data, as texture.","Custom, never generic."], proof:["Consistent visual language"],
 specs:{Format:"Library",Length:"Assets",Owner:"Brand",Stage:"Internal",Cadence:"Growing"},
 usage:"Use library assets; motifs as ambient texture, never noisy.", related:["BD-01","BD-03","VD-02"], cta:{label:"See the live site",href:"../index.html"} },

"BD-06": { title:"Templates Pack", cat:"Brand & Identity", catKey:"BD", icon:"brush", status:"LIVE",
 tagline:"Branded slide, doc and one-pager templates.", stage:"Internal",
 format:"Template pack", audience:["All teams","Partners"], channels:["Internal","Partner portal"],
 overview:"Ready-to-use branded templates - decks, documents, one-pagers and social - so anyone can produce on-brand collateral fast without rebuilding from scratch.",
 contents:[{heading:"Decks",body:"Title, section, stat and CTA layouts."},{heading:"Documents",body:"Report and one-pager layouts."},{heading:"Social",body:"Post and carousel templates."}],
 messages:["On-brand, in minutes.","No rebuilding from scratch."], proof:["Aligned to brand guidelines"],
 specs:{Format:"Template pack",Length:"Multi-format",Owner:"Brand",Stage:"Internal",Cadence:"Versioned"},
 usage:"Start from templates; don't alter core brand elements.", related:["BD-01","EV-04","SE-01"], cta:{label:"See brand guidelines",href:"piece.html?id=BD-01"} },

/* ============================================================
   WAVE 21 - VIDEO & MOTION (VD)
   ============================================================ */

"VD-01": { title:"Brand Film Script (90s)", cat:"Video & Motion", catKey:"VD", icon:"video", status:"LIVE",
 tagline:"The hero film: from a test to a trajectory.", stage:"Awareness",
 format:"Script + storyboard · 90s", audience:["Executives","People leaders"], channels:["Website","Events","LinkedIn","YouTube"],
 overview:"The 90-second hero film concept and script - the emotional arc from a forgettable one-time test to a measured, rising trajectory - built around the gradient motion system and closing on the promise line.",
 contents:[{heading:"Act 1",body:"The annual test that changes nothing."},{heading:"Act 2",body:"A year of measured change, in the app and in life."},{heading:"Act 3",body:"The JoySpan line rising, year over year."},{heading:"Close",body:"Promise line + single CTA."}],
 messages:["From a test to a trajectory.","Lengthen the joyspan. Prove it."], proof:["JoySpan trajectory motif"],
 specs:{Format:"Script + storyboard",Length:"90s",Owner:"Brand + Motion",Stage:"Top funnel",Cadence:"Hero asset"},
 usage:"Captions and reduced-motion variant; illustrative data only.", related:["AD-06","VD-02","VD-05"], cta:{label:"See the programme",href:"../programme.html"} },

"VD-02": { title:"Explainer - The SIIS Cycle", cat:"Video & Motion", catKey:"VD", icon:"video", status:"LIVE",
 tagline:"Animation brief for the signature 90-day loop.", stage:"Consideration",
 format:"Animation brief + script", audience:["People leaders","CMO","Members"], channels:["Website","Sales","Onboarding"],
 overview:"The brief and script for the signature SIIS animation - Signals → Interpretations → Interventions → Systems turning as a loop - that makes the 90-day method instantly graspable, mirroring the live site animation.",
 contents:[{heading:"The loop",body:"Four stages animating in sequence."},{heading:"Each stage",body:"One line of what's measured/done."},{heading:"Cadence note",body:"Annual panel + 3 quarterly re-tests."}],
 messages:["The method, in motion.","Longevity is engineered, not hoped for."], proof:["SIIS 4-stage cycle"],
 specs:{Format:"Brief + script",Length:"Short",Owner:"Motion + Clinical",Stage:"Mid funnel",Cadence:"With site"},
 usage:"Reduced-motion fallback; keep clinical accuracy.", related:["TL-04","VD-01","BD-05"], cta:{label:"See how it works",href:"../index.html#siis"} },

"VD-03": { title:"Testimonial Film Kit", cat:"Video & Motion", catKey:"VD", icon:"video", status:"LIVE",
 tagline:"Capture framework for leader and member stories.", stage:"Proof",
 format:"Production kit", audience:["Brand","CS","Members (consented)"], channels:["Website","Social","Sales"],
 overview:"A production kit for capturing authentic video testimonials - consent and release, question sets, lighting and edit guidance - so social proof is genuine, compliant and on-message.",
 contents:[{heading:"Consent & release",body:"Explicit, revocable."},{heading:"Questions",body:"For sponsors, HR and members."},{heading:"Production",body:"Lighting, framing, edit guidance."}],
 messages:["Authentic proof, consent-first.","Real voices, honest claims."], proof:["Consent and release process"],
 specs:{Format:"Kit",Length:"Production",Owner:"Brand + CS + Legal",Stage:"Proof",Cadence:"As references mature"},
 usage:"Consent mandatory/revocable; no implied guarantees.", related:["CS-06","TS-02","PV-05"], cta:{label:"See trust & proof",href:"../proof.html"} },

"VD-04": { title:"Product Walkthrough - LifeOS", cat:"Video & Motion", catKey:"VD", icon:"video", status:"LIVE",
 tagline:"A screen-capture tour of the member app.", stage:"Consideration",
 format:"Screen-capture video + script", audience:["People leaders","Members","Prospects"], channels:["Website","Sales","Onboarding"],
 overview:"A short product walkthrough of the LifeOS app - JoySpan home, Smart Report, pillar actions, supplements and community - using illustrative data, so buyers and members see the experience before committing.",
 contents:[{heading:"Home / JoySpan",body:"Score and trajectory."},{heading:"Report & pillars",body:"Organ ages and actions."},{heading:"Supplements & community",body:"Pack and JoySpan Live."}],
 messages:["See the experience before you commit.","Privacy by design, on screen."], proof:["LifeOS surfaces"],
 specs:{Format:"Video + script",Length:"Short",Owner:"Product + Motion",Stage:"Mid funnel",Cadence:"With product"},
 usage:"Illustrative data only; never show real individual data.", related:["AP-01","SE-09","VD-05"], cta:{label:"See the app",href:"../index.html#app"} },

"VD-05": { title:"Social Cutdowns Pack", cat:"Video & Motion", catKey:"VD", icon:"video", status:"LIVE",
 tagline:"15s and 6s edits for paid and organic.", stage:"Awareness",
 format:"Edit pack · multiple ratios", audience:["Social audiences"], channels:["LinkedIn","YouTube","Programmatic"],
 overview:"Short cutdowns of the hero film and explainers - 15s and 6s, multiple aspect ratios, captioned - built for paid and organic social distribution.",
 contents:[{heading:"Lengths",body:"15s and 6s."},{heading:"Ratios",body:"16:9, 1:1, 9:16."},{heading:"Captions",body:"Always-on, accessible."}],
 messages:["The story, snackable.","Captioned and accessible."], proof:["Derived from hero film"],
 specs:{Format:"Edit pack",Length:"Multi",Owner:"Motion + Social",Stage:"Top funnel",Cadence:"Per campaign"},
 usage:"Captions mandatory; keep claims accurate.", related:["VD-01","AD-06","AD-02"], cta:{label:"See the programme",href:"../programme.html"} },

/* ============================================================
   WAVE 22 - WEB & LANDING PAGES (WB)
   ============================================================ */

"WB-01": { title:"Home Flagship Page", cat:"Web & Landing Pages", catKey:"WB", icon:"globe", status:"LIVE",
 tagline:"The full narrative site experience.", stage:"All",
 format:"Web page", audience:["All buyer personas"], channels:["Website (organic, paid, direct)"],
 overview:"The flagship home page - the full narrative from tension to pilot, with the gradient-mesh hero, the SIIS loop, the proof trajectory, the pillar wheel, the employer dashboard mock and the workforce estimator. The primary digital surface.",
 contents:[{heading:"Hero & problem",body:"The promise and the value leak."},{heading:"System & method",body:"Four frameworks; the SIIS loop."},{heading:"Proof & dashboard",body:"Trajectory and aggregate view."},{heading:"Value, app, pricing, CTA",body:"Outcomes, experience, tiers, pilot."}],
 messages:["From 'another vendor' to 'book a pilot', in one scroll.","Health your board can see."], proof:["Live interactive proof components"],
 specs:{Format:"Web page",Length:"Flagship",Owner:"Growth + Brand",Stage:"All",Cadence:"Iterated"},
 usage:"Primary conversion surface; keep claims attributed; a11y and performance budgets.", related:["WB-02","WB-03","WB-05"], cta:{label:"Open the home page",href:"../index.html"} },

"WB-02": { title:"Programme Overview Page", cat:"Web & Landing Pages", catKey:"WB", icon:"globe", status:"LIVE",
 tagline:"Frameworks, journey and BioMAP in one page.", stage:"Consideration",
 format:"Web page", audience:["People leaders","CMO","CEO"], channels:["Website"],
 overview:"The deep-dive page on the programme - what's included, the four frameworks, BioMAP panels, the 11+1 pillars, the LifeOS experience and the interactive 12-month journey - the page that answers 'what exactly is it?'.",
 contents:[{heading:"What's included",body:"The all-inclusive scope."},{heading:"Architecture",body:"The four frameworks."},{heading:"BioMAP & pillars",body:"What we measure; how it's lived."},{heading:"The journey",body:"Baseline → prove, interactive."}],
 messages:["One programme. Four frameworks. A proven outcome.","The whole programme, explained."], proof:["200+ markers; 7 panels; 11+1 pillars"],
 specs:{Format:"Web page",Length:"Deep-dive",Owner:"Growth + Content",Stage:"Mid funnel",Cadence:"Iterated"},
 usage:"Keep accurate; link to proof and pricing.", related:["WB-01","SE-07","AP-04"], cta:{label:"See the programme",href:"../programme.html"} },

"WB-03": { title:"Pilot Landing Page", cat:"Web & Landing Pages", catKey:"WB", icon:"globe", status:"LIVE",
 tagline:"The high-intent conversion page and form.", stage:"Decision",
 format:"Web page + multi-step form", audience:["CHRO","CEO","Sponsors"], channels:["Website","Paid","Sales links"],
 overview:"The primary conversion page - a value recap and a multi-step booking form (company, headcount, sector, role, timeline) with a review step and success state - the destination for every 'Book a Pilot' CTA.",
 contents:[{heading:"Value recap",body:"What the pilot proves."},{heading:"Multi-step form",body:"Company → workforce → role → review."},{heading:"Reassurance",body:"What happens next; privacy."},{heading:"Success",body:"Confirmation and next steps."}],
 messages:["Start with a pilot.","Low-risk first step."], proof:["Managed 50–100-person pilot"],
 specs:{Format:"Web page + form",Length:"Conversion",Owner:"Growth",Stage:"Decision",Cadence:"CRO-tested"},
 usage:"Minimise fields; instant confirmation; honour privacy.", related:["EB-05","EM-04","BR-04"], cta:{label:"Book a Pilot",href:"../book.html"} },

"WB-04": { title:"Industry × Outcome Landing Matrix", cat:"Web & Landing Pages", catKey:"WB", icon:"globe", status:"LIVE",
 tagline:"Programmatic pages for vertical search intent.", stage:"Awareness",
 format:"Programmatic page set", audience:["Search audiences by vertical"], channels:["Organic search","Paid search"],
 overview:"A programmatic SEO set crossing industries with outcomes (e.g. 'longevity programme for financial services') - scalable landing pages that capture vertical search intent and route into the funnel.",
 contents:[{heading:"Matrix",body:"6 industries × 5 outcomes."},{heading:"Template",body:"Tailored hero, proof, CTA per cell."},{heading:"SEO",body:"Schema, internal links, canonicals."}],
 messages:["Capture vertical intent at scale.","Right message, right search."], proof:["Tailored proof per vertical"],
 specs:{Format:"Programmatic set",Length:"Matrix",Owner:"SEO + Content",Stage:"Top funnel",Cadence:"Phase 2"},
 usage:"Avoid thin/duplicate content; keep claims attributed.", related:["IN-01","OP-01","WB-01"], cta:{label:"Explore solutions",href:"../solutions.html"} },

"WB-05": { title:"Workforce Snapshot Tool", cat:"Web & Landing Pages", catKey:"WB", icon:"globe", status:"LIVE",
 tagline:"The interactive directional estimator.", stage:"Awareness → Consideration",
 format:"Interactive web component", audience:["CHRO","CFO","CEO"], channels:["Website","Sales","Events"],
 overview:"The live estimator embedded on the site - headcount, age band and sector to a directional risk view and recommended pilot size - the interactive hook that converts curiosity into a pilot conversation.",
 contents:[{heading:"Inputs",body:"Size, age band, sector."},{heading:"Outputs",body:"Flags, metabolic priority, exposure days, pilot size."},{heading:"CTA",body:"Turn it into a real baseline."}],
 messages:["Your snapshot in 20 seconds.","Directional, not a guarantee."], proof:["Attributed sector benchmarks"],
 specs:{Format:"Web component",Length:"Interactive",Owner:"Growth",Stage:"Top–mid",Cadence:"Tune benchmarks"},
 usage:"Directional only; route to Book a Pilot.", related:["PP-04","PP-03","WB-03"], cta:{label:"Open the estimator",href:"../index.html#snapshot"} },

"WB-06": { title:"Trust Centre Page", cat:"Web & Landing Pages", catKey:"WB", icon:"globe", status:"LIVE",
 tagline:"The privacy, security and compliance hub.", stage:"Consideration → Decision",
 format:"Web page", audience:["IT / Security","Legal","Procurement","CHRO"], channels:["Website","Security reviews"],
 overview:"The public trust hub consolidating privacy, security and compliance - plain-language summaries of the policies, the controls, the data boundary and the certifications roadmap - the page that de-risks the security review.",
 contents:[{heading:"Privacy & DPDPA",body:"Plain-language summaries."},{heading:"Security controls",body:"Encryption, access, audit."},{heading:"Compliance",body:"DPDPA; ISO/SOC-2 roadmap."},{heading:"Boundary",body:"Single-channel, aggregate-only."}],
 messages:["Privacy made visible.","De-risk the security review."], proof:["DPDPA-aligned; ISO/SOC-2 roadmap"],
 specs:{Format:"Web page",Length:"Hub",Owner:"Security + Legal + Content",Stage:"Mid–bottom",Cadence:"Reviewed quarterly"},
 usage:"Keep certification status honest; link the detailed legal sections.", related:["PV-02","PV-03","CS-05"], cta:{label:"Visit the Trust Centre",href:"../legal.html#security"} },

/* ============================================================
   WAVE 23 - DIRECT MAIL & OOH (DM)
   ============================================================ */

"DM-01": { title:"Executive Direct-Mail Pack", cat:"Direct Mail & OOH", catKey:"DM", icon:"print", status:"LIVE",
 tagline:"A premium mailer that earns a meeting.", stage:"Awareness → Consideration",
 format:"Physical mailer", audience:["CEO / Board","CHRO"], channels:["Direct mail","ABM"],
 overview:"A premium, tactile direct-mail pack for hard-to-reach executives - a considered object plus a single sharp message and a personal path to a conversation - engineered to cut through a crowded digital inbox.",
 contents:[{heading:"The object",body:"A premium, on-brand piece."},{heading:"The message",body:"One idea: proof your board can see."},{heading:"The path",body:"Personal QR / link to book time."}],
 messages:["Cut through the inbox.","One idea, beautifully delivered."], proof:["Links to Executive Brief"],
 specs:{Format:"Mailer",Length:"Pack",Owner:"Brand + ABM",Stage:"Top–mid",Cadence:"Per ABM wave"},
 usage:"Use for targeted ABM; measure response; keep premium.", related:["DM-02","EB-02","BR-03"], cta:{label:"Request the Executive Brief",href:"../executive-brief.html"} },

"DM-02": { title:"CXO Pilot-Invite Box", cat:"Direct Mail & OOH", catKey:"DM", icon:"print", status:"LIVE",
 tagline:"A considered gift-box invitation to pilot.", stage:"Consideration → Decision",
 format:"Gift box", audience:["CEO / Board","CHRO","CMO"], channels:["Direct mail","Events"],
 overview:"A high-touch gift-box invitation for priority accounts - a tasteful, useful object paired with a personal invitation to a managed pilot or a CXO dinner - the physical complement to relationship-led acquisition.",
 contents:[{heading:"The box",body:"A useful, on-brand object."},{heading:"The invitation",body:"Personal pilot or dinner invite."},{heading:"Follow-up",body:"Personal, relationship-led."}],
 messages:["A memorable invitation.","Relationship-led acquisition."], proof:["Pairs with pilot offer"],
 specs:{Format:"Gift box",Length:"Pack",Owner:"Brand + Sales",Stage:"Mid–bottom",Cadence:"Per priority account"},
 usage:"Tasteful and useful, never gimmicky; comply with gifting policies.", related:["DM-01","EV-06","BR-04"], cta:{label:"Book a Pilot",href:"../book.html"} },

"DM-03": { title:"Airport & Lounge OOH", cat:"Direct Mail & OOH", catKey:"DM", icon:"print", status:"LIVE",
 tagline:"Brand presence where executives travel.", stage:"Awareness",
 format:"OOH creative · multiple formats", audience:["Executives","Business travellers"], channels:["Airport / lounge OOH"],
 overview:"Out-of-home creative for airports and business lounges - where senior leaders spend dwell time - built on a single bold line and the gradient system, with a clean path to learn more.",
 contents:[{heading:"Creative",body:"One bold line; gradient system."},{heading:"Formats",body:"Backlit, digital, lounge placements."},{heading:"Response",body:"QR to report or estimator."}],
 messages:["Reach leaders in dwell time.","One bold idea."], proof:["QR to report / estimator"],
 specs:{Format:"OOH",Length:"Format set",Owner:"Brand + Growth",Stage:"Top funnel",Cadence:"Per campaign"},
 usage:"Keep to one message; ensure legibility at distance; measurable QR.", related:["DM-04","DM-05","AD-03"], cta:{label:"Try the estimator",href:"../index.html#snapshot"} },

"DM-04": { title:"Office-Tower Lobby OOH", cat:"Direct Mail & OOH", catKey:"DM", icon:"print", status:"LIVE",
 tagline:"Placements in GCC and corporate campuses.", stage:"Awareness",
 format:"OOH creative · lobby formats", audience:["Corporate employees","Leaders"], channels:["Office-tower / campus OOH"],
 overview:"Lobby and campus OOH for technology parks and corporate towers - reaching both decision-makers and the workforce - reinforcing the category and driving to the report or estimator.",
 contents:[{heading:"Creative",body:"Category line; gradient system."},{heading:"Placements",body:"Lobby screens and panels."},{heading:"Response",body:"QR to learn more."}],
 messages:["Where the workforce already is.","Reinforce the category."], proof:["QR to report"],
 specs:{Format:"OOH",Length:"Lobby set",Owner:"Brand + Growth",Stage:"Top funnel",Cadence:"Per campaign"},
 usage:"One message; respect venue rules; measurable QR.", related:["DM-03","DM-05","AD-04"], cta:{label:"Request the report",href:"../book.html"} },

"DM-05": { title:"Conference Print Ads", cat:"Direct Mail & OOH", catKey:"DM", icon:"print", status:"LIVE",
 tagline:"Programme guide and signage placements.", stage:"Awareness",
 format:"Print ads · guide + signage", audience:["Conference attendees","HR/leadership audiences"], channels:["Event programmes","Signage"],
 overview:"Print ad creative for HR and leadership conference programmes and signage - aligned to the booth presence - so the brand shows up coherently across an event.",
 contents:[{heading:"Programme ad",body:"Full-page on-brand creative."},{heading:"Signage",body:"Aligned to the booth kit."},{heading:"Response",body:"QR / booth driver."}],
 messages:["Coherent presence across the event.","Drive to the booth."], proof:["Aligned to booth kit"],
 specs:{Format:"Print ads",Length:"Set",Owner:"Brand + Events",Stage:"Top funnel",Cadence:"Per event"},
 usage:"Coordinate with the booth kit; one message; measurable QR.", related:["EV-02","BR-02","DM-04"], cta:{label:"See Resources",href:"../resources.html"} },

/* ============================================================
   WAVE 24 - TRUST & SOCIAL PROOF (TS)
   ============================================================ */

"TS-01": { title:"Client Roster / Logo Wall Template", cat:"Trust & Social Proof", catKey:"TS", icon:"star", status:"LIVE",
 tagline:"A privacy-respecting reference display.", stage:"Consideration → Decision",
 format:"Template · web + deck", audience:["Prospects","Buyers"], channels:["Website","Decks","Proposals"],
 overview:"A reusable logo-wall and client-roster template - with permission rules and tasteful anonymisation where references aren't yet public - so social proof builds credibility without breaching confidentiality.",
 contents:[{heading:"Layout",body:"Logo grid and roster formats."},{heading:"Permission rules",body:"Only display with consent."},{heading:"Anonymisation",body:"Sector descriptors where needed."}],
 messages:["Credibility without breaching trust.","Only with permission."], proof:["Consent-based display"],
 specs:{Format:"Template",Length:"Web + deck",Owner:"Brand + Sales",Stage:"Mid–bottom",Cadence:"Living"},
 usage:"Display only with written permission; anonymise otherwise.", related:["TS-02","TS-05","CS-01"], cta:{label:"See trust & proof",href:"../proof.html"} },

"TS-02": { title:"Testimonial Library", cat:"Trust & Social Proof", catKey:"TS", icon:"star", status:"LIVE",
 tagline:"Approved quotes by persona and outcome.", stage:"Consideration → Decision",
 format:"Library · maintained", audience:["Sales","Marketing","Web"], channels:["Website","Decks","Social"],
 overview:"A maintained library of approved, consented testimonials - tagged by persona and outcome - so any asset can pull the right voice of proof, honestly attributed.",
 contents:[{heading:"By persona",body:"CEO, CHRO, CFO, member quotes."},{heading:"By outcome",body:"Productivity, retention, GLP-1, ESG."},{heading:"Consent",body:"Each quote consented and current."}],
 messages:["The right voice, every time.","Consented and current."], proof:["Consent-tracked quotes"],
 specs:{Format:"Library",Length:"Maintained",Owner:"Brand + CS",Stage:"Mid–bottom",Cadence:"Growing"},
 usage:"Use only consented quotes; never fabricate; honour revocation.", related:["CS-06","VD-03","TS-01"], cta:{label:"See trust & proof",href:"../proof.html"} },

"TS-03": { title:"Certifications & Badges Sheet", cat:"Trust & Social Proof", catKey:"TS", icon:"star", status:"LIVE",
 tagline:"DPDPA-aligned · ISO 27001 / SOC-2 roadmap.", stage:"Decision",
 format:"1 page · badges + status", audience:["IT / Security","Procurement","Buyers"], channels:["Website","Proposals","Security reviews"],
 overview:"An honest, current sheet of certifications and compliance status - what's aligned, what's certified and what's on the roadmap - so trust is built on accurate claims, never inflated badges.",
 contents:[{heading:"Aligned",body:"DPDPA alignment today."},{heading:"Roadmap",body:"ISO 27001 / SOC-2 in progress."},{heading:"Honesty rule",body:"Roadmap labelled as roadmap."}],
 messages:["Honest about status.","Aligned today; certified on the roadmap."], proof:["Accurate compliance status"],
 specs:{Format:"1 page",Length:"1 page",Owner:"Security + Legal",Stage:"Decision",Cadence:"Updated on status change"},
 usage:"Never imply certifications not yet held; label roadmap clearly.", related:["PV-02","PV-03","WB-06"], cta:{label:"Visit the Trust Centre",href:"../legal.html#security"} },

"TS-04": { title:"Press & Analyst Mentions Sheet", cat:"Trust & Social Proof", catKey:"TS", icon:"star", status:"LIVE",
 tagline:"Curated third-party validation.", stage:"Consideration",
 format:"1 page · maintained", audience:["Prospects","Buyers","Partners"], channels:["Website","Decks","Proposals"],
 overview:"A curated sheet of press coverage and analyst mentions - third-party validation that lends category credibility - maintained as coverage grows.",
 contents:[{heading:"Press",body:"Curated coverage and quotes."},{heading:"Analysts",body:"Mentions and recognitions."},{heading:"Usage",body:"Where and how to cite."}],
 messages:["Third-party credibility.","Curated, current."], proof:["Attributed coverage"],
 specs:{Format:"1 page",Length:"Maintained",Owner:"PR",Stage:"Mid funnel",Cadence:"As coverage grows"},
 usage:"Attribute accurately; respect outlet usage rights.", related:["PRM-01","PRM-06","TS-01"], cta:{label:"Visit the newsroom",href:"../resources.html"} },

"TS-05": { title:"Outcomes Snapshot Infographic", cat:"Trust & Social Proof", catKey:"TS", icon:"star", status:"LIVE",
 tagline:"The proof story in one shareable visual.", stage:"Consideration",
 format:"Infographic · web + social + print", audience:["People leaders","Executives"], channels:["Website","Social","Decks"],
 overview:"A single shareable infographic that tells the proof story at a glance - the four frameworks, the key numbers and the JoySpan trajectory - designed for social and deck reuse, with all figures labelled illustrative where needed.",
 contents:[{heading:"The numbers",body:"200+, 7, 8–10, 12, 11+1."},{heading:"The trajectory",body:"Year-over-year JoySpan."},{heading:"The promise",body:"Lengthen the joyspan. Prove it."}],
 messages:["The proof story, at a glance.","Shareable and on-brand."], proof:["Key programme numbers; trajectory"],
 specs:{Format:"Infographic",Length:"1 visual",Owner:"Brand + Content",Stage:"Mid funnel",Cadence:"Annual refresh"},
 usage:"Label illustrative figures; keep claims attributed.", related:["CS-04","AD-01","SE-07"], cta:{label:"See outcomes & KPIs",href:"../proof.html"} },

/* ============================================================
   WAVE 25 - C-SUITE ROLE KITS (RK)
   ============================================================ */

"RK-01": { title:"Kit - For the CEO & Board", cat:"C-Suite Role Kits", catKey:"RK", icon:"users", status:"LIVE",
 tagline:"Vision, proof and the ask, curated.", stage:"Decision",
 format:"Curated bundle", audience:["CEO / MD / Founder / Chair","Board"], channels:["Sales","Board pre-read"],
 overview:"A curated bundle of the right assets for the CEO and board - the board deck, the executive summary, the duty-of-care memo and the ask - assembled so a sponsor has exactly what the boardroom needs and nothing it doesn't.",
 contents:[{heading:"Vision",body:"Board deck + executive summary."},{heading:"Proof",body:"Outcomes & KPIs; the trajectory."},{heading:"Governance",body:"Duty-of-care memo."},{heading:"The ask",body:"The managed pilot."}],
 messages:["Everything the boardroom needs.","Health your board can see."], proof:["Aggregate, board-legible proof"],
 specs:{Format:"Bundle",Length:"Curated",Owner:"Sales",Stage:"Decision",Cadence:"Stable"},
 usage:"Curate to the board's agenda; no internal financials.", related:["EB-01","EB-04","EB-05"], cta:{label:"Book a Pilot",href:"../book.html"} },

"RK-02": { title:"Kit - For HR & People", cat:"C-Suite Role Kits", catKey:"RK", icon:"users", status:"LIVE",
 tagline:"Experience, engagement and trust.", stage:"Consideration → Decision",
 format:"Curated bundle", audience:["CHRO","Head of People","Benefits"], channels:["Sales","Enablement"],
 overview:"The bundle for People leaders - the experience, the engagement model, the privacy promise and the rollout playbook - answering 'will my workforce engage, and is it safe?'.",
 contents:[{heading:"Experience",body:"The LifeOS year; app guide."},{heading:"Engagement",body:"Leadership participation; toolkit."},{heading:"Trust",body:"Privacy and consent."},{heading:"Rollout",body:"The HR playbook."}],
 messages:["Will they engage? Is it safe? Yes.","Leaders go first."], proof:["Aggregate-only; engagement model"],
 specs:{Format:"Bundle",Length:"Curated",Owner:"Sales + Member Care",Stage:"Mid–bottom",Cadence:"Stable"},
 usage:"Lead with experience and privacy; set realistic rollout expectations.", related:["HR-01","AP-01","PV-01"], cta:{label:"See the experience",href:"../index.html#app"} },

"RK-03": { title:"Kit - For Finance & Procurement", cat:"C-Suite Role Kits", catKey:"RK", icon:"users", status:"LIVE",
 tagline:"Pricing, value and governance.", stage:"Decision",
 format:"Curated bundle", audience:["CFO","Procurement"], channels:["Sales","Proposal"],
 overview:"The finance bundle - transparent pricing, the directional value model, the what's-included matrix and the governance posture - answering 'what does it cost, and what's the value?'.",
 contents:[{heading:"Pricing",body:"Tiers and the matrix."},{heading:"Value",body:"Directional ROI model and estimator."},{heading:"Governance",body:"Privacy, security, clinical."},{heading:"Proposal",body:"Scoped enterprise template."}],
 messages:["Transparent value, honestly framed.","No guaranteed-return claims."], proof:["What's-Included Matrix; estimator"],
 specs:{Format:"Bundle",Length:"Curated",Owner:"Sales + Commercial",Stage:"Decision",Cadence:"Stable"},
 usage:"Keep value directional; never expose internal margin.", related:["PP-01","PP-03","PV-02"], cta:{label:"See pricing & plans",href:"../pricing.html"} },

"RK-04": { title:"Kit - For the CMO / Wellbeing Lead", cat:"C-Suite Role Kits", catKey:"RK", icon:"users", status:"LIVE",
 tagline:"Science and clinical governance.", stage:"Consideration → Decision",
 format:"Curated bundle", audience:["CMO","Chief Wellbeing Officer","Clinical leads"], channels:["Sales","Clinical reviews"],
 overview:"The clinical bundle - the evidence pack, the BioMAP and organ-age explainers, and the clinical governance charter - answering 'is the science and governance sound?'.",
 contents:[{heading:"Science",body:"Evidence pack; panel and organ-age notes."},{heading:"Governance",body:"Charter; sign-off; critical-value pathway."},{heading:"Discipline",body:"Claims and language guide."}],
 messages:["Sound science, sound governance.","Physician-reviewed, never 'AI-diagnosed'."], proof:["Evidence pack; named physician sign-off"],
 specs:{Format:"Bundle",Length:"Curated",Owner:"Sales + Clinical",Stage:"Mid–bottom",Cadence:"Stable"},
 usage:"Clinical-reviewed; attribute all evidence; trajectories not guarantees.", related:["CL-01","CL-04","CL-07"], cta:{label:"See science & evidence",href:"../proof.html#science"} },

/* ============================================================
   WAVE 26 - REFERENCE & INDEX (GL)
   ============================================================ */

"GL-01": { title:"Glossary - JoySpan, BioMAP, SIIS, LongeVis", cat:"Reference & Index", catKey:"GL", icon:"book", status:"LIVE",
 tagline:"The defined vocabulary of measured longevity.", stage:"All",
 format:"Glossary · web + PDF", audience:["All teams","Buyers","Members","Press"], channels:["Website","Onboarding","Enablement"],
 overview:"The canonical glossary of the category's language - JoySpan, BioMAP, SIIS, LongeVis, Smart Report, organ ages - defined consistently so every team, buyer and member uses the same words to mean the same things.",
 contents:[{heading:"JoySpan",body:"The hero metric: years lived with vitality."},{heading:"BioMAP",body:"200+ markers → 7 panels → organ ages."},{heading:"SIIS",body:"The 90-day method."},{heading:"LongeVis",body:"The 11+1 pillars."}],
 messages:["One vocabulary, everywhere.","Define it once, use it consistently."], proof:["Aligned to the live glossary"],
 specs:{Format:"Glossary",Length:"Reference",Owner:"Content + Clinical",Stage:"All",Cadence:"Living"},
 usage:"Single source for terminology; keep definitions consistent across surfaces.", related:["GL-02","CL-02","BD-04"], cta:{label:"See the glossary",href:"../resources.html#glossary"} },

"GL-02": { title:"Messaging House", cat:"Reference & Index", catKey:"GL", icon:"book", status:"LIVE",
 tagline:"Roof, pillars and proof points - the message architecture.", stage:"Internal",
 format:"1–2 pages · framework", audience:["All teams","Agency","Partners"], channels:["Internal enablement"],
 overview:"The message architecture that keeps every asset aligned - the roof (the promise), the pillars (nav-level value), the proof points and the tone - so 160 pieces of collateral all ladder up to one story.",
 contents:[{heading:"Roof",body:"Lengthen the joyspan. Compress the sufferspan. Prove it."},{heading:"Pillars",body:"Productivity, de-risking, retention, GLP-1, ESG."},{heading:"Proof points",body:"200+, 7, 8–10, 12, 11+1, SIIS, YoY, aggregate-only."},{heading:"Tone",body:"Confident, clear, evidence-led, humane."}],
 messages:["Everything ladders to one story.","One roof, clear pillars, hard proof."], proof:["The full proof-point set"],
 specs:{Format:"Framework",Length:"1–2 pages",Owner:"Brand + Content",Stage:"Internal",Cadence:"Stable"},
 usage:"The reference for every new asset; enforce alignment at review.", related:["GL-01","BD-04","CL-07"], cta:{label:"See the home narrative",href:"../index.html"} },

"GL-03": { title:"Collateral Index & Usage Guide", cat:"Reference & Index", catKey:"GL", icon:"book", status:"LIVE",
 tagline:"What each asset is for, and where it fits the funnel.", stage:"Internal",
 format:"Index · this library", audience:["Sales","Marketing","CS","Partners"], channels:["This collateral library"],
 overview:"The map to the whole pack - every category and piece, what it's for, who it's for and where it fits the funnel - so any team member finds and uses the right asset at the right moment. This very library is its expression.",
 contents:[{heading:"By category",body:"26 categories, 160 pieces."},{heading:"By funnel stage",body:"Awareness → decision → onboarding → retention → internal."},{heading:"By persona",body:"CEO, CHRO, CFO, CMO, member."},{heading:"How to use",body:"Search, filter, open the brief."}],
 messages:["Find the right asset, fast.","One library, end to end."], proof:["160 pieces across 26 categories"],
 specs:{Format:"Index",Length:"This library",Owner:"Marketing Ops",Stage:"Internal",Cadence:"Living"},
 usage:"Keep statuses current; route new assets into the right category.", related:["GL-01","GL-02","SE-06"], cta:{label:"Browse the collateral library",href:"index.html"} }

};

/* ---------- Asset-kind classifier (shared by index + piece) ---------- */
window.AIWO_KIND = function(title){
  var t = (title || "").toLowerCase();
  if (/\bdeck\b|slides|presentation/.test(t)) return "deck";
  if (/poster|signage|\booh\b|infographic|carousel/.test(t)) return "poster";
  if (/one-?pager|leave-behind|\bflyer\b|insert|\bsheet\b/.test(t)) return "flyer";
  return "doc";
};
window.AIWO_KIND_META = {
  deck:  { label: "Deck",     glyph: "◧" },
  flyer: { label: "A4 Flyer", glyph: "▭" },
  poster:{ label: "Poster",   glyph: "▥" },
  doc:   { label: "Document", glyph: "▤" }
};

/* ---------- Category proof bank ----------
   Source-grounded programme facts, true for every asset in the category.
   Merged (deduped) with each asset's own proof at render time, so every
   card stands on the same canonical evidence. No invented figures. */
window.AIWO_PROOF_BANK = {
  TL: ["200+ biomarkers from one annual draw","Year-over-year JoySpan trajectory (the north-star)","Physician-reviewed, never 'AI-diagnosed'"],
  EB: ["200+ markers; 8–10 organ ages; 12 longevity scores","Aggregate-only employer dashboard; individual data never shared","A managed 50–100-person pilot as the first step"],
  SE: ["200+ biomarkers; 7 panels; 8–10 organ ages","Year-over-year JoySpan trajectory","Aggregate-only to employers"],
  PP: ["Flagship ₹30,000 per employee, all-inclusive","Volume terms available for workforce cohorts","Figures indicative; confirmed in proposal"],
  BR: ["200+ markers; 12 longevity scores; 11+1 pillars","Physician-signed Smart Report","Year-over-year JoySpan trajectory"],
  EM: ["Year-over-year JoySpan trajectory","Aggregate-only to employers","A managed pilot as the next step"],
  AD: ["8–10 organ ages from one draw","200+ biomarkers; 7 panels","Aggregate-only privacy"],
  CS: ["Aggregate-only; minimum-cohort suppression","Year-over-year JoySpan trajectory","Illustrative until live references mature - clearly labelled"],
  CL: ["Named physician sign-off on every report","200+ markers → 7 panels → 8–10 organ ages → 12 scores","Same-day critical-value pathway"],
  PV: ["Single-channel; aggregate-only to employers","DPDPA-aligned; ISO 27001 / SOC-2 on roadmap","Minimum-cohort suppression - no re-identification"],
  ON: ["Informed consent precedes every draw (a hard stop)","Aggregate-only to employers; results are the member's","LifeOS app for every employee, 12 months"],
  AP: ["LifeOS app for every member, 12 months","Physician-signed Smart Report","11+1 LongeVis pillars; quarterly re-tests"],
  HR: ["Leadership participation is the #1 engagement driver","Aggregate-only employer dashboard","SIIS cadence: annual panel + 3 quarterly re-tests"],
  IN: ["Wave Model delivery, repeatable city to city","200+ markers; 8–10 organ ages","Aggregate-only, year-over-year reporting"],
  OP: ["Year-over-year JoySpan trajectory","200+ early signals read before symptoms","Aggregate-only to employers"],
  EV: ["Year-over-year JoySpan trajectory","Workforce Snapshot estimator","A managed pilot as the next step"],
  PRM:["A new category: measured workforce longevity","200+ biomarkers; 8–10 organ ages","Outcomes are measured trajectories, not guarantees"],
  CH: ["Wave Model; barcode double-scan QC","100% certified operators on every live wave","Maintained sub-processor register"],
  DL: ["Pilot → weekly waves of ~1,250 at ~280 draws/day","Up to 5,000 personalised dispatches per programme","100% certified operators; barcode double-scan; validated cold-chain"],
  BD: ["The 'AIWO Longevity Spectrum' design system","WCAG AA contrast discipline","Aligned to the messaging house and claims rules"],
  VD: ["Year-over-year JoySpan trajectory motif","Reduced-motion and captioned variants","Illustrative data only"],
  WB: ["Workforce Snapshot estimator","Aggregate-only employer dashboard","Core Web Vitals and accessibility budgets"],
  DM: ["Drives to the Executive Brief / estimator","A managed pilot as the next step","Premium, on-brand execution"],
  TS: ["Displayed only with consent; anonymised otherwise","Outcomes are measured trajectories, not guarantees","DPDPA-aligned; ISO 27001 / SOC-2 roadmap"],
  RK: ["Curated to the decision-maker's job-to-be-done","Aggregate-only; physician-led","A managed pilot as the next step"],
  GL: ["200+ markers; 7 panels; 11+1 pillars; 12 scores","Year-over-year JoySpan as the north-star","One vocabulary aligned across all 160 assets"]
};
/* Merge an asset's own proof with its category bank (deduped, capped). */
window.AIWO_RESOLVE_PROOF = function(p, cap){
  var bank = (window.AIWO_PROOF_BANK[p.catKey] || []);
  var seen = {}, out = [];
  (p.proof || []).concat(bank).forEach(function(x){
    var k = (x||'').toLowerCase().replace(/[^a-z0-9]/g,'');
    if(k && !seen[k]){ seen[k]=1; out.push(x); }
  });
  return out.slice(0, cap || 4);
};

/* ---------- Category message bank ----------
   Canonical key-message lines per category, drawn from the messaging
   house. Merged (deduped) with each asset's own messages so every card
   carries at least three on-brand lines. No invented claims. */
window.AIWO_MSG_BANK = {
  TL: ["From wellness activity to measured longevity outcomes.","Lengthen the joyspan. Compress the sufferspan. Prove it."],
  EB: ["Board-ready: vision, proof and a low-risk ask.","Health your board can see."],
  SE: ["Sell the outcome, prove the system, close on a pilot.","We don't sell tests. We sell outcomes."],
  PP: ["Transparent and indicative; confirmed in proposal.","One all-inclusive programme. Tiers that scale."],
  BR: ["Premium in the hand - quiet, confident, expensive in feel.","One promise per page; no bullet clutter."],
  EM: ["Nurture with evidence, never noise.","Every touch earns the next one."],
  AD: ["Vibrant but professional; hope, not fear.","One idea, one CTA per creative."],
  CS: ["Evidence first: labelled, attributed, aggregate-only.","Trajectories, not guarantees."],
  CL: ["Physician-led rigour behind every claim.","Never 'AI-diagnosed'."],
  PV: ["Privacy is the architecture, not the fine print.","The employer–employee boundary is absolute."],
  ON: ["Consent-first, warm, and effortless to join.","No consent, no draw."],
  AP: ["A year of guided change in the member's pocket.","Every finding becomes a livable action."],
  HR: ["Equip the People team to run it like pros.","Leaders go first; engagement follows."],
  IN: ["The same engine, tuned to the sector's real risks.","One standard, delivered identically."],
  OP: ["Framed on the outcome the buyer must defend.","Five outcomes leadership can stand behind."],
  EV: ["Insight first; the pitch earns its place.","Convert the energy, not just the contact."],
  PRM:["One category story, told with discipline.","Newsworthy, quotable, never over-claimed."],
  CH: ["Partners extend reach without diluting the standard.","Brand-correct, claims-disciplined, always."],
  DL: ["One standard, every wave, every city.","Competence felt as calm."],
  BD: ["One brand, unmistakable on every surface.","The Longevity Spectrum, used with discipline."],
  VD: ["Motion that explains, never decorates.","Captioned, accessible, reduced-motion aware."],
  WB: ["The digital surface that converts senior buyers.","One primary CTA per page: Book a Pilot."],
  DM: ["High-touch reach for hard-to-reach executives.","Premium, personal, measurable."],
  TS: ["Credibility earned, never inflated.","Only with consent; labelled if illustrative."],
  RK: ["The right assets for the seat at the table.","Curated to the decision-maker's question."],
  GL: ["One vocabulary, one message house, one map.","Define it once; use it everywhere."]
};
window.AIWO_RESOLVE_MSGS = function(p, cap){
  var bank = (window.AIWO_MSG_BANK[p.catKey] || []);
  var seen = {}, out = [];
  (p.messages || []).concat(bank).forEach(function(x){
    var k = (x||'').toLowerCase().replace(/[^a-z0-9]/g,'');
    if(k && !seen[k]){ seen[k]=1; out.push(x); }
  });
  return out.slice(0, cap || 4);
};

/* ---------- Category context ("Where it fits") ----------
   One grounded paragraph per category: the funnel role and how these
   assets connect to the operating system (BioMAP → SIIS → LongeVis →
   JoySpan) and the claims discipline. Rendered on every card. */
window.AIWO_CONTEXT = {
  TL: "Thought leadership sits at the top of the funnel: it defines Measured Workforce Longevity as a category and earns the first conversation. Every piece ladders to the message house - the JoySpan promise and the four frameworks (BioMAP → SIIS → LongeVis → JoySpan) - and hands off to the Executive Brief and the pilot conversation.",
  EB: "Executive & board assets serve the decision moment: they compress the category, the system and the proof into the register of a boardroom, and always land on the same low-risk ask - a managed 50–100-person pilot, scaled on a proven pass.",
  SE: "Sales enablement arms the revenue team mid-funnel: every asset reinforces the same narrative arc (the value leak → the shift → the four frameworks → proof → the pilot) and obeys the claims discipline, so any rep tells one consistent, honest story.",
  PP: "Pricing & proposal assets serve finance and procurement at the decision stage: transparent, indicative commercials built on the all-inclusive ₹30,000 flagship, volume terms for cohorts, and directional value framing - never guaranteed returns, never internal cost or margin.",
  BR: "Print pieces carry the brand into rooms and hands: premium, quiet layouts that mirror the site narrative - promise, frameworks, journey, value, proof - and always close on the pilot ask with indicative figures only.",
  EM: "Email & nurture assets keep the long enterprise cycle warm: persona-tuned journeys that pair one idea with one asset and one CTA per touch, routing people leaders, finance and sponsors toward the Executive Brief and the pilot.",
  AD: "Advertising & social builds category awareness at the top of the funnel: organ ages and the JoySpan trajectory as scroll-stopping hooks, always vibrant-but-professional, always attributed, driving to the report, the estimator or the pilot page.",
  CS: "Case studies & proof assets convert consideration into confidence: context → cohort → measured → trajectory → results, clearly labelled illustrative until live references mature, aggregate-only, and framed as trajectories rather than guarantees.",
  CL: "Clinical & scientific assets underwrite every other category: the panels, organ-age methodology, governance charter and claims discipline that let a CMO or medical advisor say yes - physician-reviewed, attributed, never over-claimed.",
  PV: "Privacy, security & trust assets de-risk the deal: consent-first, single-channel, aggregate-only architecture under DPDPA, with the ISO 27001 / SOC-2 roadmap stated honestly - turning the buyer's biggest concern into an adoption driver.",
  ON: "Onboarding & comms assets carry the member's first mile: leadership-backed invitations, plain-language consent and camp-day guidance that maximise turnout while keeping participation voluntary, informed and private.",
  AP: "Member experience assets sustain the year of change: the LifeOS app, the physician-signed Smart Report, the 11+1 pillar actions and the quarterly re-test cadence that make the SIIS cycle a daily reality for every member.",
  HR: "Manager & HR enablement assets make the client organisation the delivery partner: rollout playbooks, champions, comms calendars and engagement mechanics - with leadership participation, the #1 driver, designed in from day one.",
  IN: "Industry playbooks tune one engine to each vertical's real risks and buying culture: the same measurement, delivery and privacy canon, with sector-specific proof points and rollout patterns for the sales conversation.",
  OP: "Outcome playbooks frame the programme on what the buyer must defend - productivity, continuity, retention, GLP-1 duty of care, ESG - each mapping the problem to the system and to the metric leadership can stand behind.",
  EV: "Events & webinar assets create high-trust moments mid-funnel: insight-led formats where the category story is taught rather than pitched, with consent-based capture routed into the right nurture track and a natural path to a pilot.",
  PRM:"PR & media assets build third-party authority for the category: one disciplined story - measured workforce longevity - with approved facts, prepared spokespeople and claims that never outrun the evidence.",
  CH: "Partner & channel assets extend reach through labs, brokers and resellers while protecting the standard: enablement, co-branding rules and QC obligations that keep every partner brand-correct and claims-disciplined.",
  DL: "Delivery & operations assets are the engine room: the Wave Model (~1,250/week at ~280 draws/day), barcode double-scan QC, validated cold-chain, 100% certified operators and reconciliation to closure - one standard, every city.",
  BD: "Brand & identity assets keep every surface unmistakably AIWO Tribe: the Longevity Spectrum palette, the Sora/Inter system, the wordmark, tone of voice and templates that make on-brand production fast and drift impossible.",
  VD: "Video & motion assets explain the sophisticated simply: the SIIS loop, the JoySpan trajectory and the member year in motion - purposeful, captioned, reduced-motion aware, and always on illustrative data.",
  WB: "Web & landing assets are the conversion surface: the flagship narrative, the estimator, the trust centre and the pilot form - one primary CTA per page, accessible, fast, and honest in every claim.",
  DM: "Direct mail & OOH reach executives the inbox can't: premium physical moments and dwell-time placements that carry one bold idea and a measurable path (QR) to the report, the estimator or a pilot conversation.",
  TS: "Trust & social-proof assets supply the credibility layer: consented testimonials, honest certification status, attributed coverage and shareable proof visuals - credibility earned, never inflated.",
  RK: "Role kits curate the library for each seat at the table - CEO/board, HR, finance, clinical - bundling exactly the assets that answer that decision-maker's question, and nothing that doesn't.",
  GL: "Reference & index assets keep 160 pieces coherent: the glossary, the message house and this library itself - one vocabulary and one map so every team ships on-message, first time."
};

/* ---------- Category usage discipline ----------
   A canonical guidance sentence per category, appended to each card's
   own usage note so no brief ships with thin guidance. */
window.AIWO_USAGE_BANK = {
  TL: "Attribute every benchmark, label illustrative figures, and frame outcomes as measured trajectories - never guarantees.",
  EB: "Keep the boardroom register: no internal cost or margin, no guarantees, and always close on the managed-pilot ask.",
  SE: "Follow the claims-discipline guide; never expose internal cost or margin, and route hard clinical or privacy questions to the right SME asset.",
  PP: "All figures indicative and confirmed in proposal; value framing stays directional - no guaranteed-return language, ever.",
  BR: "Print premium or not at all; keep pricing indicative and the claims discipline intact on every page.",
  EM: "Honour consent and frequency caps, suppress on active opportunities, and keep every claim trajectory-framed.",
  AD: "One warm CTA per creative, claims attributed, tone hopeful - and clinical review wherever health topics appear.",
  CS: "Label illustrative until live references mature; aggregate-only, anonymised, and never implying guaranteed outcomes.",
  CL: "Clinical/compliance review is a hard gate before release; every external claim attributed; limitations stated honestly.",
  PV: "Keep certification status honest (roadmap vs certified); reinforce the single-channel, aggregate-only boundary everywhere.",
  ON: "Encourage, never pressure: participation is voluntary, consent is a hard stop, and privacy is reinforced at every touch.",
  AP: "Member-first and non-clinical in tone; no medical advice beyond the physician-signed plan; route concerns to clinicians.",
  HR: "Keep the privacy boundary explicit - HR sees aggregates only - and set realistic logistics expectations per rollout.",
  IN: "Tailor proof to the account but keep figures directional and attributed; the canon never changes, only the framing.",
  OP: "Frame value directionally against the outcome; pair with the estimator and ROI model - never promise returns.",
  EV: "Lead with insight, capture with consent, and follow up within 48 hours into the right nurture track.",
  PRM:"Prep every spokesperson with the media FAQ; no exact-count boasts, no guarantees, benchmarks always attributed.",
  CH: "Partners must follow the claims discipline and co-branding rules; internal commercials are never shared externally.",
  DL: "Internal/partner use; QC and certification gates are non-negotiable, and every exception is documented to closure.",
  BD: "Use approved assets and tokens only; never recreate the mark; review partner and agency work before publication.",
  VD: "Captions mandatory, reduced-motion variants provided, and only illustrative data ever appears on screen.",
  WB: "Hold the performance and accessibility budgets; one primary CTA per page; every claim attributed and current.",
  DM: "Comply with gifting policies, keep it tasteful and useful, and make response measurable via QR to a tracked page.",
  TS: "Display only with written consent; honour revocation; label illustrative content and keep certification status honest.",
  RK: "Curate to the agenda - include only what answers that decision-maker's question; refresh as assets are updated.",
  GL: "Treat as the single source of truth: update statuses as assets ship and route every new piece into the right category."
};
window.AIWO_RESOLVE_USAGE = function(p){
  var add = window.AIWO_USAGE_BANK[p.catKey] || "";
  var base = (p.usage || "").trim();
  if (!add) return base;
  var norm = function(s){ return s.toLowerCase().replace(/[^a-z0-9]/g,''); };
  if (norm(base).indexOf(norm(add).slice(0, 40)) > -1) return base;
  return base + (base.endsWith(".") ? " " : ". ") + add;
};
