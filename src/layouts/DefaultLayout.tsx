import { ReactNode } from "react";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="w-full min-h-screen flex flex-col mx-auto ">
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
