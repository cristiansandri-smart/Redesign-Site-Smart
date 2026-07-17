/* =====================================================================
   HUB TELHADO SHINGLE — script
   Mesmo padrão da home: mapa IMG + paint() + pcard(). Caminhos com
   ../img/ porque esta página está numa subpasta.
   ===================================================================== */

const IMG = {
  telha_dark: "../img/telha-shingle-laminada-negro.webp",
  telha_atacama: "../img/telha-shingle-laminada-atacama.jpg",
  osb: "../img/smartply1.webp",
  kit_shingle: "../img/kit shingle.webp",
  placa_glasroc2: "../img/Glasroc-X.webp",
  steel1: "../img/perfil_steel.webp",
  steel2: "../img/guia_steel.webp",
  etapa_obra: "../img/etapa_obra.webp",
};

function paint() {
  document.querySelectorAll("[data-img]").forEach((e) => {
    if (IMG[e.dataset.img]) e.src = IMG[e.dataset.img];
  });
}

/* ---------- card de produto (idêntico ao da home) ---------- */
function pcard(o) {
  return `<a class="pcard" href="../produto/index.html">${o.off ? `<span class="badge-off">-${o.off}%</span>` : ""}
 <div class="thumb"><img data-img="${o.img}"></div>
 <div class="pb"><h4>${o.t}</h4>
   <div>${o.old ? `<span class="old">${o.old}</span>` : ""}<span class="now">${o.now}</span></div>
   <div class="parc">${o.parc || ""}</div><div class="buy">Comprar</div></div></a>`;
}

/* ---------- OFERTAS ---------- */
document.getElementById("ofertasShingle").innerHTML = [
  {
    t: "Telha Smart Shingle Laminada Negro / Dual Black",
    old: "R$ 463,61",
    now: "R$ 379,90",
    parc: "12x R$ 37,07",
    img: "telha_dark",
    off: 18,
  },
  {
    t: "Telha Smart Shingle Atacama / Earthtone",
    old: "R$ 463,61",
    now: "R$ 379,90",
    parc: "12x R$ 37,07",
    img: "telha_atacama",
    off: 18,
  },
  {
    t: "Smartply OSB 12 × 1200 × 2400mm 2,88m²",
    old: "R$ 207,48",
    now: "R$ 197,11",
    parc: "11x R$ 20,78",
    img: "osb",
    off: 5,
  },
  {
    t: "Kit Telhado Shingle 50m² instalado",
    old: "R$ 9.980,00",
    now: "R$ 8.490,00",
    parc: "60x R$ 189,90",
    img: "kit_shingle",
    off: 15,
  },
].map(pcard).join("");

/* ---------- MONTE SEU TELHADO (abas: telhas / acessórios / estrutura) ---------- */
const SH = {
  Telhas: [
    { t: "Telha Smart Shingle Laminada Negro", old: "R$ 463,61", now: "R$ 379,90", parc: "12x R$ 37,07", img: "telha_dark" },
    { t: "Telha Smart Shingle Atacama", old: "R$ 463,61", now: "R$ 379,90", parc: "12x R$ 37,07", img: "telha_atacama" },
    { t: "Telha Smart Shingle 3 abas Atacama", old: "R$ 435,51", now: "R$ 332,40", parc: "12x R$ 32,43", img: "telha_atacama" },
    { t: "Telha Smart Shingle Basalto / Driftwood", old: "R$ 463,61", now: "R$ 379,90", parc: "12x R$ 37,07", img: "telha_dark" },
    { t: "Cumeeira Ventilada Smart Shingle", now: "R$ 129,90", parc: "3x R$ 43,30", img: "telha_dark" },
  ],
  Acessórios: [
    { t: "Membrana de Subcobertura IKO Stormtite", now: "R$ 219,90", parc: "12x R$ 20,38", img: "placa_glasroc2" },
    { t: "Prego Anelado para Shingle 3,0 × 25mm", now: "R$ 39,90", parc: "1x", img: "osb" },
    { t: "Fita Autoadesiva de Vedação 45m", now: "R$ 29,00", parc: "1x", img: "placa_glasroc2" },
    { t: "Rufo / Calha de Beiral Galvanizado", now: "R$ 74,90", parc: "2x R$ 37,45", img: "steel2" },
    { t: "Manta de Ventilação de Beiral", now: "R$ 89,90", parc: "3x R$ 29,96", img: "placa_glasroc2" },
  ],
  Estrutura: [
    { t: "Smartply OSB 12 × 1200 × 2400mm", old: "R$ 207,48", now: "R$ 197,11", parc: "11x R$ 20,78", img: "osb" },
    { t: "Perfil de Steel Frame Montante", now: "R$ 18,77", parc: "1x R$ 18,77", img: "steel1" },
    { t: "Guia para Steel Frame Z120", now: "R$ 17,67", parc: "1x R$ 17,67", img: "steel2" },
    { t: "Parafuso Autobrocante para LSF (cx)", now: "R$ 54,90", parc: "2x R$ 27,45", img: "steel1" },
    { t: "Kit Tesoura Metálica p/ Cobertura", now: "R$ 890,00", parc: "12x R$ 74,16", img: "steel2" },
  ],
};
const shTabs = document.getElementById("shTabs");
shTabs.innerHTML = Object.keys(SH)
  .map((k, i) => `<span class="tab ${i === 0 ? "on" : ""}" onclick="setSh('${k}',this)">${k}</span>`)
  .join("");
