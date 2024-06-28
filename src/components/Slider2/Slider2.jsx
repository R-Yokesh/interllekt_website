import React from 'react';
import './Slider2.css';

const Slider2 = () => {
  return (
    <div className="slider2">
        <div className="slider2-content">
            <div className="slide2">
                <div className="slider-card">
                    <p>Willow</p><br/>
                    <h2>Designing the First All-in-One,Wearable Breast Pump</h2><br/><br/>
                    <p>Collaborating with the startup tean at willow that reimagined the breast pumping expierince</p>
                </div>
                <img src="https://placehold.co/1280x600" alt="Slide 1" className="slider2-image" />
            </div>
            <div className="slide2">
                <div className="slider-card">
                    <p>Moooi</p><br/>
                    <h2>Teaching Robots to Dance Like Ballerinas</h2><br/><br/>
                    <p>What if technology were designed to make our lives more poetic?</p>
                </div>
                <img src="https://placehold.co/1280x600" alt="Slide 2" className="slider2-image" />
            </div>
            <div className="slide2">
                <div className="slider-card">
                    <p>Ikou</p><br/>
                    <h2>Giving Every Kid the Freedom to Roam</h2><br/><br/>
                    <p>Redefining and simplifying how customers engage with their pharmacy.</p>
                </div>
                <img src="https://placehold.co/1280x600" alt="Slide 3" className="slider2-image" />
            </div>
        </div>
    </div>
  )
}

export default Slider2;
