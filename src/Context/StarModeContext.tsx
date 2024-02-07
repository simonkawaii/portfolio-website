import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  starmode: "false",
  toggleStarmode: () => {},
});

export const useStarmode = () => useContext(ThemeContext);

export const StarmodeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [starmode, setStarmode] = useState(() => {
    const storedTheme = localStorage.getItem("starmode");
    return storedTheme ? storedTheme : "true";
  });

  useEffect(() => {
    localStorage.setItem("starmode", starmode);
  }, [starmode]);

  const toggleStarmode = () => {
    setStarmode((prevTheme) => (prevTheme === "true" ? "false" : "true"));
  };

  return (
    <ThemeContext.Provider value={{ starmode, toggleStarmode }}>
      {children}
    </ThemeContext.Provider>
  );
};
