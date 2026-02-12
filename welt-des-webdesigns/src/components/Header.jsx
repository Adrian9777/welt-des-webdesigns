import logo from "../img/logo.png"
import {Link} from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <img src={logo} className="logo"/>
            <div className="container">
            <Link to="/html/start"  className="topbar-button">HTML</Link>
            <Link to="/css/cssIntro"  className="topbar-button">CSS</Link>
            <Link to="/js/jsIntro" className="topbar-button">JavaScript</Link>
            </div>
            <input type="text" className="input" placeholder="suchen..."/>
            <div className="container">
            <button  className="topbar-button">Index</button>
            <button className="topbar-button">Über Uns</button>
            <button className="topbar-button">KontaktL</button>
            </div>
        </header>
    )
}

export default Header;