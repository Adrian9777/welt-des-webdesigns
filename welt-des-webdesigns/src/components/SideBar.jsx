/**
 * SideBar.jsx - Rechte Sidebar-Komponente
 * 
 * Diese Komponente rendert die rechte Sidebar der Anwendung.
 * Aktuell wird sie als Platzhalter für Werbung verwendet.
 * 
 * Funktionalität:
 * - Zeigt rechte Sidebar im Grid-Layout
 * - Aktuell nur Platzhalter für zukünftige Inhalte (Werbung, Widgets, etc.)
 * 
 * Verwendung:
 * - Wird von App.jsx gerendert für Kurs-Kapitel-Seiten
 * - Wird von Index.jsx gerendert für Index-Seite
 * - Nicht auf About/Imprint-Seiten verwendet
 * 
 * Layout:
 * - Position: Rechte Spalte im Grid-Layout (grid-area: sidebar)
 * - Styling: Definiert in App.css (.sidebar)
 * 
 * Erweiterungsmöglichkeiten:
 * - Werbe-Banner
 * - Quick-Links
 * - Social Media Links
 * - Newsletter-Anmeldung
 * - Weitere Widgets
 */

function SideBar(){
    return(
        <aside className="sidebar">
            {/* Platzhalter für zukünftige Sidebar-Inhalte */}
            <h2>Werbung</h2>
        </aside>
    )
}
export default SideBar;