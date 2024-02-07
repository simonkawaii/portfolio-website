import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";

import Hero from "../../components/Hero/Hero";

const About = React.lazy(() => import("./About"));
const CodeSection = React.lazy(() => import("./CodeSection"));
const Offer = React.lazy(() => import("./Offer"));
const Skills = React.lazy(() => import("./Skills"));

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <Hero />
        <About />
        <Skills />
        <Offer />
        <CodeSection />
      </DefaultLayout>
    </>
  );
};

export default Home;
