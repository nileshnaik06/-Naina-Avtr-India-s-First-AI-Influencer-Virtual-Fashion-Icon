import React, { lazy } from "react";
import "../components/CSS/AboutSection.css";
import { useNavigate } from "react-router-dom";

// Lazy load image-heavy parts
const LazyMediaSection = lazy(() => import("../components/LazyAboutMedia"));

const AboutSection = () => {
  const nav = useNavigate();

  return (
    <section className="about-section">
      <div className="about-grid">
        {/* Left Media (Lazy) */}
        <React.Suspense
          fallback={<div className="loader">Loading media...</div>}
        >
          <LazyMediaSection />
        </React.Suspense>

        {/* Right Text Content */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
