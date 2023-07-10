import React from 'react';
import './Home.css'; // Import the CSS file for styling

export function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to Ambula!</h1>
      <p className="home-description">
        At Ambula, we are deeply committed to the belief that every person deserves access to high-quality healthcare services. We believe in a democratic approach to health, and through the use of technology, we strive to make emergency and trauma care assistance more transparent, easily accessible, and user-friendly for all individuals in India. By bridging the communication gap in healthcare delivery, we hope to empower individuals to take control of their health and well-being.
      </p>
      <div className="download-section">
        <a href="#" className="download-link">
          Download for iOS
        </a>
        <a href="#" className="download-link">
          Download for Android
        </a>
      </div>
    </div>
  );
}
