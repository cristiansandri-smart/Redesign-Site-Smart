const IMG = {
  proj4: "./img/glassrocx-banner.webp",
  osb: "./img/smartply1.webp",

  banner: "./img/banner smart.png",

  piso1: "./img/HARMONY---CARVALHO-SERENO---FLAT.webp",
  piso2: "./img/HARMONY---NOZ-RUSTICO---FLAT.webp",
  piso3: "./img/HARMONY---CARVALHO-SERENO---FLAT.webp",
  piso4: "./img/HARMONY---NOZ-RUSTICO---FLAT.webp",

  steel_aerial: "./img/etapa_obra.webp",
  steel1: "./img/perfil_steel.webp",
  steel2: "./img/guia_steel.webp",

  placa_glasroc2: "./img/Glasroc-X.webp",
  placa_st: "./img/placa_cimenticia.webp",
  placa_dry: "./img/Placa-st-Smart.webp",
  telha_atacama: "./img/telha-shingle-laminada-atacama.jpg",
  telha_dark: "./img/telha-shingle-laminada-negro.webp",

  kit_dry: "./img/kit drywall.jpg",
  kit_shingle: "./img/kit shingle.webp",
  kit_smartframe: "./img/kit smart frame.jpg",

  casa_steel: "./img/casa_steel.webp",
  etapa_obra: "./img/etapa_obra.webp",
  loja_casas: "./img/loja_casas.webp",

  casa1: "./img/Montpellier-Direita.webp",
  casa2: "./img/C052---RND-Direita1-R00.jpg.webp",
  casa3: "./img/Atibaia-Front.webp",

  case1: "./img/case1.webp",
  case2: "./img/case2.webp",
  case3: "./img/case3.webp",
  case4: "./img/case4.webp",

  video1: "./img/video1.png",
  video2: "./img/video2.png",
  video3: "./img/video3.png",
  video4: "./img/video4.png",
  video5: "./img/video5.png",

  marca1: "./img/marca1.webp",
  marca2: "./img/marca2.webp",
  marca3: "./img/marca3.webp",
  marca4: "./img/marca4.webp",
  marca5: "./img/marca5.webp",

  D1: "./img/3D1.webp",
  D2: "./img/3D2.webp",
  D3: "./img/3D3.webp",
  D4: "./img/3D4.webp",
  D5: "./img/3D5.webp",
  D6: "./img/3D6.webp",
  D7: "./img/3D7.webp",
  D8: "./img/3D8.webp",
  D9: "./img/3D9.webp",
  D10: "./img/3D10.webp",
  D11: "./img/3D11.webp",
  D12: "./img/3D12.webp",

  loja1: "./img/loja1.webp",
  loja2: "./img/loja2.webp",
  loja3: "./img/loja3.webp",
};

function paint() {
  document.querySelectorAll("[data-img]").forEach((e) => {
    if (IMG[e.dataset.img]) e.src = IMG[e.dataset.img];
  });
}

/* ---------- HERO ---------- */
const HERO = [
  {
    isBanner: true,
    img: "banner",
  },
  {
    ky: "Importação exclusiva",
    h: "Placa de Gesso<br>Glasroc X",
    p: "12,5 × 1200 × 2400mm · versátil, fácil de instalar e resistente",
    price: "<s>R$ 271,15</s> por <b>R$ 219</b>",
    cta: "Comprar agora",
    img: "placa_glasroc2",
  },
  {
    ky: "Piso que transforma",
    h: "Piso Vinílico<br>Smart Harmony",
    p: "Toque de madeira, instalação rápida, ideal para reforma",
    price: "a partir de <b>R$ 72</b>/m²",
    cta: "Ver coleção",
    img: "piso1",
  },
  {
    ky: "Construção a seco",
    h: "Sua obra mais<br>rápida em LSF",
    p: "Estrutura leve, limpa e sustentável — tudo em um só lugar",
    price: "",
    cta: "Conhecer o método",
    img: "kit_smartframe",
  },
];

