import React from "react";
import "./CSS/Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Naina</h2>
          <p>
            India’s first AI-powered influencer Blending beauty, tech, and
            culture one post at a time.
          </p>
          <a href="mailto:collab@nainaavtr.ai" className="footer-email">
            collab@nainaavtr.ai →
          </a>
        </div>

        <div className="footer-right">
          {/* <div className="footer-block">
            <h4>OUR ADDRESS</h4>
            <p>
              Unit D104
              <br />
              116 Commercial Street
              <br />
              London, E1 6NF
              <br />
              United Kingdom
              <br />
              <br />
              VAT: 398546875
              <br />
              Company no. 11843590
              <br />
              Registered in England & Wales
            </p>
          </div> */}

          <div className="footer-block">
            <h4>FOLLOW ON</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/naina_avtr/">
                  <img
                    src="/Assets/Icons and videos/instagram-line (1).svg"
                    alt="Naina avtr Instagram"
                  />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/nainaavtr/">
                  <img
                    src="/Assets/Icons and videos/facebook-circle-line (1).svg"
                    alt="Naina avtr Facebook"
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://x.com/naina_avtr">
                  <img
                    src="/Assets/Icons and videos/twitter-x-line.svg"
                    alt="Naina avtr Twitter"
                  />
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-block">
            <nav className="footer-nav">
              <p
                onClick={() => {
                  nav("/");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Home
              </p>
              <p
                onClick={() => {
                  nav("/about");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                About
              </p>
              <p
                onClick={() => {
                  nav("/service");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Service
              </p>
              <p
                onClick={() => {
                  nav("/contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact
              </p>
            </nav>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Nilesh Naik. All rights reserved.</p>
        <button
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          TOP ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
