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

  const carouselRef = useRef(null);
  const reverseCarouselRef = useRef(null);
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollValue = 0;
    let reverseScrollValue = 0;

    const handleScroll = () => {
      if (!isActive) return;

      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      // Update both carouselRef and reverseCarouselRef
      if (carouselRef.current) {
        scrollValue -= scrollDifference * 0.5; // Adjust scrolling speed
        carouselRef.current.style.transform = `translateX(${scrollValue}px)`;
      }

      if (reverseCarouselRef.current) {
        reverseScrollValue += scrollDifference * 0.5; // Adjust scrolling speed
        reverseCarouselRef.current.style.transform = `translateX(${reverseScrollValue}px)`;
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isActive]);

  const renderCarouselItems = (serviceList) => {
    return serviceList.map((service, index) => (
      <div key={index} className="bcarousel-item">
        <img src={service.logo} alt={`Logo ${index + 1}`} />
        <span>{service.name}</span>
      </div>
    ));
  };

  return (
    <div ref={sectionRef} className="bcarousel-container common-class">
      <div ref={carouselRef} className="bcarousel">
        {renderCarouselItems(services)}
        {renderCarouselItems(services)}
      </div>
      <div ref={reverseCarouselRef} className="bcarousel reverse">
        {renderCarouselItems(services.reverse())}
        {renderCarouselItems(services.reverse())}
      </div>
    </div>
  );
};

export default BSubservices;
