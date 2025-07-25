import { Routes, Route, Navigate } from "react-router-dom";
import React, { useContext, Suspense, lazy } from "react";
import { Usercontext } from "@/components/Wrapper";
import ShimmerLoader from "@/components/ShimmerLoader";
import PageNotFound from "@/Pages/PageNotFound";

// Lazy load pages
const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Service = lazy(() => import("../Pages/Service"));
const Contact = lazy(() => import("../Pages/Contact"));
const Login = lazy(() => import("../Pages/Login"));

// Optional fallback loader component (customize it if you want)
const Loader = () => <ShimmerLoader />;

const MainRoutes = () => {
  const [userData] = useContext(Usercontext);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={!userData ? <Login /> : <Navigate to="/" />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