let hi = 0;
document.getElementById("heroSlides").innerHTML = HERO.map((s, i) => {
  if (s.isBanner) {
    return `
      <div class="slide ${i === 0 ? "on" : ""}">
        <div class="banner-full">
          <img data-img="${s.img}" alt="Banner Promocional">
        </div>
      </div>
    `;
  }

  return `
 <div class="slide ${i === 0 ? "on" : ""}">
   <div class="in">
     <div class="txt">
       <div class="ky">${s.ky}</div>
       <h1>${s.h}</h1>
       <p>${s.p}</p>
       ${s.price ? `<div class="price">${s.price}</div>` : ""}
       <span class="cta">${s.cta}</span>
     </div>
     <div class="pic"><img data-img="${s.img}"></div>
   </div>
 </div>
 `;
}).join("");

document.getElementById("heroDots").innerHTML = HERO.map(
  (_, i) => `<i class="${i === 0 ? "on" : ""}" onclick="heroSet(${i})"></i>`,
).join("");
function heroSet(n) {
  hi = (n + HERO.length) % HERO.length;
  document
    .querySelectorAll(".slide")
    .forEach((s, i) => s.classList.toggle("on", i === hi));
  document
    .querySelectorAll(".dots i")
    .forEach((d, i) => d.classList.toggle("on", i === hi));
}
function heroGo(d) {
  heroSet(hi + d);
}
setInterval(() => heroGo(1), 10000);

/* ---------- COVERFLOW categorias (item central maior, gira sozinho) ---------- */
const CATS = [
  ["D1", "Steel Frame"],
  ["D2", "Drywall"],
  ["D3", "Placa Cimentícia"],
  ["D4", "Piso Vinílico"],
  ["D5", "Esquadrias PVC"],
  ["D6", "Telhado Shingle"],
  ["D7", "Treinamento LSF"],
  ["D8", "Ferramentas"],
  ["D9", "Nossas Lojas"],
  ["D10", "Forro Modular"],
  ["D11", "Texturize"],
  ["D12", "Loja ao Vivo"],
];

const INFINITE_CATS = [
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
  ...CATS,
];

let ci = Math.floor(INFINITE_CATS.length / 2);

const ct = document.getElementById("coverTrack");
ct.innerHTML = INFINITE_CATS.map(
  (c, i) =>
    `<div class="cat" data-i="${i}" onclick="coverSet(${i})">
       <div class="em"><img data-img="${c[0]}" alt="${c[1]}"></div>
       <div class="cap">${c[1]}</div>
     </div>`,
).join("");

// 3. Atualizamos a matemática: 150px (tamanho do item) + 12px (novo gap do CSS)
const CATW = 150 + 12;

function coverSet(n) {
  ci = n; // Como a fita é gigante, não precisamos mais do cálculo com "%" (módulo)
  ct.style.transform = `translateX(${-ci * CATW - 75}px)`;

  document.querySelectorAll(".cat").forEach((el, i) => {
    el.classList.remove("center", "near");
    const d = Math.abs(i - ci);
    if (d === 0) el.classList.add("center");
    else if (d === 1) el.classList.add("near");
  });
}

function coverGo(d) {
  coverSet(ci + d);
}

// Inicia o carrossel no item central
coverSet(ci);
function coverGo(d) {
  coverSet(ci + d);
}
coverSet(ci);

let coverTimer = setInterval(() => coverGo(1), 2000);
document
  .getElementById("cover")
  .addEventListener("mouseenter", () => clearInterval(coverTimer));
document
  .getElementById("cover")
  .addEventListener(
    "mouseleave",
    () => (coverTimer = setInterval(() => coverGo(1), 2000)),
  );

