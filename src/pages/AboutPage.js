import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Shastra</h1>
          <p>
            Inspiring innovation and fostering a community of technological
            excellence.
          </p>
        </div>
      </section>

      <Section title="Our Core Principles">
        <div className="principles-grid">
          <div className="principle-card">
            <h3>Mission</h3>
            <p>
              To create an unparalleled platform for students and enthusiasts to
              explore, innovate, and share knowledge in the fields of science,
              technology, and engineering.
            </p>
          </div>
          <div className="principle-card">
            <h3>Vision</h3>
            <p>
              To be a leading technical fest that empowers the next generation
              of innovators and contributes significantly to the technological
              landscape.
            </p>
          </div>
          <div className="principle-card">
            <h3>Values</h3>
            <ul>
              <li>Innovation & Creativity</li>
              <li>Collaboration & Community</li>
              <li>Learning & Growth</li>
              <li>Excellence & Impact</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Have Questions?">
        <p>
          We'd love to hear from you! Reach out to us for any queries or
          collaborations.
        </p>
        <Link to="/contact" className="cta-button">
          Contact Us
        </Link>
      </Section>
    </div>
  );
};

export default AboutPage;
