import React from "react";
import './NavBar.css'

const NavBar= (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="hero-text" href="#home"><h1 style={{margin: '10px'}}>Social<big className="text-blue">Feed</big></h1></a>
        </nav>
    )
}
export default NavBar