/* ---------- produtos ---------- */
function pcard(o) {
  return `<a class="pcard" href="produto/index.html">${o.off ? `<span class="badge-off">-${o.off}%</span>` : ""}
 <div class="thumb"><img data-img="${o.img}"></div>
 <div class="pb"><h4>${o.t}</h4>
   <div>${o.old ? `<span class="old">${o.old}</span>` : ""}<span class="now">${o.now}</span></div>
   <div class="parc">${o.parc || ""}</div><div class="buy">Comprar</div></div></a>`;
}

document.getElementById("ofertas").innerHTML = [
  {
    t: "Placa de Gesso Glasroc X 12,5 × 1200 × 2400mm",
    old: "R$ 341,52",
    now: "R$ 219,90",
    parc: "12x R$ 20,38",
    img: "placa_glasroc2",
    off: 36,
  },
  {
    t: "Telha Smart Shingle Laminada negro/dual black",
    old: "R$ 463,61",
    now: "R$ 379,90",
    parc: "12x R$ 37,07",
    img: "telha_dark",
    off: 18,
  },
  {
    t: "Piso Vinílico LVT Smart Harmony Carvalho Sereno",
    old: "R$ 349,90",
    now: "R$ 299,92",
    parc: "12x R$ 27,80",
    img: "piso1",
    off: 14,
  },
  {
    t: "Smartply OSB 12 × 1200 × 2400mm 2,88m²",
    old: "R$ 207,48",
    now: "R$ 197,11",
    parc: "11x R$ 20,78",
    img: "osb",
    off: 5,
  },
]
  .map(pcard)
  .join("");

const SOL = {
  "Telhado Shingle": [
    {
      t: "Telha Smart Shingle Laminada negro/dual black",
      old: "R$ 463,61",
      now: "R$ 379,90",
      parc: "12x R$ 37,07",
      img: "telha_dark",
    },
    {
      t: "Telha Smart Shingle Atacama/Earthtone",
      old: "R$ 463,61",
      now: "R$ 379,90",
      parc: "12x R$ 37,07",
      img: "telha_atacama",
    },
    {
      t: "Telha Smart Shingle 3 abas Atacama",
      old: "R$ 435,51",
      now: "R$ 332,40",
      parc: "12x R$ 32,43",
      img: "telha_dark",
    },
    {
      t: "Smartply OSB 12 × 1200 × 2400mm",
      old: "R$ 207,48",
      now: "R$ 197,11",
      parc: "11x R$ 20,78",
      img: "osb",
    },
    {
      t: "Telha Smart Shingle Basalto/Driftwood",
      old: "R$ 463,61",
      now: "R$ 379,90",
      parc: "12x R$ 37,07",
      img: "telha_atacama",
    },
  ],
  "Piso Vinílico": [
    {
      t: "LVT Smart Harmony Carvalho Sereno",
      now: "R$ 299,92",
      parc: "R$ 72,80/m²",
      img: "piso1",
    },
    {
      t: "LVT Smart Harmony Cedro Rubi",
      now: "R$ 299,92",
      parc: "R$ 72,80/m²",
      img: "piso2",
    },
    {
      t: "LVT Smart Harmony Areia Dourada",
      now: "R$ 310,61",
      parc: "R$ 75,39/m²",
      img: "piso3",
    },
    {
      t: "LVT Smart Harmony Noz Rústico",
      now: "R$ 299,92",
      parc: "R$ 72,80/m²",
      img: "piso4",
    },
    {
      t: "LVT Smart Harmony Branco Névoa",
      now: "R$ 310,61",
      parc: "R$ 75,39/m²",
      img: "piso1",
    },
  ],
  "Steel Frame": [
    {
      t: "Perfil de Steel Frame Montante",
      now: "R$ 18,77",
      parc: "1x R$ 18,77",
      img: "steel1",
    },
    {
      t: "Guia para Steel Frame Z120",
      now: "R$ 17,67",
      parc: "1x R$ 17,67",
      img: "steel2",
    },
    {
      t: "Smartply OSB estrutural",
      now: "R$ 197,11",
      parc: "11x",
      img: "osb",
    },
    {
      t: "Placa cimentícia",
      now: "R$ 89,02",
      parc: "4x R$ 23,42",
      img: "placa_st",
    },
    {
      t: "Membrana de subcobertura",
      now: "R$ 219,90",
      parc: "12x",
      img: "placa_glasroc2",
    },
  ],
  Drywall: [
    {
      t: "Placa Gesso Drywall ST 12,5 × 1200 × 1800mm",
      old: "R$ 39,90",
      now: "R$ 37,90",
      parc: "1x",
      img: "placa_dry",
    },
    {
      t: "Placa Gesso Glasroc X 2400mm",
      old: "R$ 341,52",
      now: "R$ 219,90",
      parc: "12x",
      img: "placa_glasroc2",
    },
    {
      t: "Placa Gesso Drywall RU 1800mm",
      old: "R$ 93,70",
      now: "R$ 89,02",
      parc: "4x",
      img: "placa_dry",
    },
    {
      t: "Guia para Drywall 48mm",
      now: "R$ 17,67",
      parc: "1x",
      img: "placa_dry",
    },
    {
      t: "Montante para Drywall 48mm",
      now: "R$ 18,77",
      parc: "1x",
      img: "placa_dry",
    },
  ],
};
const solTabs = document.getElementById("solTabs");
solTabs.innerHTML = Object.keys(SOL)
  .map(
    (k, i) =>
      `<span class="tab ${i === 0 ? "on" : ""}" onclick="setSol('${k}',this)">${k}</span>`,
  )
  .join("");
