import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CardContent.css';
import image1 from '../../../Assets/Images/Color Mark 4.png';
import image2 from '../../../Assets/Images/Color Mark 3.png';
import image3 from '../../../Assets/Images/Color Mark 1.png';
import image4 from '../../../Assets/Images/Color Mark 2.png';
import image5 from '../../../Assets/Images/Color Mark 3.png';
import image6 from '../../../Assets/Images/Color Mark 4.png';

const CardContent = () => {
  const [focusedCard, setFocusedCard] = useState('Capabilities');

  const handleScroll = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setFocusedCard(card.getAttribute('data-card'));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderMasonryGrid = () => (
    <div className="brandMasonry">
      <div className="col" style={{ backgroundImage: `url(${image1})` }}></div>
      <div className="col" style={{ backgroundImage: `url(${image2})` }}></div>
      <div className="col" style={{ backgroundImage: `url(${image3})` }}></div>
      <div className="col" style={{ backgroundImage: `url(${image4})` }}></div>
      <div className="col" style={{ backgroundImage: `url(${image5})` }}></div>
      <div className="col" style={{ backgroundImage: `url(${image6})` }}></div>
    </div>
  );

  return (
    <div className="card-content">
      <div className="left-side">
        <Link to="/capabilities" className={`card ${focusedCard === 'Capabilities' ? 'focused' : ''}`} data-card="Capabilities">
          <h1>Capabilities</h1>
          {focusedCard === 'Capabilities' && renderMasonryGrid()}
        </Link>
        <Link to="/innovation" className={`card ${focusedCard === 'Innovation' ? 'focused' : ''}`} data-card="Innovation">
          <h1>Innovation</h1>
          {focusedCard === 'Innovation' && renderMasonryGrid()}
        </Link>
        <Link to="/business" className={`card ${focusedCard === 'Business' ? 'focused' : ''}`} data-card="Business">
          <h1>Business</h1>
          {focusedCard === 'Business' && renderMasonryGrid()}
        </Link>
      </div>
      <div className="right-side">
        {focusedCard === 'Capabilities' && (
          <div className="c-content cap-content">
            <h2>Capabilities</h2>
            <p>A visionary creative network striving to craft sublime communication through design, pushing boundaries, we boldly explore new horizons, unlocking limitless possibilities through creative expression.</p>
          </div>
        )}
        {focusedCard === 'Innovation' && (
          <div className="c-content i-content">
            <h2>Innovation</h2>
            <p>We built an environment where every idea is valued and explored. When staying ahead of the curve or finding a way to make it work are a system of belief that we foster to help at any stage of an organisation. Whether it is digital transformation or creating a product with impact we explore and push boundaries.</p>
          </div>
        )}
        {focusedCard === 'Business' && (
          <div className="c-content b-content">
            <h2>Business</h2>
            <p>Crafting processes that help transform our partner organisation to be future-proof. With Strategy together with an approach so bold that ideas become Enterprise and transform them into truly global entities forging the way ahead with impact.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardContent;