function setSh(k, el) {
  document.querySelectorAll("#shTabs .tab").forEach((t) => t.classList.remove("on"));
  el && el.classList.add("on");
  document.getElementById("shGrid").innerHTML = SH[k].map(pcard).join("");
  paint();
}
setSh("Telhas");

/* ---------- CATÁLOGO (2 linhas + ver mais) ---------- */
const ALL = [
  { t: "Telha Smart Shingle Laminada Negro", now: "R$ 379,90", parc: "12x R$ 37,07", img: "telha_dark" },
  { t: "Telha Smart Shingle Atacama", now: "R$ 379,90", parc: "12x R$ 37,07", img: "telha_atacama" },
  { t: "Telha Smart Shingle 3 abas", now: "R$ 332,40", parc: "12x R$ 32,43", img: "telha_atacama" },
  { t: "Telha Smart Shingle Basalto", now: "R$ 379,90", parc: "12x R$ 37,07", img: "telha_dark" },
  { t: "Cumeeira Ventilada", now: "R$ 129,90", parc: "3x R$ 43,30", img: "telha_dark" },
  { t: "Smartply OSB 12mm 2,88m²", now: "R$ 197,11", parc: "11x R$ 20,78", img: "osb" },
  { t: "Membrana de Subcobertura IKO", now: "R$ 219,90", parc: "12x R$ 20,38", img: "placa_glasroc2" },
  { t: "Prego Anelado para Shingle", now: "R$ 39,90", parc: "1x", img: "osb" },
  { t: "Fita Autoadesiva de Vedação", now: "R$ 29,00", parc: "1x", img: "placa_glasroc2" },
  { t: "Rufo / Calha de Beiral", now: "R$ 74,90", parc: "2x R$ 37,45", img: "steel2" },
];
// linhas extras (reveladas no "ver mais")
const ALL_MORE = [
  { t: "Manta de Ventilação de Beiral", now: "R$ 89,90", parc: "3x R$ 29,96", img: "placa_glasroc2" },
  { t: "Perfil de Steel Frame Montante", now: "R$ 18,77", parc: "1x", img: "steel1" },
  { t: "Guia para Steel Frame Z120", now: "R$ 17,67", parc: "1x", img: "steel2" },
  { t: "Parafuso Autobrocante (cx)", now: "R$ 54,90", parc: "2x R$ 27,45", img: "steel1" },
  { t: "Kit Telhado Shingle 50m²", now: "R$ 8.490,00", parc: "60x R$ 189,90", img: "kit_shingle" },
];
document.getElementById("allGrid").innerHTML = ALL.map(pcard).join("");
document.getElementById("allGridMore").innerHTML = ALL_MORE.map(pcard).join("");

const verMais = document.getElementById("verMais");
const allGridMore = document.getElementById("allGridMore");
verMais.addEventListener("click", () => {
  const open = allGridMore.classList.toggle("open");
  // NOTA: no site final, "ver todos" leva à página de produto padrão com o
  // filtro "Cobertura Shingle" aplicado. Aqui apenas revela as demais linhas.
  verMais.textContent = open ? "Ver menos ‹" : "Ver todos os produtos ›";
  if (open) paint();
});

/* ---------- marquee ---------- */
document.getElementById("mqShingle").innerHTML =
  ("Impermeável <span>·</span> Leve <span>·</span> Resistente a ventos de 200km/h <span>·</span> Instalação a seco <span>·</span> Garantia de fábrica <span>·</span> ").repeat(
    4,
  );

