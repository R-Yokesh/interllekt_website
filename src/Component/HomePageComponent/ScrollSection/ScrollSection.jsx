import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./ScrollSection.css";

const ScrollSection = () => {
  const cards = [
    {
      id: 1,
      title: 'MetaGravity',
      description: 'Unleashing the power of supermassive multiplayer gaming beyond limits',
      backgroundColor: '#5619ba',
      textColor: '#d5fdff',
      imgSrc: 'https://cdn.prod.website-files.com/659dc61047017bf9ae30d5ee/6611cf85ded44286b62638fc_cover-metagravity-01.jpg',
      videoSrc: 'https://maxmartinez-media.s3.amazonaws.com/metagravity/metagravity--cover--zip.mp4',
      link: '/work/metagravity'
    },
    {
      id: 2,
      title: 'Risk Ledger',
      description: 'Connecting organizations to defend together against supply chain attacks as one network',
      backgroundColor: '#101820',
      textColor: '#d8fff5',
      imgSrc: 'https://cdn.prod.website-files.com/659dc61047017bf9ae30d5ee/6611cf8b94cebea5ac84815e_cover-riskledger-01.jpg',
      videoSrc: 'https://maxmartinez-media.s3.amazonaws.com/risk-ledger/risk-ledger--cover--zip.mp4',
      link: '/work/risk-ledger'
    },
    {
      id: 3,
      title: 'Omnipresent',
      description: 'Powering global businesses to employ remote teams anywhere in the world',
      backgroundColor: '#de176f',
      textColor: '#ffe1ee',
      imgSrc: 'https://cdn.prod.website-files.com/659dc61047017bf9ae30d5ee/6611cf9332f9abbac09e57b1_cover-omnipresent-01.jpg',
      videoSrc: 'https://maxmartinez-media.s3.amazonaws.com/omnipresent/omnipresent--cover--zip.mp4',
      link: '/work/omnipresent'
    },
    {
      id: 4,
      title: 'Goodbuy',
      description: 'Supporting conscious shoppers to buy from indie boutiques that align with their values',
      backgroundColor: '#1a4343',
      textColor: '#fff9ea',
      imgSrc: 'https://cdn.prod.website-files.com/659dc61047017bf9ae30d5ee/6611cf9b9d96ffefe041dc53_cover-goodbuy-01.jpg',
      videoSrc: 'https://maxmartinez-media.s3.amazonaws.com/goodbuy/goodbuy--cover--zip.mp4',
      link: '/work/goodbuy'
    },
    {
      id: 5,
      title: 'X Co',
      description: 'Building an unconventional community where members can live, work, unwind, and have fun',
      backgroundColor: '#231f1f',
      textColor: '#e7e5e2',
      imgSrc: 'https://cdn.prod.website-files.com/659dc61047017bf9ae30d5ee/6611cfa399840044b1bc1fb6_cover-x-co-01.jpg',
      videoSrc: 'https://maxmartinez-media.s3.amazonaws.com/x-co/x-co--cover--zip.mp4',
      link: '/work/x-co'
    }
  ];

  return (
    <div className="color-track dark-bg">
      <div className="scroll-path">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ card }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className={`scroll-frame sticky ${inView ? 'show' : ''}`} style={{ backgroundColor: card.backgroundColor, color: card.textColor }}>
      <div className="super-card-frame">
        <div className="container m">
          <a href={card.link} className="super-card">
            <div className="super-card-name">
              <h2 className="sh no-mrg">{card.title}</h2>
            </div>
            <div className="super-cover">
              <img src={card.imgSrc} alt={card.description} className="fit-cover" />
              <div className="video-wrap bg-over">
                <video className="fit-cover" preload="none" autoPlay loop muted playsInline>
                  <source src={card.videoSrc} type="video/mp4" />
                </video>
              </div>
              <div className="start-overlay"></div>
              <div className="card-cover-overlay"></div>
            </div>
            <div className="super-card-title">
              <p className="no-mrg">{card.description}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
