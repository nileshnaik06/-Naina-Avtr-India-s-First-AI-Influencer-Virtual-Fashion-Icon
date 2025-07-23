import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import { useContext, useEffect } from "react";
import { Usercontext } from "@/components/Wrapper";

const MainRoutes = () => {
  const [userData, setuserData] = useContext(Usercontext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route
          path="/contact"
          element={userData ? <Contact /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!userData ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

export default MainRoutes;
