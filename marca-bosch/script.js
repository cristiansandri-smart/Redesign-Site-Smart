/* =====================================================================
   HUB DE MARCA · BOSCH
   Dados reais coletados do catálogo Espaço Smart (VTEX).
   Imagens apontam para o CDN da loja (vteximg) — protótipo.
   ===================================================================== */

/* card de produto com URL de imagem direta (imagens remotas do catálogo) */
function pcard(o) {
  const old = o.old ? `<span class="old">R$ ${brl(o.old)}</span>` : "";
  return `<a class="pcard" href="../produto/index.html">${o.off ? `<span class="badge-off">-${o.off}%</span>` : ""}
   <div class="thumb"><img src="${o.img}" alt="${o.t}" loading="lazy"
        onerror="this.style.opacity=.15;this.alt='imagem indisponível'"></div>
   <div class="pb"><h4>${o.t}</h4>
     <div>${old}<span class="now">R$ ${brl(o.now)}</span></div>
     <div class="parc">${o.parc || ""}</div><div class="buy">Comprar</div></div></a>`;
}
function brl(n) {
  return Number(n).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const CDN = "https://lojaespacosmart.vteximg.com.br/arquivos/ids/";

/* ---------- produtos reais Bosch ---------- */
const PROD = [
  {
    t: "Esmerilhadeira Bosch GWS 770 M14 220V",
    now: 405.13,
    old: 449.9,
    off: 10,
    parc: "12x R$ 37,55",
    img: CDN + "166132/06013980D0-000_02.jpg",
    cat: "Elétricas",
  },
  {
    t: "Esmerilhadeira Bosch GWS 770 M14 110V",
    now: 405.13,
    parc: "12x R$ 37,55",
    img: CDN + "166120/06013980D0-000_02.jpg",
    cat: "Elétricas",
  },
  {
    t: "Martelete Rompedor Bosch GBH 2-24D 820W maleta 110V",
    now: 973.7,
    old: 1099.0,
    off: 11,
    parc: "12x R$ 90,26",
    img: CDN + "166902/06112A02D0-000_01.jpg",
    cat: "Elétricas",
  },
  {
    t: "Martelete Rompedor Bosch GBH 2-24D 820W maleta 220V",
    now: 973.7,
    parc: "12x R$ 90,26",
    img: CDN + "166773/06112A02D0-000_01.jpg",
    cat: "Elétricas",
  },
  {
    t: "Disco de Serra Circular Bosch PRO Wood Cordless",
    now: 289.73,
    old: 329.9,
    off: 12,
    parc: "12x R$ 26,85",
    img: CDN + "165880/2608837666-000_01.jpg",
    cat: "Elétricas",
  },
  {
    t: "Trena a Laser Bosch GLM 50-12 · alcance 50m",
    now: 899.6,
    old: 999.0,
    off: 10,
    parc: "12x R$ 83,39",
    img: CDN + "166912/0601072RG0-000_01.jpg",
    cat: "Medição",
  },
  {
    t: "Trena a Laser Bosch GLM 30-23 · alcance 30m",
    now: 573.01,
    parc: "12x R$ 53,12",
    img: CDN + "166257/0601072XG0-000_02.jpg",
    cat: "Medição",
  },
  {
    t: "Detector de Materiais Bosch GMS 120-27 · 120mm",
    now: 1020.1,
    parc: "12x R$ 94,56",
    img: CDN + "166278/0601081700-000_03.jpg",
    cat: "Medição",
  },
  {
    t: "Disco de Serra Circular Bosch Standard p/ Madeira",
    now: 210.76,
    parc: "11x R$ 21,11",
    img: CDN + "165886/2608644329-000_01.jpg",
    cat: "Acessórios",
  },
  {
    t: "Disco de Corte Bosch EXPERT Carbide Multi Wheel DW",
    now: 124.21,
    parc: "6x R$ 21,73",
    img: CDN + "165912/2608901196-000_01.jpg",
    cat: "Acessórios",
  },
  {
    t: "Broca Bosch EXPERT HEX-9 MultiConstruction 8mm",
    now: 25.69,
    parc: "1x R$ 25,69",
    img: CDN + "165905/2608900583-000_01.jpg",
    cat: "Acessórios",
  },
  {
    t: "Broca Bosch EXPERT HEX-9 MultiConstruction 6mm",
    now: 35.42,
    parc: "1x R$ 35,42",
    img: CDN + "165898/2608900583-000_01.jpg",
    cat: "Acessórios",
  },
];

/* ofertas = itens com desconto */
document.getElementById("ofertasBosch").innerHTML = PROD.filter((p) => p.off)
  .slice(0, 4)
  .map(pcard)
  .join("");

/* abas por categoria */
const CATS = ["Todos", "Elétricas", "Medição", "Acessórios"];
const bTabs = document.getElementById("bTabs");
bTabs.innerHTML = CATS.map(
  (k, i) =>
    `<span class="tab ${i === 0 ? "on" : ""}" onclick="setCat('${k}',this)">${k}</span>`,
).join("");
function setCat(k, el) {
  document
    .querySelectorAll("#bTabs .tab")
    .forEach((t) => t.classList.remove("on"));
  el && el.classList.add("on");
  const list = k === "Todos" ? PROD : PROD.filter((p) => p.cat === k);
  document.getElementById("bGrid").innerHTML = list.map(pcard).join("");
}
setCat("Todos");

/* "ver todos" leva à busca real da marca no site */
document.getElementById("verTodos").href =
  "https://www.espacosmart.com.br/s?q=bosch&sort=score_desc&page=0";

/* marquee */
document.getElementById("mqBrand").innerHTML =
  "PRECISÃO <span>·</span> PRODUTIVIDADE <span>·</span> DURABILIDADE <span>·</span> ENGENHARIA ALEMÃ <span>·</span> ".repeat(
    4,
  );

/* ---------- SMART THINK: pilares ----------
   Só os pilares que a marca ATENDE (on:true) aparecem na página.
   selo = container de imagem (placeholder D1..D5 → trocar pela arte do selo). */
const PILLARS = [
  {
    selo: "../img/Selo_ind.png",
    t: "Industrialização",
    on: true,
    d: "Produtividade e padronização na construção a seco — mais obra pronta em menos tempo.",
  },
  {
    selo: "../img/Selo_qual.png",
    t: "Qualidade de vida",
    on: true,
    d: "Ergonomia, controle de vibração e segurança para o profissional na obra.",
  },
  {
    selo: "../img/Selo_custo.png",
    t: "Custo-benefício",
    on: true,
    d: "Durabilidade e assistência que reduzem o custo por hora de uso da ferramenta.",
  },
  { selo: "../img/Selo_sus.png", t: "Sustentabilidade", on: false, d: "" },
  {
    selo: "../img/Selo_tec.png",
    t: "Tecnologia",
    on: true,
    d: "Eletrônica de precisão, sensores e motores de alta eficiência.",
  },
];
document.getElementById("pillars").innerHTML = PILLARS.filter((p) => p.on)
  .map(
    (p) => `<div class="pillar">
     <div class="p-selo"><img src="${p.selo}" alt="Selo ${p.t}"></div>
     <h4>${p.t}</h4><p>${p.d}</p></div>`,
  )
  .join("");
