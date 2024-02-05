import { AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Section from "../../components/Wrappers/Section";
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
    <div className="contrast-150 absolute inset-8">
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
    <section ref={container} className="max-w-screen-xl ">
      <Section>
        <span className="[&>*]:font-code [&>*]:leading-[1.5] font-code text-2xl [&>*]:text-2xl">
          <div
            style={{
              display: isInView ? "block" : "none",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {/* <GenerateCode isInView={isInView} /> */}
            {/* <pre className="opacity-0">{codeStringSeparated}</pre> */}

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
      </Section>
    </section>
  );
};

export default CodeSection;
