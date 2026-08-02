# ATLAS – Sitzungs-Analyse

Internes Tool (kein Kundenprojekt) zum Protokollieren von Aufgaben und Log-Einträgen während einer Arbeitssitzung, mit KI-gestützter Abschlussanalyse. Eine einzige HTML-Datei, kein Build-Schritt, kein Server, kein API-Key nötig.

## Aufbau

- `index.html` — die gesamte App: Aufgaben-/Log-Erfassung, Sitzungs-Timer, Verlauf, Analyse-Overlay mit Gauge-Anzeige. Speichert die aktuelle Session und den Verlauf im `localStorage` des Browsers.

## Öffnen

Einfach die Datei im Browser öffnen (Doppelklick) oder lokal servieren, z. B.:

```bash
python3 -m http.server 8199
```

Dann `http://localhost:8199/index.html` öffnen.

## Analyse erstellen (kostenlos, ohne API-Key)

Am Ende der Session auf "Session beenden & analysieren" klicken. Das Tool zeigt dann:

1. Einen fertigen Analyse-Prompt zum Kopieren.
2. Den Prompt bei [claude.ai](https://claude.ai) einfügen und abschicken (ein kostenloser Account reicht).
3. Claudes Antwort zurück in ATLAS einfügen und auf "Analyse auswerten" klicken.

ATLAS liest daraus Zusammenfassung, Erfolgsquote, Highlights, Probleme und Empfehlungen aus und stellt sie in der gewohnten Ansicht dar. Alternativ kann die Session auch ganz ohne KI-Analyse gespeichert werden ("Ohne Analyse speichern").

## Wichtig

- Daten liegen nur im `localStorage` des jeweiligen Browsers — beim Wechsel des Browsers/Geräts ist der Verlauf nicht verfügbar.
- Es wird zu keinem Zeitpunkt automatisch eine externe API aufgerufen — die Analyse läuft ausschließlich über den manuellen Copy-Paste-Schritt bei claude.ai.
