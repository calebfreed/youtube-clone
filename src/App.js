// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoThumbnail from './components/VideoThumbnail';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main className='thumbnails'>
          <VideoThumbnail title="Hardcoded Video Title" channelName="Caleb's Coding" />
          
        </main>
      </div>
    </div>
  );
}

export default App;
