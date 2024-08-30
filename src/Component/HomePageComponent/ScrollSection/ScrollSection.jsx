import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import "./ScrollSection.css";
import '../CardContent/CardContent.css'; // Make sure to create and link this CSS file
import Assets from '../../../Assets/Assets'; // Adjust the import path as needed

const images1 = [Assets.c1, Assets.c4, Assets.c2, Assets.c3];
const images2 = [Assets.c2, Assets.c3, Assets.c1, Assets.c4];
const images3 = [Assets.c3, Assets.c1, Assets.c4, Assets.c2];

const ScrollSection = () => {
  const cards = [
    {
      id: 1,
      title: 'Capabilities',
      description: 'With visionary ideas and meticulous craftsmanship, we help design amazing experiences.',
      backgroundColor: '#5619ba',
      textColor: '#d5fdff',
      imgSrc: 'https://cdn.prod.website-files.com/659dc61047017bf9ae30d5ee/6611cf85ded44286b62638fc_cover-metagravity-01.jpg',
      videoSrc: 'https://maxmartinez-media.s3.amazonaws.com/metagravity/metagravity--cover--zip.mp4',
      link: '/capabilities'
    },
    {
      id: 2,
      title: 'Innovation',
      description: 'We help abstract approaches get built into highly versatile products for the next generation.',
      backgroundColor: '#101820',
      textColor: '#d8fff5',
      imgSrc: 'https://cdn.prod.website-files.com/659dc61047017bf9ae30d5ee/6611cf8b94cebea5ac84815e_cover-riskledger-01.jpg',
      videoSrc: 'https://maxmartinez-media.s3.amazonaws.com/risk-ledger/risk-ledger--cover--zip.mp4',
      link: '/innovation'
    },
    {
      id: 3,
      title: 'Business',
      description: 'We help build processes and provide support services to make businesses future proof.',
      backgroundColor: '#de176f',
      textColor: '#ffe1ee',
      imgSrc: 'https://cdn.prod.website-files.com/659dc61047017bf9ae30d5ee/6611cf9332f9abbac09e57b1_cover-omnipresent-01.jpg',
      videoSrc: 'https://maxmartinez-media.s3.amazonaws.com/omnipresent/omnipresent--cover--zip.mp4',
      link: '/business'
    }
  ];

  const [focusedCard, setFocusedCard] = useState(null);

  const handleScroll = () => {
    const cards = document.querySelectorAll('.card');
    let cardInFocus = null;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        cardInFocus = card.getAttribute('data-card');
      }
    });

    setFocusedCard(cardInFocus);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderMasonryGrid = (images, visibleImages) => (
    <div className={`brandMasonry eq-2 ${focusedCard ? 'fade-in' : 'fade-out'}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`col ${visibleImages[index] ? 'visible' : 'hidden'}`}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundImage: `url(${image})`,
            transition: 'opacity 0.5s ease-in-out',
          }}
        ></div>
      ))}
    </div>
  );

  return (
    <div className="color-track dark-bg">
      <div className="scroll-path">
        {cards.map(card => (
          <div key={card.id} data-card={card.title} className="scroll-frame sticky" style={{ backgroundColor: card.backgroundColor, color: card.textColor }}>
            <div className="super-card-frame">
              <div className="card-content s row container-fluid">
                <div className="sleft-side col-lg-12 col-md-6 col-sm-6">
                  <div className="row" style={{ paddingLeft: "2%" }}>
                    <div className="col-lg-6">
                      <div className={`linkssa ${focusedCard === card.title ? 'focused' : ''}`}>
                        <Link to={card.link} className={`card ${focusedCard === card.title ? 'focused' : ''}`} data-card={card.title}>
                          <div><h1>{card.title}</h1></div>
                        </Link>
                        <div className="dop">
                          {focusedCard === card.title && renderMasonryGrid(
                            card.title === 'Capabilities' ? images1 : card.title === 'Innovation' ? images2 : images3,
                            card.title === 'Capabilities' ? Array(4).fill(false) : card.title === 'Innovation' ? Array(4).fill(false) : Array(4).fill(false)
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {focusedCard === card.title && (
                        <div className="c-content">
                          <h2>{card.title}</h2>
                          <p className='builn'>{card.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSection;
