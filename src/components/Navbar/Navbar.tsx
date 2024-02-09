import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Modal from "../Utils/Modal/Modal";
import MenuLinks from "./MenuLinks";
import ParticlesSwitch from "../Particles/ParticlesSwitch";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  return (
    <div
      id="navbar"
      className="flex sticky  z-50 top-0 items-center justify-center flex-wrap border-b-[1px] border-neutral-800/70 backdrop-blur-sm px-12 py-4"
    >
      <div className="absolute  z-[-1]  bottom-0 left-0 w-full overflow-hidden content-[''] h-full">
        <div className="absolute bottom-0 left-0 w-full bg-neutral-700 content-[''] blur-lg h-1"></div>
      </div>
      <nav
        id="navbar"
        className="xl:flex hidden w-full max-w-screen-xl items-center justify-between gap-8  "
      >
        <div>Szymon Kaliczak</div>
        <div className="flex absolute w-full left-0 right-0 justify-center items-center gap-8 ">
          <MenuLinks activeLink={activeLink} setActiveLink={setActiveLink} />
        </div>
        <div className="z-20 relative">
          <ParticlesSwitch />
        </div>
      </nav>
      <nav
        id="navbar"
        className="xl:hidden  flex w-full  items-center justify-between gap-8  "
      >
        <div>Szymon Kaliczak</div>

        <button onClick={() => setOpenMenu(true)}>
          <span className=" sr-only">Close mobile menu</span>

          <div className="flex flex-col gap-[3px] ">
            <svg
              width="32"
              height="19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="[&>*]:fill-neutral-500">
                <rect width="32" height="3" rx="1.5" />
                <rect y="8" width="32" height="3" rx="1.5" />
                <rect y="16" width="16" height="3" rx="1.5" />
              </g>
            </svg>
          </div>
        </button>
        <Modal isOpen={openMenu} handleClose={() => setOpenMenu(false)}>
          <MobileMenu opened={openMenu} setOpen={setOpenMenu}>
            <MenuLinks activeLink={activeLink} setActiveLink={setActiveLink} />

            <div className="z-20 relative">
              <ParticlesSwitch />
              <div className="absolute invisible pointer-events-none inset-0 w-full h-full content-[''] z-[-1]">
                <ParticlesSwitch />
              </div>
            </div>
          </MobileMenu>
        </Modal>
      </nav>
    </div>
  );
};

export default Navbar;
