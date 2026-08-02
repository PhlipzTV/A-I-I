import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import Anthropic from "@anthropic-ai/sdk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const configPath = path.join(__dirname, "config", "client.config.json");
const examplePath = path.join(__dirname, "config", "client.config.example.json");
if (!fs.existsSync(configPath)) {
  console.warn(
    "config/client.config.json fehlt — verwende config/client.config.example.json als Platzhalter.\n" +
    "Fülle die Kundendaten in CUSTOMER_BRIEF.md aus und lass Claude Code daraus client.config.json erzeugen."
  );
}
const config = JSON.parse(fs.readFileSync(fs.existsSync(configPath) ? configPath : examplePath, "utf-8"));

const promptTemplate = fs.readFileSync(
  path.join(__dirname, "config", "system-prompt.template.txt"),
  "utf-8"
);

function renderTemplate(template, data) {
  return template
    .replaceAll("{{COMPANY_NAME}}", data.companyName)
    .replaceAll("{{INDUSTRY}}", data.industry)
    .replaceAll("{{PURPOSE}}", data.purpose)
    .replaceAll("{{TONE}}", data.tone)
    .replaceAll("{{SERVICES_OFFERED}}", data.servicesOffered.map((s) => `- ${s}`).join("\n"))
    .replaceAll(
      "{{FAQ}}",
      data.faq.map((f) => `F: ${f.question}\nA: ${f.answer}`).join("\n\n")
    )
    .replaceAll("{{CONTACT_INFO}}", data.contactInfo)
    .replaceAll("{{SPECIAL_INSTRUCTIONS}}", data.specialInstructions);
}

const systemPrompt = renderTemplate(promptTemplate, config);

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/widget-config", (_req, res) => {
  res.json(config.widget || {});
});

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages muss ein nicht-leeres Array sein." });
  }
  try {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });
    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n");
    res.json({ reply: text });
  } catch (err) {
    console.error("Anthropic-Anfrage fehlgeschlagen:", err.message);
    res.status(502).json({ error: "Der Assistent ist gerade nicht erreichbar. Bitte später erneut versuchen." });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`AII-Chatbot-Template läuft auf http://localhost:${port}`);
});
