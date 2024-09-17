import React, { useEffect, useRef, useState } from 'react';
import './AnimationVideo.css';
import video from '../../../Assets/WebsiteVideo.webm';

const AnimationVideo = ({ play, currentTime }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (play) {
        videoElement.play();
        videoElement.classList.remove('paused');
      } else {
        videoElement.pause();
        videoElement.classList.add('paused');
      }
    }
  }, [play]);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement && currentTime !== undefined) {
      videoElement.currentTime = currentTime;
    }
  }, [currentTime]);

  return (
    <div id="animation-video" className="video-container">
      <video ref={videoRef} className="full-screen-video" autoPlay loop muted>
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AnimationVideo;