function setSol(k, el) {
  document
    .querySelectorAll("#solTabs .tab")
    .forEach((t) => t.classList.remove("on"));
  el && el.classList.add("on");
  document.getElementById("solGrid").innerHTML = SOL[k].map(pcard).join("");
  paint();
}
setSol("Telhado Shingle");

document.getElementById("etapas").innerHTML = [
  ["🧱", "01", "Fundação", "Radier, impermeabilização"],
  ["🏗️", "02", "Estrutura", "Perfis LSF, OSB, fixação"],
  ["🧩", "03", "Vedação", "Drywall, placa cimentícia, isolamento"],
  ["🎨", "04", "Acabamento", "Piso, revestimento, esquadrias"],
]
  .map(
    (e) =>
      `<div class="etapa"><div class="em">${e[0]}</div><div class="step">ETAPA ${e[1]}</div><h5>${e[2]}</h5><p>${e[3]}</p></div>`,
  )
  .join("");

document.getElementById("maisvendidos").innerHTML = [
  {
    t: "Placa Gesso Drywall ST 12,5mm",
    old: "R$ 39,90",
    now: "R$ 37,90",
    parc: "1x",
    img: "placa_dry",
  },
  {
    t: "Piso Vinílico Cedro Rubi",
    now: "R$ 299,92",
    parc: "R$ 72,80/m²",
    img: "piso2",
  },
  {
    t: "Telha Shingle Atacama",
    old: "R$ 463,61",
    now: "R$ 379,90",
    parc: "12x",
    img: "telha_atacama",
  },
  {
    t: "Piso Vinílico Noz Rústico",
    now: "R$ 299,92",
    parc: "R$ 72,80/m²",
    img: "piso4",
  },
  {
    t: "Placa Glasroc X 2400mm",
    old: "R$ 341,52",
    now: "R$ 219,90",
    parc: "12x",
    img: "placa_glasroc2",
  },
]
  .map(pcard)
  .join("");

document.getElementById("kits").innerHTML = [
  {
    t: "Kit Drywall completo",
    s: "Placas + perfis + massa + fita",
    img: "kit_dry",
  },
  {
    t: "Kit Telhado Shingle",
    s: "Telhas + subcobertura + acessórios",
    img: "kit_shingle",
  },
  { t: "Kit Smart Frame", s: "Perfis + OSB + fixação", img: "kit_smartframe" },
]
  .map(
    (k) =>
      `<div class="kit"><img data-img="${k.img}"><div class="kb"><h4>${k.t}</h4><span>${k.s}</span></div></div>`,
  )
  .join("");

