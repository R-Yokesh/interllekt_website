import React, { useEffect } from "react";
import "./InnoParallax.css";
import leftImage from '../../../Assets/Images/left.png';
import rightImage from '../../../Assets/Images/right.png';
import bottomImage from '../../../Assets/Images/bottom.png';

const InnoParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.parallax-container');
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
    <div className="parallax-container">
      <img src={leftImage} alt="Left" className="parallax-image left-image" />
      <img src={rightImage} alt="Right" className="parallax-image right-image" />
      <img src={bottomImage} alt="Bottom" className="parallax-image bottom-image" />
    </div>
  );
};

export default InnoParallax;
