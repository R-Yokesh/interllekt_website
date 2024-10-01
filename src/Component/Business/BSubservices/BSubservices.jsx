import React from 'react';
import './BSubservices.css';

const BSubservices = () => {
  const services = [
    { name: 'Business Strategy', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'Brand Strategy', logo: require('../../../Assets/Images/Color Mark 2.png') },
    { name: 'Digital Marketing & Sales', logo: require('../../../Assets/Images/Color Mark 3.png') },
    { name: 'Operational Strategy', logo: require('../../../Assets/Images/Color Mark 4.png') },
    { name: 'People & Organization', logo: require('../../../Assets/Images/Color Mark 1.png') },
    { name: 'M & A', logo: require('../../../Assets/Images/Color Mark 3.png') },
  ];

  const renderCarouselItems = (serviceList) => {
    return serviceList.map((service, index) => (
      <div key={index} className="bcarousel-item">
        <img src={service.logo} alt={`Logo ${index + 1}`} />
        <span>{service.name}</span>
      </div>
    ));
  };

  return (
    <div className="bcarousel-container common-class">
      <div className="bcarousel">
        {renderCarouselItems(services)}
        {renderCarouselItems(services)} {/* Duplicate services for infinite loop */}
      </div>
    </div>
  );
};

export default BSubservices;
