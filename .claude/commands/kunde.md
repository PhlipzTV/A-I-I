---
description: Neues Kundenprojekt aus den AII-Templates aufsetzen (Website, Chatbot, ...)
---

Der Nutzer betreibt AII (Artificial Intelligence Integration) und will jetzt ein neues Kundenprojekt anlegen, basierend auf den Vorlagen in `templates/` (siehe `templates/README.md`).

Gehe so vor:

1. Falls aus dem folgenden Nutzertext nicht klar hervorgeht, um welche Leistung es geht (Website, Chatbot, künftig auch KI-Agent, Automatisierung, ...), frag kurz nach.
2. Falls noch kein Kundenname/-ordner erkennbar ist, frag danach oder schlage einen Ordnernamen unter `kunden/<kundenname>-<leistung>` vor.
3. Kopiere den passenden Ordner aus `templates/<leistung>/` nach `kunden/<kundenname>-<leistung>/`.
4. Verarbeite die Beschreibung, die der Nutzer nach `/kunde` geschrieben hat, wie ein ausgefülltes `CUSTOMER_BRIEF.md` — auch wenn sie unstrukturiert/stichwortartig ist. Frag gezielt nach, falls wichtige Angaben fehlen (Firmenname, Kontakt-E-Mail, Kernleistungen).
5. Fülle die Platzhalter/Konfiguration im kopierten Ordner entsprechend aus (z.B. `index.html`/`js/main.js` bei der Website, `config/client.config.json` beim Chatbot).
6. Prüfe das Ergebnis kurz (lokal starten, ggf. Screenshot), bevor du fertig meldest.

Nutzertext nach diesem Befehl (kann auch leer sein — dann direkt nachfragen, was gebraucht wird):

$ARGUMENTS
