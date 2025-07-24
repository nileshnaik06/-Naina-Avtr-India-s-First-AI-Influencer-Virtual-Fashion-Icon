import { useNavigate } from "react-router-dom";
import "./CSS/Hero.css";
import { useState, Suspense, lazy } from "react";
import ShimmerLoader from "./ShimmerLoader";
import LazyContact from "./LazyContact";
import ContactForm from "./ContactForm";

// ✅ Lazy-loaded components
const ModelCanvas = lazy(() => import("./ModelCanva"));
const ServiceHero = lazy(() => import("./ServiceHero"));
const AboutHero = lazy(() => import("./AboutHero"));

const Marquee = lazy(() => import("react-fast-marquee"));

const Hero = () => {
  const [collabs] = useState([
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

  const work = collabs.map((collab) => (
    <div className="works" key={collab.id}>
      <img src={collab.imag} alt={collab.brandName} />
      <p>{collab.brandName}</p>
    </div>
  ));

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
              & digital presence. Follow the journey of a virtual creator
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
            <Suspense fallback={<ShimmerLoader />}>
              <ModelCanvas />
            </Suspense>

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
          <Suspense fallback={<ShimmerLoader />}>
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
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<ShimmerLoader />}>
        <AboutHero />
      </Suspense>

      <Suspense fallback={<ShimmerLoader />}>
        <ServiceHero />
      </Suspense>

      <h1 className="brf_cont">Let's Connect</h1>
      <div className="cont">
        <div className="contac-left">
          <h1>Let’s Build Something Iconic</h1>
          <p>
            Whether you’re a brand, creator, or curious mind — Naina would love
            to hear from you.
          </p>
        </div>

        <div className="cont-right">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Hero;
