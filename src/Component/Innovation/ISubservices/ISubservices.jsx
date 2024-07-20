import React from 'react';
import './ISubservices.css';
 
const ISubservices = () => {
  const services = [
    { name: 'Software', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Digital Integration', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Product Development', logo: require('../../../Assets/Images/Color Mark 3.png') },
    { name: 'Social Impact', logo: require('../../../Assets/Images/Color Mark 4.png') },
    { name: 'Design Thinking', logo: require('../../../Assets/Images/Color Mark 1.png') },
  ];
 
  return (
    <div className="carousel-container">
      <div className="carousel">
        {services.map((service, index) => (
          <div key={index} className="carousel-item">
            <img src={service.logo} alt={`Logo ${index + 1}`} />
            <span>{service.name}</span>
          </div>
        ))}
        {services.map((service, index) => (
          <div key={index + services.length} className="carousel-item">
            <img src={service.logo} alt={`Logo ${index + 1}`} />
            <span>{service.name}</span>
          </div>
        ))}
      </div>
      <div className="carousel reverse">
        {services.map((service, index) => (
          <div key={index} className="carousel-item">
            <img src={service.logo} alt={`Logo ${index + 1}`} />
            <span>{service.name}</span>
          </div>
        ))}
        {services.map((service, index) => (
          <div key={index + services.length} className="carousel-item">
            <img src={service.logo} alt={`Logo ${index + 1}`} />
            <span>{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default ISubservices;