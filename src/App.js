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
      <div className="content">
        <Sidebar />
        <main className='thumbnails'>
          {videos.map(video => (
            <VideoThumbnail key={video.id} {...video} />
          ))}

        </main>
      </div>
    </div>
  );
}

export default App;
