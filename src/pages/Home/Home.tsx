import { useEffect, useRef, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Wrappers/Section";
import DefaultLayout from "../../layouts/DefaultLayout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useInView } from "framer-motion";
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

    WebFundamentals: ["HTML5", "CSS3"],
    Design: ["Photoshop", "Illustrator", "Figma", "Blender"],
    TechStack: [
      { JavaScript: ["JavaScript","TypeScript"] },
      { React: ["ReactJS", "Redux", "Next.js"] },
      { Vue: ["Vue 3", "Pinia"] },
      { Style: ["SCSS", "Tailwind CSS", "Material UI", "SVG"] },
    ],
  };

};`;

const codeStringSeparated = codeString.split("");
console.log(codeStringSeparated);

const GenerateCode = ({ isInView }: { isInView: boolean }) => {
  const [codeText, setCodeText] = useState("");

  useEffect(() => {
    if (isInView) {
      let index = 0;
      const intervalDuration = 20;
      let text = "";
      const interval = setInterval(() => {
        text += codeStringSeparated[index];
        setCodeText(text);

        index++;

        if (index === codeStringSeparated.length - 1) {
          clearInterval(interval);
        }
      }, intervalDuration);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div className="contrast-150">
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {codeText}
      </SyntaxHighlighter>
    </div>
  );
};

const Home = () => {
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(container, { amount: 0.5, once: true });
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <>
      <DefaultLayout>
        <Hero />
        <section ref={container} className="max-w-screen-xl my-[10rem]">
          <Section>
            <span className="[&>*]:font-code [&>*]:leading-[1.5]	 text-blue-300 font-code text-2xl [&>*]:text-2xl">
              <div
                style={{
                  display: isInView ? "block" : "none",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                ref={ref}
              >
                <GenerateCode isInView={isInView} />
              </div>
            </span>
          </Section>
        </section>
      </DefaultLayout>
    </>
  );
};

export default Home;
