import React from 'react';
import './mobile-app.css';
import { assets } from '../../assets/assets';

const MobileApp = () => {
  return (
    <div className="mobile-app-page">
      <div className="coming-soon-container">
        <div className="badge">Coming Soon</div>
        <h2>Take the AI Delivery Experience <span className="highlight">On The Go</span></h2>
        
        <p>
          We are actively working on our native mobile applications. 
          Soon, you'll be able to track your AI-optimized deliveries right from your pocket!
        </p>

        <div className="store-buttons blurred">
          <img src={assets.play_store} alt="Get it on Google Play" />
          <img src={assets.app_store} alt="Download on the App Store" />
        </div>

        <div className="progress-section">
          <div className="loader"></div>
          <p>Brewing the code...</p>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;