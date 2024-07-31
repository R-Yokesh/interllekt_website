import React, { useEffect, useState } from 'react';
import './InnoParallax.css';
import leftImage from '../../../Assets/Images/left.png';
import rightImage from '../../../Assets/Images/right.png';
import bottomImage from '../../../Assets/Images/bottom.png';

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

      const section = document.querySelector('.parallax-container');
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
    <div className={`parallax-container common-class ${scrollDirection}`}>
      <img src={leftImage} alt="Left" className="parallax-image left-image" />
      <img src={rightImage} alt="Right" className="parallax-image right-image" />
      <img src={bottomImage} alt="Bottom" className="parallax-image bottom-image" />
    </div>
  );
};

export default InnoParallax;
