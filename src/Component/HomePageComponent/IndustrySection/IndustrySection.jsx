import React from 'react';
import './IndustrySection.css';
import Assets from '../../../Assets/Assets';

const IndustrySection = () => {
  return (
    <div className="industry-section container">
      <div className="industry-content">
        <div className="industry-text">
          {/* <h2 className='cham'>We champion the bold to achieve the extraordinary.</h2>
          <p>Answer two questions and put our thinking to work on your challenges.</p>
          <h3>1. What is your industry? <span className="question-count">Question 1 of 2</span></h3> */}
          <div className="industry-tags">
            <button className="tag">Aerospace</button>
            <button className="tag">Consumer Products Industry	</button>
            <button className="tag">Advertising</button>
            <button className="tag">Media & Entertainment</button>
            <button className="tag">Energy</button>
            <button className="tag">Education</button>
            <button className="tag">Telecommunication	</button>
            <button className="tag">Logistics</button>
            <button className="tag"> Industrial Goods</button>
            <button className="tag">Technology</button>
            <button className="tag">Fashion & Luxury</button>
            <button className="tag">Automotive</button>
            <button className="tag">Publishing</button>
          </div>
          {/* <a href="#" className="view-all">View all</a> */}
        </div>
        <div className="industry-image">
          <img src={Assets.indst}alt="Industry Discussion" />
        </div>
      </div>

      
    </div>
  );
}

export default IndustrySection;
