import { useNavigate } from "react-router-dom";
import "./CSS/Abouthero.css";

const AboutHero = () => {
  const nav = useNavigate();

  return (
    <div className="abtHero">
      <div className="abtHeroLeft">
        <img src="/Assets/Images/Naina.abt (1).jpg" alt="Who's Naina" />
        {/* <img src="/Assets/Images/naina (1).jpg" alt="Who's Naina"  className="sec"/> */}
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
