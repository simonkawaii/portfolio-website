import React, { Suspense } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";

import { ErrorBoundary } from "react-error-boundary";
import Contact from "./Contact";

const Hero = React.lazy(() => import("../../components/Hero/Hero"));
const About = React.lazy(() => import("./About"));
const CodeSection = React.lazy(() => import("./CodeSection"));
const Portfolio = React.lazy(() => import("./Portfolio"));
const Offer = React.lazy(() => import("./Offer"));
const Skills = React.lazy(() => import("./Skills"));

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <Hero />
        <About />
        <ErrorBoundary fallback={<>Error</>}>
          <Suspense fallback={<></>}>
            <Skills />
            <Offer />
            <Portfolio />
            <CodeSection />
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </DefaultLayout>
    </>
  );
};

export default Home;
