// src/components/VideoThumbnail.js
import React from 'react';
import './VideoThumbnail.css'

function VideoThumbnail({ videoUrl, channelUrl, title, channelName, channelLogo, viewCount, timeSincePosted, thumbnail }) {
  return (
    <div className='video'>
      <a href={videoUrl} target='_blank' rel="noopener noreferrer">
        <img src={thumbnail} alt="Video Thumbnail" />
      </a>
      <div className='video-info'>
        <a href={channelUrl} target='_blank' rel="noopener noreferrer">
          <img src={channelLogo} alt="Channel Logo" className='channel-logo' />
        </a>
        <div className='video-text'>
          <h3>{title}</h3>
          <p>{channelName}</p>
          <p>{viewCount} · {timeSincePosted}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoThumbnail;
