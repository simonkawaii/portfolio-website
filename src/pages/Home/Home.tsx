import Hero from "../../components/Hero/Hero";
import Section from "../../components/Wrappers/Section";
import DefaultLayout from "../../layouts/DefaultLayout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Home = () => {
  const codeString = `import Hero from "../../roles/frontend-developer";
import Passion from "../../config/heart.ts";
import HardWork from "../hard-work.ts";
  
const Component = () => {

  const aboutObject = {

   AboutMe: "I am a last year computer science
   student, passionate web designer
   with keen interest in creating visual
   content"
  };

  //todo: learn so much more
  const skillsObject = {

    webFundamentals: ["HTML5", "CSS3"],
    Design: ["Photoshop", "Illustrator", "Figma", "Blender"],
    TechStack: [
      { JavaScript: ["JavaScript","TypeScript"] },
      { React: ["ReactJS", "Redux", "Next.js"] },
      { Vue: ["Vue 3", "Pinia"] },
      { Style: ["SCSS", "Tailwind CSS", "Material UI", "SVG"] },
    ],
  };

};`;

  return (
    <>
      <DefaultLayout>
        <Hero />
        <section className="max-w-screen-xl my-[10rem]">
          <Section>
            <span className="[&>*]:font-code [&>*]:leading-[1.5]	 text-blue-300 font-code text-2xl [&>*]:text-2xl">
              {/* {renderParagraphs} */}
              <div className=" contrast-150">
                <SyntaxHighlighter language="javascript" style={atomOneDark}>
                  {codeString}
                </SyntaxHighlighter>
              </div>
            </span>
          </Section>
          <div id="ddd"></div>
        </section>
      </DefaultLayout>
    </>
  );
};

export default Home;
