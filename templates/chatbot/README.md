# AII Chatbot-Template

Grundgerüst für einen KI-Chatbot auf Basis der Claude API (Anthropic). Node/Express-Server + ein einbettbares Chat-Widget (reines HTML/CSS/JS, ohne Build-Schritt), im dunklen AII-Blau gehalten und über eine Akzentfarbe pro Kunde anpassbar.

## Aufbau

- `server.js` — Express-Server, lädt `config/client.config.json`, baut daraus den System-Prompt aus `config/system-prompt.template.txt` und stellt `/api/chat` sowie `/api/widget-config` bereit.
- `config/system-prompt.template.txt` — der Grund-Prompt mit Platzhaltern (`{{COMPANY_NAME}}`, `{{FAQ}}`, ...). Wird selten angefasst — das ist der "Grundcode" des Bots.
- `config/client.config.example.json` — Beispiel, wie die Kundendaten aussehen, die die Platzhalter befüllen.
- `public/widget.js` + `public/widget.css` — das Chat-Widget zum Einbetten in die Kunden-Website.
- `CUSTOMER_BRIEF.template.md` — hier trägst du (oder Claude Code für dich) die Kundenanforderungen in Freitext ein.

## Für einen neuen Kunden einrichten

1. Ordner kopieren, z.B. nach `kunden/musterfirma-chatbot`.
2. `CUSTOMER_BRIEF.template.md` zu `CUSTOMER_BRIEF.md` kopieren und ausfüllen.
3. Claude Code bitten: *"Pass das Chatbot-Template an CUSTOMER_BRIEF.md an."* — das erzeugt `config/client.config.json` aus dem Beispiel.
4. `.env.example` zu `.env` kopieren und den echten `ANTHROPIC_API_KEY` eintragen.
5. Lokal starten:

   ```bash
   npm install
   npm start
   ```

6. `http://localhost:3000` öffnen, um das Widget zu testen. Für die echte Kundenseite `public/widget.js` + `public/widget.css` einbinden und auf den laufenden Server (`/api/chat`, `/api/widget-config`) zeigen lassen.

## Wichtig

- `config/client.config.json` und `.env` enthalten Kundendaten/Keys und sind in `.gitignore` — nicht committen.
- Der System-Prompt verhindert erfundene Zusagen (Preise, Termine) und verweist stattdessen auf den echten Kontakt — das sollte für neue Kunden so bleiben, auch wenn der Rest angepasst wird.
