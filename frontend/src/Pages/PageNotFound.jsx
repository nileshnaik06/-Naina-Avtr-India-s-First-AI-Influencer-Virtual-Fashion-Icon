import React, { Suspense, useEffect, useState } from "react";
import "../components/CSS/PageNotFound.css";
import { useNavigate } from "react-router-dom";

// Lazy load TextTrail
const TextTrail = React.lazy(() =>
  import("../../components/TextTrail/TextTrail")
);

const PageNotFound = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="notfound-container">
      <button className="notfound-button" onClick={() => navigate("/")}>
        <img
          src="/Assets/Icons and videos/arrow-right-line.svg"
          alt="Naina Avtr"
          loading="lazy"
        />
      </button>

      {isMobile ? (
        <h1 className="fallback-404">404</h1>
      ) : (
        <Suspense fallback={<h1 className="fallback-404">404</h1>}>
          <TextTrail
            text="404"
            fontFamily="LogoFont"
            fontWeight="900"
            noiseFactor={1.2}
            noiseScale={0.001}
            rgbPersistFactor={0.95}
            alphaPersistFactor={0.92}
            startColor="#ffffff"
            textColor="#ffffff"
            backgroundColor="#000000"
            colorCycleInterval={2000}
            supersample={2}
          />
        </Suspense>
      )}

      <h2>Page Not Found</h2>
    </div>
  );
};

export default PageNotFound;
