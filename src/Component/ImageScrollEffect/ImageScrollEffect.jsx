import React from 'react';
import './ImageScrollEffect.css';

const ImageScrollEffect = ({ images = [] }) => {
  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className="sh">
      <div className="mainssv">
        <article>
          {images.map((image, index) => (
            <section className='a' key={index}>
              <img className='imokj' src={image} alt={`Image ${index + 1}`} />
            </section>
          ))}
        </article>
      </div>

      <div className="mobileResponsivecode">
        <div className="slider">
          <div className="slider-track">
            {images.concat(images).map((image, index) => (
              <div className="slide" key={index}>
                <img className="slider-image" src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageScrollEffect;
