import React, { useEffect, useState } from "react";
import "./BParallax.css";
import leftImage from '../../../Assets/Images/card/bb1.png';
import rightImage from '../../../Assets/Images/card/bb2.png';
import iconImage from '../../../Assets/Images/card/bb3.png';
import textImage from '../../../Assets/Images/card/bb4.png';

const BParallax = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.b-parallax-container');
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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`b-parallax-container ${isInView ? 'animate' : ''}`}>
      <img src={leftImage} alt="Left" className="b-parallax-image btop-left-image" />
      <img src={rightImage} alt="Right" className="b-parallax-image btop-right-image" />
      <img src={iconImage} alt="Icon" className="b-parallax-image bbottom-left-image" />
      <img src={textImage} alt="Text" className="b-parallax-image bbottom-right-image" />
    </div>
  );
};

export default BParallax;
