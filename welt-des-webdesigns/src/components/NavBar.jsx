import { Routes, Route, Link, Navigate } from "react-router-dom";

function NavBar({navigationPages, topic, titel}){
    return(
        <aside className="navbar">
            <h3>{titel}</h3>
            {navigationPages.map((page)=>(
                <Link
                    key={page.id}
                    to={`/${topic}/${page.id}`} >
                    {page.titel}
                </Link>
            ))}
        </aside>
    )
}

export default NavBar;