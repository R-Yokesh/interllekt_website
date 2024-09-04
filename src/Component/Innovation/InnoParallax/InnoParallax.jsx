import React, { useEffect, useState } from 'react';
import './InnoParallax.css';
import leftImage from '../../../Assets/Images/left.png';
import rightImage from '../../../Assets/Images/right.png';
import bottomImage from '../../../Assets/Images/bottom.png';
import Assets from '../../../Assets/Assets';

const InnoParallax = ({ marginSec }) => {
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

  const innovateOrder = [2, 0, 1, 3];
  const [activeImageIndex2, setActiveImageIndex2] = useState(-1);
  const [isLooping2, setIsLooping2] = useState(false);


  // Opacity function for renderMasonryGrid2
  useEffect(() => {
    let timer;
    if (!isLooping2) {
      timer = setTimeout(() => {
        setActiveImageIndex2((prevIndex) => {
          if (prevIndex === -1) {
            return 0;
          } else {
            return (prevIndex + 1) % innovateOrder.length;
          }
        });
      }, 700);
    } else {
      timer = setTimeout(() => {
        setIsLooping2(false);
        setActiveImageIndex2(-1);
      }, 1000);
    }

    if (activeImageIndex2 === innovateOrder.length - 1) {
      setIsLooping2(true);
    }

    return () => clearTimeout(timer);
  }, [activeImageIndex2, isLooping2]);

  return (
    <div className={marginSec == 'false' ? "parallax-container" : "parallax-container margin-added"}>
      <div className='innovation-animation'>
        <div className="brandMasonry eq-3">
          {[Assets.sp2, Assets.sp3, Assets.sp1, Assets.sp4].map((image, index) => (
            <div
              key={index}
              className="col"
              style={{
                backgroundImage: `url(${image})`,
                opacity: innovateOrder.indexOf(index) <= activeImageIndex2 ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            ></div>
          ))}
        </div>
      </div>
      {/* <img src={leftImage} alt="Left" className="parallax-image left-image" />
      <img src={rightImage} alt="Right" className="parallax-image right-image" /> */}
      {/* <img src={bottomImage} alt="Bottom" className="parallax-image bottom-image" /> */}
    </div>
  );
};

export default InnoParallax;
