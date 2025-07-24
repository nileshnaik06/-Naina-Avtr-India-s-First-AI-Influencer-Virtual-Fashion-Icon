import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import ShimmerLoader from "./components/ShimmerLoader";

// ✅ Lazy load Wrapper and App
const App = lazy(() => import("./App.jsx"));
const Wrapper = lazy(() => import("./components/Wrapper.jsx"));

// ✅ Suspense boundary around everything
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<ShimmerLoader />}>
      <Wrapper>
        <App />
      </Wrapper>
    </Suspense>
  </BrowserRouter>
);
