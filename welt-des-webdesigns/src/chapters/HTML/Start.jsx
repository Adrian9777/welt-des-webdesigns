/**
 * Start.jsx - HTML Start-Kapitel
 * 
 * Diese Komponente ist das erste Kapitel im HTML-Kurs. Sie begrüßt neue Benutzer
 * und gibt einen Überblick über die Zielgruppe und Lernziele.
 * 
 * Funktionalität:
 * - Zeigt Willkommensnachricht
 * - Beschreibt Zielgruppe der Webseite
 * - Listet Lernziele auf
 * - Bietet Navigation zum nächsten Kapitel (WasIstHTML)
 * 
 * Route:
 * - Erreichbar über "/html/start"
 * - Wird als Standard-Startseite verwendet (Redirect von "/")
 * 
 * Datenfluss:
 * URL: /html/start → App.jsx → Content.jsx
 * → chapterConfig["start"] → Start-Komponente wird gerendert
 * 
 * Abhängigkeiten:
 * - components/NextChapterBox.jsx: Navigations-Box zum nächsten Kapitel
 * - chapters/config.jsx: Registriert als "start"
 * - data/coursData.js: ID "start" in HTML navigationPages
 * - App.css: Styling (.pages Klasse)
 * 
 * Kapitel-Struktur:
 * - Überschrift: "Start"
 * - Zielgruppe: Liste der Zielgruppen
 * - Lernziele: Liste der Lernziele
 * - NextChapterBox: Navigation zu "WasIstHTML"
 */

import NextChapterBox from "../../components/NextChapterBox.jsx";

function Start(){
    return (
        <div className="pages">
            {/* Hauptüberschrift des Kapitels */}
            <h2>Start</h2>
            
            {/* Zielgruppe: Beschreibt, für wen die Webseite gedacht ist */}
            <h3>Für wen ist die Webseite gedacht?</h3>
            <ul>
                <li>Anfänger ohne Vorkenntnisse</li>
                <li>Schüler, Studirende und Selbstlerner</li>
                <li>Alle die webseiten verstehen oder erstellen möchten</li>
            </ul>
            
            {/* Lernziele: Beschreibt, was Benutzer lernen werden */}
            <h3>Was lernst du hier?</h3>
            <ul>
                <li>HTML-Dokumente selbst schreiben</li>
                <li>Webseiten sinvoll strukturieren</li>
                <li>Sauberen und verständlichen Code erstellen</li>
                <li>Eine solides wissen über HTML, CSS und Javascript</li>
            </ul>
            
            {/* Navigations-Box: Führt zum nächsten Kapitel "WasIstHTML"
                topic kann JSX enthalten für Formatierung */}
            <NextChapterBox
                topic={
                    <>
                        was HTML ist.
                    </>
                }
                path={
               "/html/WasIstHTML"
                }
            />
        </div>
    )
}
export default Start;