const tabs = document.querySelectorAll(".bg-tab");
const fieldSections = document.querySelectorAll(".bg-fields");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy-btn");

let currentService = "website";

function setService(service) {
  currentService = service;
  tabs.forEach((t) => t.classList.toggle("is-active", t.dataset.service === service));
  fieldSections.forEach((s) => s.classList.toggle("is-hidden", s.dataset.serviceFields !== service));
  updateOutput();
}

tabs.forEach((tab) => tab.addEventListener("click", () => setService(tab.dataset.service)));

function getValues(service) {
  const section = document.querySelector(`[data-service-fields="${service}"]`);
  const values = {};
  section.querySelectorAll("[data-key]").forEach((el) => {
    values[el.dataset.key] = el.value.trim();
  });
  return values;
}

function line(label, value) {
  return value ? `${label}: ${value}` : null;
}

function block(label, value) {
  return value ? `${label}:\n${value}` : null;
}

function buildWebsiteBrief(v) {
  const parts = [
    "/kunde Website",
    line("Firma", v.firma),
    line("Branche", v.branche),
    line("Kontakt-E-Mail", v.email),
    block("Kernaussage", v.kernaussage),
    block("Leistungen", v.leistungen),
    block("Ablauf/Zusammenarbeit", v.ablauf),
    block("Vorteile/USPs", v.vorteile),
    line("Ton/Stil", v.stil),
    block("Sonstiges", v.sonstiges),
  ];
  return parts.filter(Boolean).join("\n\n");
}

function buildChatbotBrief(v) {
  const parts = [
    "/kunde Chatbot",
    line("Firma", v.firma),
    line("Branche", v.branche),
    block("Aufgabe des Chatbots", v.aufgabe),
    line("Ton", v.ton),
    block("Leistungen/Themen", v.themen),
    block("Häufige Fragen", v.faq),
    line("Kontakt", v.kontakt),
    block("Sonstiges", v.sonstiges),
  ];
  return parts.filter(Boolean).join("\n\n");
}

function buildAndereBrief(v) {
  const parts = [
    `/kunde ${v.leistungsart || "(Leistung noch nicht benannt)"}`,
    line("Firma", v.firma),
    line("Branche", v.branche),
    block("Beschreibung", v.beschreibung),
    line("Kontakt", v.kontakt),
    block("Sonstiges", v.sonstiges),
  ];
  return parts.filter(Boolean).join("\n\n");
}

function updateOutput() {
  const v = getValues(currentService);
  let text = "";
  if (currentService === "website") text = buildWebsiteBrief(v);
  else if (currentService === "chatbot") text = buildChatbotBrief(v);
  else text = buildAndereBrief(v);
  output.value = text;
}

document.querySelectorAll("[data-key]").forEach((el) => {
  el.addEventListener("input", updateOutput);
});

copyBtn.addEventListener("click", async () => {
  output.focus();
  output.select();
  let copied = false;
  try {
    await navigator.clipboard.writeText(output.value);
    copied = true;
  } catch {
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }
  }
  if (copied) {
    copyBtn.textContent = "Kopiert!";
    copyBtn.classList.add("is-copied");
    setTimeout(() => {
      copyBtn.textContent = "In Zwischenablage kopieren";
      copyBtn.classList.remove("is-copied");
    }, 1800);
  }
});

setService("website");
