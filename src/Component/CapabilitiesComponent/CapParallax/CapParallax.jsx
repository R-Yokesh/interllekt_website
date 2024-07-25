import React, { useEffect } from "react";
import "./CapParallax.css";
import leftImage from '../../../Assets/Images/top-left.png';
import rightImage from '../../../Assets/Images/bottom-right.png';
import iconImage from '../../../Assets/Images/icon.png';
import textImage from '../../../Assets/Images/cap-text.png';

const CapParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.cap-parallax-container');
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add('animate');
      } else {
        section.classList.remove('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="cap-parallax-container">
      <img src={leftImage} alt="Left" className="cap-parallax-image top-left-image" />
      <img src={rightImage} alt="Right" className="cap-parallax-image bottom-right-image" />
      <img src={iconImage} alt="Icon" className="cap-parallax-image icon-image" />
      <img src={textImage} alt="Text" className="cap-parallax-image cap-text-image" />
    </div>
  );
};

export default CapParallax;