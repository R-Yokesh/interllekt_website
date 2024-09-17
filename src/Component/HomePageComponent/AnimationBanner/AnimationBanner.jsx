import React, { useEffect, useRef, useState } from 'react';
import './AnimationBanner.css';
import AnimationVideo from '../AnimationVideo/AnimationVideo';

const AnimationBanner = () => {
  const overlineRef = useRef(null);
  const megaHeadingRefs = useRef([]);
  const [playVideo, setPlayVideo] = useState(false);
  const [circleToSquare, setCircleToSquare] = useState(false);
  const [allCirclesAligned, setAllCirclesAligned] = useState(false);
  const [circlesHidden, setCirclesHidden] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // State to track current playback time

  const bannerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (bannerRef.current) {
        const bannerPosition = bannerRef.current.getBoundingClientRect();

        if (bannerPosition.top < window.innerHeight && bannerPosition.bottom > 0) {
          if (overlineRef.current) {
            const maxOverlineRotation = -36.032;
            const overlineRotation = Math.max(0 - scrollY * 0.02, maxOverlineRotation);
            overlineRef.current.style.transform = `translate3d(0px, ${99.372 + Math.min(scrollY, 508) * 0.05}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${overlineRotation}deg) skew(0deg, 0deg)`;
          }

          const rotations = [0.0036, -0.00288, 0.00288, -0.0036];
          megaHeadingRefs.current.forEach((ref, index) => {
            if (ref) {
              let rotation;
              switch (index) {
                case 0:
                  rotation = 18.6462 - scrollY * 0.02;
                  rotation = Math.max(rotations[index], rotation);
                  break;
                case 1:
                  rotation = -14.917 + scrollY * 0.016;
                  rotation = Math.min(rotations[index], rotation);
                  break;
                case 2:
                  rotation = 14.917 - scrollY * 0.016;
                  rotation = Math.max(rotations[index], rotation);
                  break;
                case 3:
                  rotation = -18.6462 + scrollY * 0.02;
                  rotation = Math.min(rotations[index], rotation);
                  break;
                default:
                  rotation = 0;
              }
              ref.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotation}deg) skew(0deg, 0deg)`;
            }
          });

          if (scrollY > 500) {
            setCircleToSquare(true);
          }

          if (scrollY > 1000) {
            setAllCirclesAligned(true);
            setCirclesHidden(true);
          }

          if (scrollY <= 1000) {
            setCirclesHidden(false);
          }

          if (scrollY <= 500) {
            setCircleToSquare(false);
            setAllCirclesAligned(false);
            setPlayVideo(false);
          }

          if (allCirclesAligned && !playVideo) {
            setPlayVideo(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [playVideo, circleToSquare, allCirclesAligned]);

  const handlePause = (event) => {
    setCurrentTime(event.target.currentTime); // Update current time when video is paused
  };

  return (
    <div className="mono-track" ref={bannerRef}>
      <div className="scroll-path target-puzzle">
        <div className="scroll-frame sticky">
          <div className="overline">
            <div ref={overlineRef} className="overline-fill"></div>
          </div>

          <div className="mega-wrap">
            <div className="mega-heading _1" ref={(el) => (megaHeadingRefs.current[0] = el)}>
              {allCirclesAligned && <AnimationVideo play={playVideo} currentTime={currentTime} />}
            </div>
          </div>

          <div className={`target-circle ${circleToSquare ? 'square' : ''} ${circlesHidden ? 'hidden' : ''}`}>
            <div className="mega-wrap">
              <div className="mega-heading _2" ref={(el) => (megaHeadingRefs.current[1] = el)}>
                <AnimationVideo play={playVideo} currentTime={currentTime} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className={`target-circle md ${circleToSquare ? 'square' : ''} ${circlesHidden ? 'hidden' : ''}`}>
            <div className="mega-wrap">
              <div className="mega-heading _3" ref={(el) => (megaHeadingRefs.current[2] = el)}>
                <AnimationVideo play={playVideo} currentTime={currentTime} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className={`target-circle sm ${circleToSquare ? 'square' : ''} ${circlesHidden ? 'hidden' : ''}`}>
            <div className="mega-wrap">
              <div className="mega-heading _4" ref={(el) => (megaHeadingRefs.current[3] = el)}>
                <AnimationVideo play={playVideo} currentTime={currentTime} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className={`target-circle xs ${circleToSquare ? 'square' : ''} ${circlesHidden ? 'hidden' : ''}`}>
            <div className="mega-wrap">
              <div className="mega-heading _5" ref={(el) => (megaHeadingRefs.current[4] = el)}>
                <AnimationVideo play={playVideo} currentTime={currentTime} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationBanner;