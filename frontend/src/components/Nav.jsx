import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavSection.css";
import { useContext, useEffect } from "react";
import { Usercontext } from "@/components/Wrapper";
import axios from "../Utils/axios";

const Nav = () => {
  const [userData, setuserData] = useContext(Usercontext);

  const navContent = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Service", link: "/service" },
    { id: 4, title: "Contact", link: "/contact" },
    ...(!userData
      ? [{ id: 5, title: "Login", link: "/login" }]
      : [{ id: 6, title: "Logout", link: "/logout" }]),
  ];

  const [openMenu, setopenMenu] = useState(false);

  const HandleMenu = () => {
    setopenMenu((prev) => !prev); // toggles the state
    let one = document.querySelector(".one");
    let two = document.querySelector(".two");
    let three = document.querySelector(".three");
    if (openMenu) {
      document.querySelector(".one").style.transform = "rotate(0deg)";
      two.style.display = "block";
      three.style.transform = "rotate(0deg)";
    } else {
      one.style.transform = "rotate(60deg) translate(5px)";
      two.style.display = "none";
      three.style.transform = "rotate(-60deg) translate(5px)";
    }
  };

  const handleLogout = async () => {
    try {
      const res = await axios.delete("/user", {
        params: userData.user._id,
      });
      localStorage.removeItem("user");
      setuserData(null);
    } catch (error) {
      console.log(error);
    }
  };

  const mainNav = navContent.map((enav) => {
    if (enav.title === "Logout") {
      return (
        <button key={enav.id} onClick={handleLogout} className="logout-button">
          {enav.title}
        </button>
      );
    }

    return (
      <NavLink
        key={enav.id}
        to={enav.link}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <p>{enav.title}</p>
      </NavLink>
    );
  });

  return (
    <nav className="navBar">
      <h2 className="Logo">NAINA</h2>
      <div className="leftnav">{mainNav}</div>

      <div className="Hammenu " onClick={HandleMenu}>
        <div className="menuIcon">
          <p className="one bg-white w-5 h-[0.2rem] mb-[0.3rem]"></p>
          <p className="two bg-white w-4 h-[0.2rem] mb-[0.3rem]"></p>
          <p className="three bg-white w-5 h-[0.2rem] mb-[0.3rem]"></p>
        </div>

        {openMenu && <div className="hamContent ">{mainNav}</div>}
      </div>
    </nav>
  );
};

export default Nav;
