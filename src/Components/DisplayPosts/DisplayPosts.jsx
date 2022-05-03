//The layout and display of a single post
import React from 'react';
import LikeButton from './CustomButtons/LikeButton';

const DisplayPosts = (props) => {
    return (
        <div className="Post Container">
            <h3>Post Container</h3>
            {props.parentPosts.map((element, index) => {
                return(
                    <div className='post' key={index}>
                        <header>{element.name}</header>
                        <div>{element.body}</div>
                        <footer className="Buttons">
                            <LikeButton/>
                            <button>Dislike</button>
                        </footer>
                    </div>
                )
            })}
        </div>
    )
}
export default DisplayPosts;