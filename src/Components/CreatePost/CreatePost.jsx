import React, { useState } from 'react';
import './CreatePost.css'

const CreatePost = (props) => {
    const [name, setName] = useState('')
    const [body, setBody] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            body: body
        };
        props.createNewPost(newPost)
    }

    return(
        <div className='container'>
                <form onSubmit={handleSubmit} className=''>
                    <div className='form-group'>
                        <label htmlFor='postName' >Name</label>
                        <input id='postName' className='form-control' type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="postBody">Body</label>
                        <textarea id='postBody' className='form-control form-control-lg' aria-label='Body' type="text" value={body} onChange={(event) => setBody(event.target.value)}/>
                        <button className='btn btn-primary' style={{margin: "0 auto", display: "block", width: "80%",}} type='submit'>Post</button>
                    </div>
                </form>
            </div>
    )
}
export default CreatePost