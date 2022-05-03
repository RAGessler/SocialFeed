import React from "react";

const NavBar= (props) => {
    return(
        <nav>
            <h1>SocialFeed</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#post">Post</a></li>
                <li><a href="#feed">Feed</a></li>
            </ul>
        </nav>
    )
}
export default NavBar