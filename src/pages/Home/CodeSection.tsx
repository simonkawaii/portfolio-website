import { AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Section from "../../components/Wrappers/Section";
import AnimatedPhrase from "../../components/Hero/AnimatedPhrase";
import Card from "../../components/Wrappers/Card";

const codeString = `import Hero from "../../roles/Frontend-Developer.tsx";
import Passion from "../../config/Heart.tsx";
import HardWork from "../Hard-Work.tsx";
  
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
      { Cloud: ["Firebase"] },
      { Testing: ["Cypress"] }.
    ],
  };

};`;
const codeStringSeparated = codeString.split("");

const GenerateCode = ({ isInView }: { isInView: boolean }) => {
  const [codeText, setCodeText] = useState("");

  useEffect(() => {
    if (isInView) {
      let index = 0;
      const intervalDuration = 10;
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
    <div className="contrast-150  absolute inset-8">
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {codeText}
      </SyntaxHighlighter>
    </div>
  );
};

const CodeSection = () => {
  const container = useRef(null);

  const isInView = useInView(container, { amount: 0.5, once: true });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <Section ref={container}>
      <div className="py-[5rem] md:py-[10rem] flex flex-col justify-center items-center">
        <AnimatedPhrase className="text-center" phrase={"Summary"} />
      </div>
      <Card>
        <span className="[&>*]:font-code [&>*]:leading-[1.5] font-code text-2xl [&>*]:text-2xl">
          <div
            style={{
              display: isInView ? "block" : "none",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {isInView ? (
              <AnimatePresence>
                <>
                  <GenerateCode isInView={isInView} />

                  <div className="opacity-0 pointer-events-none -z-10">
                    <SyntaxHighlighter
                      language="javascript"
                      style={atomOneDark}
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  </div>
                </>
              </AnimatePresence>
            ) : null}
          </div>
        </span>
      </Card>
    </Section>
  );
};

export default CodeSection;
