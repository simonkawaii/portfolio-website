import React from "react";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full relative flex flex-col border-[1px] rounded-[2rem] text-2xl backdrop-blur-sm border-neutral-800 p-12">
      <div className="absolute  z-[-1]  bottom-0 left-0 w-full overflow-hidden rounded-[inherit] content-[''] h-full">
        <div className="absolute bottom-0 left-0 w-full  content-[''] blur-lg  rounded-[inherit] h-full border-2 border-neutral-600"></div>
      </div>
      {children}
    </div>
  );
};

export default Section;
