/**
 * NavBar.jsx - Seitliche Navigationsleiste für Kurs-Kapitel
 * 
 * Diese Komponente rendert die linke Sidebar mit der Kapitel-Navigation für das
 * aktuelle Topic. Sie zeigt alle verfügbaren Kapitel in gruppierter Form an.
 * 
 * Funktionalität:
 * - Zeigt Titel des aktuellen Topics (z.B. "HTML")
 * - Rendert Kapitel-Liste aus navigationPages
 * - Unterstützt zwei Strukturen:
 *   1. Gruppierte Kapitel: {heading: "Gruppe", pages: [...]}
 *   2. Einzelne Kapitel: {id: "...", titel: "..."}
 * - Markiert aktives Kapitel basierend auf URL
 * - Generiert Links im Format /{topic}/{chapter-id}
 * 
 * Props:
 * - navigationPages: Array von Navigations-Objekten aus coursData.js
 *                    Kann Gruppen mit heading/pages oder einzelne Seiten enthalten
 * - topic: Aktuelles Topic (html, css, js) - wird für Link-Generierung verwendet
 * - titel: Anzeigename des Topics (z.B. "HTML") - wird als Überschrift angezeigt
 * 
 * Datenfluss:
 * App.jsx → courseData[topic] → currentTopic.navigationPages → NavBar
 * NavBar rendert Links → User klickt → React Router navigiert → Content.jsx lädt neues Kapitel
 * 
 * Abhängigkeiten:
 * - react-router-dom: Für Navigation und aktive Link-Erkennung
 * - data/coursData.js: Datenquelle für navigationPages
 * 
 * Verwendung:
 * - Wird von App.jsx gerendert, wenn ein Topic-Kapitel angezeigt wird
 * - Nicht auf statischen Seiten (Index, About, Imprint) sichtbar
 */

import {NavLink} from "react-router-dom";
import '../App.css'

function NavBar({navigationPages, topic, titel}) {
    return (

        <div className="nav-container">
            {/* Überschrift: Zeigt Titel des aktuellen Topics */}
            <h3>{titel}</h3>
            
            {/* Navigation: Rendert alle Kapitel des Topics */}
            <nav>
                {navigationPages?.map((item, index) => {

                    // Fall 1: Gruppierte Kapitel mit Überschrift
                    // Struktur: {heading: "Gruppe", pages: [{id, titel}, ...]}
                    // Beispiel: "Einführung in HTML" → [Start, WasIstHTML, ...]
                    if (item.heading) {
                        return (
                            <div key={index}>
                                {/* Gruppen-Überschrift */}
                                <h4>{item.heading}</h4>

                                {/* Kapitel-Links innerhalb der Gruppe */}
                                {item.pages.map((page) => (

                                    <NavLink
                                        key={page.id}
                                        to={`/${topic}/${page.id}`}
                                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    >
                                        {page.titel}
                                    </NavLink>
                                ))}
                            </div>
                        );
                    }

                    // Fall 2: Einzelnes Kapitel ohne Gruppe
                    // Struktur: {id: "...", titel: "..."}
                    // Wird direkt als Link gerendert
                    return (
                        <NavLink
                            key={item.id}
                            to={`/${topic}/${item.id}`}
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            {item.titel}
                        </NavLink>
                    );
                })}
            </nav>
        </div>
    );
}

export default NavBar;