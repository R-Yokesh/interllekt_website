import React from 'react';
import './Industry.css';

function Industry() {
    return (
        <div className='industry-sec padding-sec common-class'>
            <h1>Industries</h1>
            <div className='industry-content'>
                {/* Row 1 */}
                <div className='industry-row'>
                    <p>Aerospace</p>
                    <p>Energy</p>
                    <p>Advertising</p>
                    <p>Media &amp; Entertainment</p>
                </div>
                {/* Row 2 */}
                <div className='industry-row'>
                    <p>Technology</p>
                    <p>Education</p>
                    <p>Consumer Products Industry</p>
                    <p>Automotive</p>
                    <p>Logistics</p>
                </div>
                {/* Row 3 */}
                <div className='industry-row'>
                    <p>Telecommunication</p>
                    <p>Publishing</p>
                    <p>Industrial Goods</p>
                    <p>Fashion &amp; Luxury</p>
                </div>
            </div>
        </div>
    );
}

export default Industry;
