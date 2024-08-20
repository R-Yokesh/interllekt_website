import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CardContent.css';
import Assets from '../../../Assets/Assets';

const images = [Assets.c1, Assets.c4, Assets.c2, Assets.c3];

const CardContent = () => {
  const [focusedCard, setFocusedCard] = useState('Capabilities');
  const [currentImages, setCurrentImages] = useState(images);
  const [activeImageIndex1, setActiveImageIndex1] = useState(0);
  const [activeImageIndex2, setActiveImageIndex2] = useState(0);
  const [activeImageIndex3, setActiveImageIndex3] = useState(0);
  const [isLooping1, setIsLooping1] = useState(false);
  const [isLooping2, setIsLooping2] = useState(false);
  const [isLooping3, setIsLooping3] = useState(false);

  const handleScroll = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setFocusedCard(card.getAttribute('data-card'));
        window.scrollTo({
          behavior: 'smooth',
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Opacity function for renderMasonryGrid1
  useEffect(() => {
    let timer;
    if (focusedCard === 'Capabilities') {
      if (!isLooping1) {
        timer = setTimeout(() => {
          setActiveImageIndex1((prevIndex) => (prevIndex + 1) % currentImages.length);
        }, 1000);
      } else {
        timer = setTimeout(() => {
          setIsLooping1(false);
          setActiveImageIndex1(0);
        }, 1000);
      }

      if (activeImageIndex1 === currentImages.length - 1) {
        setIsLooping1(true);
      }
    }

    return () => clearTimeout(timer);
  }, [activeImageIndex1, isLooping1, focusedCard]);

  // Opacity function for renderMasonryGrid2
  useEffect(() => {
    let timer;
    if (focusedCard === 'Innovation') {
      if (!isLooping2) {
        timer = setTimeout(() => {
          setActiveImageIndex2((prevIndex) => (prevIndex + 1) % currentImages.length);
        }, 1000);
      } else {
        timer = setTimeout(() => {
          setIsLooping2(false);
          setActiveImageIndex2(0);
        }, 1000);
      }

      if (activeImageIndex2 === currentImages.length - 1) {
        setIsLooping2(true);
      }
    }

    return () => clearTimeout(timer);
  }, [activeImageIndex2, isLooping2, focusedCard]);

  // Opacity function for renderMasonryGrid3
  useEffect(() => {
    let timer;
    if (focusedCard === 'Business') {
      if (!isLooping3) {
        timer = setTimeout(() => {
          setActiveImageIndex3((prevIndex) => (prevIndex + 1) % currentImages.length);
        }, 1000);
      } else {
        timer = setTimeout(() => {
          setIsLooping3(false);
          setActiveImageIndex3(0);
        }, 1000);
      }

      if (activeImageIndex3 === currentImages.length - 1) {
        setIsLooping3(true);
      }
    }

    return () => clearTimeout(timer);
  }, [activeImageIndex3, isLooping3, focusedCard]);

  const renderMasonryGrid1 = () => (
    <div className="brandMasonry eq-2">
      {currentImages.map((image, index) => (
        <div
          key={index}
          className="col"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index <= activeImageIndex1 ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        ></div>
      ))}
    </div>
  );

 const renderMasonryGrid2 = () => (
  <div className="brandMasonry eq-2">
    {[images[1], images[0], images[3], images[2]].map((image, index) => (
      <div
        key={index}
        className="col"
        style={{
          backgroundImage: `url(${image})`,
          opacity: index >= 3 - activeImageIndex2 ? 1 : 0, // Adjusting opacity based on reversed order
          transition: 'opacity 1s ease-in-out',
        }}
      ></div>
    ))}
  </div>
);


  const renderMasonryGrid3 = () => (
    <div className="brandMasonry eq-2">
      {[images[3], images[2], images[1], images[0]].map((image, index) => (
        <div
          key={index}
          className="col"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index <= activeImageIndex3 ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        ></div>
      ))}
    </div>
  );

  const getMasonryGrid = () => {
    if (focusedCard === 'Capabilities') {
      return renderMasonryGrid1();
    } else if (focusedCard === 'Innovation') {
      return renderMasonryGrid2();
    } else if (focusedCard === 'Business') {
      return renderMasonryGrid3();
    }
  };

  return (
    <div className="res-commoncard">
      <div className="card-content row container-fluid">
        <div className="sleft-side col-lg-12 col-md-6 col-sm-6">
          <div className="row" style={{ paddingLeft: '2%' }}>
            <div className="capclass col-lg-6">
              <div className={`linkssa ${focusedCard === 'Capabilities' ? 'focused' : ''}`}>
                <Link to="/capabilities" className={`card ${focusedCard === 'Capabilities' ? 'focused' : ''}`} data-card="Capabilities">
                  <div><h1>Capabilities</h1></div>
                </Link>
                <div className="dop">
                  {focusedCard === 'Capabilities' && getMasonryGrid()}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {focusedCard === 'Capabilities' && (
                <div className="c-content cap-content">
                  <h2>Capabilities</h2>
                  <p className='builn'>With visionary ideas and meticulous craftsmanship, we help design amazing experiences.</p>
                </div>
              )}
            </div>

            <div className="innoclass col-lg-6">
              <div className={`linkssa ${focusedCard === 'Innovation' ? 'focused' : ''}`}>
                <Link to="/innovation" className={`card ${focusedCard === 'Innovation' ? 'focused' : ''}`} data-card="Innovation">
                  <div><h1>Innovation</h1></div>
                </Link>
                <div className="dop">
                  {focusedCard === 'Innovation' && getMasonryGrid()}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {focusedCard === 'Innovation' && (
                <div className="c-content i-content">
                  <h2>Innovation</h2>
                  <p className='builn'>We help abstract approaches get built into highly versatile products for the next generation.</p>
                </div>
              )}
            </div>
            <div className="buiclass col-lg-6">
              <div className={`linkssa ${focusedCard === 'Business' ? 'focused' : ''}`}>
                <Link to="/business" className={`card ${focusedCard === 'Business' ? 'focused' : ''}`} data-card="Business">
                  <div><h1>Business</h1></div>
                </Link>
                <div className="dop">
                  {focusedCard === 'Business' && getMasonryGrid()}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {focusedCard === 'Business' && (
                <div className="c-content b-content">
                  <h2>Business</h2>
                  <p className='builn'>We help build processes and provide support services to make businesses future-proof.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="tabsresponsive">
        <div className="firstsechg">
          <Link to="/capabilities" className='caplin'>Capabilities</Link>
          {getMasonryGrid()}
          <p className='subvism'>A visionary creative network striving to craft sublime communication through design, pushing boundaries, we align.</p>
        </div>
        <div className="secondsechg">
          <Link to="/innovation" className='caplin'>Innovation</Link>
          {getMasonryGrid()}
          <p className='subvism'>In the ever-changing landscape, we build innovative products and solutions that resonate with the next generation.</p>
        </div>
        <div className="thirdsechg">
          <Link to="/business" className='caplin'>Business</Link>
          {getMasonryGrid()}
          <p className='subvism'>Helping businesses establish themselves, our solutions and services are always in sync with the business environment's demands.</p>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
