import React, { useState } from "react";
import "./CSS/AboutSection.css";

const LazyAboutMedia = () => {
  const [icons, seticons] = useState([
    { id: 1, src: "/Assets/Images/businessman (1).png" },
    { id: 2, src: "/Assets/Images/girl (1).png" },
    { id: 3, src: "/Assets/Images/man (1) (1).png" },
    { id: 4, src: "/Assets/Images/man (2).png" },
    { id: 5, src: "/Assets/Images/woman (1).png" },
  ]);

  return (
    <div className="about-media">
      <div className="image-card">
        <img
          src="/Assets/Images/naina (1).jpg"
          alt="Naina Avtr"
          loading="lazy"
        />
      </div>

      <div className="image-card">
        <img src="/Assets/Images/n5 (1).jpg" alt="Naina Avtr" loading="lazy" />
      </div>

      <div className="stats-card">
        <h3>30,000+</h3>
        <p> 5 star ratings and happy clients</p>
        <div className="avatars">
          {icons.map((icon) => (
            <span className="avatar" key={icon.id}>
              <img src={icon.src} alt="" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LazyAboutMedia;
