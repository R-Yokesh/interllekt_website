import React, { useEffect, useRef, useState } from 'react';
import './AnimationBanner.css';
import AnimationVideo from '../AnimationVideo/AnimationVideo';

const AnimationBanner = () => {
  const overlineRef = useRef(null);
  const megaHeadingRefs = useRef([]);
  const [playVideo, setPlayVideo] = useState(false); // State to control video playback
  const [circleToSquare, setCircleToSquare] = useState(false); // State to control circle-to-square animation
  const [allCirclesAligned, setAllCirclesAligned] = useState(false); // State to check circle alignment
  const [circlesHidden, setCirclesHidden] = useState(false); // State to hide circles after alignment

  const bannerRef = useRef(null); // Reference to the entire component

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (bannerRef.current) {
        const bannerPosition = bannerRef.current.getBoundingClientRect(); // Get component position

        // Only trigger disappearance if the banner is still in view
        if (bannerPosition.top < window.innerHeight && bannerPosition.bottom > 0) {
          // Overline rotation
          if (overlineRef.current) {
            const maxOverlineRotation = -36.032;
            const overlineRotation = Math.max(0 - scrollY * 0.02, maxOverlineRotation);
            overlineRef.current.style.transform = `translate3d(0px, ${
              99.372 + Math.min(scrollY, 508) * 0.05
            }%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${overlineRotation}deg) skew(0deg, 0deg)`;
          }

          // Mega headings rotation
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

          // Handle scroll down
          if (scrollY > 500) {
            setCircleToSquare(true); // Transform circles to squares
          }

          // Handle when circles are aligned
          if (scrollY > 1000) {
            setAllCirclesAligned(true); // Circles are aligned
            setCirclesHidden(true); // Hide circles
          }

          // Handle scroll back
          if (scrollY <= 1000) {
            setCirclesHidden(false); // Show circles again
          }

          if (scrollY <= 500) {
            setCircleToSquare(false); // Transform squares back to circles
            setAllCirclesAligned(false); // Reset alignment state
            setPlayVideo(false); // Stop video when scrolling back
          }

          // Play video after alignment
          if (allCirclesAligned && !playVideo) {
            setPlayVideo(true); // Play video when aligned
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [playVideo, circleToSquare, allCirclesAligned]);

  return (
    <div className="mono-track" ref={bannerRef}>
      <div className="scroll-path target-puzzle">
        <div className="scroll-frame sticky">
          <div className="overline">
            <div ref={overlineRef} className="overline-fill"></div>
          </div>

          <div className="mega-wrap">
            <div className="mega-heading _1" ref={(el) => (megaHeadingRefs.current[0] = el)}>
              {allCirclesAligned && <AnimationVideo play={playVideo} />} {/* Play video only when aligned */}
            </div>
          </div>

          <div className={`target-circle ${circleToSquare ? 'square' : ''} ${circlesHidden ? 'hidden' : ''}`}>
            <div className="mega-wrap">
              <div className="mega-heading _2" ref={(el) => (megaHeadingRefs.current[1] = el)}>
                <AnimationVideo play={playVideo} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className={`target-circle md ${circleToSquare ? 'square' : ''} ${circlesHidden ? 'hidden' : ''}`}>
            <div className="mega-wrap">
              <div className="mega-heading _3" ref={(el) => (megaHeadingRefs.current[2] = el)}>
                <AnimationVideo play={playVideo} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className={`target-circle sm ${circleToSquare ? 'square' : ''} ${circlesHidden ? 'hidden' : ''}`}>
            <div className="mega-wrap">
              <div className="mega-heading _4" ref={(el) => (megaHeadingRefs.current[3] = el)}>
                <AnimationVideo play={playVideo} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className={`target-circle xs ${circleToSquare ? 'square' : ''} ${circlesHidden ? 'hidden' : ''}`}>
            <div className="mega-wrap">
              <div className="mega-heading _5" ref={(el) => (megaHeadingRefs.current[4] = el)}>
                <AnimationVideo play={playVideo} />
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
