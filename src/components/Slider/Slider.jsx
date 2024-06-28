import React from 'react';
import './Slider.css';

const Slider = () => {

    return (
        <div class="slider">
        <div class="slider-content">
            <div class="slide">
                <img src="https://placehold.co/1280x600" alt="Slide 1" class="slider-image" />
            </div>
            <div class="slide">
                <img src="https://placehold.co/1280x600" alt="Slide 2" class="slider-image" />
            </div>
            <div class="slide">
                <img src="https://placehold.co/1280x600" alt="Slide 3" class="slider-image" />
            </div>
        </div>
        <div class="slider-text">
            <h1>Talk less.</h1>
            <h1><i>Do more.</i></h1><br/><br/>
            <h4>We build to think, make quick prototypes, and test relentlessly to find breakthrough ideas that shape the future.</h4>
        </div>
    </div>
    );
};

export default Slider;