//The layout and display of a single post
import React from 'react';
import LikeButton from './CustomButtons/LikeButton';
import DislikeButton from './CustomButtons/DislikeButton';
import "./DisplayPosts.css"

const DisplayPosts = (props) => {
    return (
        <div className='post-feed'>
            {props.parentPosts.map((element, index) => {
                return(
                    <div className='card mw-100' style={{margin:'1em', padding:'1em', boxShadow: '5px 5px black'}} key={index}>
                        <h4 className='card-title'>{element.name}</h4>
                        <p className='card-text'>{element.body}</p>
                        <h5 className='card-date'>{element.date}</h5>
                        <div className='btn-group' style={{marginLeft: 'auto'}}>
                            <LikeButton/> <DislikeButton/> 
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default DisplayPosts;