import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navBar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
        </li>
        <li className="navbar__item">
                <Link className="navbar__link" to="/videos">Videos</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/collections">Collections</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/planner">Planner</Link>
            </li>
            
        </ul>    
    )
}