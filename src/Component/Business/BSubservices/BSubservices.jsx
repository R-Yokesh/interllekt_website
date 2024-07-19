import React, { useEffect, useRef, useState } from 'react';
import './BSubservices.css';

const BSubservices = () => {
  const services = [
    { name: 'Social Media Imaging', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Creative Ideation', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Digital Environment', logo: require('../../../Assets/Images/Color Mark 3.png') },
    { name: 'Web app development', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Event Design Production', logo: require('../../../Assets/Images/Color Mark 4.png') },
  ];

  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setIsScrolling(false), 100);

    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current) {
      setScrollDirection('down');
    } else {
      setScrollDirection('up');
    }
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="carousel-container">
      <div className={`carousel ${isScrolling && scrollDirection === 'down' ? 'scrolling-left' : ''}`}>
        {services.concat(services).map((service, index) => (
          <div key={index} className="carousel-item">
            <img src={service.logo} alt={`Logo ${index % services.length + 1}`} />
            <span>{service.name}</span>
          </div>
        ))}
      </div>
      <div className={`carousel reverse ${isScrolling && scrollDirection === 'up' ? 'scrolling-right' : ''}`}>
        {services.concat(services).map((service, index) => (
          <div key={index} className="carousel-item">
            <img src={service.logo} alt={`Logo ${index % services.length + 1}`} />
            <span>{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BSubservices;


// import React from 'react';
// import './BSubservices.css';
 
// const BSubservices = () => {
//   const services = [
//     { name: 'Social Media Imaging', logo: require('../../../Assets/Images/Color Mark 1.png') },
//     { name: 'Creative Ideation', logo: require('../../../Assets/Images/Color Mark 2.png') },
//     { name: 'Digital Environment', logo: require('../../../Assets/Images/Color Mark 3.png') },
//     { name: 'Web app development', logo: require('../../../Assets/Images/Color Mark 1.png') },
//     { name: 'Event Design Production', logo: require('../../../Assets/Images/Color Mark 4.png') },
//   ];
 
//   return (
//     <div className="carousel-container">
//       <div className="carousel">
//         {services.map((service, index) => (
//           <div key={index} className="carousel-item">
//             <img src={service.logo} alt={`Logo ${index + 1}`} />
//             <span>{service.name}</span>
//           </div>
//         ))}
//         {services.map((service, index) => (
//           <div key={index + services.length} className="carousel-item">
//             <img src={service.logo} alt={`Logo ${index + 1}`} />
//             <span>{service.name}</span>
//           </div>
//         ))}
//       </div>
//       <div className="carousel reverse">
//         {services.map((service, index) => (
//           <div key={index} className="carousel-item">
//             <img src={service.logo} alt={`Logo ${index + 1}`} />
//             <span>{service.name}</span>
//           </div>
//         ))}
//         {services.map((service, index) => (
//           <div key={index + services.length} className="carousel-item">
//             <img src={service.logo} alt={`Logo ${index + 1}`} />
//             <span>{service.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
 
// export default BSubservices;
 