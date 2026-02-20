/**
 * coursData.js - Zentrale Datenstruktur für alle Kursinhalte
 * 
 * Diese Datei definiert die komplette Struktur aller verfügbaren Kurse (HTML, CSS, JavaScript).
 * Sie wird von App.jsx verwendet, um die Navigation und Kapitel-Liste zu generieren.
 * 
 * Datenstruktur:
 * - Top-Level: courseData[topic] (z.B. courseData.html)
 *   - titel: Anzeigename des Topics (z.B. "HTML")
 *   - navigationPages: Array von Navigations-Gruppen
 *     - heading: Gruppen-Überschrift (z.B. "Einführung in HTML")
 *     - pages: Array von Kapiteln
 *       - id: Eindeutige ID (muss mit chapterConfig.jsx übereinstimmen)
 *       - titel: Anzeigename des Kapitels
 * 
 * Verwendung:
 * - App.jsx: Lädt currentTopic = courseData[topic] für Navigation
 * - NavBar.jsx: Rendert navigationPages als Navigationsstruktur
 * - Content.jsx: Verwendet chapter-id, um Komponente aus chapterConfig zu laden
 * 
 * Wichtig: Die id-Werte müssen exakt mit den Keys in chapters/config.jsx übereinstimmen!
 * 
 * Beispiel-Flow:
 * URL: /html/start
 * → App.jsx: courseData["html"] → currentTopic
 * → NavBar: currentTopic.navigationPages → zeigt Kapitel-Liste
 * → Content: chapter="start" → chapterConfig["start"] → Start-Komponente
 */

const courseData = {
    html: {
        titel: "HTML",
        navigationPages: [
            {
                heading: "Einführung in HTML",
                pages: [
                    {id: "start", titel: "Start"},
                    {id: "WasIstHTML", titel: "Was ist HTML?"},
                    {id: "wasBraucheIchUmAnzufangen", titel: "Was brauche ich um anzufangen?"}
                ]
            },
            {
                heading: "HTML Elemente und Attribute",
                pages: [
                    {id: "elemente", titel: "Elemente"},
                    {id: "attribute", titel: "Attribute"},
                ]
            },
            {
                heading: "Aufbau eines HTML Dokuments",
                pages: [
                    {id: "grundstruktur", titel: "Die Grundstruktur (<!DOCTYPE>, <html>, <head>, <body>)"},
                    {id: "mataTags&zeichencodierung", titel: "Meta-Tags und Zeichencodierung"},
                ]
            },
            {
                heading: "Textstrukturierung",
                pages: [
                    {id: "ueberschriften", titel: "Überschriften (<h1>-<h6>)"},
                    {id: "absaetze", titel: "Absätze (<p>)"},
                    {id: "textformatierungen", titel: "Textformatierung (<strong>, <em>, <mark> etc.)"},
                    {id: "kommentare", titel: "Kommentare"}
                ]
            },
            {
                heading: "Listen und Tabellen",
                pages: [
                    {id: "listen", titel: "Listen"},
                    {id: "tabellen", titel: "Tabellen"},
                ]
            },
            {
                heading: "Links und Navigation",
                pages: [
                    {id: "hyperlinks", titel: "Hyperlinks (<a>)"},
                    {id: "pfade", titel: "Relative und Absolute Pfade"},
                    {id: "ankerlinks", titel: "Ankerlinks"}
                ]
            },
            {
                heading: "Bilder und Medien",
                pages: [
                    {id: "bildereinfuegen", titel: "Bilder einfügen <img>"},
                    {id: "audioeinfuegen", titel: "Audio einfügen <audio>"},
                    {id: "videoeinfuegen", titel: "Video einfügen <video>"},
                    {id: "einbettungen", titel: "Einbettungen <iframe>"}
                ]
            },
            {
                heading: "Semantisches HTML",
                pages: [
                    {id: "warumsematik", titel: "Warum Semantik wichtig ist"},
                    {id: "strukturelemente", titel: "Strukturelemente (<header>, <footer>,<main>, <section>, <article>, <nav>)"},
                    {id: "barrierefreiheit", titel: "Barrierefreiheit"},
                    {id: "seo", titel: "SEO-Grundlagen"}
                ]
            },
            {
                heading: "HTML Formulare",
                pages: [
                    {id: "formelement", titel: "Das <form> Element"},
                    {id: "eingabeFelder", titel:"Eingabefelder (Input)"},
                    {id: "textbereiche", titel: "Textbereiche <textarea>"},
                    {id: "auswahlfelder", titel: "Auswahlfelder <select>, <option>"},
                    {id: "label", titel: "Label"}
                ]
            },

        ]
    },
    css: {
        titel: "CSS",
        navigationPages: [
            {
                heading: "Einfürung in CSS",
                pages: [
                    {id: "CssStart", titel: "Start"},
                    {id: "WasIstCss", titel:"Was ist CSS?"},

                ]
            },
            {
                heading: "Einbindung von CSS",
                pages: [
                    {id: "inlineStyles", titel: "Inline Styles"},
                    {id: "interneStylesheets", titel:"Interne Stylesheets"},
                    {id: "externeStylesheets", titel:"Externe Stylesheets"},


                ]
            },
            {
                heading: "Selektoren",
                pages: [
                    {id: "selectoren", titel: "Element-, Klassen und ID-Selektoren"},
                    {id: "interneStylesheets", titel:"Interne Stylesheets"},
                    {id: "externeStylesheets", titel:"Externe Stylesheets"},


                ]
            },
        ]
    },
    js: {
        titel: "JavaScript",
        navigationPages: [
            {id: "aboutJS", titel: "Was ist Javascript?"},
        ]
    }

}
export default courseData;