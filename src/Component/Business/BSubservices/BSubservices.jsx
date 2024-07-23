import React, { useEffect, useState, useRef } from 'react';
import './BSubservices.css';

const BSubservices = () => {
  const services = [
    { name: 'Business Strategy', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Brand Strategy', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Digital Marketing & Sales', logo: require('../../../Assets/Images/Color Mark 4.png') },
    { name: 'Operational Strategy', logo: require('../../../Assets/Images/Color Mark 3.png') },
    { name: 'People & Organization', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'M & A', logo: require('../../../Assets/Images/Color Mark 2.png') },
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
        carouselRef.current.style.transform = 'translateX(-100px)';
        reverseCarouselRef.current.style.transform = 'translateX(100px)';
      } else {
        setScrollDirection('up');
        carouselRef.current.style.transform = 'translateX(100px)';
        reverseCarouselRef.current.style.transform = 'translateX(-100px)';
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
      <div key={index} className="bcarousel-item">
        <img src={service.logo} alt={`Logo ${index + 1}`} />
        <span>{service.name}</span>
      </div>
    ));
  };

  return (
    <div className="bcarousel-container">
      <div ref={carouselRef} className="bcarousel">
        {renderCarouselItems(firstThreeServices)}
        {renderCarouselItems(firstThreeServices)}
      </div>
      <div ref={reverseCarouselRef} className="bcarousel reverse">
        {renderCarouselItems(lastThreeServices)}
        {renderCarouselItems(lastThreeServices)}
      </div>
    </div>
  );
};

export default BSubservices;
