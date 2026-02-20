/**
 * config.jsx - Mapping zwischen Chapter-IDs und React-Komponenten
 * 
 * Diese Datei stellt die Verbindung zwischen den Chapter-IDs aus coursData.js
 * und den tatsächlichen React-Komponenten her.
 * 
 * Funktionsweise:
 * - Content.jsx verwendet diese Config, um die richtige Komponente zu laden
 * - Key = Chapter-ID (muss mit id in coursData.js übereinstimmen)
 * - Value = React-Komponente, die gerendert werden soll
 * 
 * Datenfluss:
 * URL → App.jsx extrahiert chapter → Content.jsx erhält chapter-Prop
 * → Content.jsx: chapterConfig[chapter] → lädt entsprechende Komponente
 * → Falls chapter nicht existiert → "default" (DefaultPage mit 404-Meldung)
 * 
 * Wichtig:
 * - Alle Chapter-IDs müssen hier registriert sein
 * - IDs müssen exakt mit coursData.js übereinstimmen (case-sensitive!)
 * - "default" wird als Fallback verwendet, wenn Chapter nicht existiert
 * 
 * Neue Kapitel hinzufügen:
 * 1. Komponente in entsprechendem Ordner erstellen (z.B. chapters/HTML/)
 * 2. Import hinzufügen
 * 3. Eintrag in chapterConfig hinzufügen
 * 4. ID in coursData.js registrieren
 */

import WasIstHTML from "./HTML/WasIstHTML.jsx";
import Start from "./HTML/Start.jsx";
import WasBraucheIchUmAnzufangen from "./HTML/WasBraucheIchUmAnzufangen.jsx";
import Elemente from "./HTML/Elemente/Elemente.jsx";
import CSSIntro from "./CSS/CSSIntro.jsx";
import DefaultPage from "./DefaultPage.jsx";
import CssStart from "./CSS/CssStart.jsx";


// Mapping-Objekt: Chapter-ID → React-Komponente
const chapterConfig = {
    // HTML-Kapitel
    "start": Start,                                    // HTML Start-Seite
    "WasIstHTML": WasIstHTML,                          // Was ist HTML?
    "wasBraucheIchUmAnzufangen": WasBraucheIchUmAnzufangen,  // Was brauche ich um anzufangen?
    "elemente": Elemente,                              // HTML Elemente
    
    // CSS-Kapitel
    "CssStart": CssStart,                              // CSS Start-Seite
    // CSSIntro ist importiert, aber noch nicht registriert (möglicherweise TODO)

    // Fallback: Wird angezeigt, wenn Chapter-ID nicht gefunden wird
    "default": DefaultPage                             // 404-Seite für nicht existierende Kapitel
}

export default chapterConfig;