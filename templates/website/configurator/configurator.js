const form = document.getElementById("cfg-form");
const previewFrame = document.getElementById("preview-frame");
const serviceCardsEl = document.getElementById("service-cards");
const stepCardsEl = document.getElementById("step-cards");
const serviceCardTpl = document.getElementById("service-card-template");
const stepCardTpl = document.getElementById("step-card-template");

const DEFAULT_SERVICE_ICONS = ["website", "chatbot", "agent", "integration"];

function buildServiceCard(index, defaultIconKey) {
  const node = serviceCardTpl.content.cloneNode(true);
  const card = node.querySelector(".cfg-card");
  card.querySelector(".cfg-card-title").textContent = `Leistung ${index}`;

  const select = card.querySelector(".svc-icon");
  Object.entries(ICON_PRESETS).forEach(([key, preset]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = preset.label;
    select.appendChild(opt);
  });
  select.value = defaultIconKey;

  select.dataset.field = `SERVICE_${index}_ICON_SVG`;
  card.querySelector(".svc-title").dataset.field = `SERVICE_${index}_TITLE`;
  card.querySelector(".svc-desc").dataset.field = `SERVICE_${index}_DESC`;

  [select, card.querySelector(".svc-title"), card.querySelector(".svc-desc")].forEach((el) =>
    el.addEventListener("input", scheduleUpdate)
  );
  serviceCardsEl.appendChild(card);
}

function buildStepCard(index) {
  const node = stepCardTpl.content.cloneNode(true);
  const card = node.querySelector(".cfg-card");
  card.querySelector(".cfg-card-title").textContent = `Schritt ${index}`;
  card.querySelector(".step-title").dataset.field = `STEP_${index}_TITLE`;
  card.querySelector(".step-desc").dataset.field = `STEP_${index}_DESC`;

  [card.querySelector(".step-title"), card.querySelector(".step-desc")].forEach((el) =>
    el.addEventListener("input", scheduleUpdate)
  );
  stepCardsEl.appendChild(card);
}

for (let i = 1; i <= 4; i++) buildServiceCard(i, DEFAULT_SERVICE_ICONS[i - 1]);
for (let i = 1; i <= 4; i++) buildStepCard(i);

function collectValues() {
  const values = {};
  form.querySelectorAll("input[name], textarea[name]").forEach((el) => {
    values[el.name] = el.value;
  });
  document.querySelectorAll("#service-cards [data-field], #step-cards [data-field]").forEach((el) => {
    if (el.classList.contains("svc-icon")) {
      values[el.dataset.field] = ICON_PRESETS[el.value].svg;
    } else {
      values[el.dataset.field] = el.value;
    }
  });
  return values;
}

function fillTemplate(str, values) {
  return str.replace(/{{\s*([A-Z0-9_]+)\s*}}/g, (match, key) => {
    if (Object.prototype.hasOwnProperty.call(values, key)) return values[key];
    return "";
  });
}

// Template source is embedded in template-data.js (TEMPLATE_HTML/TEMPLATE_JS)
// instead of fetched, so this page works standalone via a double-click
// (file://) with no local server needed.
const templateHtml = TEMPLATE_HTML;
const templateJs = TEMPLATE_JS;

let updateTimer = null;
function scheduleUpdate() {
  clearTimeout(updateTimer);
  updateTimer = setTimeout(updatePreview, 150);
}

function updatePreview() {
  if (!templateHtml) return;
  const values = collectValues();
  let html = fillTemplate(templateHtml, values);
  // Preview is served from configurator/, assets live one level up.
  html = html.replace("<head>", '<head>\n<base href="../">');
  previewFrame.srcdoc = html;
}

form.addEventListener("input", scheduleUpdate);

document.getElementById("export-html").addEventListener("click", () => {
  const values = collectValues();
  const html = fillTemplate(templateHtml, values);
  downloadFile("index.html", html, "text/html");
});

document.getElementById("export-js").addEventListener("click", () => {
  const values = collectValues();
  const js = fillTemplate(templateJs, values);
  downloadFile("main.js", js, "text/javascript");
});

function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

updatePreview();
