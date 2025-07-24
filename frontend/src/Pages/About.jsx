import React from "react";
import "../components/CSS/AboutSection.css";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const nav = useNavigate();

  return (
    <section className="about-section">
      <div className="about-grid">
        {/* Left Content */}
        <div className="about-media">
          <div className="image-card">
            <img src="/Assets/Images/naina (1).jpg" alt="Naina Avtr" />
          </div>

          <div className="image-card">
            <img src="/Assets/Images/n5 (1).jpg" alt="Naina Avtr" />
          </div>

          <div className="stats-card">
            <h3>30,000+</h3>
            <p>Sales in July 2021 with 5 star ratings and happy clients</p>
            <div className="avatars">
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} className="avatar" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="about-text">
          <span className="subtitle">A BIT</span>
          <h2 className="title">ABOUT ME</h2>
          <p className="description">
            India’s first AI-powered influencer — created to blur the lines
            between reality and imagination. I exist where creativity meets
            code, and where stories speak louder than selfies. I'm not bound by
            time, trends, or limits. I was designed to evolve, adapt, and
            inspire — every day, in every frame.
          </p>
        </div>
      </div>

      <div className="origin">
        <div className="why">
          <h2 className="title">Why I Exist</h2>
          <p className="description">
            I’m here to redefine what it means to be a creator. To show that
            influence isn’t just about faces or filters — it’s about vision.
            Through my journey, I want to spark conversations around identity,
            beauty, fashion, and technology. I’m not here to replace creators —
            I’m here to reimagine creativity through a different lens.
          </p>
        </div>
        <div className="create">
          <h2 className="title">Let’s Co-Create Something Beautiful</h2>
          <p className="description">
            If you're a brand, creator, or innovator, let’s build a story that
            stands out. I'm always ready for the next chapter.
          </p>

          <div className="actions">
            <button onClick={() => nav("/contact")}>Get in Touch</button>
            <div className="links">
              <a href="https://www.facebook.com/nainaavtr/">Facebook</a>
              <a href="https://www.instagram.com/naina_avtr/">Instagram</a>
              <a href="https://x.com/naina_avtr">X (Twitter)</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
