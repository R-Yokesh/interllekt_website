import React, { useEffect, useState } from "react";
import "./BParallax.css";
import leftImage from '../../../Assets/Images/card/b1.png';   // Blue square
import rightImage from '../../../Assets/Images/card/b2.png';  // Red square
import iconImage  from '../../../Assets/Images/card/b3.png';   // Yellow square
import textImage from '../../../Assets/Images/card/b4.png';   // Green square


const BParallax = () => {
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
    <div className={`b-parallax-container ${scrollDirection}`}>
      <img src={leftImage} alt="Left" className="b-parallax-image btop-left-image" />
      <img src={rightImage} alt="Right" className="b-parallax-image btop-right-image" />
      <img src={iconImage} alt="Icon" className="b-parallax-image bbottom-left-image" />
      <img src={textImage} alt="Text" className="b-parallax-image bbottom-right-image" />
    </div>
  );
};

export default BParallax;
