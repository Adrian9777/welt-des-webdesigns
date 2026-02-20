/**
 * Header.jsx - Haupt-Navigationsleiste der Anwendung
 * 
 * Diese Komponente rendert die obere Navigationsleiste mit Logo, Hauptnavigation,
 * Suchfeld und sekundärer Navigation. Sie ist auf allen Seiten sichtbar.
 * 
 * Funktionalität:
 * - Zeigt Logo der Anwendung
 * - Hauptnavigation: Links zu Topics (HTML, CSS, JavaScript)
 *   - Aktiv-Status basiert auf URL-Parameter "topic"
 * - Suchfeld: Für zukünftige Suchfunktionalität (aktuell noch nicht implementiert)
 * - Sekundäre Navigation: Index, Über Uns, Impressum
 * - Mobile-Menü-Button: Öffnet/schließt Sidebar-Navigation auf mobilen Geräten
 * 
 * Props:
 * - onToggle: Callback-Funktion, die von App.jsx übergeben wird
 *             Wird aufgerufen, wenn Burger-Menü geklickt wird
 *             Toggelt isOpen-State in App.jsx
 * 
 * Abhängigkeiten:
 * - react-router-dom: Für Navigation und aktive Link-Erkennung
 * - lucide-react: Für Icons (Menu)
 * - Header.module.scss: Styling für Header-Komponente
 * 
 * Verwendung:
 * - Wird von App.jsx gerendert (für Kurs-Seiten)
 * - Wird von Index.jsx, About.jsx, Imprint.jsx gerendert (für statische Seiten)
 * 
 * Responsive Verhalten:
 * - Desktop: Zeigt alle Navigationselemente
 * - Mobile: Versteckt Hauptnavigation, zeigt nur Burger-Menü
 */

import logo from "../../img/logo.png"
import {NavLink, useParams} from "react-router-dom";
import {User, Menu} from "lucide-react";
import styles from './Header.module.scss';

function Header({onToggle}){
    const { topic } = useParams();
    
    const navItems = [
        { path: "/html/start", label: "HTML", type: "topic", value: "html" },
        { path: "/css/cssIntro", label: "CSS", type: "topic", value: "css" },
        { path: "/js/jsIntro", label: "JavaScript", type: "topic", value: "js" },
    ];
    
    const staticItems = [
        { path: "/index", label: "Index" },
        { path: "/about", label: "Über Uns" },
        { path: "/imprint", label: "Impressum/Datenschutz" },
    ];
    
    const getNavClass = (item) => {
        const isActive = item.type === "topic" ? topic === item.value : false;
        return isActive ? `${styles.navButton} ${styles.active}` : styles.navButton;
    };
    
    return(
        <header className={styles.header}>
            {/* Logo Section */}
            <div className={styles.logoSection}>
                <img src={logo} className={styles.logo} alt="Logo"/>
            </div>
            
            {/* Main Navigation */}
            <nav className={styles.mainNav}>
                <div className={styles.navContainer}>
                    {navItems.map((item) => (
                        <NavLink key={item.path} to={item.path} className={getNavClass(item)}>
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </nav>
            
            {/* Search Input */}
            <input type="text" className={styles.searchInput} placeholder="Suchen..."/>
            
            {/* Secondary Navigation & User */}
            <nav className={styles.secondaryNav}>
                {staticItems.map((item) => (
                    <NavLink 
                        key={item.path} 
                        to={item.path} 
                        className={({ isActive }) => isActive ? `${styles.navButton} ${styles.active}` : styles.navButton} 
                        end
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            
            {/* Mobile Hamburger Menu */}
            <button className={styles.burger} onClick={onToggle} aria-label="Toggle navigation">
                <Menu size={24} />
            </button>
        </header>
    )
}

export default Header;