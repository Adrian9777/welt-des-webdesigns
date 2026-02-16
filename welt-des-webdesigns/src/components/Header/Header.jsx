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
            
            {/* Login Button */}
            <button className={styles.loginBtn} title="Anmelden" aria-label="Benutzer anmelden">
                <User size={20} />
            </button>
            
            {/* Mobile Hamburger Menu */}
            <button className={styles.burger} onClick={onToggle} aria-label="Toggle navigation">
                <Menu size={24} />
            </button>
        </header>
    )
}

export default Header;