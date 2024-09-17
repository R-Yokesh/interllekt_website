import React, { useEffect, useState } from "react";
import "./InnoParallax.css";
import leftImage from '../../../Assets/Images/card/i1.png';
import rightImage from '../../../Assets/Images/card/i2.png';
import iconImage from '../../../Assets/Images/card/i3.png';
import textImage from '../../../Assets/Images/card/i4.png';

const InnoParallax = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.i-parallax-container');
      const rect = section.getBoundingClientRect();

      // Check if section is halfway into the viewport
      const halfwayVisible = rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;

      if (halfwayVisible) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // To check on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`i-parallax-container ${isInView ? 'animate' : ''}`}>
      <img src={leftImage} alt="Left" className="i-parallax-image itop-left-image" />
      <img src={rightImage} alt="Right" className="i-parallax-image itop-right-image" />
      <img src={iconImage} alt="Icon" className="i-parallax-image ibottom-left-image" />
      <img src={textImage} alt="Text" className="i-parallax-image ibottom-right-image" />
    </div>
  );
};

export default InnoParallax;
