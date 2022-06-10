import { menuItems } from "./menuItem";
import MenuItems from "./MenuItems";
import Font from 'react-font';
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
    <Font family='Bebas Neue'>
      <ul className="menu">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
      </Font>
    </nav>
  );
};

export default Navbar;
