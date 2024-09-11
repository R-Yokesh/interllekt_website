import React, { useEffect, useState } from "react";
import "./BParallax.css";
import topImage from '../../../Assets/Images/building.png';
import bottomImage from '../../../Assets/Images/hands.png';
import textImage from '../../../Assets/Images/text.png';
import Assets from "../../../Assets/Assets";

const BParallax = ({ marginSec }) => {
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

  const businessOrder = [3, 1, 0, 2];
  const [activeImageIndex3, setActiveImageIndex3] = useState(-1);
  const [isLooping3, setIsLooping3] = useState(false);

  // Opacity function for renderMasonryGrid3
  useEffect(() => {
    let timer;
    if (!isLooping3) {
      timer = setTimeout(() => {
        setActiveImageIndex3((prevIndex) => {
          if (prevIndex === -1) {
            return 0;
          } else {
            return (prevIndex + 1) % businessOrder.length;
          }
        });
      }, 700);
    } else {
      timer = setTimeout(() => {
        setIsLooping3(false);
        setActiveImageIndex3(-1);
      }, 1000);
    }

    if (activeImageIndex3 === businessOrder.length - 1) {
      setIsLooping3(true);
    }

    return () => clearTimeout(timer);
  }, [activeImageIndex3, isLooping3]);

  return (
    <div className={marginSec == 'false' ? 'b-parallax-container' : 'b-parallax-container margin-added'}>
      <div className="busines-animation">
        <div className="brandMasonry eq-2">
          {[Assets.na3, Assets.na2, Assets.na4, Assets.na1].map((image, index) => (
            <div
              key={index}
              className="col"
              style={{
                backgroundImage: `url(${image})`,
                opacity: businessOrder.indexOf(index) <= activeImageIndex3 ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            ></div>
          ))}
        </div>
      </div>
      {/* <img src={topImage} alt="Building" className="b-parallax-image top-image" />
      <img src={bottomImage} alt="Hands" className="b-parallax-image bottom-image" /> */}
      {/* <img src={textImage} alt="Text" className="b-parallax-image text-image" /> */}
    </div>
  );
};

export default BParallax;
