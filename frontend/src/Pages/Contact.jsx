import React from "react";
import "../components/CSS/ContactSection.css";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="cont-container">
        <div className="contact-left">
          <p className="subtitle">
            Let’s Build Something Bold and Beyond Ordinary
          </p>
          <h2>
            <strong>Connect </strong> <br />
            with the future of digital influence
          </h2>
          <p className="description">
            Whether you're a forward-thinking brand, a creative storyteller, or
            just exploring what's next — Naina is here to collaborate,
            co-create, and inspire. Reach out to start something truly unique.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <span role="img" aria-label="email">
                📧
              </span>
              <p>naina@avtr.ai</p>
            </div>
            {/* <div className="info-item">
              <span role="img" aria-label="cont-icons"></span>
            </div> */}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};
export default Contact;
