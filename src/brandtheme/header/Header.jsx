import React from "react";
import LogoImg from "./LogoImg";
import Menu from "./Menu";
import Button from "./Button";

const Header = () => {
  return (
    <section className="header">
      <LogoImg />
      <Menu />
      <Button />
    </section>
  );
};

export default Header;
