import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/capabilities" className={`card ${focusedCard === 'Capabilities' ? 'focused' : ''}`} data-card="Capabilities">
          <h1>Capabilities</h1>
          {focusedCard === 'Capabilities' && (
            <div custom-tab_img="1" className="c-svg is-tab-menu-img eq-1 w-embed" style={{ opacity: 1, visibility: 'inherit' }}>
              <div className="brandMasonry eq-2">
                <div className="col"></div>
                <div className="col" grid-picture="" style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/64d5fe4571f9cde08da49dd9/64f5ea26fb80f1bd9d874388_decarbonization-jorik-kleen-vAgSEXaMhZ8-unsplash.jpg)' }}></div>
                <div className="col" grid-picture="" style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/64d5fe4571f9cde08da49dd9/64f5ea27df7028173fd79b28_decarbonization-pexels-martin-damboldt-799091.jpg)' }}></div>
                <div className="col" grid-picture="" style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/64d5fe4571f9cde08da49dd9/64f5ea26cd06463bff631174_decarbonization-Container%20ship.jpg)' }}></div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
            </div>
          )}
        </Link>
        <Link to="/innovation" className={`card ${focusedCard === 'Innovation' ? 'focused' : ''}`} data-card="Innovation">
          <h1>Innovation</h1>
          {focusedCard === 'Innovation' && (
            <div custom-tab_img="1" className="c-svg is-tab-menu-img eq-1 w-embed" style={{ opacity: 1, visibility: 'inherit' }}>
              <div className="brandMasonry eq-2">
                <div className="col"></div>
                <div className="col" grid-picture="" style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/64d5fe4571f9cde08da49dd9/64f5ea26fb80f1bd9d874388_decarbonization-jorik-kleen-vAgSEXaMhZ8-unsplash.jpg)' }}></div>
                <div className="col" grid-picture="" style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/64d5fe4571f9cde08da49dd9/64f5ea27df7028173fd79b28_decarbonization-pexels-martin-damboldt-799091.jpg)' }}></div>
                <div className="col" grid-picture="" style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/64d5fe4571f9cde08da49dd9/64f5ea26cd06463bff631174_decarbonization-Container%20ship.jpg)' }}></div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
            </div>
          )}
        </Link>
        <Link to="/business" className={`card ${focusedCard === 'Business' ? 'focused' : ''}`} data-card="Business">
          <h1>Business</h1>
          {focusedCard === 'Business' && (
            <div custom-tab_img="1" className="c-svg is-tab-menu-img eq-1 w-embed" style={{ opacity: 1, visibility: 'inherit' }}>
              <div className="brandMasonry eq-2">
                <div className="col"></div>
                <div className="col" grid-picture="" style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/64d5fe4571f9cde08da49dd9/64f5ea26fb80f1bd9d874388_decarbonization-jorik-kleen-vAgSEXaMhZ8-unsplash.jpg)' }}></div>
                <div className="col" grid-picture="" style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/64d5fe4571f9cde08da49dd9/64f5ea27df7028173fd79b28_decarbonization-pexels-martin-damboldt-799091.jpg)' }}></div>
                <div className="col" grid-picture="" style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/64d5fe4571f9cde08da49dd9/64f5ea26cd06463bff631174_decarbonization-Container%20ship.jpg)' }}></div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
            </div>
          )}
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
