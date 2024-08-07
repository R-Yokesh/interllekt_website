import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CardContent.css';
import Assets from '../../../Assets/Assets';

const images = [
  Assets.ind, Assets.logo, Assets.ind, Assets.menuicon, Assets.indst, Assets.ind, Assets.interllektlogo, Assets.interllektlogo, Assets.interllektlogo,
];

const backgroundColors = [
  '#ffcccb', '#add8e6', '#90ee90', '#ffebcd', '#d3d3d3', '#ffe4e1', '#f0e68c', '#f0e68c'
];

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

  const [imageIndex2, setImageIndex2] = useState(1);
  const [imageIndex3, setImageIndex3] = useState(2);
  const [imageIndex4, setImageIndex4] = useState(3);

  const [showBackground2, setShowBackground2] = useState(true);
  const [showBackground3, setShowBackground3] = useState(true);
  const [showBackground4, setShowBackground4] = useState(true);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setShowBackground2(true);
      setTimeout(() => setShowBackground2(false), 2000);
      setTimeout(() => {
        setImageIndex2(prevIndex => (prevIndex + 1) % images.length);
        setShowBackground2(true);
      }, 3000);
    }, 4000);

    const interval3 = setInterval(() => {
      setShowBackground3(true);
      setTimeout(() => setShowBackground3(false), 2000);
      setTimeout(() => {
        setImageIndex3(prevIndex => (prevIndex + 1) % images.length);
        setShowBackground3(true);
      }, 3000);
    }, 4000);

    const interval4 = setInterval(() => {
      setShowBackground4(true);
      setTimeout(() => setShowBackground4(false), 2000);
      setTimeout(() => {
        setImageIndex4(prevIndex => (prevIndex + 1) % images.length);
        setShowBackground4(true);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  const renderMasonryGrid = () => (
    <div className="brandMasonry eq-3">
      <div className="col" style={{backgroundColor:"green"}} ></div>
      <div className="col" grid-picture="" style={{ opacity: 1, visibility: 'inherit', width:"100%", background: showBackground2 ? backgroundColors[imageIndex2] : `url(${images[imageIndex2]})` }}></div>
      <div className="col" grid-picture="" style={{ opacity: 1, visibility: 'inherit',  width:"100%", background: showBackground3 ? backgroundColors[imageIndex3] : `url(${images[imageIndex3]})` }}></div>
      <div className="col" grid-picture="" style={{ opacity: 1, visibility: 'inherit',  width:"100%", background: showBackground4 ? backgroundColors[imageIndex4] : `url(${images[imageIndex4]})` }}></div>
    </div>
  );

  return (
    <div className="container-fluid res-commoncard">
      <div className="card-content row">
        <div className="sleft-side col-lg-6 col-md-6 col-sm-6">
          <div className="capclass">
            <Link to="/capabilities" className={`card ${focusedCard === 'Capabilities' ? 'focused' : ''}`} data-card="Capabilities">
              <div><h1>Capabilities</h1></div>
            </Link>
            {focusedCard === 'Capabilities' && renderMasonryGrid()}
          </div>
          <div className="innoclass">
            <Link to="/innovation" className={`card ${focusedCard === 'Innovation' ? 'focused' : ''}`} data-card="Innovation">
              <div><h1>Innovation</h1></div>
            </Link>
            {focusedCard === 'Innovation' && renderMasonryGrid()}
          </div>
          <div className="buiclass">
            <Link to="/business" className={`card ${focusedCard === 'Business' ? 'focused' : ''}`} data-card="Business">
              <div><h1>Business</h1></div>
            </Link>
            {focusedCard === 'Business' && renderMasonryGrid()}
          </div>
        </div>
        <div className="sright-side col-lg-6 col-md-6 col-sm-6">
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

      <div className="tabsresponsive">
        <div className="firstsechg">
          <Link to="/capabilities" className='caplin'>Capabilities</Link>
          {renderMasonryGrid()}
          <p className='subvism'>A visionary creative network striving to craft sublime communication through design, pushing boundaries, we boldly explore new horizons, unlocking limitless possibilities through creative expression.</p>
        </div>
        <div className="firstsechg">
          <Link to="/innovation" className='caplin'>Innovation</Link>
          {renderMasonryGrid()}
          <p className='subvism'>We built an environment where every idea is valued and explored. When staying ahead of the curve or finding a way to make it work are a system of belief that we foster to help at any stage of an organisation. Whether it is digital transformation or creating a product with impact we explore and push boundaries.</p>
        </div>
        <div className="firstsechg">
          <Link to="/business" className='caplin'>Business</Link>
          {renderMasonryGrid()}
          <p className='subvism'>Crafting processes that help transform our partner organisation to be future-proof. With Strategy together with an approach so bold that ideas become Enterprise and transform them into truly global entities forging the way ahead with impact.</p>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
