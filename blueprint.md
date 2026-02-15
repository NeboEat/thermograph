# Blueprint: Thermografie-Check Website

## 1. Überblick

**Zweck:** Eine professionelle, vertrauenswürdige One-Page-Website für ein lokales Nebengewerbe, das qualitative thermografische Inspektionen für Wohngebäude anbietet.

**Zielgruppe:** Hausbesitzer von Ein- und kleinen Mehrfamilienhäusern, die eine Entscheidungsgrundlage vor Sanierungsmaßnahmen (Dämmung, Fenster, Heizung) suchen.

**Sprache:** Deutsch

**Ton:** Kompetent, ruhig, lokal, nicht verkäuferisch.

---

## 2. Projekt-Struktur & Design

### **Dateien**
- `index.html`: Die Hauptseite mit der gesamten Inhaltsstruktur.
- `style.css`: Das Stylesheet für ein professionelles, warmes und einladendes Design.
- `blueprint.md`: Diese Datei.

### **Design-Philosophie**
- **Farben:** Ein warmes, helles Farbschema.
    - Hintergrund (`--bg`): Warmes Weiß (`#fdfdfc`)
    - Karten/Sektionen (`--card`): Reines Weiß (`#ffffff`) mit dezentem Schatten.
    - Text (`--text`): Dunkles Grau/Schwarz (`#1f2937`) für gute Lesbarkeit.
    - Gedämpfter Text (`--muted`): Ein weicheres Grau (`#6b7280`).
    - Akzente (`--accent`, `--accent2`): Warme, vertrauenswürdige Gelb- und Bernsteintöne (`#f59e0b`, `#fbbf24`), die an Wärme und Energie erinnern.
- **Schriftart:** Eine saubere, moderne und gut lesbare Sans-Serif-Schrift (`ui-sans-serif, system-ui, ...`).
- **Layout:** Klar strukturiert, großzügige Abstände, mobilfreundlich (responsive).

---

## 3. Inhalts-Sektionen (Aufbau in `index.html`)

1.  **`<header>` (Kopfzeile)**
    - **Logo & Markenname:** "Thermografie-Check" mit einem einfachen, passenden Logo.
    - **Navigation (`<nav>`):** Anker-Links zu den Hauptsektionen:
        - `Leistung`
        - `Ablauf`
        - `Preise`
        - `Häufige Fragen`
        - `Kontakt`

2.  **`Hero`-Sektion**
    - **Titel (`<h1>`):** Eine klare Frage, die den Schmerzpunkt der Zielgruppe trifft: "Wo verliert Ihr Haus Wärme?"
    - **Untertitel (`<p class="sub">`):** Eine prägnante Beschreibung des Service, die den Fokus auf "Sichtprüfung" und "Entscheidungshilfe" legt.
    - **Badges:** Drei kurze, vertrauensbildende Merkmale: "Unabhängig", "Schnell", "Transparent".
    - **Call-to-Action Buttons:**
        - Primärer Button: "Termin anfragen" (verlinkt zur Kontaktsektion).
        - Sekundärer Button: "Was Sie bekommen" (verlinkt zur Leistungssektion).
    - **Grid (3-Spalten):** Kurze Zusammenfassung der Kernpunkte: "Was erkannt wird", "Was Sie erhalten", "Wichtig" (Abgrenzung).

3.  **`Leistung im Detail`-Sektion (`id="leistung"`)**
    - **Titel:** "Leistung im Detail".
    - **Zwei Spalten (`<div class="two">`):**
        - **Enthalten:** Klare Auflistung dessen, was der Service beinhaltet (Innen-/Außenaufnahmen, Fokusbereiche, PDF-Bericht).
        - **Nicht enthalten:** Deutliche Abgrenzung, was der Service NICHT ist (Energieausweis, Fördermittelberatung, etc.). Dies ist entscheidend zur Risikominimierung.

4.  **`Ablauf`-Sektion (`id="ablauf"`)**
    - **Titel:** "Ablauf".
    - **Grid (3-Spalten):** Der Prozess in drei einfachen Schritten erklärt:
        1.  Bedingungen prüfen
        2.  Baseline-Scan
        3.  Vergleichs-Scan

5.  **`Preise`-Sektion (`id="preise"`)**
    - **Titel:** "Preise".
    - **Zwei Spalten (`<div class="two">`):**
        - **Standard Wohnhaus:** Das Basis-Paket mit Preis und den wichtigsten Eckdaten (Fläche, Anfahrt, Lieferzeit).
        - **Optionen:** Preise für Zusatzleistungen wie größere Flächen, Mehrfamilienhäuser und weitere Anfahrtswege.

6.  **`Häufig gestellte Fragen`-Sektion (`id="faq"`)**
    - **Titel:** "Häufig gestellte Fragen".
    - **Accordion (`<details>`):** Die vier wichtigsten Fragen und Antworten, um Unsicherheiten abzubauen:
        - Wann lohnt sich der Check?
        - Kann man Einsparungen berechnen? (Wichtige Abgrenzung!)
        - Welche Voraussetzungen gibt es?
        - Datenschutz / Fotos?

7.  **`Kontakt`-Sektion (`id="kontakt"`)**
    - **Titel:** "Kontakt".
    - **Zwei Spalten:**
        - **Linke Spalte:** Anleitung, wie man am schnellsten eine Anfrage stellt (per E-Mail mit den wichtigsten Infos).
        - **Rechte Spalte:** Ein einfaches (nicht-funktionales) Formular, das die benötigten Informationen visuell darstellt und zu einem "E-Mail senden" Button (`mailto:`) führt.

8.  **`Hinweis (rechtlich & fachlich)`-Sektion (`id="recht"`)**
    - **Titel:** "Hinweis (rechtlich & fachlich)".
    - **Disclaimer-Text:** Ein klar formulierter Absatz, der die Leistung als "qualitative thermografische Sichtprüfung" definiert und von zertifizierten Beratungen abgrenzt. Dieser Text ist für den rechtlichen Schutz unerlässlich.

9.  **`<footer>` (Fußzeile)**
    - **Copyright:** "© [Jahr] Thermografie-Check".
    - **Links:** Wiederholung der wichtigsten Links (Hinweis, Kontakt, Preise, Ablauf).

---

## 4. Implementierungsplan

1.  **Struktur in `index.html` erstellen:** Alle oben genannten Sektionen mit den passenden HTML-Tags und IDs anlegen.
2.  **Styling in `style.css` definieren:** Das Farbschema, die Schriftarten, das Layout und die responsiven Eigenschaften implementieren.
3.  **Inhalte einfügen:** Alle deutschen Texte in die `index.html`-Struktur einpflegen.
4.  **Verlinkungen prüfen:** Sicherstellen, dass alle internen Anker-Links und der `mailto:`-Link korrekt funktionieren.
5.  **Finale Überprüfung:** Die Website auf verschiedenen Geräten testen und die Inhalte auf Klarheit und Korrektheit überprüfen.
