// src/components/VideoThumbnail.js
import React from 'react';
import './VideoThumbnail.css'


function VideoThumbnail({ title, channelName }) {
  return (
    <div className='thumbnail-grid'>
      <div>
        <img src="https://www.ysofters.com/wp-content/uploads/2015/07/fbgui-hcpwd.png" alt="Video Thumbnail" className='tn-img-resize'/>
      </div>
      <div className='video-title'>
        <h3>{title}</h3>
      </div>
      <div className='channel-name'>
        <p>{channelName}</p>
      </div> 
    </div>
  );
}

export default VideoThumbnail;
