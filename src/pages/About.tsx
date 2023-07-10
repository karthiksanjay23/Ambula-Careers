import React from 'react';
import './About.css'; // Import the CSS file for styling

export function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Ambula Careers</h1>
      <p className="about-description">
        At Ambula Careers, we are passionate about transforming healthcare delivery and making a positive impact on people's lives. We are proud to be part of the Ayushman Bharat Digital Mission, connecting patients with the unified health network across India.
      </p>
      <div className="highlighted-section">
        <p className="highlighted-text">Join us in our mission to bridge communication gaps in healthcare delivery. We believe that every individual deserves access to quality healthcare and career opportunities in this noble field.</p>
      </div>
      <div className="reasons-section">
        <h2 className="reasons-heading">Why choose Ambula Careers?</h2>
        <ul className="reasons-list">
          <li>Comprehensive Network</li>
          <li>Real-Time Engagement</li>
          <li>Personalized Job Matching</li>
          <li>Career Development Resources</li>
          <li>Dedicated Support</li>
        </ul>
      </div>
      <button className="join-button">Join us today</button>
    </div>
  );
}
