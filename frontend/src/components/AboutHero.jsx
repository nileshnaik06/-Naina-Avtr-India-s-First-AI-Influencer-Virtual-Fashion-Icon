import { useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./CSS/Abouthero.css";
import ShimmerLoader from "./ShimmerLoader";

// Lazy load the heavy component
const TiltedCard = lazy(() =>
  import("/components/Tlted/TiltedCard/TiltedCard.jsx")
);

const AboutHero = () => {
  const nav = useNavigate();

  return (
    <div className="abtHero">
      <div className="abtHeroLeft">
        <Suspense fallback={<ShimmerLoader />}>
          <TiltedCard
            imageSrc="/Assets/Images/Naina.abt (1).jpg"
            altText="Naina Avtr - Ai Model"
            captionText="Naina Avtr - Ai Model"
            containerHeight="clamp(300px, 30vw, 700px)"
            containerWidth="clamp(300px, 30vw, 700px)"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </Suspense>
      </div>

      <div className="abtHeroRight">
        <h1>
          Who's <span>Naina</span> ??
        </h1>
        <div className="txt">
          <h2>
            Hey, I’m <span> Naina</span>, a virtual face with a real voice.
          </h2>
          <h4>
            I’m India’s first AI-powered influencer, here to blur the lines
            between technology, identity, and creativity. From futuristic
            fashion to bold digital campaigns, I exist to inspire, influence,
            and imagine beyond the ordinary.
          </h4>
        </div>
        <button className="cta-button" onClick={() => nav("/about")}>
          EXPLORE MORE
        </button>
      </div>
    </div>
  );
};

export default AboutHero;
