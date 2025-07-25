import React from "react";
import "../components/CSS/ServiceSection.css";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Digital Brand Collaborations",
      description:
        "Partner with Naina to craft immersive, AI-powered content that connects. From bold fashion drops to futuristic campaigns — discover how virtual storytelling meets real-world impact.",
      image: "/Assets/Images/service1.webp",
    },
    {
      id: 2,
      title: "Virtual Styling & Campaign Concepts",
      description:
        "Partner with Naina to co-create bold, immersive campaigns — from digital fashion drops to story-driven product reveals that stop the scroll.",
      image: "/Assets/Images/service2.webp",
    },
    {
      id: 3,
      title: "AI-Generated Content",
      description:
        "Partner with Naina to co-create stylish, high-impact campaigns powered by AI. From product drops to futuristic narratives — her content blends tech and creativity for next-level engagement.",
      image: "/Assets/Images/service3.webp",
    },
    {
      id: 4,
      title: "Fashion + Tech Editorials",
      description:
        "Seamlessly blend innovation with aesthetics. Partner with Naina to craft bold, AI-powered content that elevates your launch, lookbook, or digital campaign.",
      image: "/Assets/Images/service4.webp",
    },
    {
      id: 5,
      title: "AR & Filter Collab Concepts",
      description:
        "Bring your brand to life with immersive AR experiences and custom filters — crafted with style and powered by AI. Let Naina turn every scroll into a moment of interaction.",
      image: "/Assets/Images/service5.webp",
    },
  ];

  const nav = useNavigate();

  return (
    <section className="services-section">
      <div className="srvice-cont">
        <p className="feature-title">Featured Services</p>
        <h2 className="main-heading">A wide range of services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {/* Optional image preview */}
              {/* <div className="icon-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </div> */}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <button
                className="service-btn"
                onClick={() => {
                  nav("/contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Get a call <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
