/**
 * CSSIntro.jsx - CSS Einführungskapitel
 * 
 * Diese Komponente soll CSS einführen. Aktuell nur als Platzhalter implementiert.
 * 
 * Funktionalität:
 * - Zeigt Überschrift "CSS Intro"
 * - Aktuell noch ohne Inhalt (TODO: CSS-Einführung hinzufügen)
 * 
 * Route:
 * - Erreichbar über "/css/cssIntro" (wenn in coursData.js registriert)
 * - Aktuell nicht in coursData.js registriert, aber in config.jsx importiert
 * 
 * Datenfluss:
 * URL: /css/cssIntro → App.jsx → Content.jsx
 * → chapterConfig["cssIntro"] existiert nicht → DefaultPage wird geladen
 * 
 * Hinweis:
 * - Komponente ist importiert in config.jsx, aber nicht registriert
 * - Sollte in chapterConfig hinzugefügt werden, wenn verwendet werden soll
 * - Oder sollte in coursData.js registriert werden
 * 
 * Abhängigkeiten:
 * - chapters/config.jsx: Importiert, aber nicht registriert
 * 
 * Erweiterungsmöglichkeiten:
 * - Erklärung von CSS (Cascading Style Sheets)
 * - Rolle von CSS bei Webentwicklung
 * - Zusammenhang mit HTML
 * - NextChapterBox für Navigation
 */

function CSSIntro(){
    return (
        <h1>CSS Intro</h1>
    )
}
export default CSSIntro;