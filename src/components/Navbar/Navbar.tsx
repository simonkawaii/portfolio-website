/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Modal from "../Utils/Modal/Modal";
import MenuLinks from "./MenuLinks";
import ParticlesSwitch from "../Particles/ParticlesSwitch";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex sticky z-50 top-0 items-center justify-center flex-wrap border-b-[1px] border-neutral-800/70 backdrop-blur-sm px-12 py-4">
      <div className="absolute  z-[-1]  bottom-0 left-0 w-full overflow-hidden content-[''] h-full">
        <div className="absolute bottom-0 left-0 w-full bg-neutral-700 content-[''] blur-lg h-1"></div>
      </div>
      <nav className="xl:flex hidden w-full max-w-screen-xl items-center justify-between gap-8  ">
        <div>Szymon Kaliczak</div>
        <div className="flex absolute w-full left-0 right-0 justify-center items-center gap-8 ">
          <MenuLinks />
        </div>
        <div className="z-20">
          <ParticlesSwitch>lol</ParticlesSwitch>
        </div>
      </nav>
      <nav className="xl:hidden flex w-full max-w-screen-xl items-center justify-between gap-8  ">
        <div>Szymon Kaliczak</div>

        <button onClick={() => setOpenMenu(true)}>
          <div className="flex flex-col gap-[3px]">
            <span className="block w-10 h-[2px] bg-neutral-500 rounded-full"></span>
            <span className="block w-10 h-[2px] bg-neutral-500 rounded-full"></span>
            <span className="block w-10 h-[2px] bg-neutral-500 rounded-full"></span>
          </div>
        </button>
        <Modal isOpen={openMenu} handleClose={() => setOpenMenu(false)}>
          <MobileMenu opened={openMenu} setOpen={setOpenMenu}>
            <MenuLinks></MenuLinks>
            <div className="z-20">
              <ParticlesSwitch>lol</ParticlesSwitch>
            </div>
          </MobileMenu>
        </Modal>
      </nav>
    </div>
  );
};

export default Navbar;
