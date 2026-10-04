/* =========================================================
   SITE DATA — edit your content here (no need to touch HTML)
   ========================================================= */
const SOCIAL = [["LinkedIn","https://www.linkedin.com/in/tokitahmidtoufa","M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.600 4.800 6V21h-4v-5c0-1.200 0-2.800-1.700-2.800s-2 1.300-2 2.700V21h-4z"],["GitHub","https://github.com/tokitahmidtoufa","M12 2a10 10 0 0 0-3.200 19.500c.5.100.7-.2.7-.5v-1.800c-2.800.6-3.400-1.200-3.400-1.200-.5-1.100-1.100-1.400-1.100-1.400-.9-.6.100-.6.100-.6 1 .1 1.500 1 1.500 1 .9 1.500 2.300 1.100 2.900.8.1-.7.3-1.100.6-1.300-2.200-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.4-1.300.1-2.700 0 0 .8-.3 2.700 1a9.400 9.400 0 0 1 5 0c1.900-1.300 2.700-1 2.700-1 .5 1.400.2 2.400.1 2.700.6.700 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .4.300.7.900.7 1.800v2.700c0 .3.200.6.700.5A10 10 0 0 0 12 2z"],["X","https://www.x.com/tokitahmidtoufa","M17.800 3h3L14.200 10.500 22 21h-6.100l-4.800-6.300L5.600 21H2.600l7-8L2.200 3h6.200l4.300 5.700zm-1.100 16.200h1.700L7.400 4.700H5.600z"],["YouTube","https://www.youtube.com/@tokitahmidtoufa","M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5.200 3z"],["Instagram","https://www.instagram.com/tokitahmidtoufa","M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.500a4.500 4.500 0 1 1 0 9 4.500 4.500 0 0 1 0-9zm0 2a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5zM17.500 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"],["Facebook","https://www.facebook.com/tokitahmidtoufa","M14 8V6.500c0-.7.200-1 1.200-1H17V2h-2.800C11.300 2 10 3.700 10 6v2H8v3.500h2V22h4v-10.500h2.700L17 8z"]]; // [name, url, svg-path]

