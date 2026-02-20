/**
 * WasBraucheIchUmAnzufangen.jsx - HTML Setup-Kapitel
 * 
 * Diese Komponente erklärt, welche Tools und Schritte benötigt werden, um mit HTML
 * zu beginnen. Sie ist Teil der HTML-Einführungsreihe.
 * 
 * Funktionalität:
 * - Listet benötigte Tools auf (Editor)
 * - Erklärt Dateinamen-Konventionen (index.html)
 * - Beschreibt, wie HTML-Dateien geöffnet werden
 * - Bietet Link zu Visual Studio Code
 * 
 * Route:
 * - Erreichbar über "/html/wasBraucheIchUmAnzufangen"
 * - Wird von WasIstHTML.jsx über NextChapterBox verlinkt
 * 
 * Datenfluss:
 * URL: /html/wasBraucheIchUmAnzufangen → App.jsx → Content.jsx
 * → chapterConfig["wasBraucheIchUmAnzufangen"] → WasBraucheIchUmAnzufangen-Komponente wird gerendert
 * 
 * Abhängigkeiten:
 * - chapters/config.jsx: Registriert als "wasBraucheIchUmAnzufangen"
 * - data/coursData.js: ID "wasBraucheIchUmAnzufangen" in HTML navigationPages
 * 
 * Hinweis:
 * - Fragment-Import wird nicht verwendet (kann entfernt werden)
 * - Keine NextChapterBox vorhanden (könnte hinzugefügt werden für Navigation zu Elemente)
 * 
 * Kapitel-Struktur:
 * - Überschrift: "Was brauche ich um Anzufangen?"
 * - Anleitung: Nummerierte Liste mit Setup-Schritten
 */

import {Fragment} from "react";

function WasBraucheIchUmAnzufangen() {
    return (
        <div>
            {/* Hauptüberschrift: Fragestellung des Kapitels */}
            <h2>Was brauche ich um Anzufangen?</h2>
            
            {/* Anleitung: Schritt-für-Schritt-Anleitung zum Setup
                Nummerierte Liste für sequenzielle Schritte */}
            <ol>
                {/* Schritt 1: Editor installieren */}
                <li>Als erstes Brauchst du einen Editor ein guter Editor ist <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a></li>
                
                {/* Schritt 2: Dateinamen-Konvention für Startseite */}
                <li>In den Editor Schreibst du dann Später deinen Code und speicherst die Startseite unter <b>index.html</b> ab. </li>
                
                {/* Schritt 3: Dateinamen für weitere Seiten */}
                <li>Für die anderen Seiten kannst du einen beliebigen Namen wählen und als endung mit .html abspeichern</li>
                
                {/* Schritt 4: HTML-Dateien im Browser öffnen */}
                <li>Um ergebnis anzuschauen rechts Klick auf Datei und mit Browser öffnen</li>

            </ol>

        </div>
    )
}

export default WasBraucheIchUmAnzufangen;