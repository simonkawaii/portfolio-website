import React from "react";
import ReactDOM from "react-dom/client";

//react-router-dom
import { RouterConfig } from "./router/Router.tsx";
import { RouterProvider } from "react-router-dom";

//canvas
import StarsCanvas from "./components/Particles/Particles.tsx";

//gsap
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={RouterConfig} />
    <StarsCanvas />
  </React.StrictMode>
);
