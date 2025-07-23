import { useNavigate } from "react-router-dom";
import "../components/serviceHero.css";

const ServiceHero = () => {
  const nav = useNavigate();

  return (
    <div className="serviceHero">
      <h1 className="head">Service</h1>
      <div className="serheroCenter">
        <div className="headTxt">
          <h1>Let’s Create the Future of Influence, Together</h1>
          <h3>
            I collaborate with forward-thinking brands to craft bold, visually
            magnetic digital experiences that spark real connection.
          </h3>
        </div>

        <div className="heroSercards">
          <div className="my-card">
            <h2>Brand Collaborations</h2>
            <h4>
              Together, we can create content that doesn’t just stop the scroll
              — it starts conversations.
            </h4>
          </div>
          <hr />
          <div className="my-card">
            <h2> Campaign Styling & Concepts</h2>
            <h4>
              From AI-led fashion styling to conceptual visuals — I help design
              digital campaigns that feel futuristic yet personal.
            </h4>
          </div>
        </div>
      </div>
      <button className="expSer" onClick={()=>nav("/service")}>Explore Services</button>
    </div>
  );
};

export default ServiceHero;
