import React, { useState } from 'react';
import './App.css';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost'
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [posts, setPosts] = useState([ {name: 'Robert', body: 'Hi Mom!'}, {name: 'Elon', body: 'I just bought Twitter!'} ])
  
  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts)
  }

  return (
    <div>
      <body>
        <header className='header'>
          <h1>SocialFeed</h1>
          {/* <NavBar/> */}
          </header>
        <div className='NewPost'>
          <CreatePost createNewPost={addNewPost}/>
        </div>
        <div className='feed'>
        <DisplayPosts parentPosts={posts} />
        </div>
      </body>
    </div>
  );
}

export default App;
