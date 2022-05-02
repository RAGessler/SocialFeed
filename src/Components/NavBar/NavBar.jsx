import React from "react";
import {HashLink as Link} from 'react-router-hash-link';

const NavBar= (props) => {
    return(
        <nav className="nav-bar">
            <ul>
                <li><a className='nav-a' href="">Post</a></li>
                <Link><a className='nav-a' href="/pathLink#feed">Feed</a></Link>
            </ul>
        </nav>
    )
}
export default NavBar