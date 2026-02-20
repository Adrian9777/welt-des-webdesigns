/**
 * App.jsx - Hauptkomponente der Kurs-Anwendung
 * 
 * Diese Komponente ist das zentrale Layout für alle Kurs-Kapitel-Seiten.
 * Sie koordiniert alle Hauptkomponenten und verwaltet den globalen Zustand.
 * 
 * Funktionalität:
 * 1. Extrahiert topic und chapter aus der URL (z.B. /html/start → topic="html", chapter="start")
 * 2. Lädt die entsprechenden Kursdaten aus coursData.js
 * 3. Rendert das Grid-Layout mit Header, Navigation, Content und Sidebar
 * 4. Verwaltet den Mobile-Menü-Zustand (isOpen)
 * 
 * Komponenten-Hierarchie:
 * - Header: Obere Navigationsleiste mit Logo und Hauptnavigation
 * - TopBarNav: Mobile-Navigation (nur auf kleinen Bildschirmen sichtbar)
 * - NavBar: Seitliche Navigation mit Kapitel-Liste für aktuelles Topic
 * - Content: Hauptinhalt, rendert das aktuelle Kapitel basierend auf chapter-Prop
 * - SideBar: Rechte Sidebar (aktuell für Werbung)
 * 
 * Datenfluss:
 * URL → useParams() → topic/chapter → coursData[topic] → currentTopic
 * currentTopic.navigationPages → NavBar (zeigt Kapitel-Liste)
 * chapter → Content → chapterConfig[chapter] → spezifische Chapter-Komponente
 * 
 * Abhängigkeiten:
 * - data/coursData.js: Enthält Struktur aller Kurse (HTML, CSS, JS)
 * - components/Header/Header.jsx: Header-Komponente
 * - components/NavBar.jsx: Seitliche Navigation
 * - components/Content.jsx: Content-Bereich (lädt Kapitel-Komponenten)
 * - components/SideBar.jsx: Sidebar-Komponente
 * - components/TopBarNav.jsx: Mobile-Navigation
 */

import './App.css'
import './css/main.scss'
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Content from "./components/Content.jsx";
import SideBar from "./components/SideBar.jsx";
import TopBarNav from "./components/TopBarNav.jsx";
import {useParams, useNavigate} from "react-router-dom";
import courseData from "./data/coursData.js";
import {useState, useEffect} from "react";

function App() {
    // State für Mobile-Menü: steuert, ob die Sidebar-Navigation geöffnet ist
    // Wird vom Header-Burger-Menü getoggelt
    const [isOpen, setIsOpen] = useState(false)

    // Verhindert Scrollen des Body-Elements, wenn Mobile-Menü geöffnet ist
    // Cleanup-Funktion stellt Scrollen wieder her, wenn Komponente unmountet oder isOpen sich ändert
    useEffect(()=> {
     if (isOpen) {
         console.log("Effect getriggert:" + "isOpen = true")
         document.body.style.overflow = "hidden";
         return ()=> {
             console.log("Effect getriggert:" + "cleanup")
             document.body.style.overflow = "scroll"
         }
     }
    },[isOpen])
    
    // Extrahiert topic und chapter aus der URL-Parameter
    // Beispiel: /html/start → topic="html", chapter="start"
    const {topic, chapter} = useParams()
    
    // Lädt die Kursdaten für das aktuelle Topic aus coursData.js
    // Enthält navigationPages (Kapitel-Liste) und titel (z.B. "HTML")
    // Falls topic nicht existiert, ist currentTopic undefined
    const currentTopic = courseData[topic]
    
    return (
        <div className="app-layout">
            {/* Header: Obere Navigationsleiste mit Logo, Hauptnavigation und Mobile-Menü-Button
                onToggle: Callback-Funktion zum Öffnen/Schließen des Mobile-Menüs */}
            <Header onToggle={()=> setIsOpen(!isOpen)}/>
            
            {/* TopBarNav: Mobile-Navigation (nur auf kleinen Bildschirmen sichtbar)
                Zeigt horizontale Navigation für alle Topics */}
            <TopBarNav/>
            
            {/* NavBar: Seitliche Navigation mit Kapitel-Liste
                Zeigt alle Kapitel des aktuellen Topics in gruppierter Form
                className: Steuert Sichtbarkeit auf Mobile (open/close) */}
            <aside className={`navbar ${isOpen? 'open': 'close'}`}>
            <NavBar navigationPages={currentTopic?.navigationPages}
                    titel={currentTopic?.titel}
                    topic={topic}/>
            </aside>
            
            {/* Content: Hauptinhalt-Bereich
                Rendert die spezifische Chapter-Komponente basierend auf chapter-Prop
                Lädt Komponente aus chapters/config.jsx */}
            <Content chapter={chapter}/>
            
            {/* SideBar: Rechte Sidebar (aktuell für Werbung/weitere Inhalte) */}
            <SideBar/>


        </div>
    )
}

export default App
