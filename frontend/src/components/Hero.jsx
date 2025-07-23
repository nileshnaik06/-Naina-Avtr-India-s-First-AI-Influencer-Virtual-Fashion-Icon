import { useNavigate } from "react-router-dom";
import "./Hero.css";
import ModelCanvas from "./ModelCanva";
import "remixicon/fonts/remixicon.css";
import { useEffect, useState } from "react";
import ServiceHero from "./ServiceHero";
import Marquee from "react-fast-marquee";
import AboutHero from "./AboutHero";

const Hero = () => {
  const [collabs, setcollabs] = useState([
    {
      id: 1,
      brandName: "Baskin-Robbins",
      imag: "/Assets/Icons and videos/baskin-robbins-logo.png",
    },
    {
      id: 2,
      brandName: "Kamoto",
      imag: "/Assets/Icons and videos/kamoto.svg",
    },
    {
      id: 3,
      brandName: "BayRoute",
      imag: "/Assets/Icons and videos/bayroute-logo-new-1.png",
    },
    {
      id: 4,
      brandName: "Hitchki",
      imag: "/Assets/Icons and videos/hitchkilogo.png",
    },
    {
      id: 8,
      brandName: "sofy",
      imag: "/Assets/Icons and videos/sofy.png",
    },
    {
      id: 9,
      brandName: "Wasves",
      imag: "/Assets/Icons and videos/wasves.png",
    },
    {
      id: 11,
      brandName: "wowmoms",
      imag: "/Assets/Icons and videos/wowmoms.png",
    },
  ]);

  const work = collabs.map((collab) => {
    return (
      <div className="works" key={collab.id}>
        <img src={collab.imag} alt={collab.brandName} />
        <p>{collab.brandName}</p>
      </div>
    );
  });

  const navigate = useNavigate();
  return (
    <>
      <div className="heroContainer">
        <div className="container">
          <div className="texts">
            <h1>Welcome to the official digital space of</h1>
            <span>Naina Avtr</span>
            <h3>
              India’s FIRST AI-powered influencer redefining style, storytelling
              & digital presence.Follow the journey of a virtual creator
              bridging the future of fashion, tech & identity.
            </h3>

            <button
              onClick={() => navigate("/contact")}
              className="cursor-pointer flex items-center justify-between"
            >
              Let's Collab
              <img
                src="./Assets/Icons and videos/arrow-right-line.svg"
                alt="Collab with Naina "
              />
            </button>
          </div>
          <div className="model">
            <ModelCanvas />
            <div className="aniIcons">
              <img
                src="/Assets/Icons and videos/Heart.png"
                alt="heart icon"
                className="heart"
              />
              <img
                src="/Assets/Icons and videos/prof.png"
                alt="prof icon"
                className="prof"
              />
              <img
                src="/Assets/Icons and videos/hash.png"
                alt="hash icon"
                className="hash"
              />
              <img
                src="/Assets/Icons and videos/smile.png"
                alt="smile icon"
                className="smile"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <h1>Worked With</h1>
        <hr />
        <div className="ic">
          <Marquee
            className="ic-track"
            direction={"left"}
            speed={60}
            gradient
            gradientColor="#060010"
            gradientWidth={150}
            pauseOnHover={false}
          >
            {work}
            {work}
            {work}
          </Marquee>
        </div>
      </div>

      <AboutHero />

      <ServiceHero />
    </>
  );
};

export default Hero;
