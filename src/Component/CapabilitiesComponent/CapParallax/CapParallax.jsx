import React, { useEffect, useState } from "react";
import "./CapParallax.css";
import leftImage from '../../../Assets/Images/card/cc1.png';
import rightImage from '../../../Assets/Images/card/cc2.png';
import iconImage from '../../../Assets/Images/card/cc3.png';
import textImage from '../../../Assets/Images/card/cc4.png';

const CapParallax = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.cap-parallax-container');
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
    <div className={`cap-parallax-container ${isInView ? 'animate' : ''}`}>
      <img src={leftImage} alt="Left" className="cap-parallax-image top-left-image" />
      <img src={rightImage} alt="Right" className="cap-parallax-image top-right-image" />
      <img src={iconImage} alt="Icon" className="cap-parallax-image bottom-left-image" />
      <img src={textImage} alt="Text" className="cap-parallax-image bottom-right-image" />
    </div>
  );
};

export default CapParallax;
