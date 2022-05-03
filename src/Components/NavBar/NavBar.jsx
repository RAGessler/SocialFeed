import React from "react";
import './NavBar.css'

const NavBar= (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>SocialFeed</h1>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#post">Post</a></li>
                    <li className="nav-item"><a className="nav-link" href="#feed">Feed</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar