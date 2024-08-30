import React, { useEffect, useState, useRef } from 'react';
import './HomeServices.css';

const HomeServices = () => {
  const services = [
    { name: 'Social Media Imaging', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Software', logo: require('../../../Assets/Images/Color Mark 4.png') },
    { name: 'Creative Ideation', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Digital Integration', logo: require('../../../Assets/Images/Color Mark 3.png') },
    { name: 'Publishing Design', logo: require('../../../Assets/Images/Color Mark 3.png') },
    { name: 'Business Strategy', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Brand Strategy', logo: require('../../../Assets/Images/Color Mark 4.png') },
  ];

  const carouselRef = useRef(null);
  const reverseCarouselRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        if (carouselRef.current && reverseCarouselRef.current) {
          carouselRef.current.classList.add('hcarousel-down');
          carouselRef.current.classList.remove('hcarousel-up');
          reverseCarouselRef.current.classList.add('hcarousel-up');
          reverseCarouselRef.current.classList.remove('hcarousel-down');
        }
      } else {
        // Scrolling up
        if (carouselRef.current && reverseCarouselRef.current) {
          carouselRef.current.classList.add('hcarousel-up');
          carouselRef.current.classList.remove('hcarousel-down');
          reverseCarouselRef.current.classList.add('hcarousel-down');
          reverseCarouselRef.current.classList.remove('hcarousel-up');
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Initial setup on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const firstSixServices = services.slice(0, 6);
  const lastSixServicesReversed = services.slice(0, 6).reverse();

  const renderCarouselItems = (serviceList) => {
    return serviceList.map((service, index) => (
      <div key={index} className="hcarousel-item">
        <img src={service.logo} alt={`Logo ${index + 1}`} />
        <span>{service.name}</span>
      </div>
    ));
  };

  return (
    <div className="maj">
      <div className="hcarousel-container">
        <div ref={carouselRef} className="hcarousel hcarousel-up">
          {renderCarouselItems(firstSixServices)}
          {renderCarouselItems(firstSixServices)}
        </div>
        <div ref={reverseCarouselRef} className="hcarousel reverse hcarousel-down">
          {renderCarouselItems(lastSixServicesReversed)}
          {renderCarouselItems(lastSixServicesReversed)}
        </div>
      </div>

      <div className="container">
        <h2 className="section-titlewwn">
          If you here to make an <br />impact or build a <br />legacy brand
        </h2>
      </div>
    </div>
  );
};

export default HomeServices;