const siteData = {
  settings: {
    email: "tokitahmidtoufa@gmail.com",
    allProjectsUrl: "https://github.com/tokitahmidtoufa", // "View all projects" target
    maxProjects: 6                                        // projects shown on the homepage
  },
  hero: {
    eyebrow: "YOUNG TECH FOUNDER • AI/ML • BUILDER",
    description: "I'm a young technology founder and AI/ML enthusiast passionate about programming, problem-solving, technology, and building practical digital products."
  },
  about: {
    statement: "I learn by building.",
    intro: "I'm a young technology founder and AI/ML enthusiast interested in programming, artificial intelligence, problem-solving and building practical digital products.",
    facts: [
      ["Based in", "Jashore, Bangladesh"],
      ["Focus", "AI/ML, Programming, Technology"],
      ["Building", "Tirovers"],
      ["Interests", "Artificial Intelligence, Machine Learning, Programming, Data Science, Entrepreneurship"]
    ]
  },
  contact: {
    text: "I'm always interested in connecting with founders, developers, AI/ML enthusiasts, builders and people passionate about technology."
  },
  identity: [
    ["Founder", "Tirovers"], ["AI / ML", "Exploring"], ["National AI Olympiad", "Participant"],
    ["Mathematics Olympiad", "Participant"], ["Python", "Building"]
  ],
  experience: [{
    role: "Founder — Tirovers", dates: "Mar 2026 — Present", location: "Jashore, Bangladesh · Remote",
    description: "Building Tirovers, an interactive learning platform, and learning through building: creating practical technology education while exploring AI/ML and technology.",
    focus: "Product vision / Platform building / Curriculum planning / Learning experience design / Brand / Strategy"
  }],
  education: [
    ["Jashore Shikkha Board Govt. Model School And College", "High School Diploma, Science", "Sep 2026 – Mar 2028"],
    ["Dawood Public School And College", "High School Graduation, Science · GPA 5.00 / 5.00", "Jan 2017 – Jun 2026"],
    ["Sacred Heart Secondary School", "Primary Education", "Jan 2011 – Dec 2016"]
  ],
  skills: [
    ["Programming", ["Python", "C", "C++"]],
    ["AI / Data", ["Machine Learning", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn"]],
    ["Web", ["HTML", "CSS"]],
    ["Problem Solving", ["Mathematics", "Problem Solving"]],
    ["Founder", ["Entrepreneurship", "E-Learning", "Product Building"]]
  ],
  achievements: [
    { year: "2025", title: "National AI Olympiad Participant", issuer: "Bangladesh Artificial Intelligence Olympiad", date: "May 2025",
      description: "Selected to participate in the national rounds, showing strong interest and foundational understanding of AI technologies and frameworks." },
    { year: "2023", title: "Introduction to Computer Science and Programming Using Python", issuer: "edX", date: "Issued Aug 2023",
      description: "Credential ID: 7dbc214066a94a55819f7b0b02f58f59",
      link: "https://courses.edx.org/certificates/7dbc214066a94a55819f7b0b02f58f59" },
    { year: "2022", title: "Divisional Round Participant — Bangladesh Mathematical Olympiad", issuer: "Bangladesh Mathematical Olympiad", date: "Feb 2022",
      description: "Qualified for and competed in the regional divisional rounds, showing analytical thinking, mathematical reasoning, and problem-solving." }
  ],
  journey: [
    ["2011", "Primary Education"], ["2017", "Secondary Education"], ["2022", "Mathematics Olympiad"],
    ["2023", "Python / Programming"], ["2025", "National AI Olympiad"], ["2026", "Tirovers"],
    ["NOW", "AI/ML + Technology + Entrepreneurship"]
  ],
  /* Add a project = add one object. Fields github / pypi / live / docs / image / install are optional.
     First project is shown large; the rest use row / tile / image layouts. Max shown = settings.maxProjects. */
  projects: [{
    title: "cntimer", category: "Python / Developer Tool",
    description: "Automatic execution time and memory tracker for Python scripts.",
    concept: "Run Python scripts and automatically see execution time and memory usage, without modifying the script.",
    technologies: ["Python", "MIT License"],
    github: "https://github.com/tokitahmidtoufa/cntimer", pypi: "https://pypi.org/project/cntimer/",
    install: "pip install cntimer", image: "", published: true, order: 1
  }]
};

/* =========================================================
   HELPERS
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const tags = a => a.map(x => `<span>${x}</span>`).join("");

/* =========================================================
   RENDER CONTENT
   ========================================================= */
$$("[data-k]").forEach(e => { const v = e.dataset.k.split(".").reduce((o, k) => o?.[k], siteData); if (v) e.textContent = v; });
const NAV = [["About", "about"], ["Work", "work"], ["Journey", "journey"], ["Achievements", "achievements"], ["Contact", "contact"]];
$("#lk").innerHTML = NAV.map(([n, i]) => `<li><a href="#${i}">${n}</a></li>`).join("");
$$("[data-soc]").forEach(e => e.innerHTML = SOCIAL.map(([n, u, p]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${n}" title="${n}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${p}"/></svg></a>`).join(""));
$("#idn").innerHTML = siteData.identity.map(([a, b]) => `<div><small>${a}</small><b>${b}</b></div>`).join("");
$("#facts").innerHTML = siteData.about.facts.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join("");
$("#exp").innerHTML = siteData.experience.map(x => `<div class="ex"><div class="mut sm" style="padding-top:8px">${x.dates}</div><div><h3>${x.role}<span class="bd">Founder</span></h3><p class="mut" style="margin:0 0 10px;max-width:58ch">${x.description}</p><div class="sm mut">${x.focus}</div><div class="sm mut" style="margin-top:4px">${x.location}</div></div></div>`).join("");
$("#sk").innerHTML = siteData.skills.map(([a, b]) => `<div><h3>${a}</h3><div class="tags">${tags(b)}</div></div>`).join("");
$("#ac").innerHTML = siteData.achievements.map(a => `<article class="ar"><div class="ay" aria-hidden="true">${a.year}</div><div><h3>${a.title}</h3><div class="mut sm">${a.issuer} · ${a.date}</div></div><div><p>${a.description}</p>${a.link ? `<a class="lk" href="${a.link}" target="_blank" rel="noopener">View credential →</a>` : ""}</div></article>`).join("");
$("#ed").innerHTML = siteData.education.map(([a, b, c]) => `<div><div class="mut sm">${c}</div><div><h3>${a}</h3><div class="mut sm">${b}</div></div></div>`).join("");
$("#jy").innerHTML = siteData.journey.map(([a, b]) => `<li${a === "NOW" ? ' class="now"' : ""}><b>${a}</b><span>${b}</span></li>`).join("");

/* PROJECTS: 1 featured split layout + row / tile / image variants */
function renderProjects() {
  const all = siteData.projects.filter(p => p.published !== false).sort((a, b) => a.order - b.order);
  const list = all.slice(0, siteData.settings.maxProjects);
  const links = p => [["github", "GitHub"], ["pypi", "PyPI"], ["live", "Live demo"], ["docs", "Docs"]].filter(([k]) => p[k]).map(([k, l], i) => `<a class="btn${i ? "" : " p"}" href="${p[k]}" target="_blank" rel="noopener">${l} <b>→</b></a>`).join("");
  const feat = p => `<article class="pj"><div class="th" aria-hidden="true">${p.install ? `<p><span class="d">$</span> ${p.install}</p>` : ""}<p><span class="d">$</span> python script.py</p><p class="d">────────────────────────────</p><p>Execution time <i class="mb"><u style="--w:40%"></u></i></p><p>Memory usage <i class="mb"><u style="--w:55%"></u></i></p><small>Representative UI, not real benchmark data</small></div><div class="bd2"><small>${p.category}</small><h3>${p.title}</h3><p>${p.description}</p>${p.concept ? `<p>${p.concept}</p>` : ""}<div class="tags">${tags(p.technologies)}</div><div class="ib">${links(p)}</div></div></article>`;
  const row = p => `<article class="pr"><div><small class="acc">${p.category}</small><h3>${p.title}</h3></div><p>${p.description}</p><div class="ib">${links(p)}</div></article>`;
  const tile = p => `<article class="tl2"><small class="acc">${p.category}</small><h3>${p.title}</h3><p>${p.description}</p><div class="tags">${tags(p.technologies)}</div><div class="ib">${links(p)}</div></article>`;
  const img = p => `<article class="im" style="${p.image ? `background-image:url('${p.image}')` : ""}"><div><small class="acc">${p.category}</small><h3>${p.title}</h3><p>${p.description}</p><div class="ib">${links(p)}</div></div></article>`;
  const kinds = [row, tile, tile, img, img];
  let h = list[0] ? feat(list[0]) : "";
  if (list.length > 1) h += `<div class="sg">${list.slice(1).map((p, i) => kinds[i](p)).join("")}</div>`;
  h += `<div class="more"><div><h3>More from the workshop</h3><p>Explore more of my projects, experiments, and open-source work on GitHub.</p></div><a class="btn nb" href="${siteData.settings.allProjectsUrl}" target="_blank" rel="noopener">View more work on GitHub <b>→</b></a></div>`;
  $("#pjs").innerHTML = h;
}
renderProjects();

/* =========================================================
   THEME (persisted in localStorage)
   ========================================================= */
const root = document.documentElement, tb = $("#th");
const setTheme = t => { root.dataset.theme = t; tb.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode"); };
tb.onclick = () => { const t = root.dataset.theme === "dark" ? "light" : "dark"; setTheme(t); try { localStorage.setItem("theme", t); } catch (e) {} };
try { const t = localStorage.getItem("theme"); if (t) setTheme(t); } catch (e) {}

/* =========================================================
   NAVIGATION: mobile menu, scroll state, active link
   ========================================================= */
const bg = $("#bg"), lk = $("#lk");
bg.onclick = () => bg.setAttribute("aria-expanded", lk.classList.toggle("o"));
const closeMenu = () => { lk.classList.remove("o"); bg.setAttribute("aria-expanded", "false"); };
lk.onclick = e => { if (e.target.closest("a")) closeMenu(); };
/* keep the mobile menu state in sync with the viewport (Esc, outside tap, rotate/resize to desktop) */
addEventListener("keydown", e => { if (e.key === "Escape" && lk.classList.contains("o")) { closeMenu(); bg.focus(); } });
document.addEventListener("click", e => { if (lk.classList.contains("o") && !e.target.closest("#lk, #bg")) closeMenu(); });
matchMedia("(min-width:1024px)").addEventListener("change", e => { if (e.matches) closeMenu(); });
addEventListener("scroll", () => $("#hd").classList.toggle("s", scrollY > 10), { passive: true });
const so = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && $$("#lk a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id))), { rootMargin: "-45% 0px -50% 0px" });
NAV.forEach(([n, i]) => { const e = document.getElementById(i); e && so.observe(e); });

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
const ro = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); } }), { threshold: .08 });
$$(".rv").forEach(e => ro.observe(e));

/* =========================================================
   HERO: subtle cursor interaction (portrait, grid, labels, gradient)
   ========================================================= */
const hero = $("#home");
if (matchMedia("(hover:hover) and (prefers-reduced-motion:no-preference)").matches) {
  hero.addEventListener("mousemove", e => { const r = hero.getBoundingClientRect(); hero.style.setProperty("--mx", ((e.clientX - r.left) / r.width - .5).toFixed(3)); hero.style.setProperty("--my", ((e.clientY - r.top) / r.height - .5).toFixed(3)); });
  hero.addEventListener("mouseleave", () => { hero.style.setProperty("--mx", 0); hero.style.setProperty("--my", 0); });
}

/* =========================================================
   CONTACT FORM (static site: validates, then opens email app)
   To use a real form service later, replace the mailto line with a fetch() call.
   ========================================================= */
$("#fm").onsubmit = e => {
  e.preventDefault(); const f = e.target; let ok = true;
  $$("input,textarea", f).forEach(i => {
    const s = i.nextElementSibling; let m = "";
    if (!i.value.trim()) m = "This field is required.";
    else if (i.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.value)) m = "Enter a valid email address.";
    s.textContent = m; i.setAttribute("aria-invalid", !!m); if (m) ok = false;
  });
  if (ok) { const v = n => f.elements[n].value.trim(); location.href = `mailto:${siteData.settings.email}?subject=${encodeURIComponent("Hello from " + v("n"))}&body=${encodeURIComponent(v("m") + "\n\n" + v("n") + " (" + v("e") + ")")}`; }
};
