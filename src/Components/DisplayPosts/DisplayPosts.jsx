//The layout and display of a single post
import React from 'react';
import LikeButton from './CustomButtons/LikeButton/LikeButton';
import DislikeButton from './CustomButtons/DislikeButton/DislikeButton';
import "./DisplayPosts.css"

const DisplayPosts = (props) => {
    return (
        <div className="post grid">
            <h3>Post Container</h3>
            {props.parentPosts.map((element, index) => {
                return(
                    <div className='card' key={index}>
                        <h4 className='card-title'>{element.name}</h4>
                        <p className='card-text'>{element.body}</p>
                        <footer className="Buttons">
                            <div className='btn-group'>
                                <LikeButton/>
                                <DislikeButton/> 
                            </div>
                        </footer>
                    </div>
                )
            })}
        </div>
    )
}
export default DisplayPosts;