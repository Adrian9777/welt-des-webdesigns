import { NavLink, useParams } from "react-router-dom";

function TopBarNav(){
    const { topic } = useParams();

    return (
        <div className="container-topNav">
            <NavLink 
                to="/html/start" 
                className={topic === "html" ? "topbar-button active" : "topbar-button 2"}
            >
                HTML
            </NavLink>
            <NavLink 
                to="/css/cssIntro" 
                className={topic === "css" ? "topbar-button active" : "topbar-button"}
            >
                CSS
            </NavLink>
            <NavLink 
                to="/js/jsIntro" 
                className={topic === "js" ? "topbar-button active" : "topbar-button"}
            >
                JavaScript
            </NavLink>
            <NavLink 
                to="/index" 
                className={({ isActive }) => isActive ? "topbar-button active" : "topbar-button"}
                end
            >
                Index
            </NavLink>
            <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "topbar-button active" : "topbar-button"}
                end
            >
                Über Uns
            </NavLink>
            <NavLink 
                to="/imprint" 
                className={({ isActive }) => isActive ? "topbar-button active" : "topbar-button"}
                end
            >
                Impressum/Datenschutz
            </NavLink>
        </div>
    )
}

export default TopBarNav;