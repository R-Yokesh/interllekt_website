import React from 'react';
import './BCard.css';

const BCard = () => {
    return (
        <div className="Bcard-container">
            <div className="Bcard">
                <img src="https://placehold.co/423x360" alt="Card 1" />
                <div className="Bcard-content">
                    <div className="Bcollection-card-tag">Northern Illinois Food Bank</div>
                    <div className="Bcollection-card-div">
                        <h3>An Imporved Food Bank Experience</h3>
                    </div>
                    <p>Emphasizing dignity,access, and respect during the Covid crisis.</p>
                </div>
                <div className="Bcollection-card-line"></div>
            </div>

            <div className="Bcard">
                <img src="https://placehold.co/423x360" alt="Card 2" />
                <div className="Bcard-content">
                    <div className="Bcollection-card-tag">LOS ANGELES COUNTY</div>
                    <div className="Bcollection-card-div">
                    <h3>A Voting Experience Accessible to Everyone</h3>
                    </div>
                    <p>How one team cleared 868 design constraints in the name of democracy.</p>
                </div>
                <div className="Bcollection-card-line"></div>
            </div>

            <div className="Bcard">
                <img src="https://placehold.co/423x360" alt="Card 3" />
                <div className="Bcard-content">
                    <div className="Bcollection-card-tag">IDEOU</div>
                    <div className="Bcollection-card-div">
                    <h3>Insights for Innovation</h3>
                    </div>
                    <p>Learn to use insights to turn customer needs into human-centered solutions</p>
                </div>
                <div className="Bcollection-card-line"></div>
            </div>
        </div>
    );
};

export default BCard;
