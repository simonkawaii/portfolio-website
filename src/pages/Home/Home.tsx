import Hero from "../../components/Hero/Hero";
import DefaultLayout from "../../layouts/DefaultLayout";

import About from "./About";
import CodeSection from "./CodeSection";

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <Hero />
        <About />
        <CodeSection />
      </DefaultLayout>
    </>
  );
};

export default Home;
