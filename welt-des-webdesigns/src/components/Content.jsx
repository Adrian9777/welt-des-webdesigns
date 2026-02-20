/**
 * Content.jsx - Hauptinhalt-Bereich für Kurs-Kapitel
 * 
 * Diese Komponente ist verantwortlich für das Laden und Rendern der spezifischen
 * Chapter-Komponente basierend auf dem chapter-Parameter aus der URL.
 * 
 * Funktionalität:
 * - Empfängt chapter-ID als Prop (z.B. "start", "WasIstHTML")
 * - Lädt entsprechende React-Komponente aus chapterConfig.jsx
 * - Falls Chapter nicht existiert → zeigt DefaultPage (404-Meldung)
 * - Rendert die Komponente im main-Container
 * 
 * Props:
 * - chapter: String mit der Chapter-ID (z.B. "start", "WasIstHTML")
 *            Wird von App.jsx aus URL-Parameter extrahiert
 * 
 * Datenfluss:
 * URL: /html/start → App.jsx: chapter="start" → Content.jsx
 * → chapterConfig["start"] → Start-Komponente wird gerendert
 * 
 * Fallback-Verhalten:
 * Falls chapter nicht in chapterConfig existiert:
 * → chapterConfig["default"] → DefaultPage wird gerendert
 * → Zeigt 404-Meldung "Das Kapitel existiert noch nicht"
 * 
 * Abhängigkeiten:
 * - chapters/config.jsx: Mapping zwischen Chapter-IDs und Komponenten
 * - chapters/DefaultPage.jsx: Fallback-Komponente für nicht existierende Kapitel
 * 
 * Verwendung:
 * - Wird von App.jsx gerendert für alle Kurs-Kapitel-Seiten
 * - Nicht auf statischen Seiten verwendet (Index, About, Imprint haben eigenes Layout)
 */

import chapterConfig from "../chapters/config.jsx";
import DefaultPage from "../chapters/DefaultPage.jsx";

function Content({chapter}){
    // Lädt die entsprechende Chapter-Komponente aus der Config
    // chapterConfig ist ein Mapping: { "start": StartComponent, ... }
    let ActiveChapterComponent = chapterConfig[chapter]
    
    // Fallback: Falls Chapter nicht existiert, verwende DefaultPage
    // Dies passiert, wenn:
    // 1. Chapter-ID nicht in chapterConfig registriert ist
    // 2. URL ungültiges Kapitel enthält
    if (!ActiveChapterComponent){
        ActiveChapterComponent = chapterConfig["default"]
    }
    
    return (
        <main className="main">
            {/* Rendert die spezifische Chapter-Komponente
                Jede Chapter-Komponente enthält den eigentlichen Kursinhalt */}
            <ActiveChapterComponent/>
        </main>
    )
}

export default Content;