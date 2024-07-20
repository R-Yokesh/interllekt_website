import React from 'react';
import './BSubservices.css';
 
const BSubservices = () => {
  const services = [
    { name: 'Business Strategy', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Brand Strategy', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Digital Marketing & Sales', logo: require('../../../Assets/Images/Color Mark 3.png') },
    { name: 'Operational Strategy', logo: require('../../../Assets/Images/Color Mark 4.png') },
    { name: 'People & Organization', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'M & A', logo: require('../../../Assets/Images/Color Mark 2.png') },
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
 
export default BSubservices;
 