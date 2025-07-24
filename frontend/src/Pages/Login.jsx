import ShimmerLoader from "@/components/ShimmerLoader";
import React, { Suspense, lazy } from "react";

// Lazy load the form component
const UserForm = lazy(() => import("../components/LoginForm"));

const Login = () => {
  return (
    <div id="Login">
      {/* Left side with media */}
      <div className="left">
        <video
          src="/Assets/Icons and videos/Login_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        ></video>

        <img
          src="/Assets/Images/loin-mini (1).jpg"
          alt="Naina Avtr"
          loading="lazy"
        />
      </div>

      {/* Right side with form */}
      <div className="right">
        <h2>Login</h2>
        <Suspense fallback={<ShimmerLoader />}>
          <UserForm />
        </Suspense>
      </div>
    </div>
  );
};

export default Login;
