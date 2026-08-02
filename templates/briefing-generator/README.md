# AII Kundenbriefing-Generator

Eine eigenständige, doppelklickbare Seite: Formular ausfüllen → unten steht der fertige Briefing-Text (mit `/kunde ...` am Anfang) → auf "In Zwischenablage kopieren" klicken → im Chat mit Claude Code einfügen und absenden.

Kein Server, kein Terminal, keine KI-Anbindung — reine Texterzeugung im Browser, läuft komplett offline.

## Öffnen

`templates/briefing-generator/index.html` doppelklicken. Öffnet sich im Standardbrowser.

## Nutzung

1. Oben die passende Leistung wählen (Website, Chatbot, oder "Andere Leistung" für alles, wofür es noch kein eigenes Template gibt, z.B. KI-Agent).
2. Links die Felder ausfüllen — rechts baut sich der Text live zusammen.
3. "In Zwischenablage kopieren" klicken (klappt es nicht automatisch: Text im Feld markieren und selbst kopieren).
4. Den Text im Chat mit Claude Code einfügen und absenden — durch das vorangestellte `/kunde` startet automatisch der Kundenprojekt-Workflow (siehe `.claude/commands/kunde.md`).

## Erweitern

Neue Felder für eine Leistung: in `index.html` im passenden `<section data-service-fields="...">`-Block ein `<label>` mit `data-key="..."` ergänzen, und in `app.js` in der zugehörigen `build*Brief()`-Funktion eine `line(...)`/`block(...)`-Zeile mit demselben Key hinzufügen.
