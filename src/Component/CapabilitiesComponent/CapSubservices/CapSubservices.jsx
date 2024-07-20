import React from 'react';
import './CapSubservices.css';
 
const CapSubservices = () => {
  const services = [
    { name: 'Social Media Imaging', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Creative Ideation', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Digital Environment', logo: require('../../../Assets/Images/Color Mark 3.png') },
    { name: 'Aesthetics', logo: require('../../../Assets/Images/Color Mark 4.png') },
    { name: 'Web app development', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Event Design Production', logo: require('../../../Assets/Images/Color Mark 2.png') },
  ];
 
  return (
    <div className="ccarousel-container">
      <div className="ccarousel">
        {services.map((service, index) => (
          <div key={index} className="ccarousel-item">
            <img src={service.logo} alt={`Logo ${index + 1}`} />
            <span>{service.name}</span>
          </div>
        ))}
        {services.map((service, index) => (
          <div key={index + services.length} className="ccarousel-item">
            <img src={service.logo} alt={`Logo ${index + 1}`} />
            <span>{service.name}</span>
          </div>
        ))}
      </div>
      <div className="ccarousel reverse">
        {services.map((service, index) => (
          <div key={index} className="ccarousel-item">
            <img src={service.logo} alt={`Logo ${index + 1}`} />
            <span>{service.name}</span>
          </div>
        ))}
        {services.map((service, index) => (
          <div key={index + services.length} className="ccarousel-item">
            <img src={service.logo} alt={`Logo ${index + 1}`} />
            <span>{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default CapSubservices;
 