/**
 * DefaultPage.jsx - Fallback-Komponente für nicht existierende Kapitel
 * 
 * Diese Komponente wird angezeigt, wenn ein Benutzer versucht, auf ein Kapitel
 * zuzugreifen, das nicht existiert oder noch nicht implementiert wurde.
 * 
 * Funktionalität:
 * - Zeigt 404-ähnliche Fehlermeldung
 * - Informiert Benutzer, dass das Kapitel noch nicht existiert
 * 
 * Verwendung:
 * - Wird automatisch von Content.jsx geladen, wenn chapter-ID nicht in chapterConfig existiert
 * - Dient als Fallback in chapterConfig["default"]
 * 
 * Datenfluss:
 * URL: /html/ungueltigesKapitel → App.jsx → Content.jsx
 * → chapterConfig["ungueltigesKapitel"] existiert nicht
 * → Content.jsx lädt chapterConfig["default"] → DefaultPage
 * 
 * Abhängigkeiten:
 * - chapters/config.jsx: Registriert als "default" Fallback
 * - components/Content.jsx: Lädt diese Komponente bei fehlendem Kapitel
 * 
 * Erweiterungsmöglichkeiten:
 * - Link zurück zur Startseite
 * - Vorschlag ähnlicher Kapitel
 * - Suchfunktion
 */

function DefaultPage(){
    return (
       <div>
           {/* Fehlermeldung: Informiert Benutzer, dass Kapitel nicht existiert */}
           <h1>404- Das Kapitel exsistiert noch nicht</h1>
       </div>
    )
}
export default DefaultPage;