# AII Kunden-Templates

Fertige Grundgerüste für Leistungen, die AII anbietet. Jeder Unterordner ist ein eigenständiges Template für **eine** Leistung — Code und Struktur sind bereits fertig, es fehlt nur noch die Anpassung an den jeweiligen Kunden.

## Ordnerübersicht

- `chatbot/` — KI-Chatbot/Assistent (Claude API + Web-Widget)
- `website/` — Firmen-Website nach AII-Design (wie diese Seite, aber generisch)

Weitere Leistungen (KI-Agenten, Automatisierung/Integration) bekommen eigene Ordner nach demselben Muster, sobald sie gebraucht werden.

## So funktioniert die Anpassung pro Kunde

Jedes Template enthält eine Datei **`CUSTOMER_BRIEF.template.md`**. Der Ablauf ist immer gleich:

1. **Kopiere** den kompletten Template-Ordner (z.B. `templates/chatbot`) in einen neuen Projektordner für den Kunden — z.B. `kunden/musterfirma-chatbot`.
2. **Öffne** darin `CUSTOMER_BRIEF.template.md` und schreib in Freitext rein, was der Kunde braucht und will (Firmenname, Branche, Ton, Leistungen, FAQs, Besonderheiten — einfach so, wie es dir gerade einfällt).
3. **Sag Claude Code:** *"Pass das Template in diesem Ordner an das Kundenbriefing in CUSTOMER_BRIEF.md an."* Claude Code liest das Briefing und füllt die Platzhalter (System-Prompt, Texte, Farben etc.) automatisch aus.
4. **Fertig prüfen, testen, ausliefern.**

Der "Grundcode" selbst (Server, Widget, HTML/CSS-Struktur) bleibt dabei unverändert — es werden nur die Inhalte/Konfiguration pro Kunde ersetzt. Das hält die Templates wartbar: Verbesserungen am Grundgerüst kannst du hier zentral pflegen und dann in laufende Kundenprojekte übernehmen.
