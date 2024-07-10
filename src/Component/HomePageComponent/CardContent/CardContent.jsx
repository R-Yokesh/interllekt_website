import React, { useState, useEffect } from 'react';
import './CardContent.css';

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

  return (
    <div className="card-content">
      <div className="left-side">
        {['Capabilities', 'Innovation', 'Business'].map((card) => (
          <div 
            key={card}
            className={`card ${focusedCard === card ? 'focused' : ''}`}
            data-card={card}
          >
            <h1>{card}</h1>
          </div>
        ))}
      </div>
      <div className="right-side">
        {focusedCard === 'Capabilities' && (
          <div className="content">
            <h2>Capabilities</h2>
            <p>A visionary creative network striving to craft sublime communication through design, pushing boundaries, we boldly explore new horizons, unlocking limitless possibilities through creative expression.</p>
          </div>
        )}
        {focusedCard === 'Innovation' && (
          <div className="content">
            <h2>Innovation</h2>
            <p>We built an environment where every idea is valued and explored. When staying ahead of the curve or finding a way to make it work are a system of belief that we foster to help at any stage of an organisation. Whether it is digital transformation or creating a product with impact we explore and push boundaries.</p>
          </div>
        )}
        {focusedCard === 'Business' && (
          <div className="content">
            <h2>Business</h2>
            <p>Crafting processes that help transform our partner organisation to be future-proof. With Strategy together with an approach so bold that ideas become Enterprise and transform them into truly global entities forging the way ahead with impact.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardContent;
