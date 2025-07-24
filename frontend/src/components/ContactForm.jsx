import React from "react";
import "../components/CSS/ContactSection.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <input type="text" placeholder="Jane Smith" required />
        <input type="email" placeholder="email@example.com" required />
        <textarea placeholder="Type your message" rows="4" required></textarea>
        <button type="submit">
          <span className="arrow"></span> Get a Solution
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
