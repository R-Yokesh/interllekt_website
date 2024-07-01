import React, { useEffect, useState } from 'react';
import './ArrowAni.css';

const ArrowAni = () => {
  const [transformStyle, setTransformStyle] = useState({
    transform: 'translate3d(-40svw, -40svh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(20deg) skew(0deg, 0deg)',
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = (scrollTop / maxScroll) * 1.5; // Speed up the transformation

      const translateXStart = -38;
      const translateYStart = -38;
      const rotateZStart = 20;

      const translateXEnd = 12.8246;
      const translateYEnd = 12.8246;
      const rotateZEnd = -15.2164;

      const translateX = translateXStart + (translateXEnd - translateXStart) * scrollFraction;
      const translateY = translateYStart + (translateYEnd - translateYStart) * scrollFraction;
      const rotateZ = rotateZStart + (rotateZEnd - rotateZStart) * scrollFraction;

      // Add console logs
      console.log('Scroll Top:', scrollTop);
      console.log('Max Scroll:', maxScroll);
      console.log('Scroll Fraction:', scrollFraction);
      console.log('Translate X:', translateX);
      console.log('Translate Y:', translateY);
      console.log('Rotate Z:', rotateZ);

      setTransformStyle({
        transform: `translate3d(${translateX}svw, ${translateY}svh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div data-w-id="fae282c3-5007-f083-e4a5-a22ad99df51a" className="scroll-path bow-flight">
      <div className="scroll-frame sticky">
        <div className="mega-wrap">
          <div className="narrow-wrap align-center">
            <div className="p huge">
            The word building is stationery and the other words flow from the bottom and come up
            next to the word “building” on the same lin
            </div>
          </div>
          <div className="bow-wrap" style={{ ...transformStyle, willChange: 'transform', transformStyle: 'preserve-3d' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 48" className="bow-ilo">
              <rect x="1199.5" y="27.5" width="1199" height="7" rx="3.5" transform="rotate(180 1199.5 27.5)" fill="white" stroke="currentColor"></rect>
              <path d="M1179.89 24.3153L1180.14 24L1179.89 23.6847L1161.41 0.945838L1238.26 24L1161.41 47.0542L1179.89 24.3153Z" fill="white" stroke="currentColor"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 48" className="bow-ilo shadow">
              <rect x="1199.5" y="27.5" width="1199" height="7" rx="3.5" transform="rotate(180 1199.5 27.5)" fill="currentColor" stroke="currentColor"></rect>
              <path d="M1179.89 24.3153L1180.14 24L1179.89 23.6847L1161.41 0.945838L1238.26 24L1161.41 47.0542L1179.89 24.3153Z" fill="currentColor" stroke="currentColor"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrowAni;
