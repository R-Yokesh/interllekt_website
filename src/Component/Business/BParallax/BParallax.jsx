import React, { useEffect, useState } from "react";
import "./BParallax.css";
import topImage from '../../../Assets/Images/building.png'; 
import bottomImage from '../../../Assets/Images/hands.png'; 
import textImage from '../../../Assets/Images/text.png'; 

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

      const section = document.querySelector('.b-parallax-container');
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
    <div className={`b-parallax-container common-class ${scrollDirection}`}>
      <img src={topImage} alt="Building" className="b-parallax-image top-image" />
      <img src={bottomImage} alt="Hands" className="b-parallax-image bottom-image" />
      <img src={textImage} alt="Text" className="b-parallax-image text-image" />
    </div>
  );
};

export default BParallax;
