/**
 * Imprint.jsx - Impressum/Datenschutz-Seite
 * 
 * Diese Komponente rendert die rechtlich erforderliche Impressum/Datenschutz-Seite.
 * Aktuell nur als Platzhalter implementiert.
 * 
 * Funktionalität:
 * - Zeigt rechtliche Informationen (Impressum, Datenschutzerklärung)
 * - Aktuell nur Überschrift (TODO: Inhalte hinzufügen)
 * 
 * Route:
 * - Erreichbar über "/imprint"
 * - Wird in main.jsx als statische Route definiert
 * 
 * Rechtliche Anforderungen:
 * - Impressum: Angaben gemäß TMG/DSGVO
 * - Datenschutzerklärung: Informationen zur Datenverarbeitung
 * 
 * Verwendung:
 * - Wird direkt von React Router gerendert (nicht über App.jsx)
 * - Benötigt eigenes Layout (aktuell fehlt Header/Sidebar)
 * 
 * Erweiterungsmöglichkeiten:
 * - Vollständiges Impressum mit Kontaktdaten
 * - Datenschutzerklärung gemäß DSGVO
 * - Cookie-Hinweise
 * - Nutzungsbedingungen
 */

function Imprint(){
    return (
        <h1>Impressum/Datenschutz</h1>
    )
}

export default Imprint;