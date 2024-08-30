import React, { useEffect } from "react";
import "./BParallax.css";
import topImage from '../../../Assets/Images/building.png'; 
import bottomImage from '../../../Assets/Images/hands.png'; 
import textImage from '../../../Assets/Images/text.png'; 

const BParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.b-parallax-container');
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
    <div className="b-parallax-container">
      <img src={topImage} alt="Building" className="b-parallax-image top-image" />
      <img src={bottomImage} alt="Hands" className="b-parallax-image bottom-image" />
      <img src={textImage} alt="Text" className="b-parallax-image text-image" />
    </div>
  );
};

export default BParallax;