document.getElementById("mqA").innerHTML =
  "TUDO PARA CONSTRUÇÃO A SECO <span>•</span> DIRETO DA FÁBRICA <span>•</span> SEMPRE UMA LOJA PERTO DE VOCÊ <span>•</span> ".repeat(
    4,
  );

/* ---------- LOJA DE CASAS ---------- */
const PROJ = [
  {
    t: "Casa Montpellier",
    m: "137 m² · Contemporâneo",
    s: "contemporaneo",
    img: "casa1",
  },
  {
    t: "Chalé Canoas",
    m: "61 m² · Chalé",
    s: "chale",
    img: "casa2",
  },
  {
    t: "Chalé Assen",
    m: "41 m² · Minimalista",
    s: "minimalista",
    img: "casa3",
  },
  {
    t: "Casa Orlando",
    m: "172 m² · Contemporâneo",
    s: "contemporaneo",
    img: "casa1",
  },
  {
    t: "Casa Vigo",
    m: "273 m² · Conjugado",
    s: "conjugado",
    img: "casa2",
  },
  {
    t: "Casa Aspen",
    m: "96 m² · Americano",
    s: "americano",
    img: "casa3",
  },
  {
    t: "Chalé Bariloche",
    m: "54 m² · Chalé",
    s: "chale",
    img: "casa1",
  },
  {
    t: "Casa Nórdica",
    m: "188 m² · Minimalista",
    s: "minimalista",
    img: "casa2",
  },
];
const STYLES = [
  ["🏢", "Todos", "all"],
  ["🏙️", "Contemporâneo", "contemporaneo"],
  ["◼️", "Minimalista", "minimalista"],
  ["⛺", "Chalé", "chale"],
  ["🏘️", "Americano", "americano"],
  ["🏠", "Conjugado", "conjugado"],
];
document.getElementById("stylefilter").innerHTML = STYLES.map(
  (s, i) =>
    `<span class="sf ${i === 0 ? "on" : ""}" data-s="${s[2]}" onclick="filterProj('${s[2]}',this)"><span class="em">${s[0]}</span>${s[1]}</span>`,
).join("");
function renderProj(list) {
  document.getElementById("vitrine").innerHTML = list
    .map(
      (p) => `
 <div class="proj" onclick="openLb('${p.img}','${p.t}','${p.m} — projeto completo em Light Steel Frame, com materiais e execução.')">
   <div class="th"><img data-img="${p.img}"></div>
   <div class="pj"><h4>${p.t}</h4><div class="m2">${p.m}</div><div class="fin">Financie em até 240x</div></div></div>`,
    )
    .join("");
  paint();
}
function filterProj(s, el) {
  document.querySelectorAll(".sf").forEach((x) => x.classList.remove("on"));
  el && el.classList.add("on");
  renderProj(s === "all" ? PROJ : PROJ.filter((p) => p.s === s));
}
renderProj(PROJ.slice(0, 8));

/* ---------- cases ---------- */
document.getElementById("casesG").innerHTML = [
  { t: "Casa Steel Frame · SP", img: "case1" },
  { t: "Residência com piscina · SC", img: "case2" },
  { t: "Interior integrado · PR", img: "case3" },
  { t: "Fachada moderna · RS", img: "case4" },
]
  .map(
    (
      c,
    ) => `<div class="casecard" onclick="openLb('${c.img}','${c.t}','Case real entregue em Light Steel Frame. Assista ao vídeo completo do projeto.')">
 <img data-img="${c.img}"><span class="play">↗ Vídeo • Case de Sucesso</span><div class="cc"><h4>${c.t}</h4><div class="assistir">Assistir ao case ›</div></div></div>`,
  )
  .join("");

