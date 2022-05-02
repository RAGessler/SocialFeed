import React, { useState } from 'react';
import './App.css';
import './Components/Post/Post'
import PostOutline from './Components/Post/Post';

function App() {

  const [posts, setPosts] = useState([ {name: 'Robert', body: 'Hi Mom!'}, {name: 'Elon', body: 'I just bought Twitter!'} ])
  
  function addNewPost(post){
    let tempPosts = [...posts];
    setPosts(tempPosts)
  }

  return (
    <div>
      <div>
        <PostOutline parentPosts={posts} />
      </div>
    </div>
  );
}

export default App;
