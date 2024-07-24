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
          // Play the video from the start
          videoElement.currentTime = 0;
          videoElement.play();
          videoElement.classList.remove('paused');
        } else {
          // Pause the video and apply grayscale filter
          videoElement.pause();
          videoElement.classList.add('paused');
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      threshold: 0.5,
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
