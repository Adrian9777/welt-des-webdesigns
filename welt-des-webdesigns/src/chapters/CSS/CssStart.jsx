/**
 * CssStart.jsx - CSS Start-Kapitel
 * 
 * Diese Komponente ist das erste Kapitel im CSS-Kurs. Aktuell nur als Platzhalter implementiert.
 * 
 * Funktionalität:
 * - Zeigt Überschrift "Start"
 * - Aktuell noch ohne Inhalt (TODO: CSS-Einführung hinzufügen)
 * 
 * Route:
 * - Erreichbar über "/css/CssStart"
 * - Wird in coursData.js unter "Einfürung in CSS" → "Start" registriert
 * 
 * Datenfluss:
 * URL: /css/CssStart → App.jsx → Content.jsx
 * → chapterConfig["CssStart"] → CssStart-Komponente wird gerendert
 * 
 * Abhängigkeiten:
 * - chapters/config.jsx: Registriert als "CssStart"
 * - data/coursData.js: ID "CssStart" in CSS navigationPages
 * 
 * Erweiterungsmöglichkeiten:
 * - Willkommensnachricht für CSS-Kurs
 * - Überblick über CSS-Themen
 * - Zielgruppe und Lernziele
 * - NextChapterBox für Navigation zu nächstem Kapitel
 */

function CssStart() {
    return(
        <div>
            {/* Hauptüberschrift: Kapitel-Thema */}
            <h2>Start</h2>
            {/* TODO: Inhalte hinzufügen */}
        </div>
    )
}

export default CssStart;