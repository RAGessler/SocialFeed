import React, { useState } from 'react';
import './App.css';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost'
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [posts, setPosts] = useState([ {name: 'Robert', body: 'Hi Mom!', date: '5/04/2022'}, {name: 'Elon Musk', body: 'I just bought Twitter!', date:'4/25/2022'} ])
  
  function addNewPost(post){
    let tempPosts = [post, ...posts];
    setPosts(tempPosts)
  }

  return (
    <div className='app' id='home'>
        <div className='nav-1'>
          <NavBar/>
        </div>
        <div className='new-post' id='post'>
          <CreatePost createNewPost={addNewPost}/>
        </div>
        <div className='feed' id='feed'>
          <DisplayPosts parentPosts={posts} />
        </div>
    </div>
  );
}

export default App;
