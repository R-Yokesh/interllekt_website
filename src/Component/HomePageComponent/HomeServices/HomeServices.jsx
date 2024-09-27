import React, { useEffect, useState, useRef } from 'react';
import './HomeServices.css';

const HomeServices = () => {
  const services = [
      { name: 'Aerospace', logo: require('../../../Assets/Images/Color Mark 1.png') },
      { name: 'Energy', logo: require('../../../Assets/Images/Color Mark 2.png') },
      { name: 'Advertising', logo: require('../../../Assets/Images/Color Mark 3.png') },
      { name: 'Media & Entertainment', logo: require('../../../Assets/Images/Color Mark 4.png')},
      { name: 'Technology', logo: require('../../../Assets/Images/Color Mark 3.png') },
    ];
  
    const servicesTwo = [
      { name: 'Technology', logo: require('../../../Assets/Images/Color Mark 2.png') },
      { name: 'Education', logo: require('../../../Assets/Images/Color Mark 4.png') },
      { name: 'Consumer Products Industry', logo: require('../../../Assets/Images/Color Mark 1.png') },
      { name: 'Automotive', logo: require('../../../Assets/Images/Color Mark 2.png') },
      { name: 'Logistics', logo: require('../../../Assets/Images/Color Mark 3.png') },	
    ];
  
    const servicesThree = [
      { name: 'Telecommunication', logo: require('../../../Assets/Images/Color Mark 4.png') },
      { name: 'Publishing', logo: require('../../../Assets/Images/Color Mark 2.png') },
      { name: 'Industrial Goods', logo: require('../../../Assets/Images/Color Mark 3.png') },
      { name: 'Fashion & Luxury', logo: require('../../../Assets/Images/Color Mark 4.png') },
      { name: 'Private Equity', logo: require('../../../Assets/Images/Color Mark 1.png') },
    ];
  
  
  
  
   

  const [scrollDirection, setScrollDirection] = useState(null);
  const carouselRef = useRef(null);
  const reverseCarouselRef = useRef(null);
  const thirdCarouselRef = useRef(null);
  const sectionRef = useRef(null); // For observing when section is in view

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const movementFactor = 550; // Adjust the movement to double for every scroll

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
        if (carouselRef.current && reverseCarouselRef.current && thirdCarouselRef.current) {
          carouselRef.current.style.transform = `translateX(-${movementFactor}px)`;
          reverseCarouselRef.current.style.transform = `translateX(${movementFactor}px)`;
          thirdCarouselRef.current.style.transform = `translateX(-${movementFactor}px)`;
        }
      } else {
        setScrollDirection('up');
        if (carouselRef.current && reverseCarouselRef.current && thirdCarouselRef.current) {
          carouselRef.current.style.transform = `translateX(${movementFactor}px)`;
          reverseCarouselRef.current.style.transform = `translateX(-${movementFactor}px)`;
          thirdCarouselRef.current.style.transform = `translateX(${movementFactor}px)`;
        }
      }
      lastScrollY = currentScrollY;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll); // Start scrolling when in view
        } else {
          window.removeEventListener('scroll', handleScroll); // Stop scrolling when out of view
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll); // Cleanup listener when component unmounts
    };
  }, []);

  const renderCarouselItems = (serviceList) => {
    return serviceList.map((service, index) => (
      <div key={index} className="hcarousel-item">
        <img src={service.logo} alt={`Logo ${index + 1}`} />
        <span>{service.name}</span>
      </div>
    ));
  };

  return (
    <div ref={sectionRef} className="hcarousel-container common-class">
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
      <div ref={thirdCarouselRef} className="hcarousel">
        {renderCarouselItems(servicesThree)}
        {renderCarouselItems(servicesThree)}
        {renderCarouselItems(servicesThree)}
        {renderCarouselItems(servicesThree)}
      </div>
    </div>
  );
};

export default HomeServices;
