import React, { useState } from "react";
import Section from "../components/Section";
import "./ContactPage.css";

const ContactPage = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage("Lol! No one's reading your message!");
  };

  return (
    <div className="contact-page">
      <Section title="Contact Us">
        <p>
          Have a question or want to collaborate? Fill out the form below, and
          we'll get in touch!
        </p>

        {message && (
          <div className="simple-notification-message">{message}</div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>

          <button type="submit" className="cta-button">
            Submit
          </button>
        </form>
      </Section>
    </div>
  );
};

export default ContactPage;
