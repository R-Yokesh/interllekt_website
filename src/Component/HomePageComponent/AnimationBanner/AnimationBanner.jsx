import React, { useEffect, useRef } from 'react';
import "./AnimationBanner.css";

const AnimationBanner = () => {
  const overlineRef = useRef(null);
  const megaHeadingRefs = useRef([]);

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScrollY = 508; // Define the max scrollY value for calculation

    // Overline rotation
    if (overlineRef.current) {
      const maxOverlineRotation = -36.032; // Final rotation value for overline
      const overlineRotation = Math.max(0 - scrollY * 0.036, maxOverlineRotation);
      overlineRef.current.style.transform = `translate3d(0px, ${99.372 + Math.min(scrollY, maxScrollY) * 0.05}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${overlineRotation}deg) skew(0deg, 0deg)`;
    }

    // Mega headings rotation
    const rotations = [
      0.0036,    // Final rotation for mega-heading _1
      -0.00288,  // Final rotation for mega-heading _2
      0.00288,   // Final rotation for mega-heading _3
      -0.0036    // Final rotation for mega-heading _4
    ];

    megaHeadingRefs.current.forEach((ref, index) => {
      if (ref) {
        let rotation;
        switch (index) {
          case 0:
            rotation = 18.6462 - (scrollY * 0.036);
            rotation = rotation >= 0 ? Math.max(rotation, rotations[index]) : Math.min(rotation, rotations[index]);
            break;
          case 1:
            rotation = -14.917 + (scrollY * 0.02988);
            rotation = rotation >= 0 ? Math.max(rotation, rotations[index]) : Math.min(rotation, rotations[index]);
            break;
          case 2:
            rotation = 14.917 - (scrollY * 0.02988);
            rotation = rotation >= 0 ? Math.max(rotation, rotations[index]) : Math.min(rotation, rotations[index]);
            break;
          case 3:
            rotation = -18.6462 + (scrollY * 0.036);
            rotation = rotation >= 0 ? Math.max(rotation, rotations[index]) : Math.min(rotation, rotations[index]);
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
            <div ref={overlineRef} className="overline-fill" style={{
              opacity: "1",
              transform: "translate3d(0px, 47.548%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}></div>
          </div>

          <div className="mega-wrap" style={{
            opacity: "1",
            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}>
            <div className="mega-heading _1" ref={(el) => (megaHeadingRefs.current[0] = el)} style={{
              willChange: "transform",
              transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(18.6462deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}>
              <div className="mh _1">Aim high.</div>
              <div className="mh _2">Build fast.</div>
            </div>
          </div>

          <div className="target-circle" style={{
            opacity: "1",
            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}>
            <div className="mega-wrap">
              <div className="mega-heading _2" ref={(el) => (megaHeadingRefs.current[1] = el)} style={{
                willChange: "transform",
                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-14.917deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}>
                <div className="mh _1">Aim high.</div>
                <div className="mh _2">Build fast.</div>
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className="target-circle md" style={{
            opacity: "1",
            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}>
            <div className="mega-wrap">
              <div className="mega-heading _3" ref={(el) => (megaHeadingRefs.current[2] = el)} style={{
                willChange: "transform",
                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(14.917deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}>
                <div className="mh _1">Aim high.</div>
                <div className="mh _2">Build fast.</div>
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className="target-circle sm" style={{
            opacity: "1",
            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}>
            <div className="mega-wrap">
              <div className="mega-heading _4" ref={(el) => (megaHeadingRefs.current[3] = el)} style={{
                willChange: "transform",
                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-18.6462deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}>
                <div className="mh _1">Aim high.</div>
                <div className="mh _2">Build fast.</div>
              </div>
            </div>
            <div className="target-glare"></div>
          </div>
          <div className="target-circle xs"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimationBanner;
