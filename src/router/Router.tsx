import { createBrowserRouter } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import { ErrorBoundary } from "react-error-boundary";
import React from "react";

const App = React.lazy(() => import("../App"));

export function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const targetElement = document.querySelector(location.hash);
        const navbarElement = document.querySelector("#navbar");

        const navbarHeight = navbarElement?.getBoundingClientRect().height;

        const yOffset = navbarHeight ?? 0;
        const top = targetElement?.getBoundingClientRect().top ?? 0;
        const yPos = top + window.scrollY + -yOffset;

        if (targetElement) {
          window.scrollTo({ top: yPos, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

export const RouterConfig = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary fallback={<></>}>
        <Suspense fallback={<></>}>
          <App />
        </Suspense>
      </ErrorBoundary>
    ),

    children: [
      {
        path: "/",
        element: (
          <ErrorBoundary fallback={<></>}>
            <Suspense fallback={<></>}>
              <ScrollToAnchor />
              <Home />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <App />,
    children: [
      {
        path: "*",
        element: <DefaultLayout>Not found</DefaultLayout>,
      },
    ],
  },
]);

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  );
}
