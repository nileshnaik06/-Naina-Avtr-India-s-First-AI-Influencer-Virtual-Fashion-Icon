import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import MainRoutes from "./Routes/MainRoutes";

const App = ({ root }) => {
  const [size, setsize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setsize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Add mousemove event on root div
  useEffect(() => {
    if (size < 1023) return;

    const root = document.getElementById("root");
    const mouse = document.querySelector(".cursor");

    if (!root || !mouse) return;

    const handleMouseMove = (e) => {
      mouse.style.top = `${e.clientY}px`;
      mouse.style.left = `${e.clientX}px`;
    };

    root.addEventListener("mousemove", handleMouseMove);

    return () => {
      root.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]);

  return (
    <>
      {size > 1023 && <div className="cursor"></div>}
      <Nav />
      <MainRoutes />
    </>
  );
};

export default App;
