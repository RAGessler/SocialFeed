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
        <header className='header' id='home'>
          <NavBar/>
          </header>
        <div className='NewPost' id='post'>
          <CreatePost createNewPost={addNewPost}/>
        </div>
        <div className='feed' id='feed'>
        <DisplayPosts parentPosts={posts} />
        </div>
    </div>
  );
}

export default App;
