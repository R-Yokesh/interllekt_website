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

  const servicesTwo = [
    { name: 'Aesthetics', logo: require('../../../Assets/Images/Color Mark 4.png') },
    { name: 'Web app development', logo: require('../../../Assets/Images/Color Mark 3.png') },
    { name: 'Event Design Production', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Social Media Imaging', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Creative Ideation', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Digital Environment', logo: require('../../../Assets/Images/Color Mark 3.png') },
  ]

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

  // Showing all services from 0 to 4 (first carousel)
  const firstAllServices = services.slice(0, 5);

  // Showing the same services from 4 to 0 in reverse order (reverse carousel)
  const allServicesReversed = services.slice(0, 5).reverse();

  const renderCarouselItems = (serviceList) => {
    return serviceList.map((service, index) => (
      <div key={index} className="icarousel-item">
        <img src={service.logo} alt={`Logo ${index + 1}`} />
        <span>{service.name}</span>
      </div>
    ));
  };

  return (
    <div className="icarousel-container common-class">
      <div ref={carouselRef} className="icarousel">
        {renderCarouselItems(services)}
        {renderCarouselItems(services)}
        {renderCarouselItems(services)}
        {renderCarouselItems(services)}
      </div>
      <div ref={reverseCarouselRef} className="icarousel reverse">
        {renderCarouselItems(servicesTwo)}
        {renderCarouselItems(servicesTwo)}
        {renderCarouselItems(servicesTwo)}
        {renderCarouselItems(servicesTwo)}
      </div>
    </div>
  );
};

export default CapSubservices;

