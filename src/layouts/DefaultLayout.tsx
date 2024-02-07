import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contact from "../pages/Home/Contact";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="p-8 md:gap-24 flex flex-col mx-auto ">{children}</main>
      <Contact />
      <Footer />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
