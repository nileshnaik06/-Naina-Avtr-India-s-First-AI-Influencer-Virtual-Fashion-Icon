import { useEffect, useState, Suspense, lazy } from "react";
import ShimmerLoader from "./components/ShimmerLoader";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

// Lazy load heavy components
const Nav = lazy(() => import("./components/Nav"));
const MainRoutes = lazy(() => import("./Routes/MainRoutes"));

const App = ({ root }) => {
  const [size, setsize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setsize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

    return () => root.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  const location = useLocation();

  const knownRoutes = ["/", "/about", "/service", "/contact", "/login"];
  const isNotFound = !knownRoutes.includes(location.pathname);

  // You now only want to hide layout on 404
  const shouldHideLayout = isNotFound;

  return (
    <>
      {!shouldHideLayout && size > 1023 && <div className="cursor"></div>}

      {!shouldHideLayout && <Nav />}
      <MainRoutes />
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default App;
