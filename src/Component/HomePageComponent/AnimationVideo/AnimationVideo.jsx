import React from 'react';
import './AnimationVideo.css';
import video from '../../../Assets/WebsiteVideo.webm'

const AnimationVideo = () => {
  return (
    <div className="video-container">
      <video className="full-screen-video" autoPlay loop muted>
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AnimationVideo;
