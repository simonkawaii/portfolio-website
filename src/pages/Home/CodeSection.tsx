import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import Section from "../../components/Wrappers/Section";
import AnimatedPhrase from "../../components/Hero/AnimatedPhrase";
import Card from "../../components/Wrappers/Card";
import React from "react";

const GenerateCodeWrapper = React.lazy(
  () => import("../../components/CodeGen/GenerateCode")
);

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
          <GenerateCodeWrapper isInView={isInView} codeString={codeString} />
        </span>
      </Card>
    </Section>
  );
};

export default CodeSection;
