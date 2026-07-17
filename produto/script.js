/* =====================================================================
   PÁGINA DE PRODUTO (modelo)
   Produto real: Piso Vinílico LVT Smart Elegance Grafite Urbano
   Dados/imagens/ficha técnica do catálogo Espaço Smart (VTEX).
   ===================================================================== */

const CDN = "https://lojaespacosmart.vteximg.com.br/arquivos/ids/";

const PRODUCT = {
  brand: "Espaço Smart",
  name: "Piso Vinílico LVT Smart Elegance Grafite Urbano 3mm · Comercial",
  crumb: ["Pisos", "Piso Vinílico Comercial", "Elegance Grafite Urbano"],
  rating: 4.8,
  reviewsCount: 127,
  priceNow: 323.56,
  priceOld: 379.9, // promoção de julho (placeholder)
  parcelas: "12x de R$ 29,99",
  rendimento: 2.75, // m² por caixa
  images: [
    CDN + "166478/ELEGANCE---GRAFITE-URBANO---FLAT.jpg",
    CDN + "166479/ELEGANCE---GRAFITE-URBANO.jpg",
    CDN + "166480/ELEGANCE---GRAFITE-URBANO--APLICADO.png",
  ],
  dims: [
    ["📏", "Espessura", "3,0 mm"],
    ["↔️", "Largura", "188 mm"],
    ["📐", "Comprimento", "1.219 mm"],
    ["⚖️", "Peso", "5,8 kg/m²"],
  ],
  warrantyYears: 15,
};

const brl = (n) =>
  Number(n).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
const perM2 = PRODUCT.priceNow / PRODUCT.rendimento;

/* ---------- breadcrumb ---------- */
document.getElementById("crumb").innerHTML =
  `<a href="../index.html">Início</a> › ` +
  PRODUCT.crumb
    .map((c, i) => (i === PRODUCT.crumb.length - 1 ? `<b>${c}</b>` : `${c}`))
    .join(" › ");

/* ---------- galeria ---------- */
const stageImg = document.getElementById("stageImg");
const stage = document.getElementById("stage");
const thumbs = document.getElementById("thumbs");

thumbs.innerHTML = PRODUCT.images
  .map(
    (src, i) =>
      `<div class="thumb ${i === 0 ? "on" : ""}" data-i="${i}"><img src="${src}" alt="Miniatura ${i + 1}"></div>`,
  )
  .join("");

function setImg(i) {
  stageImg.src = PRODUCT.images[i];
  thumbs
    .querySelectorAll(".thumb")
    .forEach((t, k) => t.classList.toggle("on", k === i));
}
thumbs.querySelectorAll(".thumb").forEach((t) => {
  const i = +t.dataset.i;
  t.addEventListener("click", () => setImg(i));
  t.addEventListener("mouseenter", () => setImg(i));
});
setImg(0);

/* zoom seguindo o cursor (container tem overflow:hidden) */
stage.addEventListener("mousemove", (e) => {
  const r = stage.getBoundingClientRect();
  const x = ((e.clientX - r.left) / r.width) * 100;
  const y = ((e.clientY - r.top) / r.height) * 100;
  stageImg.style.transformOrigin = `${x}% ${y}%`;
  stage.classList.add("zooming");
});
stage.addEventListener("mouseleave", () => stage.classList.remove("zooming"));

/* ---------- dados ---------- */
document.getElementById("pBrand").textContent = PRODUCT.brand;
document.getElementById("pName").textContent = PRODUCT.name;

const fullStars = Math.round(PRODUCT.rating);
document.getElementById("rating").innerHTML =
  `<span class="stars">${"★".repeat(fullStars)}${"☆".repeat(5 - fullStars)}</span>` +
  `<b>${PRODUCT.rating.toFixed(1)}</b><span>· ${PRODUCT.reviewsCount} avaliações</span>`;

document.getElementById("pOld").textContent = `R$ ${brl(PRODUCT.priceOld)}`;
document.getElementById("pNow").textContent = `R$ ${brl(PRODUCT.priceNow)}`;
document.getElementById("pParc").innerHTML =
  `ou ${PRODUCT.parcelas} · caixa com ${brl(PRODUCT.rendimento).replace(",00", "")} m²`;
