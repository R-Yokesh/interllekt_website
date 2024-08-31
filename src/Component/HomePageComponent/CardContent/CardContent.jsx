import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CardContent.css';
import Assets from '../../../Assets/Assets';

const images = [Assets.c1, Assets.c4, Assets.c2, Assets.c3];

const CardContent = () => {
  const [focusedCard, setFocusedCard] = useState('Capabilities');
  const [activeImageIndex1, setActiveImageIndex1] = useState(-1);
  const [activeImageIndex2, setActiveImageIndex2] = useState(-1);
  const [activeImageIndex3, setActiveImageIndex3] = useState(-1);
  const [isLooping1, setIsLooping1] = useState(false);
  const [isLooping2, setIsLooping2] = useState(false);
  const [isLooping3, setIsLooping3] = useState(false);

  const customOrder = [0, 2, 1, 3];
  const innovateOrder = [2, 0, 1, 3];
  const businessOrder = [3, 1, 0, 2];

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
          setActiveImageIndex1((prevIndex) => {
            if (prevIndex === -1) {
              return 0;
            } else {
              return (prevIndex + 1) % customOrder.length;
            }
          });

        }, 1000);
      } else {
        timer = setTimeout(() => {
          setIsLooping1(false);
          setActiveImageIndex1(-1);
        }, 1000);
      }

      if (activeImageIndex1 === customOrder.length - 1) {
        setIsLooping1(true);
      }
    }

    return () => clearTimeout(timer);
  }, [activeImageIndex1, isLooping1, focusedCard]);
  console.log('outactive', activeImageIndex1)

  // Opacity function for renderMasonryGrid2
  useEffect(() => {
    let timer;
    if (focusedCard === 'Innovation') {
      if (!isLooping2) {
        timer = setTimeout(() => {
          setActiveImageIndex2((prevIndex) => {
            if (prevIndex === -1) {
              return 0;
            } else {
              return (prevIndex + 1) % innovateOrder.length;
            }
          });
        }, 1000);
      } else {
        timer = setTimeout(() => {
          setIsLooping2(false);
          setActiveImageIndex2(-1);
        }, 1000);
      }

      if (activeImageIndex2 === innovateOrder.length - 1) {
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
          setActiveImageIndex3((prevIndex) => {
            if (prevIndex === -1) {
              return 0;
            } else {
              return (prevIndex + 1) % businessOrder.length;
            }
          });
        }, 1000);
      } else {
        timer = setTimeout(() => {
          setIsLooping3(false);
          setActiveImageIndex3(-1);
        }, 1000);
      }

      if (activeImageIndex3 === businessOrder.length - 1) {
        setIsLooping3(true);
      }
    }

    return () => clearTimeout(timer);
  }, [activeImageIndex3, isLooping3, focusedCard]);

  const renderMasonryGrid1 = () => (
    <div className="brandMasonry eq-2">
      {images.map((image, index) => (
        <div
          key={index}
          className="col"
          style={{
            backgroundImage: `url(${image})`,
            opacity: customOrder.indexOf(index) <= activeImageIndex1 ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        ></div>
      ))}
    </div>
  );

  const renderMasonryGrid2 = () => (
    <div className="brandMasonry eq-3">
      {[Assets.sp2, Assets.sp3, Assets.sp1, Assets.sp4].map((image, index) => (
        <div
          key={index}
          className="col"
          style={{
            backgroundImage: `url(${image})`,
            opacity: innovateOrder.indexOf(index) <= activeImageIndex2 ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        ></div>
      ))}
    </div>
  );

  const renderMasonryGrid3 = () => (
    <div className="brandMasonry eq-2">
      {[Assets.na3, Assets.na2, Assets.na4, Assets.na1].map((image, index) => (
        <div
          key={index}
          className="col"
          style={{
            backgroundImage: `url(${image})`,
            opacity: businessOrder.indexOf(index) <= activeImageIndex3 ? 1 : 0,
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

  const renderMasonryGrid4 = () => (
    <div className="brandMasonry eq-2">
      <div className="col" style={{ backgroundImage: `url(${images[0]})`, opacity: 1 }}></div>
      <div className="col" style={{ backgroundImage: `url(${images[1]})`, opacity: 1 }}></div>
      <div className="col" style={{ backgroundImage: `url(${images[2]})`, opacity: 1 }}></div>
      <div className="col" style={{ backgroundImage: `url(${images[3]})`, opacity: 1 }}></div>
    </div>
  );
  const renderMasonryGrid5 = () => (
    <div className="brandMasonry eq-2">
      <div className="col" style={{ backgroundImage: `url(${images[1]})`, opacity: 1 }}></div>
      <div className="col" style={{ backgroundImage: `url(${images[0]})`, opacity: 1 }}></div>
      <div className="col" style={{ backgroundImage: `url(${images[3]})`, opacity: 1 }}></div>
      <div className="col" style={{ backgroundImage: `url(${images[2]})`, opacity: 1 }}></div>
    </div>
  );
  const renderMasonryGrid6 = () => (
    <div className="brandMasonry eq-2">
      <div className="col" style={{ backgroundImage: `url(${images[2]})`, opacity: 1 }}></div>
      <div className="col" style={{ backgroundImage: `url(${images[1]})`, opacity: 1 }}></div>
      <div className="col" style={{ backgroundImage: `url(${images[3]})`, opacity: 1 }}></div>
      <div className="col" style={{ backgroundImage: `url(${images[0]})`, opacity: 1 }}></div>
    </div>
  );
  const [fadeState, setFadeState] = useState('initial');

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        // Fade in each image one by one
        for (let i = 0; i < images.length; i++) {
          setFadeState(`fade-in-${i}`);
          await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust timing as needed
        }

        // Keep all images visible for a moment
        setFadeState('show-all');
        await new Promise(resolve => setTimeout(resolve, 2000)); // Adjust timing as needed

        // Fade out each image
        setFadeState('fade-out');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust timing as needed
      }
    };

    sequence();

    // Cleanup function if necessary
    return () => clearTimeout(sequence);
  }, []);

  const renderMasonryGrid = (imageOrder) => (
    <div className="brandMasonry eq-2">
      {imageOrder.map((img, index) => (
        <div
          key={index}
          className={`col transition-opacity ${fadeState === `fade-in-${index}` ? 'fade-in' : ''} ${fadeState === 'show-all' ? 'fade-in' : ''} ${fadeState === 'fade-out' ? 'fade-out' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
    </div>
  );

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
          {renderMasonryGrid([Assets.c1, Assets.c4, Assets.c2, Assets.c3])}
          <p className='subvism'>With visionary ideas and meticulous craftsmanship, we help design amazing experiences.</p>
        </div>
        <div className="firstsechg">
          <Link to="/innovation" className='caplin'>Innovation</Link>
          {renderMasonryGrid([Assets.sp2, Assets.sp3, Assets.sp1, Assets.sp4])}
          <p className='subvism'>We help abstract approaches get built into highly versatile products for the next generation.</p>
        </div>
        <div className="firstsechg">
          <Link to="/business" className='caplin'>Business</Link>
          {renderMasonryGrid([Assets.na3, Assets.na2, Assets.na4, Assets.na1])}
          <p className='subvism'>We help build processes and provide support services to make businesses future-proof.</p>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
