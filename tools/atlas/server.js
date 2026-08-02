import "dotenv/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import Anthropic from "@anthropic-ai/sdk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/analyze", async (req, res) => {
  const { prompt } = req.body;
  if (typeof prompt !== "string" || !prompt.trim()) {
    return res.status(400).json({ error: "prompt muss ein nicht-leerer String sein." });
  }
  try {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    });
    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n");
    res.json({ text });
  } catch (err) {
    console.error("Anthropic-Anfrage fehlgeschlagen:", err.message);
    res.status(502).json({ error: "Die Analyse ist gerade nicht erreichbar. Bitte später erneut versuchen." });
  }
});

const port = process.env.PORT || 3210;
app.listen(port, () => {
  console.log(`ATLAS läuft auf http://localhost:${port}`);
});
