import {  motion,  } from "framer-motion";
import AnimatedPhrase from "../../components/Hero/AnimatedPhrase";
import Section from "../../components/Wrappers/Section";
const techStack = [
  {
    alt: "HTML 5",
    icon: "/icons/HTML5.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    alt: "CSS 3",
    icon: "/icons/CSS3.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=pl",
  },

  {
    alt: "Scss",
    icon: "/icons/Sass.svg",
    link: "https://sass-lang.com",
  },
  {
    alt: "SVG",
    icon: "/icons/Svg.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/SVG",
  },
  {
    alt: "Tailwind CSS",
    icon: "/icons/TailwindCSS.svg",
    link: "https://tailwindcss.com",
  },
  {
    alt: "JavaScript",
    icon: "/icons/Javascript.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    alt: "TypeScript",
    icon: "/icons/TypeScript.svg",
    link: "https://www.typescriptlang.org",
  },

  {
    alt: "ReactJS",
    icon: "/icons/react.svg",
    link: "https://react.dev",
  },
  {
    alt: "NextJs",
    icon: "/icons/next.svg",
    link: "https://nextjs.org/",
  },
  {
    alt: "Redux",
    icon: "/icons/Redux.svg",
    link: "https://redux-toolkit.js.org",
  },
  {
    alt: "React Query",
    icon: "/icons/React Query.svg",
    link: "https://tanstack.com/query/latest/",
  },

  {
    alt: "Vue",
    icon: "/icons/Vue.svg",
    link: "https://vuejs.org",
  },
  {
    alt: "Pinia",
    icon: "/icons/pinia.svg",
    link: "https://pinia.vuejs.org",
  },
  {
    alt: "Git",
    icon: "/icons/git.svg",
    link: "https://git-scm.com",
  },
  {
    alt: "Firebase",
    icon: "/icons/Firebase.svg",
    link: "https://firebase.google.com",
  },
  {
    alt: "Cypress",
    icon: "/icons/Cypress.svg",
    link: "https://www.cypress.io",
  },
  {
    alt: "Photoshop",
    icon: "/icons/PS.svg",
    link: "https://www.adobe.com/",
  },
  {
    alt: "Illustrator",
    icon: "/icons/ILL.svg",
    link: "https://www.adobe.com/",
  },
  {
    alt: "Figma",
    icon: "/icons/Figma.svg",
    link: "https://www.figma.com/",
  },
  {
    alt: "Blender",
    icon: "/icons/Blender.svg",
    link: "https://www.blender.org/",
  },
];

const Skills = () => {



  const techStackMap = techStack.map(({ icon, alt, link }, index) => {
    if (!link) {
      return (
        <div
          key={`${icon}-${index}`}
          className="flex  flex-col hover:bg-gradient-to-r from-accent/10 from-10%  to-purple-600/10   duration-200 hover:scale-110 cursor-pointer rounded-[2rem] gap-4 text-center text-neutral-400 "
        >
          <div
            className="relative flex
              aspect-square
              flex-col border-[1px] rounded-[2rem] text-2xl text-white  backdrop-blur-sm border-neutral-800 p-8 md:p-12"
          >
            <div className="absolute  z-[-1]  bottom-0 left-0 w-full overflow-hidden rounded-[inherit] content-[''] h-full">
              <div className="absolute bottom-0 left-0 w-full  content-[''] blur-lg  rounded-[inherit] h-full border-2 border-neutral-600"></div>
            </div>
            <img
              src={icon}
              className="contrast-[1.15] brightness-110 aspect-square w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]"
              alt={alt}
            />
          </div>
        </div>
      );
    }

    return (
      <motion.a
        target="blank"
        key={`${icon}-${index}`}
        href={link ?? ""}
 
        className="hover:bg-gradient-to-r   from-accent/10 from-10%  to-purple-600/10   duration-300 hover:scale-110  rounded-[2rem] "
      >
        <div className="flex flex-col gap-4 text-center text-neutral-400 ">
          <div
            className="relative flex
          aspect-square
          flex-col border-[1px] rounded-[2rem] text-2xl text-white  backdrop-blur-sm border-neutral-800 p-8 md:p-12"
          >
            <div className="absolute  z-[-1]  bottom-0 left-0 w-full overflow-hidden rounded-[inherit] content-[''] h-full">
              <div className="absolute bottom-0 left-0 w-full  content-[''] blur-lg  rounded-[inherit] h-full border-2 border-neutral-600"></div>
            </div>
            <img
              src={icon}
              className="contrast-[1.15] brightness-110 aspect-square w-[2.5rem] h-[2.5rem] md:w-[4rem] md:h-[4rem]"
              alt={alt}
            />
          </div>
        </div>
      </motion.a>
    );
  });

  return (
    <Section className="snap-center" id="skills">
      <Section className="py-[5rem] md:py-[10rem] flex text-center flex-col justify-center items-center">
        <AnimatedPhrase
          className="text-center"
          phrase={"My skills and technology stack"}
        />
      </Section>
      <div className=" flex flex-col relative justify-center max-w-[100rem] w-full  items-center  m-auto gradient-mask-sides     overflow-hidden text-transparent">
        <motion.div
          className="motion-cards flex flex-wrap w-full min-w-[40rem] p-12 gap-4  md:gap-8 items-center justify-center"
        >
          {techStackMap}
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
