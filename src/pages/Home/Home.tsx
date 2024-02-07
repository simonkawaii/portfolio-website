import DefaultLayout from "../../layouts/DefaultLayout";

import Hero from "../../components/Hero/Hero";
import About from "./About";
import CodeSection from "./CodeSection";
import Offer from "./Offer";
import Skills from "./Skills";

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
