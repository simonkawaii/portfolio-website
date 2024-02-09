import { AnimatePresence, motion, useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";
import CheckedIcon from "../../assets/CheckedIcon";
import { Button } from "../Button/Button";

const SubmitForm = () => {
  const [scope, animate] = useAnimate();
  const [trigger, setTriggeredState] = useState(false);

  const handleAnimation = () => {
    setTriggeredState(true);
  };

  useEffect(() => {
    const CleanUpTimeout = setTimeout(() => {
      setTriggeredState(false);
    }, 1500);
    return () => clearTimeout(CleanUpTimeout);
  }, [trigger]);
  return (
    <Button
      ref={scope}
      onClick={handleAnimation}
      size={"bold"}
      variant={"contact"}
      className="mt-24 overflow-hidden"
    >
      <motion.span
        className={`${
          trigger ? "opacity-0 " : "opacity-0 "
        } text-[1.6rem] font-bold`}
      >
        Message Me!
      </motion.span>
      <AnimatePresence mode="wait">
        {trigger ? <CheckedIcon /> : null}
      </AnimatePresence>
    </Button>
  );
};

export default SubmitForm;
