import { NavLink } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";
import React from "react";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="menu__items">
      {items.submenu ? (
        <span className="dropbtn" onMouseLeave={() => setDropdown(false)}
        onMouseEnter={() => setDropdown(true)}>
          <NavLink to={items.path} aria-expanded={dropdown ? "true" : "false"}
     >
            {items.title}{" "}
          </NavLink>
          <Dropdown className="dropbtn__item" submenus={items.submenu} dropdown={dropdown} />
        </span>
      ) : (
     
        <NavLink

          className="menu__link"
          activeClassName="menu__link--active"
          to={items.path}
          exact
        >
          {items.title}
        </NavLink>
      )}
    </li>
  );
};
export default MenuItems;