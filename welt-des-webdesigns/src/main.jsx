/**
 * main.jsx - Einstiegspunkt der React-Anwendung
 * 
 * Diese Datei ist der Entry-Point der gesamten Anwendung. Sie initialisiert React,
 * konfiguriert das React Router-System und definiert alle Routen der Anwendung.
 * 
 * Routen-Struktur:
 * - "/" → Weiterleitung zu "/html/start" (Standard-Startseite)
 * - "/:topic/:chapter" → Dynamische Route für Kurs-Kapitel (z.B. /html/start, /css/cssIntro)
 *                        Wird von App.jsx verarbeitet, die topic und chapter aus der URL extrahiert
 * - "/index" → Index-Seite (Übersicht aller Inhalte)
 * - "/about" → Über-uns-Seite
 * - "/imprint" → Impressum/Datenschutz-Seite
 * 
 * Abhängigkeiten:
 * - App.jsx: Hauptkomponente für Kurs-Kapitel (verwendet topic/chapter Parameter)
 * - components/Index.jsx: Index-Seite
 * - components/About.jsx: Über-uns-Seite
 * - components/Imprint.jsx: Impressum-Seite
 */

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import App from './App.jsx'
import Imprint from "./components/Imprint.jsx";
import Index from "./components/Index.jsx";
import About from "./components/About.jsx";

// Initialisierung der React-Anwendung
// StrictMode aktiviert zusätzliche Entwickler-Warnungen für besseres Debugging
createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* BrowserRouter ermöglicht Client-Side Routing */}
        <BrowserRouter>
            <Routes>
                {/* Root-Route: Weiterleitung zur Standard-Startseite (HTML Start) */}
                <Route path="/" element={<Navigate to="/html/start" replace/>} />
                
                {/* Dynamische Route für Kurs-Kapitel
                    :topic = html, css oder js (wird von App.jsx verwendet)
                    :chapter = spezifisches Kapitel (z.B. start, WasIstHTML)
                    Diese Route rendert die App-Komponente, die das Layout und Content lädt */}
                <Route path="/:topic/:chapter" element={<App/>}/>

                {/* Statische Seiten-Routen */}
                <Route path="/index" element={<Index/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/imprint" element={<Imprint/>}/>


            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
