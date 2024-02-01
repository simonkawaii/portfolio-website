import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className=" p-8 gap-8 flex flex-col mx-auto max-w-screen-xl ">
        {children}
      </main>
      <Footer />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
