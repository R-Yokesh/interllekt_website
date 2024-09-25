import React, { useEffect, useState, useRef } from 'react';
import './HomeServices.css';

const HomeServices = () => {
  const services = [
    { name: 'Aerospace', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Energy', logo: require('../../../Assets/Images/Color Mark 4.png') },
    { name: 'Advertising', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Media & Entertainment', logo: require('../../../Assets/Images/Color Mark 4.png') },
    { name: 'Private Equity', logo: require('../../../Assets/Images/Color Mark 3.png') },
    { name: 'Technology', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Education', logo: require('../../../Assets/Images/Color Mark 4.png') },
  ];

  const servicesTwo = [
    { name: 'Consumer Products Industry', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Automotive', logo: require('../../../Assets/Images/Color Mark 3.png') },
    { name: 'Logistics', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Telecommunication', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Publishing', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Industrial Goods', logo: require('../../../Assets/Images/Color Mark 4.png') },
    { name: 'Fashion & Luxury', logo: require('../../../Assets/Images/Color Mark 3.png') },
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

  // Showing all services from 0 to 4 (first carousel)
  const firstAllServices = services.slice(0, 6);

  // Showing the same services from 4 to 0 in reverse order (reverse carousel)
  const allServicesReversed = services.slice(0, 6).reverse();

  const renderCarouselItems = (serviceList) => {
    return serviceList.map((service, index) => (
      <div key={index} className="hcarousel-item">
        <img src={service.logo} alt={`Logo ${index + 1}`} />
        <span>{service.name}</span>
      </div>
    ));
  };

  return (
    <div className="hcarousel-container common-class">
      <h1>Industries</h1>
      <div ref={carouselRef} className="hcarousel">
        {renderCarouselItems(services)}
        {renderCarouselItems(services)}
        {renderCarouselItems(services)}
        {renderCarouselItems(services)}
      </div>
      <div ref={reverseCarouselRef} className="hcarousel reverse">
        {renderCarouselItems(servicesTwo)}
        {renderCarouselItems(servicesTwo)}
        {renderCarouselItems(servicesTwo)}
        {renderCarouselItems(servicesTwo)}
      </div>
    </div>
  );
};

export default HomeServices;

