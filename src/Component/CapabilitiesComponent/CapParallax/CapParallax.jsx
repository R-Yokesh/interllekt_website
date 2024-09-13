import React, { useEffect, useState } from "react";
import "./CapParallax.css";
import leftImage from '../../../Assets/Images/card/c1.png';   // Blue square
import rightImage from '../../../Assets/Images/card/c2.png';  // Red square
import textImage from '../../../Assets/Images/card/c3.png';   // Yellow square
import iconImage from '../../../Assets/Images/card/c4.png';   // Green square


const CapParallax = () => {
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollTop = currentScrollTop;

      const section = document.querySelector('.cap-parallax-container');
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add('animate');
      } else {
        section.classList.remove('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`cap-parallax-container ${scrollDirection}`}>
      <img src={leftImage} alt="Left" className="cap-parallax-image top-left-image" />
      <img src={rightImage} alt="Right" className="cap-parallax-image top-right-image" />
      <img src={iconImage} alt="Icon" className="cap-parallax-image bottom-left-image" />
      <img src={textImage} alt="Text" className="cap-parallax-image bottom-right-image" />
    </div>
  );
};

export default CapParallax;
