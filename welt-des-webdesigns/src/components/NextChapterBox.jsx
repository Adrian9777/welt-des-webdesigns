/**
 * NextChapterBox.jsx - Navigations-Box zum nächsten Kapitel
 * 
 * Diese Komponente zeigt eine Box am Ende eines Kapitels an, die den Benutzer
 * zum nächsten Kapitel weiterleitet. Sie wird innerhalb von Chapter-Komponenten verwendet.
 * 
 * Funktionalität:
 * - Zeigt Vorschau-Text über das nächste Kapitel
 * - Button zum Navigieren zum nächsten Kapitel
 * - Verwendet React Router's useNavigate für programmatische Navigation
 * 
 * Props:
 * - topic: React-Node oder String mit Beschreibung des nächsten Kapitels
 *          Beispiel: "was HTML ist." oder JSX-Element
 * - path: String mit Pfad zum nächsten Kapitel
 *         Beispiel: "/html/WasIstHTML"
 * 
 * Verwendung:
 * - Wird innerhalb von Chapter-Komponenten gerendert (z.B. Start.jsx, WasIstHTML.jsx)
 * - Position: Am Ende des Kapitel-Inhalts
 * 
 * Beispiel:
 * <NextChapterBox
 *     topic="was HTML ist."
 *     path="/html/WasIstHTML"
 * />
 * 
 * Abhängigkeiten:
 * - react-router-dom: useNavigate Hook für Navigation
 * - App.css: Styling (.box Klasse)
 * 
 * Styling:
 * - .box: Container-Stil (grauer Hintergrund, abgerundete Ecken)
 * - Button: Blauer Button mit Pfeil-Icon
 */

import '../index.css'
import {useNavigate} from "react-router-dom";

function NextChapterBox({topic, path}){
    // React Router Hook für programmatische Navigation
    const navigate = useNavigate()
    
    // Callback-Funktion, die beim Button-Klick aufgerufen wird
    // replace: true ersetzt aktuellen Eintrag im Browser-History (kein Zurück möglich)
    const navigatePath = ()=> {navigate(path, {replace: true})}
    
    return (
        <div className="box">
            {/* Vorschau-Text: Beschreibt, was im nächsten Kapitel gelernt wird
                topic kann String oder React-Node sein (für Formatierung) */}
            <p>Ìm folgendem Kapitel lernst du {topic}</p>
            
            {/* Navigations-Button: Führt zum nächsten Kapitel
                span "weiter" wird auf mobilen Geräten versteckt (via CSS) */}
            <button onClick={navigatePath}><span>weiter</span>»</button>
        </div>
    )
}
export default NextChapterBox;