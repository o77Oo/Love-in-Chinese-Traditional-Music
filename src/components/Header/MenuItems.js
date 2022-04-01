import { NavLink } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="menu-items">
      {items.submenu ? (
        <span onMouseLeave={() => setDropdown(false)}
        onMouseEnter={() => setDropdown(true)}>
          <NavLink to={items.path} aria-expanded={dropdown ? "true" : "false"}
     >
            {items.title}{" "}
          </NavLink>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
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