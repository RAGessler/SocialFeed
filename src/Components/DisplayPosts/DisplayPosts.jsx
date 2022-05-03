//The layout and display of a single post
import React from 'react';
import LikeButton from './CustomButtons/LikeButton/LikeButton';
import DislikeButton from './CustomButtons/DislikeButton/DislikeButton';
import "./DisplayPosts.css"

const DisplayPosts = (props) => {
    return (
        <div className="">
            {props.parentPosts.map((element, index) => {
                return(
                    <div className='card mw-100' style={{margin:'1em',
                    padding:'1em'}} key={index}>
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