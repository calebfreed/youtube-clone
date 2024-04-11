// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoThumbnail from './components/VideoThumbnail';
import './App.css';
import videos from './data/video-list.js'

function App() {
  return (
    <div className="app">
      <Navbar />
        <Sidebar />
        <main className='thumbnails'>
          {videos.map(video => (
            <VideoThumbnail key={video.id} {...video} />
          ))}
        </main>
    </div>
  );
}

export default App;
