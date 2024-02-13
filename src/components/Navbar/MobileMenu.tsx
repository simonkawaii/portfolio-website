import React, { Dispatch, SetStateAction } from "react";
import Curve from "./Curve";

interface IMenuButtonTypes {
  setOpen?: Dispatch<SetStateAction<boolean>>;
  opened: boolean;
  children: React.ReactNode;
}
const MobileMenu: React.FC<IMenuButtonTypes> = ({
  setOpen,
  opened,
  children,
}) => {
  return (
    opened && (
      <div className="h-full p-8 bg-black  flex w-full md:w-[300px] z-50">
        <div className="absolute  z-[-1]  bottom-0 left-0 w-full overflow-hidden content-[''] h-full">
          <div className="absolute bottom-0 left-0 w-full bg-neutral-700 content-[''] blur-lg h-1"></div>
        </div>
        <Curve />
        <div
          className="w-full h-full flex flex-col gap-12 "
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex justify-between items-center h-24">
            <div className="text-[3rem] font-bold tracking-wide">MENU</div>
            <button
              type="button"
              onClick={() => {
                setOpen && setOpen(false);
              }}
            >
              <span className=" sr-only">Close mobile menu</span>
              <svg
                width="56"
                height="56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector 2"
                  d="M41 15L14.7987 41.2013"
                  stroke="white"
                  strokeWidth={3}
                />
                <path
                  id="Vector 3"
                  d="M41 41L14.7987 14.7987"
                  stroke="white"
                  strokeWidth={3}
                />
              </svg>
            </button>
          </div>

          <div>
            <div className="bg-inherit w-full h-fit gap-8 flex flex-col">
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MobileMenu;
