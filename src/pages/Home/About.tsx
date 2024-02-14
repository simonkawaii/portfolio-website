import ScrollParagraph from "../../components/ScrollParagraph/ScrollParagraph";
import AnimatedPhrase from "../../components/Hero/AnimatedPhrase";
import Section from "../../components/Wrappers/Section";

const phrase = `I'm a final year computer science student based in Poland, passionate web designer with keen interest in creating visual content. As a frontend developer, I specialize in creating engaging and user-friendly web experiences. My expertise includes HTML, CSS and JavaScript, and I excel at bringing projects to life using frameworks like React.`;

const About = () => {
  return (
    <Section id="about">
      <div className="py-[5rem] md:py-[10rem] flex flex-col justify-center items-center">
        <AnimatedPhrase className="text-center" phrase={"About me!"} />
      </div>
      <div className=" flex flex-col relative justify-center  bg-clip-text bg-gradient-to-r from-accent  via-purple-600 to-accent items-center text-transparent  ">
        <ScrollParagraph className="motion-h2 tracking-wide" phrase={phrase} />
        <h2 className=" tracking-wide text-white opacity-10 absolute top-0 left-0">
          {phrase}
        </h2>
      </div>
    </Section>
  );
};

export default About;
