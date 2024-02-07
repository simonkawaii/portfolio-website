import { HTMLMotionProps, motion, useInView } from "framer-motion";
import React, { forwardRef, useRef } from "react";
import cn from "../../utils/cn";
import { slideIn } from "../../Animations/Animations";
import { VariantProps, cva } from "class-variance-authority";

const SectionVariants = cva(
  "py-[5rem] md:py-[10rem] mx-auto w-full h-full flex flex-col justify-center items-center relative border-[1px] rounded-[2rem]",
  {
    variants: {
      variant: {
        primary: "bg-accent text-white",
        destructive: "bg-red-400",
        outline: " border-neutral-800 ",
        subtle: "bg-blue-400/40",
        ghost: "bg-transparent border-transparent py-0",
        link: "bg-blue-500 dashed ",
      },
      size: {
        screen: "max-w-screen",
        normal: "max-w-screen-xl",
      },
      paddings: {
        none: "md:py-0 py-0",
        md: "py-[2rem] md:py-[7rem]",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "normal",
      paddings: "md",
    },
  }
);

interface SectionProps
  extends HTMLMotionProps<"div">,
    VariantProps<typeof SectionVariants> {
  children?: React.ReactNode;
  once?: boolean;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    { children, className, variant, paddings, size, once = true, ...props },
    reactRef
  ) => {
    const container = useRef(null);
    const isInView = useInView(container, { once: once });

    return (
      <section ref={container}>
        <motion.div
          variants={slideIn}
          ref={reactRef}
          initial="initial"
          animate={isInView ? "visible" : "initial"}
          className={cn(
            SectionVariants({ variant, size, paddings, className })
          )}
          {...props}
        >
          {children}
          {variant === "outline" ? (
            <div className="absolute  z-[-1]  bottom-0 left-0 w-full overflow-hidden rounded-[inherit] content-[''] h-full">
              <div className="absolute bottom-0 left-0 w-full  content-[''] blur-lg  rounded-[inherit] h-full border-2 border-neutral-600"></div>
            </div>
          ) : null}
        </motion.div>
      </section>
    );
  }
);

export default Section;
