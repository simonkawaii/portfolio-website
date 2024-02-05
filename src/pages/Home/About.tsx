import { useLayoutEffect, useRef } from "react";
import ScrollParagraph from "../../components/ScrollParagraph/ScrollParagraph";
import gsap from "gsap";
import AnimatedPhrase from "../../components/Hero/AnimatedPhrase";

const phrase = `Hello! I'm a final year computer science student, passionate web designer with keen interest in creating visual content. As a frontend developer, I specialize in creating engaging and user-friendly web experiences. My expertise includes HTML, CSS and JavaScript, and I excel at bringing projects to life using frameworks like React. I enjoy the challenge of turning complex problems into simple and elegant solutions. I have a constant eagerness to learn and adapt to new technologies. Let's work together and create something extraordinary!`;

const About = () => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "-100%",
        end: "100%",
        scrub: true,
      },
    });
    timeline.to(ref.current, { y: "-200px" }, 0);
  }, []);
  return (
    <div className="snap-center" id="about" ref={ref}>
      <div className="py-[10rem] flex flex-col justify-center items-center">
        <AnimatedPhrase
          className="text-center"
          once={false}
          phrase={"Get to know me!"}
        />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <ScrollParagraph className="motion-h2 tracking-wide" phrase={phrase} />
      </div>
    </div>
  );
};

export default About;
