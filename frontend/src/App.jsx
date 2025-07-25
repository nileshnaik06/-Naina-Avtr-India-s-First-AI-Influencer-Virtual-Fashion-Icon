import { useEffect, useState, Suspense, lazy } from "react";
import ShimmerLoader from "./components/ShimmerLoader";
import Preloader from "./components/PreLoader";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Lenis import
import Lenis from "@studio-freight/lenis";

// Lazy load heavy components
const Nav = lazy(() => import("./components/Nav"));
const MainRoutes = lazy(() => import("./Routes/MainRoutes"));

const App = ({ root }) => {
  const [size, setsize] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const knownRoutes = ["/", "/about", "/service", "/contact", "/login"];
  const isNotFound = !knownRoutes.includes(location.pathname);
  const shouldHideLayout = isNotFound;

  // ✅ Initialize Lenis once
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => t,
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [isLoading]);

  // ✅ Resize handler
  useEffect(() => {
    const handleResize = () => setsize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Preloader logic
  useEffect(() => {
    const start = Date.now();
    const handleLoad = () => {
      const duration = Date.now() - start;
      const minTime = 1000;
      const remaining = minTime - duration;
      setTimeout(
        () => {
          setIsLoading(false);
        },
        remaining > 0 ? remaining : 0
      );
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <>
      <Suspense fallback={<ShimmerLoader />}>
        {!shouldHideLayout && <Nav />}
        <MainRoutes />
        <ToastContainer />
        {!shouldHideLayout && <Footer />}
      </Suspense>
    </>
  );
};

export default App;
