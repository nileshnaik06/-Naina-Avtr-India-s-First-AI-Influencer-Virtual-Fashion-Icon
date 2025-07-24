import { useNavigate } from "react-router-dom";
import "../components/serviceHero.css";
import { useEffect, useState } from "react";
// import { Usercontext } from "./Wrapper";
import React, { useRef } from "react";
import gsap from "gsap";

const ServiceHero = () => {
  const nav = useNavigate();

  const listRefs = useRef([]);
  const imgRefs = useRef([]);
  const isMobile = window.innerWidth < 450;

  useEffect(() => {
    if (isMobile) return;

    listRefs.current.forEach((list, i) => {
      const image = imgRefs.current[i];

      const moveImage = (e) => {
        const rect = list.getBoundingClientRect();
        const x = e.clientX - rect.left - image.offsetWidth / 2;
        const y = e.clientY - rect.top - image.offsetHeight / 2;

        gsap.to(image, {
          x,
          y,
          duration: 0.3,
          ease: "elastic.out",
        });
      };

      const showImage = () => {
        gsap.to(image, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        const cursor = document.querySelector(".cursor");
        if (cursor) cursor.style.display = "none";
      };

      const hideImage = () => {
        gsap.to(image, {
          autoAlpha: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.inOut",
        });
        const cursor = document.querySelector(".cursor");
        if (cursor) cursor.style.display = "block";
      };

      list.addEventListener("mousemove", moveImage);
      list.addEventListener("mouseenter", showImage);
      list.addEventListener("mouseleave", hideImage);

      // cleanup
      return () => {
        list.removeEventListener("mousemove", moveImage);
        list.removeEventListener("mouseenter", showImage);
        list.removeEventListener("mouseleave", hideImage);
      };
    });
  }, [isMobile]);

  const [serviceoffered, setserviceoffered] = useState([
    {
      id: 1,
      title: "Digital Brand Collaborations",
      mImg: "/Assets/Images/n1 (1).jpg",
    },
    {
      id: 2,
      title: "Virtual Styling & Campaign Concepts",
      mImg: "/Assets/Images/n2 (1).jpg",
    },
    {
      id: 3,
      title: "AI-Generated Brand Avatars",
      mImg: "/Assets/Images/n3 (1).jpg",
    },
    {
      id: 4,
      title: "Fashion + Tech Editorials",
      mImg: "/Assets/Images/n4 (1).jpg",
    },
    {
      id: 5,
      title: " AR & Filter Collab Concepts",
      mImg: "/Assets/Images/n5 (1).jpg",
    },
  ]);

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
        <div className="hovers">
          {serviceoffered.map((Serv, i) => (
            <div
              key={Serv.id}
              className="Serlist"
              ref={(el) => (listRefs.current[i] = el)}
            >
              <h2>{Serv.title}</h2>
              <img
                src={Serv.mImg}
                alt={Serv.title}
                className="hover-img"
                ref={(el) => (imgRefs.current[i] = el)}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="expSer" onClick={() => nav("/service")}>
        Explore Services
      </button>
    </div>
  );
};

export default ServiceHero;
