import React, { useEffect, useState, useRef } from 'react';
import './CapSubservices.css';

const CapSubservices = () => {
  const services = [
    { name: 'Social Media Imaging', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Creative Ideation', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Digital Environment', logo: require('../../../Assets/Images/Color Mark 3.png') },
    { name: 'Aesthetics', logo: require('../../../Assets/Images/Color Mark 4.png') },
    { name: 'Web app development', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Event Design Production', logo: require('../../../Assets/Images/Color Mark 1.png') },
  ];

  const [scrollDirection, setScrollDirection] = useState(null);
  const carouselRef = useRef(null);
  const reverseCarouselRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
        if (carouselRef.current && reverseCarouselRef.current) {
          carouselRef.current.style.transform = 'translateX(-100px)';
          reverseCarouselRef.current.style.transform = 'translateX(100px)';
        }
      } else {
        setScrollDirection('up');
        if (carouselRef.current && reverseCarouselRef.current) {
          carouselRef.current.style.transform = 'translateX(100px)';
          reverseCarouselRef.current.style.transform = 'translateX(-100px)';
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const firstThreeServices = services.slice(0, 3);
  const lastThreeServices = services.slice(3, 6);

  const renderCarouselItems = (serviceList) => {
    return serviceList.map((service, index) => (
      <div key={index} className="ccarousel-item">
        <img src={service.logo} alt={`Logo ${index + 1}`} />
        <span>{service.name}</span>
      </div>
    ));
  };

  return (
    <div className="ccarousel-container common-class">
      <div ref={carouselRef} className="ccarousel">
        {renderCarouselItems(firstThreeServices)}
        {renderCarouselItems(firstThreeServices)}
      </div>
      <div ref={reverseCarouselRef} className="ccarousel reverse">
        {renderCarouselItems(lastThreeServices)}
        {renderCarouselItems(lastThreeServices)}
      </div>
    </div>
  );
};

export default CapSubservices;
