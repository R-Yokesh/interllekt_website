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
            <h1><i>Built with Creativity.</i></h1><br/><br/>
            <h4>We let the creativity take over and help build experiences. Individual to organisations transformation is inevitable</h4>
        </div>
    </div>
    );
};

export default Slider;