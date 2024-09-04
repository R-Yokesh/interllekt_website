
import React, { useEffect, useState } from "react";
import "./CapParallax.css";
import leftImage from '../../../Assets/Images/top-left.png';
import rightImage from '../../../Assets/Images/bottom-right.png';
import iconImage from '../../../Assets/Images/icon.png';
import textImage from '../../../Assets/Images/cap-text.png';
import Assets from "../../../Assets/Assets";

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

  const images = [Assets.c1, Assets.c4, Assets.c2, Assets.c3];
  const customOrder = [0, 2, 1, 3];
  const [activeImageIndex1, setActiveImageIndex1] = useState(-1);
  const [isLooping1, setIsLooping1] = useState(false);

  // Opacity function for renderMasonryGrid1
  useEffect(() => {
    let timer;
    if (!isLooping1) {
      timer = setTimeout(() => {
        setActiveImageIndex1((prevIndex) => {
          if (prevIndex === -1) {
            return 0;
          } else {
            return (prevIndex + 1) % customOrder.length;
          }
        });

      }, 700);
    } else {
      timer = setTimeout(() => {
        setIsLooping1(false);
        setActiveImageIndex1(-1);
      }, 1000);
    }

    if (activeImageIndex1 === customOrder.length - 1) {
      setIsLooping1(true);
    }

    return () => clearTimeout(timer);
  }, [activeImageIndex1, isLooping1]);

  return (
    <div className="cap-parallax-container">
      {/* <img src={leftImage} alt="Left" className="cap-parallax-image top-left-image" />
      <img src={rightImage} alt="Right" className="cap-parallax-image bottom-right-image" /> */}
      <div className="cap-animation cap-parallax-image icon-image">
        {/* <img src={iconImage} alt="Icon" className="" /> */}
        <div className="brandMasonry eq-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="col"
              style={{
                backgroundImage: `url(${image})`,
                opacity: customOrder.indexOf(index) <= activeImageIndex1 ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            ></div>
          ))}
        </div>
      </div>
      {/* <img src={textImage} alt="Text" className="cap-parallax-image cap-text-image" /> */}
    </div>
  );
};

export default CapParallax;