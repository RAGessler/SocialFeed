//The layout and display of a single post
import React from 'react';

const DisplayPosts = (props) => {
    return (
        <div className="Post Container">
            <h3>Post Container</h3>
            {props.parentPosts.map((element) => {
                return(
                    <div className='post'>
                        <header>{element.name}</header>
                        <body>{element.body}</body>
                        <footer className="Buttons">
                            <button>Like</button>
                            <button>Dislike</button>
                        </footer>
                    </div>
                )
            })}
        </div>
    )
}
export default DisplayPosts;