import { useScroll } from "framer-motion";
import { useRef } from "react";
import Word from "./Word";
import cn from "../../utils/cn";

interface ScrollParagraphProps {
  className: string;
  phrase: string;
}
const ScrollParagraph: React.FC<ScrollParagraphProps> = ({
  phrase,
  className,
}) => {
  const paragraph = useRef(null);

  const { scrollYProgress } = useScroll({
    target: paragraph,
    offset: ["start 0.8", "start 0.15"],
  });

  const words = phrase.split("");

  const wordsMap = words.map((word, index) => {
    const start = index / words.length;
    const end = start + 1 / words.length;

    return (
      <Word
        key={`${word}-${index}`}
        range={[start, end]}
        progress={scrollYProgress}
        className={cn(className)}
      >
        {word}
      </Word>
    );
  });

  return <p ref={paragraph}>{wordsMap}</p>;
};

export default ScrollParagraph;
