import { AnimatePresence, motion, useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";
import CheckedIcon from "../../assets/CheckedIcon";
import { Button } from "../Button/Button";

const SubmitForm = () => {
  const stateMap: { [key: string]: string } = {
    success: "success",
    loading: "loading",
    error: "error",
  };
  const [scope, animate] = useAnimate();
  const [trigger, setTriggeredState] = useState("");

  const handleAnimation = () => {
    const rand = Math.random();
    new Promise((resolve, reject) => {
      setTriggeredState("loading");

      setTimeout(() => {
        if (rand > 0.5) {
          setTriggeredState("error");

          resolve("success");
        } else {
          setTriggeredState("success");
          reject();
        }
      }, 4000);
    });
  };

  useEffect(() => {
    const CleanUpTimeout = setTimeout(() => {
      setTriggeredState("");
    }, 5000);
    return () => clearTimeout(CleanUpTimeout);
  }, [trigger]);
  return (
    <Button
      ref={scope}
      onClick={handleAnimation}
      size={"bold"}
      variant={"contact"}
      disabled={!!stateMap[trigger]}
      className={`${
        trigger === "error"
          ? "animate-sidetoside bg-red-400 hover:border-red-400 focus:border-red-400 focus:ring-red-400"
          : ""
      } mt-24 overflow-hidden`}
    >
      <motion.span
        initial={{
          y: "0%",
        }}
        animate={{
          opacity: stateMap[trigger] ? 0 : 1,
          y: stateMap[trigger] ? "200%" : "0%",
          transition: {
            duration: 0.2,
          },
        }}
        className={`text-[1.6rem] duration-200 font-bold`}
      >
        Message Me!
      </motion.span>
      <AnimatePresence mode="wait">
        {stateMap[trigger] ? <CheckedIcon trigger={trigger} /> : null}
      </AnimatePresence>
    </Button>
  );
};

export default SubmitForm;