/* ---------- comparativo Shingle vs convencional ---------- */
const VS = [
  ["Peso sobre a estrutura", "≈ 12 kg/m²", "≈ 45 kg/m²"],
  ["Resistência a ventos", "Até 200 km/h", "Solta com vento forte"],
  ["Adapta a curvas e mansardas", "Sim", "Limitado"],
  ["Estanqueidade / infiltração", "Sistema selado", "Depende do caimento"],
  ["Peças quebradas / trincas", "Não trinca", "Comum"],
  ["Vida útil", "Até 30 anos", "15–20 anos"],
];
document.getElementById("vsTable").innerHTML =
  `<div class="vs-h">Critério</div><div class="vs-h win">Telhado Shingle</div><div class="vs-h">Convencional</div>` +
  VS.map(
    (r) =>
      `<div class="vs-crit">${r[0]}</div><div class="vs-good">✔ ${r[1]}</div><div class="vs-bad">${r[2]}</div>`,
  ).join("");

/* ---------- COMPOSIÇÃO DO TELHADO (interativo) ---------- */
const LAYERS = [
  {
    n: 1,
    t: "Cumeeira ventilada",
    color: "#2f3336",
    text: "Peça de acabamento no topo do telhado que permite a saída do ar quente acumulado sob a cobertura, reduzindo a temperatura interna.",
    spec: "Reduz até 8°C na laje/forro",
  },
  {
    n: 2,
    t: "Telha Smart Shingle",
    color: "#161616",
    text: "Manta asfáltica de alta durabilidade recoberta por grânulos minerais. Impermeável, leve e com acabamento estético premium.",
    spec: "≈ 12 kg/m² · até 200 km/h",
  },
  {
    n: 3,
    t: "Subcobertura",
    color: "#7a828b",
    text: "Membrana impermeável (ex.: IKO Stormtite) instalada sob a telha. Barreira secundária contra água e vento, protege a estrutura.",
    spec: "Barreira anti-infiltração",
  },
  {
    n: 4,
    t: "OSB ou SmartPly",
    color: "#c98a3f",
    text: "Painel estrutural de tiras de madeira orientadas que forma a base rígida e contínua onde a telha shingle é pregada.",
    spec: "12mm · base de fixação",
  },
  {
    n: 5,
    t: "Estrutura de cobertura",
    color: "#9fb3c8",
    darkText: true,
    text: "Trama de perfis em Steel Frame (ou madeira) dimensionada em projeto para sustentar todo o sistema com o mínimo de peso.",
    spec: "Leve · dimensionada em projeto",
  },
  {
    n: 6,
    t: "Beiral ventilado",
    color: "#e5e7eb",
    darkText: true,
    text: "Entrada de ar na base do telhado que, em conjunto com a cumeeira, cria um fluxo contínuo de ventilação e evita mofo e calor.",
    spec: "Fluxo de ar contínuo",
  },
];

const roofStack = document.getElementById("roofStack");
const STEP = 56; // deslocamento vertical entre camadas
roofStack.innerHTML = LAYERS.map(
  (l, i) =>
    `<div class="roof-layer" data-i="${i}"
        style="top:${i * STEP}px; background:${l.color}; z-index:${LAYERS.length - i}">
       <div class="rl-num">${l.n}</div>
       <div class="rl-cap" style="${l.darkText ? "color:#20272e;text-shadow:none" : ""}">${l.t}</div>
     </div>`,
).join("");

const riNum = document.getElementById("riNum");
const riTitle = document.getElementById("riTitle");
const riText = document.getElementById("riText");
const riSpec = document.getElementById("riSpec");

function showLayer(i) {
  const l = LAYERS[i];
  document.querySelectorAll(".roof-layer").forEach((el) => el.classList.remove("active"));
  const el = roofStack.querySelector(`[data-i="${i}"]`);
  if (el) el.classList.add("active");
  riNum.textContent = l.n;
  riTitle.textContent = l.t;
  riText.textContent = l.text;
  riSpec.textContent = l.spec;
}

roofStack.querySelectorAll(".roof-layer").forEach((el) => {
  const i = +el.dataset.i;
  el.addEventListener("mouseenter", () => showLayer(i));
  el.addEventListener("click", () => showLayer(i)); // toque em mobile
});
showLayer(0); // estado inicial

/* pinta todas as imagens data-img */
paint();
