import React, { useEffect, useRef } from 'react';
import "./AnimationBanner.css";
import AnimationVideo from '../AnimationVideo/AnimationVideo';

const AnimationBanner = () => {
  const overlineRef = useRef(null);
  const megaHeadingRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Overline rotation
      if (overlineRef.current) {
        const maxOverlineRotation = -36.032;
        const overlineRotation = Math.max(0 - scrollY * 0.02, maxOverlineRotation);
        overlineRef.current.style.transform = `translate3d(0px, ${99.372 + Math.min(scrollY, 508) * 0.05}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${overlineRotation}deg) skew(0deg, 0deg)`;
      }

      // Mega headings rotation
      const rotations = [0.0036, -0.00288, 0.00288, -0.0036];
      megaHeadingRefs.current.forEach((ref, index) => {
        if (ref) {
          let rotation;
          switch (index) {
            case 0:
              rotation = 18.6462 - (scrollY * 0.02);
              rotation = Math.max(rotations[index], rotation);
              break;
            case 1:
              rotation = -14.917 + (scrollY * 0.016);
              rotation = Math.min(rotations[index], rotation);
              break;
            case 2:
              rotation = 14.917 - (scrollY * 0.016);
              rotation = Math.max(rotations[index], rotation);
              break;
            case 3:
              rotation = -18.6462 + (scrollY * 0.02);
              rotation = Math.min(rotations[index], rotation);
              break;
              case 4:
              rotation = -18.6462 + (scrollY * 0.02);
              rotation = Math.min(rotations[index], rotation);
              break;
            default:
              rotation = 0;
          }
          ref.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotation}deg) skew(0deg, 0deg)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="mono-track">
      <div className="scroll-path target-puzzle">
        <div className="scroll-frame sticky">
          <div className="overline">
            <div ref={overlineRef} className="overline-fill"></div>
          </div>

          <div className="mega-wrap">
            <div className="mega-heading _1" ref={(el) => (megaHeadingRefs.current[0] = el)}>
              <AnimationVideo />
            </div>
          </div>

          <div className="target-circle">
            <div className="mega-wrap">
              <div className="mega-heading _2" ref={(el) => (megaHeadingRefs.current[1] = el)}>
                <AnimationVideo />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className="target-circle md">
            <div className="mega-wrap">
              <div className="mega-heading _3" ref={(el) => (megaHeadingRefs.current[2] = el)}>
                <AnimationVideo />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className="target-circle sm">
            <div className="mega-wrap">
              <div className="mega-heading _4" ref={(el) => (megaHeadingRefs.current[3] = el)}></div>
            </div>
            <div className="target-glare"></div>
          </div>
          <div className="target-circle xs">
          <div className="mega-wrap">
              <div className="mega-heading _5" ref={(el) => (megaHeadingRefs.current[4] = el)}></div>
            </div>
            <div className="target-glare"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationBanner;