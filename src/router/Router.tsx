import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";

export function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);

    // Or scroll to a specific element if there is a hash in the URL
    if (location.hash) {
      setTimeout(() => {
        const targetElement = document.querySelector(location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  }, [location]);

  return null;
}
export const RouterConfig = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <DefaultLayout>a</DefaultLayout>,
  },
]);
