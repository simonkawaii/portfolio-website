import React from "react";
import ReactDOM from "react-dom/client";

//react-router-dom
import { RouterConfig } from "./router/Router.tsx";
import { RouterProvider } from "react-router-dom";

//canvas
import StarsCanvas from "./components/Particles/Particles.tsx";

//context
import { StarmodeProvider } from "./Context/StarModeContext.tsx";

//gsap
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
//styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StarmodeProvider>
      <RouterProvider router={RouterConfig} />
      <StarsCanvas />
    </StarmodeProvider>
  </React.StrictMode>
);
