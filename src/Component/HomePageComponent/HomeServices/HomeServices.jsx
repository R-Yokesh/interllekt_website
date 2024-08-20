import React, { useEffect, useState, useRef } from 'react';
import './HomeServices.css';

const HomeServices = () => {
  const services = [
    { name: 'Social Media Imaging', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Creative Ideation', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Software', logo: require('../../../Assets/Images/Color Mark 4.png') },
    { name: 'Digital Integration', logo: require('../../../Assets/Images/Color Mark 3.png') },
    { name: 'Business Strategy', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Brand Strategy', logo: require('../../../Assets/Images/Color Mark 4.png') },
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
      <div key={index} className="hcarousel-item">
        <img src={service.logo} alt={`Logo ${index + 1}`} />
        <span>{service.name}</span>
      </div>
    ));
  };

  return (
    <div className="maj">
      <div className="hcarousel-container">
        <div ref={carouselRef} className="hcarousel">
          {renderCarouselItems(firstThreeServices)}
          {renderCarouselItems(firstThreeServices)}
        </div>
        <div ref={reverseCarouselRef} className="hcarousel reverse">
          {renderCarouselItems(lastThreeServices)}
          {renderCarouselItems(lastThreeServices)}
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
