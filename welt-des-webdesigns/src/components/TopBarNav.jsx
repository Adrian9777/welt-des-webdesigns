/**
 * TopBarNav.jsx - Mobile-Navigationsleiste
 * 
 * Diese Komponente rendert eine horizontale Navigationsleiste, die nur auf
 * mobilen Geräten sichtbar ist. Sie bietet schnellen Zugriff auf alle Topics
 * und statischen Seiten.
 * 
 * Funktionalität:
 * - Zeigt horizontale Scroll-Navigation mit allen Topics (HTML, CSS, JavaScript)
 * - Zeigt Links zu statischen Seiten (Index, Über Uns, Impressum)
 * - Markiert aktiven Link basierend auf URL
 * - Nur auf mobilen Geräten sichtbar (via CSS @media query)
 * 
 * Responsive Verhalten:
 * - Desktop: Versteckt (display: none)
 * - Mobile (< 390px): Sichtbar als horizontale Scroll-Leiste
 * 
 * Unterschied zu Header:
 * - Header: Desktop-Navigation mit Logo, Suchfeld, etc.
 * - TopBarNav: Mobile-Navigation, kompakter, horizontal scrollbar
 * 
 * Abhängigkeiten:
 * - react-router-dom: Für Navigation und aktive Link-Erkennung
 * - App.css: Styling (.container-topNav, .topbar-button)
 * 
 * Verwendung:
 * - Wird von App.jsx gerendert für alle Kurs-Kapitel-Seiten
 * - Position: Direkt unter Header im Grid-Layout
 * 
 * CSS-Klassen:
 * - container-topNav: Container für horizontale Navigation
 * - topbar-button: Stil für einzelne Buttons
 * - active: Markiert aktiven Button
 */

import { NavLink, useParams } from "react-router-dom";

function TopBarNav(){
    // Extrahiert aktuelles Topic aus URL für aktive Button-Markierung
    const { topic } = useParams();
    
    return (
        <div className="container-topNav">
            {/* Topic-Navigation: HTML, CSS, JavaScript
                Aktiver Status basiert auf topic-Parameter aus URL */}
            <NavLink 
                to="/html/start" 
                className={topic === "html" ? "topbar-button active" : "topbar-button"}
            >
                HTML
            </NavLink>
            <NavLink 
                to="/css/cssIntro" 
                className={topic === "css" ? "topbar-button active" : "topbar-button"}
            >
                CSS
            </NavLink>
            <NavLink 
                to="/js/jsIntro" 
                className={topic === "js" ? "topbar-button active" : "topbar-button"}
            >
                JavaScript
            </NavLink>
            
            {/* Statische Seiten: Index, Über Uns, Impressum
                Aktiver Status basiert auf React Router's isActive */}
            <NavLink 
                to="/index" 
                className={({ isActive }) => isActive ? "topbar-button active" : "topbar-button"}
                end
            >
                Index
            </NavLink>
            <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "hidden-button topbar-button active" : "hidden-button topbar-button"}
                end
            >
                Über Uns
            </NavLink>
            <NavLink 
                to="/imprint" 
                className={({ isActive }) => isActive ? "hidden-button topbar-button active" : "hidden-button topbar-button"}
                end
            >
                Impressum/Datenschutz
            </NavLink>
        </div>
    )
}

export default TopBarNav;