// src/components/VideoThumbnail.js
import React from 'react';
import './VideoThumbnail.css'
function VideoThumbnail({ title, channelName }) {
  return (
    <div>
      <img src="thumbnail.jpg" alt="Video Thumbnail" />
      <h3>{title}</h3>
      <p>{channelName}</p>
    </div>
  );
}

export default VideoThumbnail;