/* ---------- sustentômetro ---------- */
document.getElementById("sustG").innerHTML = [
  ["1.50 Mi", "m²", "Metragem construída", "6.015 casas de 250 m²"],
  ["1052 Mi", "un", "Árvores preservadas", "383 campos de futebol"],
  ["376k", "t", "Resíduos não gerados", "46.718 caçambas"],
  ["338 Mi", "L", "Água não utilizada", "135 piscinas olímpicas"],
]
  .map(
    (s) =>
      `<div><div class="n">${s[0]}</div><div class="u">${s[1]}</div><div class="k">${s[2]}</div><div class="eq">${s[3]}</div></div>`,
  )
  .join("");

/* ---------- reels ---------- */
document.getElementById("reels").innerHTML = [
  "video1",
  "video2",
  "video3",
  "video4",
  "video5",
]
  .map((r, i) => `<div class="reel">${r ? `<img data-img="${r}">` : ""}</div>`)
  .join("");

/* ---------- ecossistema / marcas / lojas ---------- */
document.getElementById("eco").innerHTML = [
  ["🎓", "Centro de Treinamento", "Capacitação em LSF com o SENAI"],
  ["📖", "Catálogo Digital", "Navegue toda a linha de produtos"],
  ["📚", "Biblioteca Técnica", "Documentação dos sistemas construtivos"],
  ["🤝", "Seja Smart", "Programa de afiliados e comissões"],
]
  .map(
    (e) =>
      `<div class="ecoc"><div class="em">${e[0]}</div><h4>${e[1]}</h4><p>${e[2]}</p></div>`,
  )
  .join("");
document.getElementById("brands").innerHTML = [
  { n: "Saint-Gobain" },
  { n: "OWA", href: "marca-owa/index.html" },
  { n: "Bosch", href: "marca-bosch/index.html" },
  { n: "ArcelorMittal" },
  { n: "Eucatex" },
  { n: "Isover" },
  { n: "Mapei" },
  { n: "IKO" },
]
  .map((b) =>
    b.href
      ? `<a class="brand brand-link" href="${b.href}">${b.n}</a>`
      : `<div class="brand">${b.n}</div>`,
  )
  .join("");
/* ---------- lojas ---------- */
document.getElementById("lojas").innerHTML = [
  {
    t: "São Paulo · Barra Funda",
    a: "Praça Pascoal Martins, 142 - Barra Funda - São Paulo",
    img: "loja1",
  },
  {
    t: "Rio de Janeiro",
    a: "Estr. dos Bandeirantes, 4417 - Jacarepaguá - RJ",
    img: "loja2",
  },
  {
    t: "São José dos Campos",
    a: "Rua Valparaíso, 99 - Jardim America - São Paulo",
    img: "loja3",
  },
  {
    t: "Gramado",
    a: "Rua São Pedro, 752 - Centro - Rio Grande do Sul",
    img: "loja1",
  },
  {
    t: "Campinas Express",
    a: "Rua Estácio de Sá, 1546 - Jardim Santa Genebra - SP",
    img: "loja2",
  },
]
  .map(
    (l) => `
      <div class="loja">
         <div class="th">
         <img data-img="${l.img}">
         </div>

         <div class="">
           <div class="lt">
             <h4>${l.t}</h4>
             <svg class="pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
               <circle cx="12" cy="10" r="3"></circle>
             </svg>
           </div>
           <p>${l.a}</p>
         </div>
       </div>
    `,
  )
  .join("");

/* ---------- lightbox ---------- */
function openLb(img, title, text) {
  document.getElementById("lbImg").src = IMG[img] || "";
  document.getElementById("lbTitle").textContent = title;
  document.getElementById("lbText").textContent = text;
  document.getElementById("lb").classList.add("on");
}
function closeLb() {
  document.getElementById("lb").classList.remove("on");
}

paint();
