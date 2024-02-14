import { Outlet } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Navbar from "./components/Navbar/Navbar";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Footer = React.lazy(() => import("./components/Footer/Footer"));
function App() {
  return (
    <DefaultLayout>
      <Navbar />
      <ErrorBoundary fallback={<></>}>
        <Suspense fallback={<></>}>
          <Outlet />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </DefaultLayout>
  );
}

export default App;
