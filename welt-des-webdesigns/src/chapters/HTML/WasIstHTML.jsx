/**
 * WasIstHTML.jsx - HTML Einführungskapitel
 * 
 * Diese Komponente erklärt, was HTML ist und welche Rolle es bei der Webentwicklung spielt.
 * Sie ist Teil der HTML-Einführungsreihe.
 * 
 * Funktionalität:
 * - Erklärt Definition von HTML (Hyper Text Markup Language)
 * - Beschreibt die Rolle von HTML als Auszeichnungssprache
 * - Erklärt, was HTML genau macht (Inhalte, Struktur, Bedeutung)
 * - Zeigt Zusammenhang zwischen HTML, CSS und JavaScript
 * - Bietet Navigation zum nächsten Kapitel
 * 
 * Route:
 * - Erreichbar über "/html/WasIstHTML"
 * - Wird von Start.jsx über NextChapterBox verlinkt
 * 
 * Datenfluss:
 * URL: /html/WasIstHTML → App.jsx → Content.jsx
 * → chapterConfig["WasIstHTML"] → WasIstHTML-Komponente wird gerendert
 * 
 * Abhängigkeiten:
 * - components/NextChapterBox.jsx: Navigations-Box zum nächsten Kapitel
 * - chapters/config.jsx: Registriert als "WasIstHTML"
 * - data/coursData.js: ID "WasIstHTML" in HTML navigationPages
 * - App.css: Styling (.pages Klasse)
 * 
 * Kapitel-Struktur:
 * - Überschrift: "Was ist HTML?"
 * - Definition: Erklärung von HTML als Auszeichnungssprache
 * - Funktionalität: Was HTML genau macht
 * - Zusammenhang: HTML, CSS, JavaScript
 * - NextChapterBox: Navigation zu "wasBraucheIchUmAnzufangen"
 */

import NextChapterBox from "../../components/NextChapterBox.jsx";


function WasIstHTML() {
    return (
        <div className="pages">
            {/* Hauptüberschrift: Fragestellung des Kapitels */}
            <h2>Was ist HTML ?</h2>
            
            {/* Definition: Erklärt HTML als Auszeichnungssprache */}
            <p><b>HTML</b> steht für <b>Hyper Text Markup Language</b> und ist die <b>Grundlage jeder Webseite</b> im
                Internet. Es ist keine Programmiersprache, sondern eine
                 <b> Auszeichnungssprache (Markup Language)</b>. Das bedeutet HTML beschreibt die <b>Struktur und bedeutung von Inhalten.</b></p>

            {/* Funktionalität: Beschreibt, was HTML genau macht */}
            <h2>Was macht HTML genau?</h2>
            HTML legt fest:
            <ul>
                <li>welche Inhalte es gibt (Text, Bilder, Videos, Links usw.)</li>
                <li>wie diese Strukturiert sind (Überschriften, Absätze, Listen ..)</li>
                <li>welche Bedeutung inhalte haben (Navigation, Artikel, Formular ..)</li>
            </ul>
            
            {/* Zusammenhang: Erklärt Rolle von HTML, CSS und JavaScript
                Hinweis: Text enthält möglicherweise Tippfehler ("10" statt "ist", "Inaktivität" statt "Interaktivität") */}
            <br/>
            Man kann sagen HTML ist das Skelett einer Webseite.<br/>
            <b>CSS</b> ist
            für das Styling verantwortlich.<br/>
            <b>Javascript</b> übernimmt die Inaktivität.

            {/* Navigations-Box: Führt zum nächsten Kapitel "wasBraucheIchUmAnzufangen"
                Hinweis: path-Prop fehlt, sollte "/html/wasBraucheIchUmAnzufangen" sein */}
            <NextChapterBox topic="was du brauchst um Anzufangen."/>
        </div>
    )
}

export default WasIstHTML;