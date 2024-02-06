import AnimatedPhrase from "../../components/Hero/AnimatedPhrase";

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
    alt: "Redux",
    icon: "/icons/Redux.svg",
    link: "https://redux-toolkit.js.org",
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
];

const Skills = () => {
  const techStackMap = techStack.map(({ icon, alt, link }, index) => {
    if (!link) {
      return (
        <div
          key={`${icon}-${index}`}
          className="flex flex-col hover:bg-gradient-to-r from-accent/10 from-10%  to-purple-600/10   duration-200 hover:scale-110 cursor-pointer rounded-[2rem] gap-4 text-center text-neutral-400 "
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
              className=" aspect-square w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]"
              alt={alt}
            />
          </div>
        </div>
      );
    }

    return (
      <a
        target="blank"
        key={`${icon}-${index}`}
        href={link ?? ""}
        className="hover:bg-gradient-to-r from-accent/10 from-10%  to-purple-600/10   duration-200 hover:scale-110  rounded-[2rem] "
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
              className=" aspect-square w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]"
              alt={alt}
            />
          </div>
        </div>
      </a>
    );
  });

  return (
    <div className="snap-center" id="skills">
      <div className="py-[5rem] md:py-[10rem] flex text-center flex-col justify-center items-center">
        <AnimatedPhrase
          className="text-center"
          phrase={"My skills and technology stack"}
        />
      </div>
      <div className=" flex flex-col relative justify-center  bg-clip-text bg-gradient-to-r from-accent w-full m-auto gradient-mask-sides overflow-x-auto  via-purple-600 to-accent items-center text-transparent">
        <div className="flex flex-wrap w-full min-w-[50rem] p-12 gap-8 items-center justify-center m-auto">
          {techStackMap}
        </div>
      </div>
    </div>
  );
};

export default Skills;
