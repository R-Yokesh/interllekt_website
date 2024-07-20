import React from 'react'
import './TestAnimation.css'

const TestAnimation = () => {
  return (
//     <div className="scroll-reveal-text">
//     <div className="left-section-text">
//         <h2 className="section-title-text"><span>we are here </span></h2>
//         <h2 className="section-title-text"><span>to design your</span></h2>
//         <h2 className="section-title-text"><span>future</span></h2>
//     </div>
//     <div className="right-section-text">
//         <p>
//             <span>
//                 “We look ahead and manifest the future, through design, technology, strategy, 
//                 venture and an omni thinking. From a startup to a legacy enterprise, 
//                 building challenging transformations online and offline"
//             </span>
//         </p>
//     </div>
// </div>

<section className="scroll-reveal-text">
<h2 className="section-title-text">
  <span>"We are here <br/>to design <br/><span className="highlight">your future</span>"</span>
</h2>
<p>
  <span>
    “We look ahead and manifest the future, through design, technology, strategy, venture and an omni thinking. From a startup to a legacy enterprise, building challenging transformations online and offline."
  </span>
</p>
</section>
);
}

export default TestAnimation