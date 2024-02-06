import Hero from "../../components/Hero/Hero";
import DefaultLayout from "../../layouts/DefaultLayout";

import About from "./About";
import CodeSection from "./CodeSection";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <Hero />
        <About />
        <Skills />
        <CodeSection />
      </DefaultLayout>
    </>
  );
};

export default Home;
