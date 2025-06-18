
import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = ({ title, subtitle, ctaText, ctaLink, videoSource }) => {
  return (
    <section className="hero-section">
      {videoSource && (
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {ctaText && ctaLink && (
          <Link to={ctaLink} className="cta-button">
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

