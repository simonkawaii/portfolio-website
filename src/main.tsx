import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

//react-router-dom
import { RouterConfig } from "./router/Router.tsx";
import { RouterProvider } from "react-router-dom";

//canvas

const StarsCanvas = React.lazy(
  () => import("./components/Particles/Particles.tsx")
);
//context
import { StarmodeProvider } from "./Context/StarModeContext.tsx";

//styles
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StarmodeProvider>
      <RouterProvider router={RouterConfig} />
      <ErrorBoundary fallback={<>Error</>}>
        <Suspense fallback={<></>}>
          <StarsCanvas />
        </Suspense>
      </ErrorBoundary>
    </StarmodeProvider>
  </React.StrictMode>
);
