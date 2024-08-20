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
              <img src={image} alt={`Image ${index + 1}`} />
            </section>
          ))}
        </article>
      </div>
    </div>
  );
};

export default ImageScrollEffect;
