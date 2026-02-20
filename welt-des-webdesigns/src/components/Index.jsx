/**
 * Index.jsx - Index/Übersichts-Seite
 * 
 * Diese Komponente rendert die Index-Seite der Anwendung, die eine Übersicht
 * aller verfügbaren Inhalte bieten soll.
 * 
 * Funktionalität:
 * - Zeigt Layout mit Header, Hauptinhalt und Sidebar
 * - Verwendet alternatives Layout (layout-alt) ohne NavBar
 * - Aktuell noch ohne Inhalt (TODO: Inhaltsübersicht implementieren)
 * 
 * Layout:
 * - Verwendet layout-alt CSS-Klasse (Grid ohne NavBar)
 * - Header: Obere Navigationsleiste
 * - main: Hauptinhalt-Bereich (aktuell leer)
 * - SideBar: Rechte Sidebar
 * 
 * Unterschied zu App.jsx:
 * - App.jsx: Layout für Kurs-Kapitel (mit NavBar für Kapitel-Navigation)
 * - Index.jsx: Layout für statische Seiten (ohne NavBar)
 * 
 * Route:
 * - Erreichbar über "/index"
 * - Wird in main.jsx als statische Route definiert
 * 
 * Abhängigkeiten:
 * - components/Header/Header.jsx: Header-Komponente
 * - components/SideBar.jsx: Sidebar-Komponente
 * - App.css: Styling (.layout-alt, .main, .sidebar)
 * 
 * Erweiterungsmöglichkeiten:
 * - Übersicht aller verfügbaren Kapitel
 * - Suchfunktion
 * - Kategorien-Filter
 * - Fortschrittsanzeige
 */

import Header from "./Header/Header.jsx";
import '../App.css'
import SideBar from "./SideBar.jsx";
function Index (){
    return (
        <div className="layout-alt">
            {/* Header: Obere Navigationsleiste (ohne onToggle, da kein Mobile-Menü benötigt) */}
            <Header/>
            
            {/* Hauptinhalt: Aktuell leer, soll später Inhaltsübersicht zeigen */}
            <main className="main">

            </main>
            
            {/* SideBar: Rechte Sidebar */}
            <SideBar/>
        </div>
    )
}

export default Index;