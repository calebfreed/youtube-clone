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
        <main>
          <VideoThumbnail title="Sample Video" channelName="Sample Channel" />
          
        </main>
      </div>
    </div>
  );
}

export default App;