document.getElementById("pM2").innerHTML =
  `Equivale a <b>R$ ${brl(perM2)}/m²</b>`;

document.getElementById("specsMini").innerHTML = PRODUCT.dims
  .map(
    (d) =>
      `<div class="sm-item"><span class="sm-ico">${d[0]}</span>
        <div><div class="sm-k">${d[1]}</div><div class="sm-v">${d[2]}</div></div></div>`,
  )
  .join("");

/* ---------- calculadora de m² ---------- */
const m2Input = document.getElementById("m2Input");
const margem = document.getElementById("margem");
const calcOut = document.getElementById("calcOut");

function recalc() {
  let area = parseFloat(m2Input.value) || 0;
  const base = area;
  if (margem.checked) area = area * 1.1; // 10% de margem de segurança
  const caixas = Math.max(1, Math.ceil(area / PRODUCT.rendimento));
  const coberto = caixas * PRODUCT.rendimento;
  const total = caixas * PRODUCT.priceNow;
  calcOut.innerHTML =
    `Para <b>${brl(base).replace(",00", "")} m²</b>${margem.checked ? " (+10% = " + brl(area).replace(",00", "") + " m²)" : ""}: ` +
    `<b>${caixas} caixas</b> (${brl(coberto).replace(",00", "")} m²) · Total <b>R$ ${brl(total)}</b>`;
}
m2Input.addEventListener("input", recalc);
margem.addEventListener("change", recalc);
recalc();

/* ---------- placeholders de ações ---------- */
document
  .getElementById("btnLojas")
  .addEventListener("click", () =>
    alert("Protótipo: aqui abriria o mapa de lojas próximas."),
  );
document
  .getElementById("btnCalcAvancada")
  .addEventListener("click", () =>
    alert("Protótipo: aqui abriria a calculadora avançada de materiais."),
  );
document.getElementById("btnCep").addEventListener("click", () => {
  document.querySelector(".frete-hint").textContent =
    "Protótipo: o cálculo real de frete/prazo entra na integração com a transportadora.";
});

/* ---------- descrição ---------- */
document.getElementById("desc").innerHTML = `
  <p>O <b>Piso Vinílico LVT Smart Elegance Grafite Urbano</b> é um piso vinílico
  heterogêneo (LVT) de 3 mm com capa de uso de 0,50 mm, indicado para uso
  residencial (classe 23) e comercial (classe 33). O tom grafite urbano traz um
  acabamento contemporâneo com a praticidade da instalação colada.</p>
  <p>A proteção superficial em <b>PUR + UV</b> garante alta resistência à
  abrasão e à descoloração, enquanto a estrutura resistente à água (não
  submersível) e a absorção de impacto acústico de 4 dB tornam o produto ideal
  para ambientes de alto tráfego. Fornecido em caixas com 12 réguas, cobrindo
  2,75 m² por caixa.</p>`;

/* ---------- ficha técnica (dados reais) ---------- */
const FICHA = [
  ["Tipo", "LVT Vinílico Heterogêneo"],
  ["Uso indicado", "Residencial (23) e Comercial (33)"],
  ["Espessura total", "3,00 mm"],
  ["Capa de uso (PVC)", "0,50 mm"],
  ["Proteção superficial", "PUR + Proteção UV"],
  ["Tamanho da régua", "188 mm × 1.219,2 mm"],
  ["Peso médio", "5,5 a 5,8 kg/m²"],
  ["Resistência à abrasão", "EN 13329: 5000r"],
  ["Resistência ao escorregamento", "DIN EN 16165 R9"],
  ["Reação ao fogo", "NBR 16626 Classe II A"],
  ["Absorção de impacto acústico", "4 dB"],
  ["Instalação", "Colado (cola acrílica)"],
  ["Certificações", "ISO 9001 / ISO 14001 / AGBB / DIBt / Floor Score"],
  ["Garantia", "15 anos"],
  ["Embalagem", "12 réguas / 2,75 m² por caixa"],
];
document.getElementById("ficha").innerHTML =
  `<tr><th>Característica</th><th>Especificação</th></tr>` +
  FICHA.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("");

