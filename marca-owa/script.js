/* =====================================================================
   HUB DE MARCA · OWA
   Dados reais coletados do catálogo Espaço Smart (VTEX).
   Imagens apontam para o CDN da loja (vteximg) — protótipo.
   ===================================================================== */

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

/* ---------- forros minerais OWA (reais) ---------- */
const FORROS = [
  {
    t: "Forro Mineral OWA Brillianto A Tegular 625×625×15mm · cx 12 peças",
    now: 770.02,
    old: 849.9,
    off: 9,
    parc: "12x R$ 71,38",
    img: CDN + "166729/Brillianto-A.jpg",
    cat: "Forros",
  },
  {
    t: "Forro Mineral OWA Brillianto A Lay In 120×625×15mm · cx 10 peças",
    now: 1265.96,
    parc: "12x R$ 117,36",
    img: CDN + "166734/Brillianto-A.jpg",
    cat: "Forros",
  },
  {
    t: "Forro Mineral OWA Constellation Lay In 1250×625×15mm · cx 10 peças",
    now: 1269.55,
    old: 1399.0,
    off: 9,
    parc: "12x R$ 117,69",
    img: CDN + "166721/Constellation.jpg",
    cat: "Forros",
  },
  {
    t: "Forro Mineral OWA Pretium Lay In 1250×625×12mm · cx 12 peças",
    now: 1070.09,
    parc: "12x R$ 99,20",
    img: CDN + "166739/Pretium.jpg",
    cat: "Forros",
  },
  {
    t: "Forro Mineral OWA Humancare Lay In 1250×625×15mm · cx 10 peças",
    now: 1672.71,
    parc: "12x R$ 155,06",
    img: CDN + "166737/Owa-Sinfonia-.jpg",
    cat: "Forros",
  },
];

/* ---------- perfilaria de montagem (estrutura T24) ---------- */
const PERFIS = [
  {
    t: "Smart Perfil Longarina T24 Branco 3125mm",
    now: 14.11,
    parc: "1x",
    img: CDN + "163873/imagem-produto--1-.jpg",
    cat: "Montagem",
  },
  {
    t: "Smart Perfil Travessa T24 Branco 1250mm",
    now: 5.11,
    parc: "1x",
    img: CDN + "163874/imagem-produto.jpg",
    cat: "Montagem",
  },
  {
    t: "Smart Perfil Travessa T24 Branco 625mm",
    now: 2.4,
    parc: "1x",
    img: CDN + "163918/102.jpg",
    cat: "Montagem",
  },
  {
    t: "Smart Perfil Longarina T24 Preto 3125mm",
    now: 20.72,
    parc: "1x",
    img: CDN + "166769/Perfil-Preto.jpg",
    cat: "Montagem",
  },
  {
    t: "Smart Perfil Cantoneira T24 Preto 3050mm",
    now: 13.26,
    parc: "1x",
    img: CDN + "166770/Cantoneira%20Preta.jpg",
    cat: "Montagem",
  },
  {
    t: "Perfil Canaleta F530 3m p/ forro",
    now: 15.42,
    parc: "1x",
    img: CDN + "163756/134.jpg",
    cat: "Montagem",
  },
];

const PROD = [...FORROS, ...PERFIS];

/* ofertas = itens com desconto */
document.getElementById("ofertasOwa").innerHTML = PROD.filter((p) => p.off)
  .slice(0, 4)
  .map(pcard)
  .join("");
// completa 4 cards com destaques (forros sem desconto)
(() => {
  const grid = document.getElementById("ofertasOwa");
  if (grid.children.length < 4) {
    const extra = FORROS.filter((p) => !p.off).slice(
      0,
      4 - grid.children.length,
    );
    grid.innerHTML += extra.map(pcard).join("");
  }
})();

/* abas */
const CATS = ["Todos", "Forros", "Montagem"];
const oTabs = document.getElementById("oTabs");
oTabs.innerHTML = CATS.map(
  (k, i) =>
    `<span class="tab ${i === 0 ? "on" : ""}" onclick="setCat('${k}',this)">${k}</span>`,
).join("");
function setCat(k, el) {
  document
    .querySelectorAll("#oTabs .tab")
    .forEach((t) => t.classList.remove("on"));
  el && el.classList.add("on");
  const list = k === "Todos" ? PROD : PROD.filter((p) => p.cat === k);
  document.getElementById("oGrid").innerHTML = list.map(pcard).join("");
}
setCat("Todos");

/* "ver todos" leva à categoria real no site */
document.getElementById("verTodos").href =
  "https://www.espacosmart.com.br/tudo-para-forro-modular";

/* marquee */
document.getElementById("mqBrand").innerHTML =
  "ACÚSTICA <span>·</span> RESISTÊNCIA AO FOGO <span>·</span> AMBIENTES SAUDÁVEIS <span>·</span> DESIGN MODULAR <span>·</span> ".repeat(
    4,
  );

/* ---------- SMART THINK: pilares ----------
   Só os pilares que a marca ATENDE (on:true) aparecem na página.
   selo = container de imagem (placeholder D1..D5 → trocar pela arte do selo). */
const PILLARS = [
  {
    selo: "../img/selo_ind.png",
    t: "Industrialização",
    on: true,
    d: "Sistema modular removível: montagem e manutenção rápidas e padronizadas.",
  },
  {
    selo: "../img/selo_qual.png",
    t: "Qualidade de vida",
    on: true,
    d: "Conforto acústico e higiene — a linha Humancare é feita para ambientes de saúde.",
  },
  { selo: "../img/selo_custo.png", t: "Custo-benefício", on: false, d: "" },
  {
    selo: "../img/selo_sus.png",
    t: "Sustentabilidade",
    on: true,
    d: "Placa mineral com conteúdo reciclado e reciclável, de baixa emissão.",
  },
  {
    selo: "../img/selo_tec.png",
    t: "Tecnologia",
    on: true,
    d: "Absorção sonora e resistência ao fogo/umidade com certificação internacional.",
  },
];
document.getElementById("pillars").innerHTML = PILLARS.filter((p) => p.on)
  .map(
    (p) => `<div class="pillar">
     <div class="p-selo"><img src="${p.selo}" alt="Selo ${p.t}"></div>
     <h4>${p.t}</h4><p>${p.d}</p></div>`,
  )
  .join("");
