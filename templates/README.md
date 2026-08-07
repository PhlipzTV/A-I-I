# AII Kunden-Templates

Fertige Grundgerüste für Leistungen, die AII anbietet. Jeder Unterordner ist ein eigenständiges Template für **eine** Leistung — Code und Struktur sind bereits fertig, es fehlt nur noch die Anpassung an den jeweiligen Kunden.

## Ordnerübersicht

- `chatbot/` — KI-Chatbot/Assistent (Claude API + Web-Widget)
- `website/` — Firmen-Website nach AII-Design (wie diese Seite, aber generisch)
- `briefing-generator/` — leistungsübergreifendes Eingabewerkzeug: Formular ausfüllen, fertigen `/kunde`-Text kopieren, hier im Chat einfügen (siehe unten)

Weitere Leistungen (KI-Agenten, Automatisierung/Integration) bekommen eigene Ordner nach demselben Muster, sobald sie gebraucht werden.

## So funktioniert die Anpassung pro Kunde

Jedes Template enthält eine Datei **`CUSTOMER_BRIEF.template.md`**. Der Ablauf ist immer gleich:

1. **Kopiere** den kompletten Template-Ordner (z.B. `templates/chatbot`) in einen neuen Projektordner für den Kunden — z.B. `kunden/musterfirma-chatbot`.
2. **Öffne** darin `CUSTOMER_BRIEF.template.md` und schreib in Freitext rein, was der Kunde braucht und will (Firmenname, Branche, Ton, Leistungen, FAQs, Besonderheiten — einfach so, wie es dir gerade einfällt).
3. **Sag Claude Code:** *"Pass das Template in diesem Ordner an das Kundenbriefing in CUSTOMER_BRIEF.md an."* Claude Code liest das Briefing und füllt die Platzhalter (System-Prompt, Texte, Farben etc.) automatisch aus.
4. **Fertig prüfen, testen, ausliefern.**

Der "Grundcode" selbst (Server, Widget, HTML/CSS-Struktur) bleibt dabei unverändert — es werden nur die Inhalte/Konfiguration pro Kunde ersetzt. Das hält die Templates wartbar: Verbesserungen am Grundgerüst kannst du hier zentral pflegen und dann in laufende Kundenprojekte übernehmen.

## Visuelle Oberfläche statt Freitext

Für `website/` gibt es zusätzlich einen **Konfigurator** (`website/configurator/index.html`): ein Formular mit Live-Vorschau der fertigen Seite (inklusive 3D-Hero), das die Platzhalter direkt sichtbar macht statt sie in einer Markdown-Datei zu verstecken. Einfach doppelklicken — läuft offline im Browser, kein Server/Terminal nötig. Am Ende lädst du die fertigen `index.html`/`main.js` per Klick herunter — kein Claude Code nötig. Details in `templates/website/README.md`. Für `chatbot/` ist das (noch) nicht gebaut; dort läuft die Anpassung bisher über den Freitext-Weg oben.

## Slash-Command `/kunde`

In Claude Code steht der Befehl `/kunde` zur Verfügung (`.claude/commands/kunde.md`). Er markiert eindeutig: "jetzt geht es um ein neues Kundenprojekt" — unabhängig davon, worüber im Chat vorher gesprochen wurde. Einfach `/kunde` gefolgt von ein paar Stichworten zum Kunden eintippen (z.B. `/kunde Website für Sanitärfirma Schulz, Notdienst-Fokus, Kontakt info@schulz.de`), Claude Code fragt bei Bedarf nach und legt das Kundenprojekt unter `kunden/` an.

Statt die Stichworte selbst zu tippen, kannst du auch `briefing-generator/index.html` (siehe oben) benutzen — Formular ausfüllen, den fertigen `/kunde ...`-Text kopieren und hier einfügen.
