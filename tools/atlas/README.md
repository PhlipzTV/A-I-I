# ATLAS – Sitzungs-Analyse

Internes Tool (kein Kundenprojekt) zum Protokollieren von Aufgaben und Log-Einträgen während einer Arbeitssitzung, mit KI-gestützter Abschlussanalyse über die Claude API. Node/Express-Server + statisches Frontend (reines HTML/CSS/JS, ohne Build-Schritt).

## Aufbau

- `server.js` — Express-Server, liefert `public/` aus und stellt `/api/analyze` bereit. Hält den `ANTHROPIC_API_KEY` serverseitig; das Frontend ruft niemals die Anthropic-API direkt auf (Browser-Requests dorthin scheitern an CORS und würden den Key offenlegen).
- `public/index.html` — die gesamte App: Aufgaben-/Log-Erfassung, Sitzungs-Timer, Verlauf, Analyse-Overlay mit Gauge-Anzeige. Speichert die aktuelle Session und den Verlauf im `localStorage` des Browsers.

## Lokal starten

```bash
npm install
cp .env.example .env   # ANTHROPIC_API_KEY eintragen
npm start
```

Dann `http://localhost:3210` öffnen.

## Wichtig

- `.env` enthält den API-Key und ist in `.gitignore` — nicht committen.
- Daten liegen nur im `localStorage` des jeweiligen Browsers (kein Server-seitiges Speichern von Sitzungsinhalten) — beim Wechsel des Browsers/Geräts ist der Verlauf nicht verfügbar.
