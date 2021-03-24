import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Form, FormControl, Button } from "react-bootstrap"


export const NavBar = (props) => {
    return (

        <>
            {/*<ul className="navBar">
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
            
        </ul> */}
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        src="https://i.imgur.com/lWKMaoG.png"
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="Spotter logo" />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="nav-link" href="/videos">Videos</Nav.Link>
                    <Nav.Link className="nav-link" href="/workouts">Workouts</Nav.Link>
                    {/* <Nav.Link href="/collections">Collections</Nav.Link> */}
                    <Nav.Link className="nav-link" href="/planner">Planner</Nav.Link>    
                </Nav>
                <Navbar.Toggle />
                    <Navbar.Collapse  className="justify-content-end">
                        
                            <Nav.Link className="nav-link" variant="dark" href="/login" onClick={() => {
                            sessionStorage.clear()}}>
                                Logout
                            </Nav.Link>
                                
                        
                    </Navbar.Collapse>
            </Navbar>
        </>
    )
}