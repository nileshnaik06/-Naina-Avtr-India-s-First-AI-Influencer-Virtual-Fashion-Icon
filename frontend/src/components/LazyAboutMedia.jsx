import React from "react";

const LazyAboutMedia = () => {
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
        <p>Sales in July 2021 with 5 star ratings and happy clients</p>
        <div className="avatars">
          {[1, 2, 3, 4, 5].map((n) => (
            <span key={n} className="avatar" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LazyAboutMedia;