/* ---------- Smart Think (selos do produto) ---------- */
const SELOS = [
  {
    img: "../img/Selo_qual.png",
    t: "Qualidade de vida",
    d: "Conforto acústico (4 dB) e baixa emissão de COVs.",
  },
  {
    img: "../img/Selo_sus.png",
    t: "Sustentabilidade",
    d: "Certificação Floor Score e AGBB/DIBt.",
  },
  {
    img: "../img/Selo_tec.png",
    t: "Tecnologia",
    d: "Proteção PUR + UV e camada de uso reforçada.",
  },
  {
    img: "../img/Selo_custo.png",
    t: "Custo-benefício",
    d: "15 anos de garantia e instalação rápida.",
  },
];
document.getElementById("ppSelos").innerHTML = SELOS.map(
  (s) =>
    `<div class="pp-selo"><div class="pp-img"><img src="${s.img}" alt="Selo ${s.t}"></div>
      <h5>${s.t}</h5><p>${s.d}</p></div>`,
).join("");

/* garantia + downloads */
document.getElementById("warrantyTitle").textContent =
  `Garantia de ${PRODUCT.warrantyYears} anos`;
document
  .getElementById("dlWarranty")
  .addEventListener("click", () =>
    alert("Protótipo: download do certificado de garantia (PDF)."),
  );
const DOCS = [
  "Catálogo Linha Elegance",
  "Manual de Instalação",
  "Ficha Técnica (PDF)",
  "Guia de Manutenção",
];
document.getElementById("dlList").innerHTML = DOCS.map(
  (d) =>
    `<li onclick="alert('Protótipo: download de &quot;${d}&quot;.')">${d} <span>Baixar ↓</span></li>`,
).join("");

/* ---------- compre junto (upsell) ---------- */
function upcard(o) {
  return `<a class="pcard" href="index.html">
   <div class="thumb"><img src="${o.img}" alt="${o.t}"></div>
   <div class="pb"><h4>${o.t}</h4>
     <div><span class="now">R$ ${brl(o.now)}</span></div>
     <div class="parc">${o.parc || ""}</div><div class="buy">Comprar junto</div></div></a>`;
}
document.getElementById("upsell").innerHTML = [
  {
    t: "Cola Acrílica para Piso Vinílico 4kg",
    now: 89.9,
    parc: "3x R$ 29,97",
    img: PRODUCT.images[2],
  },
  {
    t: "Rodapé de Poliestireno Branco 7cm · barra 2,4m",
    now: 42.5,
    parc: "1x",
    img: PRODUCT.images[1],
  },
  {
    t: "Manta Acústica sob Piso 2mm · rolo 20m²",
    now: 159.9,
    parc: "6x R$ 26,65",
    img: PRODUCT.images[0],
  },
  {
    t: "Espátula Dentada para Aplicação de Cola",
    now: 34.9,
    parc: "1x",
    img: PRODUCT.images[2],
  },
]
  .map(upcard)
  .join("");

/* ---------- avaliações ---------- */
const REV = [
  {
    n: "Marcelo A.",
    s: 5,
    d: "Ficou lindo na sala comercial. Fácil de limpar e o tom grafite é elegante.",
    when: "há 2 semanas",
  },
  {
    n: "Patrícia R.",
    s: 5,
    d: "Instalação rápida e acabamento excelente. Recomendo o piso e a Espaço Smart.",
    when: "há 1 mês",
  },
  {
    n: "João Vitor",
    s: 4,
    d: "Ótimo custo-benefício. Só demorou um pouco a entrega, mas o produto é top.",
    when: "há 1 mês",
  },
];
document.getElementById("reviews").innerHTML = REV.map(
  (r) =>
    `<div class="rev"><div class="rev-top"><span class="rev-name">${r.n}</span>
      <span class="rev-stars">${"★".repeat(r.s)}${"☆".repeat(5 - r.s)}</span></div>
      <p>${r.d}</p><div class="rev-date">${r.when}</div></div>`,
).join("");
