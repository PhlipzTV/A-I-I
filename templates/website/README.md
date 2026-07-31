# AII Website-Template

Generische Version der AII-Hauptseite (gleicher dunkler Blau-Look, gleicher interaktiver 3D-Hero) mit `{{PLATZHALTERN}}` statt fester AII-Texte, damit sie sich pro Kunde schnell anpassen lässt.

## Aufbau

- `index.html` — Seitenstruktur mit Platzhaltern für Branding, Hero-Texte, bis zu 4 Leistungs-Karten, 4 Ablauf-Schritte, Vorteile/Statistiken und Kontakt.
- `css/style.css` — unverändert von der AII-Hauptseite übernommen (Farbvariablen in `:root`, falls eine andere Akzentfarbe gewünscht ist, dort `--blue-1`/`--blue-2`/`--cyan` anpassen).
- `js/background.js`, `js/hero-orb.js` — der interaktive 3D-Hintergrund/Hero, unverändert (keine AII-spezifischen Inhalte).
- `js/main.js` — enthält `{{CONTACT_EMAIL}}` und `{{COMPANY_NAME}}` Platzhalter für das Kontaktformular.
- `vendor/three.min.js` — lokal vendored Three.js, wie im Hauptprojekt.
- `CUSTOMER_BRIEF.template.md` — hier kommt das Kundenbriefing rein.

## Für einen neuen Kunden einrichten

1. Ordner kopieren, z.B. nach `kunden/musterfirma-website`.
2. `CUSTOMER_BRIEF.template.md` zu `CUSTOMER_BRIEF.md` kopieren und ausfüllen.
3. Claude Code bitten: *"Pass das Website-Template an CUSTOMER_BRIEF.md an."* — ersetzt alle Platzhalter in `index.html` und `js/main.js`.
4. Bei Bedarf ungenutzte Leistungs-Karten löschen oder auf mehr als 4 erweitern (Struktur einfach kopieren).
5. Lokal prüfen, z.B. mit `python3 -m http.server 8080` im Ordner.

## Wichtig

- Icons in den Leistungs-Karten sind einfache Strichzeichnungs-SVGs (`stroke="currentColor"`) — beim Anpassen entweder aus der AII-Hauptseite wiederverwenden oder im selben minimalistischen Stil neu bauen, damit der Look konsistent bleibt.
- `prefers-reduced-motion` wird von den 3D-/Animationsscripten respektiert — das sollte bei Änderungen erhalten bleiben.
