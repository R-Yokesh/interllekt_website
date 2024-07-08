import React from 'react';
import './BSlider.css';

const BSlider = () => {

    return (
        <div className="Bslider">
            <div className="Bslider-content">
                <div className="Bslide">
                    <img src="https://placehold.co/1280x600" alt="Slide 1" className="Bslider-image" />
                </div>
                <div className="Bslide">
                    <img src="https://placehold.co/1280x600" alt="Slide 2" className="Bslider-image" />
                </div>
                <div className="Bslide">
                    <img src="https://placehold.co/1280x600" alt="Slide 3" className="Bslider-image" />
                </div>
            </div>
            <div className="Bslider-text">
                <h1><i>We Help your businesses succeed with a smarter way ahead.</i></h1><br /><br />
                {/* <h4>We know what an idea can do and how it
                    can change the world.
                </h4> */}
            </div>
        </div>
    );
};

export default BSlider;