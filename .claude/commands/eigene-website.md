---
description: Änderungen an der eigenen AII-Marketingwebsite vornehmen (nicht an Kundenprojekten/Templates)
---

Der Nutzer betreibt AII (Artificial Intelligence Integration) und will jetzt etwas an **seiner eigenen** Marketing-/Firmenwebsite ändern — also an der Seite, die für AII selbst wirbt (`index.html`, `css/style.css`, `js/background.js`, `js/hero-orb.js`, `js/main.js`, `vendor/` im Wurzelverzeichnis dieses Repos).

**Wichtig zur Abgrenzung:** Das hier ist NICHT `templates/` (die wiederverwendbaren Vorlagen für Kundenprojekte) und NICHT `kunden/` (falls vorhanden — konkrete Kundenprojekte). Wenn der Nutzer eigentlich ein Kundenprojekt meint, das gehört zu `/kunde`, nicht hierher — im Zweifel kurz nachfragen.

Gehe so vor:

1. Lies den Nutzertext unten — das ist die gewünschte Änderung an der eigenen Website (Text, Design, neue Sektion, Bugfix, etc.).
2. Setze die Änderung in `index.html` / `css/style.css` / `js/*.js` um. Halt dich an die Konventionen aus `CLAUDE.md` (deutsche Copy, dunkles Blau-Theme, `prefers-reduced-motion` beachten, keine externen Laufzeit-Abhängigkeiten).
3. Prüfe das Ergebnis kurz (lokal starten, ggf. Screenshot), bevor du fertig meldest.
4. Frag nach, falls die Änderung mehrdeutig ist oder Design-Entscheidungen offen sind, statt einfach zu raten.

Nutzertext nach diesem Befehl (kann auch leer sein — dann nachfragen, was geändert werden soll):

$ARGUMENTS
