import { useEffect, useState, Suspense, lazy } from "react";
import ShimmerLoader from "./components/ShimmerLoader";
import Preloader from "./components/PreLoader";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

// Lazy load heavy components
const Nav = lazy(() => import("./components/Nav"));
const MainRoutes = lazy(() => import("./Routes/MainRoutes"));

const App = ({ root }) => {
  const [size, setsize] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true); // ⬅️ Preloader state

  // ✅ Window resize logic
  useEffect(() => {
    const handleResize = () => setsize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Wait for full load + 1.5s delay
  useEffect(() => {
    const start = Date.now();

    const handleLoad = () => {
      const duration = Date.now() - start;
      const minTime = 1500;
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

  const location = useLocation();
  const knownRoutes = ["/", "/about", "/service", "/contact", "/login"];
  const isNotFound = !knownRoutes.includes(location.pathname);
  const shouldHideLayout = isNotFound;

  // ✅ Return Preloader first, then show rest
  if (isLoading) return <Preloader />;

  return (
    <>
      <Suspense fallback={<ShimmerLoader />}>
        {!shouldHideLayout && <Nav />}
        <MainRoutes />
        {!shouldHideLayout && <Footer />}
      </Suspense>
    </>
  );
};

export default App;
