/* =============================================================
   AIWO Tribe — Interaction Layer
   Signature animations, all transform/opacity, reduced-motion aware.
   ============================================================= */
(function () {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* =============================================================
     CANONICAL HEADER — single source of truth.
     Injected on every page so the menu system is identical
     everywhere: main items navigate to full pages; mega sub-links
     reach specific sections. No page can drift out of sync.
     ============================================================= */
  const CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>';
  const ARW  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const PLUS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>';

  const NAV_LINKS_HTML =
    '<div class="nav-item nav-item--mega">' +
      '<a class="nav-link" href="programme.html">The Programme ' + CHEV + '</a>' +
      '<div class="mega"><div class="mega-grid">' +
        '<div class="mega-col"><h5>Understand the system</h5>' +
          '<a class="mega-link" href="programme.html">Overview — Tribe<span>One programme, four frameworks</span></a>' +
          '<a class="mega-link" href="programme.html#how">How It Works — the SIIS Cycle<span>The 90-day method</span></a>' +
          '<a class="mega-link" href="programme.html#measure">What We Measure — BioMAP<span>200+ biomarkers, 7 panels</span></a></div>' +
        '<div class="mega-col"><h5>Experience the outcome</h5>' +
          '<a class="mega-link" href="programme.html#pillars">The 11+1 Pillars<span>The LongeVis Matrix</span></a>' +
          '<a class="mega-link" href="programme.html#app">The LifeOS App<span>For every employee</span></a>' +
          '<a class="mega-link" href="proof.html#north">The JoySpan Outcome<span>The hero metric</span></a></div>' +
      '</div><div class="mega-feature"><p>See the 12-month journey, baseline to proof.</p>' +
        '<a class="link-arrow" href="programme.html#journey">Explore ' + ARW + '</a></div></div></div>' +

    '<div class="nav-item nav-item--mega">' +
      '<a class="nav-link" href="solutions.html">Solutions ' + CHEV + '</a>' +
      '<div class="mega"><div class="mega-grid">' +
        '<div class="mega-col"><h5>By outcome</h5>' +
          '<a class="mega-link" href="solutions.html#outcomes">Productivity Protection</a>' +
          '<a class="mega-link" href="solutions.html#outcomes">Critical-Role De-risking</a>' +
          '<a class="mega-link" href="solutions.html#outcomes">Retention &amp; Culture</a>' +
          '<a class="mega-link" href="solutions.html#outcomes">GLP-1 Duty of Care</a>' +
          '<a class="mega-link" href="solutions.html#outcomes">ESG &amp; Wellbeing Reporting</a></div>' +
        '<div class="mega-col"><h5>By industry</h5>' +
          '<a class="mega-link" href="solutions.html#industries">Technology &amp; GCCs</a>' +
          '<a class="mega-link" href="solutions.html#industries">Financial Services</a>' +
          '<a class="mega-link" href="solutions.html#industries">Manufacturing &amp; Energy</a>' +
          '<a class="mega-link" href="solutions.html#industries">Healthcare &amp; Pharma</a>' +
          '<a class="mega-link" href="solutions.html#industries">Professional Services</a></div>' +
      '</div><div class="mega-feature"><p>Which outcome matters most to your board?</p>' +
        '<a class="link-arrow" href="solutions.html">Find your fit ' + ARW + '</a></div></div></div>' +

    '<div class="nav-item nav-item--mega">' +
      '<a class="nav-link" href="proof.html">Proof ' + CHEV + '</a>' +
      '<div class="mega"><div class="mega-grid">' +
        '<div class="mega-col"><h5>The evidence</h5>' +
          '<a class="mega-link" href="proof.html#north">Outcomes &amp; KPIs<span>The north-star trajectory</span></a>' +
          '<a class="mega-link" href="index.html#dashboard">The Employer Dashboard<span>Privacy-safe, aggregate-only</span></a>' +
          '<a class="mega-link" href="case-study.html">Results &amp; Case Studies</a></div>' +
        '<div class="mega-col"><h5>The science</h5>' +
          '<a class="mega-link" href="proof.html#science">Science &amp; Evidence<span>The clinical model</span></a>' +
          '<a class="mega-link" href="index.html#snapshot">Benchmarks &amp; ROI<span>Workforce snapshot estimator</span></a>' +
          '<a class="mega-link" href="deliver.html#clinical">Clinical Governance</a></div>' +
      '</div><div class="mega-feature"><p>The north-star: a proven year-over-year trajectory.</p>' +
        '<a class="link-arrow" href="proof.html">See the proof ' + ARW + '</a></div></div></div>' +

    '<div class="nav-item nav-item--mega">' +
      '<a class="nav-link" href="deliver.html">How We Deliver ' + CHEV + '</a>' +
      '<div class="mega"><div class="mega-grid">' +
        '<div class="mega-col"><h5>At scale</h5>' +
          '<a class="mega-link" href="deliver.html#scale">Delivery at Scale<span>The Wave Model</span></a>' +
          '<a class="mega-link" href="deliver.html#privacy">Data, Privacy &amp; Consent</a>' +
          '<a class="mega-link" href="deliver.html#clinical">Clinical Governance &amp; Safety</a></div>' +
        '<div class="mega-col"><h5>Trust</h5>' +
          '<a class="mega-link" href="deliver.html#security">Security &amp; Compliance<span>DPDPA · ISO · SOC-2 roadmap</span></a>' +
          '<a class="mega-link" href="deliver.html#people">People &amp; Certification</a></div>' +
      '</div><div class="mega-feature"><p>Run for 5,000 people — identically.</p>' +
        '<a class="link-arrow" href="deliver.html">How we scale ' + ARW + '</a></div></div></div>' +

    '<div class="nav-item"><a class="nav-link" href="pricing.html">Pricing</a></div>' +
    '<div class="nav-item"><a class="nav-link" href="resources.html">Resources</a></div>';

  const NAV_CTA_HTML =
    '<a href="book.html" class="btn btn--ghost btn--sm">Executive Brief</a>' +
    '<a href="book.html" class="btn btn--primary btn--sm magnetic">Book a Pilot</a>' +
    '<button class="nav-burger" id="burger" aria-label="Open menu"><span></span><span></span><span></span></button>';

  const M_ACC_HTML =
    '<div class="m-acc"><button class="m-acc-head">The Programme ' + PLUS + '</button><div class="m-acc-body">' +
      '<a href="programme.html">Overview</a><a href="programme.html#how">How It Works — SIIS</a><a href="programme.html#measure">What We Measure — BioMAP</a><a href="programme.html#pillars">The 11+1 Pillars</a><a href="programme.html#app">The LifeOS App</a></div></div>' +
    '<div class="m-acc"><button class="m-acc-head">Solutions ' + PLUS + '</button><div class="m-acc-body">' +
      '<a href="solutions.html#outcomes">By outcome</a><a href="solutions.html#industries">By industry</a><a href="solutions.html#roles">By role</a></div></div>' +
    '<div class="m-acc"><button class="m-acc-head">Proof ' + PLUS + '</button><div class="m-acc-body">' +
      '<a href="proof.html#north">Outcomes &amp; KPIs</a><a href="index.html#dashboard">Employer Dashboard</a><a href="proof.html#science">Science &amp; Evidence</a><a href="case-study.html">Case Studies</a></div></div>' +
    '<div class="m-acc"><button class="m-acc-head">How We Deliver ' + PLUS + '</button><div class="m-acc-body">' +
      '<a href="deliver.html#scale">Delivery at Scale</a><a href="deliver.html#privacy">Privacy &amp; Consent</a><a href="deliver.html#security">Security &amp; Compliance</a></div></div>' +
    '<div class="m-acc"><button class="m-acc-head" onclick="location.href=\'pricing.html\'">Pricing &amp; Plans</button></div>' +
    '<div class="m-acc"><button class="m-acc-head" onclick="location.href=\'resources.html\'">Resources</button></div>' +
    '<div class="m-acc"><button class="m-acc-head" onclick="location.href=\'book.html\'">Book a Pilot</button></div>';

  (function injectHeader() {
    const links = $(".nav .nav-links");
    if (links) links.innerHTML = NAV_LINKS_HTML;
    const cta = $(".nav .nav-cta");
    if (cta) cta.innerHTML = NAV_CTA_HTML;
    const brand = $(".nav .brand");
    if (brand) brand.setAttribute("href", "index.html");
    const overlay = $("#mOverlay");
    if (overlay) {
      const oBrand = overlay.querySelector(".brand");
      if (oBrand) oBrand.setAttribute("href", "index.html");
      $$(".m-acc", overlay).forEach(x => x.remove());
      overlay.insertAdjacentHTML("beforeend", M_ACC_HTML);
    }
  })();

  /* ---------- Scroll progress + nav shadow ---------- */
  const scrollBar = $("#scrollBar");
  const nav = $("#nav");
  function onScroll() {
    const h = document.documentElement;
    const sc = h.scrollTop / (h.scrollHeight - h.clientHeight);
    if (scrollBar) scrollBar.style.width = (sc * 100) + "%";
    if (nav) nav.classList.toggle("scrolled", h.scrollTop > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = $("#burger"), mOverlay = $("#mOverlay"), mClose = $("#mClose");
  const openM = () => { mOverlay.classList.add("open"); document.body.style.overflow = "hidden"; };
  const closeM = () => { mOverlay.classList.remove("open"); document.body.style.overflow = ""; };
  if (burger) burger.addEventListener("click", openM);
  if (mClose) mClose.addEventListener("click", closeM);
  $$(".m-acc-head").forEach(h => h.addEventListener("click", () => {
    const acc = h.parentElement;
    if (acc.querySelector(".m-acc-body")) acc.classList.toggle("open");
  }));
  $$("#mOverlay a").forEach(a => a.addEventListener("click", closeM));

  /* ---------- Mega-menu hover intent (desktop) ----------
     Opens on enter; closes after a short delay so the cursor can travel
     from an (edge) menu item to the centered panel without it vanishing.
     Only one panel is open at a time. */
  const megaItems = $$(".nav-item--mega");
  const CLOSE_DELAY = 260;
  megaItems.forEach(item => {
    const openMega = () => {
      megaItems.forEach(o => { if (o !== item) { clearTimeout(o._closeT); o.classList.remove("open"); } });
      clearTimeout(item._closeT);
      item.classList.add("open");
    };
    const scheduleClose = () => {
      clearTimeout(item._closeT);
      item._closeT = setTimeout(() => item.classList.remove("open"), CLOSE_DELAY);
    };
    item.addEventListener("mouseenter", openMega);
    item.addEventListener("mouseleave", scheduleClose);
    // clicking a link inside the panel closes it immediately
    $$(".mega a", item).forEach(a => a.addEventListener("click", () => { clearTimeout(item._closeT); item.classList.remove("open"); }));
  });
  // close any open panel when leaving the header entirely
  const navEl = $("#nav");
  if (navEl) navEl.addEventListener("mouseleave", () => megaItems.forEach(o => { o._closeT = setTimeout(() => o.classList.remove("open"), CLOSE_DELAY); }));

  /* ---------- Scroll reveal ---------- */
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach(el => { if (reduceMotion) el.classList.add("in"); else revealIO.observe(el); });

  /* ---------- Count-up numbers ---------- */
  function countUp(el) {
    const to = parseFloat(el.dataset.to);
    if (reduceMotion) { el.textContent = to; return; }
    const dur = 1500, start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * eased);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { countUp(e.target); countIO.unobserve(e.target); } });
  }, { threshold: 0.5 });
  $$(".count").forEach(el => countIO.observe(el));

  /* ---------- Hero dial bars ---------- */
  const dialIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        $$("[data-w]", e.target).forEach(b => { b.style.width = b.dataset.w; });
        dialIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  const heroVisual = $(".hero-visual");
  if (heroVisual) dialIO.observe(heroVisual);

  /* ---------- Hero parallax (cursor) ---------- */
  if (!reduceMotion) {
    const blobs = $$(".hero-mesh .blob");
    const dials = $$(".hero-visual .dial-card");
    const hero = $(".hero");
    if (hero) hero.addEventListener("pointermove", (ev) => {
      const r = hero.getBoundingClientRect();
      const dx = (ev.clientX - r.left) / r.width - 0.5;
      const dy = (ev.clientY - r.top) / r.height - 0.5;
      blobs.forEach((b, i) => { const m = (i + 1) * 8; b.style.transform = `translate(${dx * m}px,${dy * m}px)`; });
      dials.forEach((d, i) => { const m = (i + 1) * 6; d.dataset.base = d.dataset.base || ""; d.style.translate = `${dx * m}px ${dy * m}px`; });
    });
  }

  /* ---------- SIIS loop ---------- */
  const siisStages = [
    { label: "Stage 01", stage: "Signals", sub: "We read what moves before disease." },
    { label: "Stage 02", stage: "Interpretations", sub: "Data becomes meaning and trajectory." },
    { label: "Stage 03", stage: "Interventions", sub: "A physician-led, personalised plan." },
    { label: "Stage 04", stage: "Systems", sub: "Daily habits, re-measured each quarter." }
  ];
  const ringArc = $("#ringArc");
  const siisNodes = $("#siisNodes");
  const sccLabel = $("#sccLabel"), sccStage = $("#sccStage"), sccSub = $("#sccSub");
  const stageEls = $$(".siis-stage");
  let siisCurrent = 0, siisTimer = null;
  const R = 130, CX = 160, CY = 160, CIRC = 2 * Math.PI * R;
  const nodeColors = ["#00C2A8", "#2BA8FF", "#7A3FF2", "#FF6B4A"];

  if (siisNodes) {
    // place 4 nodes at top, right, bottom, left (rotate -90 baseline)
    [0, 1, 2, 3].forEach(i => {
      const ang = (i / 4) * 2 * Math.PI - Math.PI / 2;
      const x = CX + R * Math.cos(ang), y = CY + R * Math.sin(ang);
      const g = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      g.setAttribute("cx", x); g.setAttribute("cy", y); g.setAttribute("r", 9);
      g.setAttribute("fill", "#1B2230"); g.setAttribute("stroke", nodeColors[i]); g.setAttribute("stroke-width", "3");
      g.dataset.node = i; g.style.cursor = "pointer"; g.style.transition = "r .3s, fill .3s";
      siisNodes.appendChild(g);
      g.addEventListener("click", () => setSiis(i, true));
    });
  }
  function setSiis(i, manual) {
    siisCurrent = i;
    if (ringArc) {
      ringArc.setAttribute("stroke-dasharray", (CIRC / 4) + " " + CIRC);
      ringArc.setAttribute("stroke-dashoffset", -(CIRC / 4) * i);
    }
    stageEls.forEach((s, k) => s.classList.toggle("active", k === i));
    if (siisNodes) $$("circle", siisNodes).forEach((c, k) => {
      c.setAttribute("r", k === i ? 12 : 9);
      c.setAttribute("fill", k === i ? nodeColors[k] : "#1B2230");
    });
    if (sccLabel) { sccLabel.textContent = siisStages[i].label; sccStage.textContent = siisStages[i].stage; sccSub.textContent = siisStages[i].sub; }
    if (manual) restartSiis();
  }
  function advanceSiis() { setSiis((siisCurrent + 1) % 4, false); }
  function restartSiis() { if (siisTimer) clearInterval(siisTimer); if (!reduceMotion) siisTimer = setInterval(advanceSiis, 3200); }
  stageEls.forEach((s, i) => s.addEventListener("click", () => setSiis(i, true)));
  setSiis(0, false);
  // only auto-rotate when in view
  const siisSection = $("#siis");
  if (siisSection) {
    const siisIO = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) restartSiis(); else if (siisTimer) clearInterval(siisTimer); });
    }, { threshold: 0.25 });
    siisIO.observe(siisSection);
  }

  /* ---------- JoySpan trajectory draw ---------- */
  const trajPath = $("#trajPath"), trajArea = $(".traj-area"), trajDots = $$(".traj-dot");
  const trajIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        if (trajPath) trajPath.classList.add("drawn");
        if (trajArea) trajArea.classList.add("drawn");
        trajDots.forEach((d, i) => setTimeout(() => d.classList.add("drawn"), 600 + i * 500));
        trajIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  if (trajPath) trajIO.observe($("#trajChart"));

  /* ---------- Value tabs ---------- */
  const tabBtns = $$(".tab-btn"), tabPanels = $$(".tab-panel");
  tabBtns.forEach(btn => btn.addEventListener("click", () => {
    const i = btn.dataset.tab;
    tabBtns.forEach(b => b.classList.remove("active"));
    tabPanels.forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    const panel = $(`.tab-panel[data-panel="${i}"]`);
    if (panel) panel.classList.add("active");
  }));

  /* ---------- Pillar wheel ---------- */
  const pillars = [
    { p: "P1", name: "Sleep", desc: "Recovery and repair — the fastest win on the JoySpan line.", what: "Recovery, repair and circadian alignment — the foundation under every other pillar.", action: "A wind-down routine, screen curfew and a sleep-consistency target, nudged nightly.", panel: "Longevity panel", color: "#00C2A8" },
    { p: "P2", name: "Breathing", desc: "Calm and oxygenation — resilience you can train.", what: "Breath mechanics and nervous-system regulation that lower baseline stress load.", action: "Daily guided breathwork sets, with HRV feedback from your wearable.", panel: "Inflammatory panel", color: "#2BA8FF" },
    { p: "P3", name: "Nutrition", desc: "Metabolic health — the biggest lever on organ age.", what: "Personalised nutrition matched to your metabolic and nutritional panels.", action: "A simple plate model, targeted swaps and one habit at a time.", panel: "Metabolic panel", color: "#FFB020" },
    { p: "P4", name: "Social", desc: "Connection — among the most engaging, shareable pillars.", what: "Relationships and belonging — a proven driver of healthspan.", action: "Team challenges and cohort moments built into the LifeOS community.", panel: "Hormonal panel", color: "#E0218A" },
    { p: "P5", name: "Exercise", desc: "Movement — strength, VO₂ and metabolic flexibility.", what: "Structured movement matched to your capacity and goals.", action: "A weekly movement target blending strength and zone-2 cardio.", panel: "Organ Function", color: "#FF6B4A" },
    { p: "P6", name: "Stress", desc: "Resilience — managing the load that ages you.", what: "Allostatic load and recovery — the quiet driver of decline.", action: "Micro-recovery prompts and a weekly stress-down ritual.", panel: "Hormonal panel", color: "#7A3FF2" },
    { p: "P7", name: "Circadian", desc: "Rhythm — light, timing and the body clock.", what: "Light exposure and timing that align your internal clock.", action: "Morning light, consistent meal timing and an evening curfew.", panel: "Metabolic panel", color: "#3858E9" },
    { p: "P8", name: "Purpose", desc: "Meaning — a long-run driver of vitality.", what: "Direction and meaning — strongly tied to longevity.", action: "Reflective prompts and goals that connect to what matters to you.", panel: "Longevity panel", color: "#2FD08A" },
    { p: "P9", name: "Environmental", desc: "Exposures — the air, water and toxins around you.", what: "Environmental exposures that quietly raise inflammatory load.", action: "Air, water and exposure nudges tailored to your context.", panel: "Inflammatory panel", color: "#00C2A8" },
    { p: "P10", name: "Gut Health", desc: "The microbiome — an everyday foundation.", what: "Digestive and microbiome health underpinning immunity and mood.", action: "Fibre diversity targets and gut-friendly daily habits.", panel: "Nutritional panel", color: "#FF9E2C" },
    { p: "P11", name: "Hydration", desc: "The simplest foundation — tracked and nudged.", what: "Fluid balance — small, constant and easy to track.", action: "A personalised daily hydration target with gentle reminders.", panel: "Metabolic panel", color: "#2BA8FF" },
    { p: "P0", name: "Genetic Foundation", desc: "The +1 beneath the eleven — your blueprint.", what: "The genetic & epigenetic foundation (CXO-tier add-on) beneath every pillar.", action: "Gene and epigenetic-age insights that personalise the whole plan.", panel: "Genomic panel", color: "#8B6BFF" }
  ];
  const wheel = $("#wheel");
  const NSEG = pillars.length, GAP = 0.04;
  const wcP = $("#wcP"), wcName = $("#wcName"), wcDesc = $("#wcDesc");
  const pdEyebrow = $("#pdEyebrow"), pdTitle = $("#pdTitle"), pdWhat = $("#pdWhat"), pdAction = $("#pdAction"), pdConnect = $("#pdConnect");
  const cx = 160, cy = 160, rOuter = 152, rInner = 92;

  function arcPath(a0, a1) {
    const p = (r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    const [x0, y0] = p(rOuter, a0), [x1, y1] = p(rOuter, a1);
    const [x2, y2] = p(rInner, a1), [x3, y3] = p(rInner, a0);
    const large = (a1 - a0) > Math.PI ? 1 : 0;
    return `M${x0},${y0} A${rOuter},${rOuter} 0 ${large} 1 ${x1},${y1} L${x2},${y2} A${rInner},${rInner} 0 ${large} 0 ${x3},${y3} Z`;
  }
  if (wheel) {
    pillars.forEach((pl, i) => {
      const a0 = (i / NSEG) * 2 * Math.PI + GAP;
      const a1 = ((i + 1) / NSEG) * 2 * Math.PI - GAP;
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", arcPath(a0, a1));
      path.setAttribute("fill", pl.color);
      path.setAttribute("opacity", i === 0 ? "1" : "0.42");
      path.setAttribute("class", "wheel-seg");
      path.dataset.i = i;
      wheel.appendChild(path);
      const act = () => selectPillar(i);
      path.addEventListener("mouseenter", act);
      path.addEventListener("click", act);
    });
  }
  function selectPillar(i) {
    const pl = pillars[i];
    $$(".wheel-seg", wheel).forEach((s, k) => s.setAttribute("opacity", k === i ? "1" : "0.42"));
    if (wcP) { wcP.textContent = pl.p; wcName.textContent = pl.name; wcDesc.textContent = pl.desc; }
    if (pdTitle) {
      const num = pl.p === "P0" ? "00" : pl.p.replace("P", "").padStart(2, "0");
      pdEyebrow.textContent = `Pillar ${num} · LongeVis Matrix`;
      pdTitle.textContent = pl.name; pdWhat.textContent = pl.what; pdAction.textContent = pl.action;
      pdConnect.textContent = "Connects to · " + pl.panel;
      pdConnect.style.background = "color-mix(in srgb, " + pl.color + " 14%, white)";
      pdConnect.style.color = pl.color;
    }
  }

  /* ---------- Pricing toggle ---------- */
  const ptBtns = $$(".pt-btn"), ptPill = $("#ptPill");
  function movePill(btn) {
    if (!ptPill) return;
    ptPill.style.width = btn.offsetWidth + "px";
    ptPill.style.transform = `translateX(${btn.offsetLeft - 5}px)`;
  }
  function setPlan(i, btn) {
    ptBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    movePill(btn);
    $$(".price-card .pc-price[data-p0]").forEach(p => { p.textContent = p.dataset["p" + i]; });
    $$(".price-card .pc-unit[data-u0]").forEach(u => { u.textContent = u.dataset["u" + i]; });
  }
  ptBtns.forEach((b, i) => b.addEventListener("click", () => setPlan(i, b)));
  const firstPt = ptBtns[0];
  if (firstPt) requestAnimationFrame(() => movePill(firstPt));
  window.addEventListener("resize", () => { const a = $(".pt-btn.active"); if (a) movePill(a); });

  /* ---------- Magnetic buttons ---------- */
  if (!reduceMotion && window.matchMedia("(pointer:fine)").matches) {
    $$(".magnetic").forEach(btn => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.25}px,${y * 0.35}px)`;
      });
      btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
    });
  }

  /* ---------- Section rail active state ---------- */
  const railLinks = $$(".rail a");
  const sectionIds = railLinks.map(a => a.getAttribute("href"));
  const railIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = "#" + e.target.id;
        railLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
      }
    });
  }, { threshold: 0.5, rootMargin: "-20% 0px -40% 0px" });
  sectionIds.forEach(id => { const s = $(id); if (s) railIO.observe(s); });

  /* ---------- Employer dashboard mock ---------- */
  const dashData = {
    all: { bars: [64, 58, 71, 66, 74], yoy: "+6.2", eng: 81, esg: 72, themes: [18, 14, 11, 31] },
    tech: { bars: [68, 55, 73, 70, 77], yoy: "+6.8", eng: 86, esg: 75, themes: [21, 12, 9, 34] },
    fin: { bars: [61, 52, 68, 64, 72], yoy: "+5.6", eng: 79, esg: 70, themes: [24, 16, 13, 28] },
    mfg: { bars: [54, 47, 63, 59, 67], yoy: "+5.1", eng: 74, esg: 66, themes: [27, 19, 12, 36] }
  };
  const dashBarFills = $$("#dashBars .dbr-fill");
  const dashBarVals = $$("#dashBars .dbr-val");
  const dashRing = $("#dashRing"), dashEng = $("#dashEng"), dashYoy = $("#dashYoy"), dashEsg = $("#dashEsg");
  const dashThemes = $$("#dashThemes .dth-v");
  const RING_C = 201;
  let dashSeg = "all";
  function renderDash(animate) {
    const d = dashData[dashSeg];
    dashBarFills.forEach((f, i) => { f.style.width = d.bars[i] + "%"; });
    dashBarVals.forEach((v, i) => { v.textContent = d.bars[i] + "%"; });
    if (dashRing) dashRing.setAttribute("stroke-dashoffset", RING_C * (1 - d.eng / 100));
    if (dashYoy) dashYoy.textContent = d.yoy;
    if (dashEsg) dashEsg.textContent = d.esg;
    dashThemes.forEach((t, i) => { t.textContent = d.themes[i] + "%"; });
    if (dashEng) {
      if (reduceMotion || !animate) { dashEng.textContent = d.eng + "%"; }
      else {
        const start = performance.now(), from = 0;
        (function tick(now) { const p = Math.min((now - start) / 1100, 1); dashEng.textContent = Math.round(from + (d.eng - from) * (1 - Math.pow(1 - p, 3))) + "%"; if (p < 1) requestAnimationFrame(tick); })(performance.now());
      }
    }
  }
  $$("#dashFilters .dash-filter").forEach(b => b.addEventListener("click", () => {
    $$("#dashFilters .dash-filter").forEach(x => x.classList.remove("active"));
    b.classList.add("active"); dashSeg = b.dataset.seg;
    // reset bars to 0 then re-fill for a smooth transition
    dashBarFills.forEach(f => { f.style.width = "0%"; });
    requestAnimationFrame(() => requestAnimationFrame(() => renderDash(true)));
  }));
  const dashMock = $("#dashMock");
  if (dashMock) {
    const dashIO = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { renderDash(true); dashIO.unobserve(e.target); } });
    }, { threshold: 0.3 });
    dashIO.observe(dashMock);
  }

  /* ---------- Workforce Snapshot estimator ---------- */
  const snapHead = $("#snapHead"), snapAge = $("#snapAge");
  const ageBands = ["Under 30", "30–39", "40–49", "50+"];
  const ageFactor = [0.55, 0.78, 1.0, 1.32];
  let sectorFactor = 1.0;
  const fmt = n => Math.round(n).toLocaleString("en-IN");
  const round25 = n => Math.round(n / 25) * 25;
  function computeSnap() {
    if (!snapHead) return;
    const head = +snapHead.value;
    const ai = +snapAge.value;
    const af = ageFactor[ai];
    const flags = round25(head * 0.35 * sectorFactor * af);
    const metabolic = round25(head * 0.18 * sectorFactor * af);
    const days = round25(flags * 7.1);
    $("#snapHeadVal").textContent = fmt(head);
    $("#snapAgeVal").textContent = ageBands[ai];
    $("#snapFlags").textContent = "~" + fmt(flags);
    $("#snapMetabolic").textContent = "~" + fmt(metabolic);
    $("#snapDays").innerHTML = "~" + fmt(days) + "<small> days</small>";
    const recEl = $("#snapRec");
    if (recEl) {
      recEl.textContent = (metabolic / Math.max(head, 1) > 0.2)
        ? "lead with a metabolic-and-cardiac–focused pilot — the GLP-1-era priority — then scale by wave across the workforce."
        : "begin with a broad baseline pilot, then prioritise the reversible flags it surfaces and scale by wave.";
    }
  }
  if (snapHead) snapHead.addEventListener("input", computeSnap);
  if (snapAge) snapAge.addEventListener("input", computeSnap);
  $$("#snapSectors .snap-chip").forEach(c => c.addEventListener("click", () => {
    $$("#snapSectors .snap-chip").forEach(x => x.classList.remove("active"));
    c.classList.add("active"); sectorFactor = +c.dataset.f; computeSnap();
  }));
  computeSnap();

  /* ---------- 12-month journey timeline ---------- */
  const journeyData = [
    { badge: "M0", title: "Month 0 — Baseline", text: "A 20-minute on-site draw, then the Smart Report, the supplement starter pack and the first personalised plan — within days.", meta: "One annual full panel · 200+ markers" },
    { badge: "1–3", title: "Months 1–3 — Act", text: "Pillar actions, in-app nudges and the first monthly masterclass. The plan becomes daily systems the employee actually keeps.", meta: "The plan becomes daily systems" },
    { badge: "3·6·9", title: "Months 3 / 6 / 9 — Re-measure", text: "Three light quarterly progress re-tests measure what was intervened on — and the score begins to move.", meta: "Re-test the intervention, not the full panel" },
    { badge: "M12", title: "Month 12 — Prove & Renew", text: "The full panel re-baselines and the JoySpan line is shown a year on. Renewal opens on a proven trajectory.", meta: "Renewal earned on a proven trajectory" }
  ];
  const journeyNodes = $$("#journeyTrack .journey-node");
  const jdBadge = $("#jdBadge"), jdTitle = $("#jdTitle"), jdText = $("#jdText"), jdMeta = $("#jdMeta");
  function setJourney(i) {
    journeyNodes.forEach((n, k) => n.classList.toggle("active", k === i));
    const d = journeyData[i];
    if (jdBadge) {
      jdBadge.textContent = d.badge; jdTitle.textContent = d.title; jdText.textContent = d.text;
      jdMeta.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> ' + d.meta;
    }
  }
  journeyNodes.forEach((n, i) => n.addEventListener("click", () => setJourney(i)));

  /* ---------- Sticky sub-nav scrollspy ---------- */
  const subnav = $("#subnav");
  if (subnav) {
    const links = $$("a", subnav);
    const map = links.map(a => ({ a, sec: $(a.getAttribute("href")) })).filter(x => x.sec);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = "#" + e.target.id;
          links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
        }
      });
    }, { rootMargin: "-30% 0px -55% 0px" });
    map.forEach(x => spy.observe(x.sec));
  }

  /* ---------- FAQ accordion ---------- */
  $$("#faq .faq-item .faq-q, .faq .faq-q").forEach(q => q.addEventListener("click", () => {
    const item = q.closest(".faq-item");
    item.classList.toggle("open");
  }));

  /* ---------- Multi-step booking form ---------- */
  const pilotForm = $("#pilotForm");
  if (pilotForm) {
    const steps = $$(".form-step", pilotForm);
    const progSteps = $$("#formProgress .fp-step");
    let cur = 0;
    function showStep(i) {
      steps.forEach((s, k) => s.classList.toggle("active", k === i));
      progSteps.forEach((p, k) => { p.classList.toggle("active", k === i); p.classList.toggle("done", k < i); });
      cur = i;
      if (i === steps.length - 1) buildReview();
    }
    // choice groups (single-select)
    $$('[data-group]', pilotForm).forEach(group => {
      $$(".choice", group).forEach(ch => ch.addEventListener("click", () => {
        $$(".choice", group).forEach(c => c.classList.remove("sel"));
        ch.classList.add("sel");
      }));
    });
    function getVal(group) { const sel = $(`[data-group="${group}"] .choice.sel`); return sel ? sel.dataset.val : "—"; }
    function buildReview() {
      const review = $("#formReview");
      if (!review) return;
      const rows = [
        ["Company", $("#company").value || "—"],
        ["Contact", ($("#fullname").value || "—") + ($("#email").value ? " · " + $("#email").value : "")],
        ["Headcount", $("#headcount").value],
        ["Sector", getVal("sector")],
        ["Role", getVal("role")],
        ["Timeline", $("#timeline").value]
      ];
      review.innerHTML = rows.map(r => `<div class="review-row"><span class="rr-k">${r[0]}</span><span class="rr-v">${r[1]}</span></div>`).join("");
    }
    $$("[data-next]", pilotForm).forEach(b => b.addEventListener("click", () => { if (cur < steps.length - 1) { showStep(cur + 1); pilotForm.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" }); } }));
    $$("[data-back]", pilotForm).forEach(b => b.addEventListener("click", () => { if (cur > 0) showStep(cur - 1); }));
    const submitBtn = $("#submitBtn");
    if (submitBtn) submitBtn.addEventListener("click", () => {
      pilotForm.style.display = "none";
      const prog = $("#formProgress"); if (prog) prog.style.display = "none";
      const success = $("#formSuccess"); if (success) success.classList.add("show");
    });
  }

  /* ---------- Reusable scoped tabsets ---------- */
  $$("[data-tabset]").forEach(set => {
    const btns = $$(".ts-btn", set);
    const panels = $$(".ts-panel", set);
    btns.forEach(btn => btn.addEventListener("click", () => {
      const i = btn.dataset.i;
      btns.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const panel = panels.find(p => p.dataset.i === i);
      if (panel) panel.classList.add("active");
    }));
  });

  /* ---------- Legal index scrollspy ---------- */
  const legalIndex = $("#legalIndex");
  if (legalIndex) {
    const links = $$("a", legalIndex);
    const sections = links.map(a => $(a.getAttribute("href"))).filter(Boolean);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = "#" + e.target.id;
          links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
        }
      });
    }, { rootMargin: "-15% 0px -70% 0px" });
    sections.forEach(s => spy.observe(s));
  }

  /* ---------- Resource filter ---------- */
  const resFilters = $$("#resFilters .res-filter");
  const resCards = $$("#resGrid .res-card");
  if (resFilters.length) {
    resFilters.forEach(f => f.addEventListener("click", () => {
      resFilters.forEach(x => x.classList.remove("active"));
      f.classList.add("active");
      const cat = f.dataset.cat;
      resCards.forEach(c => { c.classList.toggle("res-hidden", cat !== "all" && c.dataset.cat !== cat); });
    }));
  }

  /* ---------- Smooth anchor (respect reduced motion handled by CSS) ---------- */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length > 1) {
        const t = $(id);
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }); }
      }
    });
  });
})();
