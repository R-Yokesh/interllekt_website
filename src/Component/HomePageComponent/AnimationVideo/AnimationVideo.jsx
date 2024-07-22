import React, { useEffect, useRef } from 'react';
import './AnimationVideo.css';
import video from '../../../Assets/WebsiteVideo.webm';

const AnimationVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlayPause = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.play();
          videoElement.classList.remove('paused');
        } else {
          videoElement.pause();
          videoElement.classList.add('paused');
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      threshold: 0.5, // Adjust this value as needed
    });

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

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
