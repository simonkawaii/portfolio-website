import React from "react";
import { Link } from "react-router-dom";

const MenuLinks = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/#about"}>About</Link>
      <Link to={"/#skills"}>Skills</Link>
      <Link to={"/#portfolio"}>Portfolio</Link>
    </>
  );
};

export default MenuLinks;
