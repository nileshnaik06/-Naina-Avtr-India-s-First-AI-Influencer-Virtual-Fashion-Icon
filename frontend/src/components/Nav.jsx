import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavSection.css";
const Nav = () => {
  const [navContent, setnavContent] = useState([
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Service", link: "/service" },
    { id: 4, title: "Contact", link: "/contact" },
    { id: 5, title: "Login", link: "/login" },
  ]);

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

  const mainNav = navContent.map((enav) => {
    return (
      <NavLink
        key={enav.id}
        to={enav.link}
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        <p> {enav.title}</p>
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
