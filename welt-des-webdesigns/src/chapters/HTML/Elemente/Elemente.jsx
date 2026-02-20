/**
 * Elemente.jsx - HTML Elemente-Kapitel
 * 
 * Diese Komponente soll HTML-Elemente erklären. Aktuell nur als Platzhalter implementiert.
 * 
 * Funktionalität:
 * - Zeigt Überschrift "Elemente"
 * - Aktuell noch ohne Inhalt (TODO: HTML-Elemente erklären)
 * 
 * Route:
 * - Erreichbar über "/html/elemente"
 * - Wird in coursData.js unter "HTML Elemente und Attribute" → "Elemente" registriert
 * 
 * Datenfluss:
 * URL: /html/elemente → App.jsx → Content.jsx
 * → chapterConfig["elemente"] → Elemente-Komponente wird gerendert
 * 
 * Abhängigkeiten:
 * - chapters/config.jsx: Registriert als "elemente"
 * - data/coursData.js: ID "elemente" in HTML navigationPages
 * 
 * Erweiterungsmöglichkeiten:
 * - Erklärung von HTML-Elementen
 * - Beispiele für verschiedene Elemente
 * - Syntax und Verwendung
 * - NextChapterBox für Navigation zu nächstem Kapitel
 */
import "./Elemente.module.scss"
function Elemente(){
    return(
        <div>
            {/* Hauptüberschrift: Kapitel-Thema */}
            <h2>Elemente</h2>
            <p>Die meisten HTML-Elemente bestehen aud einem öffneden Tag, einem Inhalt und einem schließenden Tag.
                Es gibt allerdings Ausnahmen wie z.B. &lt;br&gt; welches ein Zeilenumbruch erzeugt oder &lt;hr&gt; welches eine horizontale Linie erzeugt</p>
            <span>&lt;Start-Tag&gt;Inhalt&lt;/End-Tag&gt;</span>
            <table>
                <thead>
                <tr>
                    <th>Start tag</th>
                    <th>Element Inhalt</th>
                    <th>End tag</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>&lt;h1&gt;</td>
                    <td>Meine erste Überschrift</td>
                    <td>&lt;/h1&gt;</td>
                </tr>
                <tr>
                    <td>&lt;p&gt;</td>
                    <td>Mein erster Absatz</td>
                    <td>&lt;/p&gt;</td>
                </tr>
                <tr>
                    <td>&lt;br&gt;</td>
                    <td><em>kein</em></td>
                    <td><em>kein</em></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Elemente;