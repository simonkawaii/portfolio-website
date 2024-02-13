import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const GenerateCode = ({
  isInView,
  codeString,
}: {
  isInView: boolean;
  codeString: string;
}) => {
  const [codeText, setCodeText] = useState("");
  const codeStringSeparated = codeString.split("");

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

const GenerateCodeWrapper = ({
  isInView,
  codeString,
}: {
  isInView: boolean;
  codeString: string;
}) => {
  return (
    <div
      style={{
        display: isInView ? "block" : "none",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {isInView ? (
        <>
          <AnimatePresence>
            <GenerateCode codeString={codeString} isInView={isInView} />
          </AnimatePresence>
        </>
      ) : null}

      <div className="opacity-0 pointer-events-none -z-10">
        <SyntaxHighlighter language="javascript" style={atomOneDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default GenerateCodeWrapper;
