import React from 'react';
import './InnoSlider1.css';

const InnoSlider1 = () => {

    return (
        <div class="Islider">
        <div class="Islider-content">
            <div class="Islide">
                <img src="https://placehold.co/1280x600" alt="Slide 1" class="slider-image" />
            </div>
            <div class="Islide">
                <img src="https://placehold.co/1280x600" alt="Slide 2" class="slider-image" />
            </div>
            <div class="Islide">
                <img src="https://placehold.co/1280x600" alt="Slide 3" class="slider-image" />
            </div>
        </div>
        <div class="Islider-text">
            <h1><i>When innovating thinking made it happen.</i></h1><br/><br/>
            <h4>We know what an idea can do and how it can change the world.</h4>
        </div>
    </div>
    );
};

export default InnoSlider1;