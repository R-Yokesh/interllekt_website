import React, { useEffect, useState } from "react";
import "./InnoParallax.css";
import leftImage from '../../../Assets/Images/card/i1.png';   // Blue square
import rightImage from '../../../Assets/Images/card/i2.png';  // Red square
import iconImage from '../../../Assets/Images/card/i3.png';   // Yellow square
import textImage from '../../../Assets/Images/card/i4.png';   // Green square


const InnoParallax = () => {
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
    <div className={`i-parallax-container ${scrollDirection}`}>
      <img src={leftImage} alt="Left" className="i-parallax-image itop-left-image" />
      <img src={rightImage} alt="Right" className="i-parallax-image itop-right-image" />
      <img src={iconImage} alt="Icon" className="i-parallax-image ibottom-left-image" />
      <img src={textImage} alt="Text" className="i-parallax-image ibottom-right-image" />
    </div>
  );
};

export default InnoParallax;
