import {NavLink} from "react-router-dom";
import '../App.css'

function NavBar({navigationPages, topic, titel}) {
    return (

        <div className="nav-container">
            <h3>{titel}</h3>
            <nav>
                {navigationPages.map((item, index) => {

                    // ✅ Falls es eine Gruppe mit Heading ist
                    if (item.heading) {
                        return (
                            <div key={index}>
                                <h4>{item.heading}</h4>

                                {item.pages.map((page) => (
                                    <NavLink
                                        key={page.id}
                                        to={`/${topic}/${page.id}`}
                                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    >
                                        {page.titel}
                                    </NavLink>
                                ))}
                            </div>
                        );
                    }

                    // ✅ Normale Seite
                    return (
                        <NavLink
                            key={item.id}
                            to={`/${topic}/${item.id}`}
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            {item.titel}
                        </NavLink>
                    );
                })}
            </nav>
        </div>
    );
}

export default NavBar;