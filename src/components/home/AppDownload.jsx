import React from 'react';
import '../../styles/AppDownload.css';
import appImage from '../../assets/images/app.png';

const AppDownload = () => {
  return (
    <section className="app-download-section">
      <div className="container app-container">
        <div className="app-left">
          <img src={appImage} alt="eShop Mobile App" className="app-mobile-img" />
        </div>
        <div className="app-right">
          <h2 className="app-title">eShop Mobile App</h2>
          <p className="app-subtitle">Affordable Ecommerce Platform</p>
          <p className="app-description">
            Shop with us at affordable prices and get exciting cashback & offers. Download our app for a better shopping experience.
          </p>
          <div className="app-buttons">
            <button className="app-store-btn">
              <span className="btn-icon">🍎</span>
              <div className="btn-text">
                <span className="small">Download on the</span>
                <span className="large">App Store</span>
              </div>
            </button>
            <button className="play-store-btn">
              <span className="btn-icon">🤖</span>
              <div className="btn-text">
                <span className="small">GET IT ON</span>
                <span className="large">Google Play</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
