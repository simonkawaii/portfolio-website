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
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              height: "60px",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "600",
                letterSpacing: "2px",
                color: "var(--primary-color",
              }}
            >
              MENU
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen && setOpen(false);
              }}
            >
              <span>close</span>
            </button>
          </div>

          <div>
            <div
              className="bg-inherit"
              style={{
                width: "100%",
                height: "fit-content",
                gap: "2rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MobileMenu;
