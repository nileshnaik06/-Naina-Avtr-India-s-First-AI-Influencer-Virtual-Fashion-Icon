import { useEffect, useState, Suspense, lazy } from "react";
import ShimmerLoader from "./components/ShimmerLoader";

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

  return (
    <Suspense fallback={<ShimmerLoader />}>
      {size > 1023 && <div className="cursor"></div>}
      <Nav />
      <MainRoutes />
    </Suspense>
  );
};

export default App;
