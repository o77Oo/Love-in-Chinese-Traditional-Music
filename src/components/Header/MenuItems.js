import { NavLink } from "react-router-dom";

import Dropdown from "./Dropdown";

const MenuItems = ({ items }) => {
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button type="button" >
            {items.title}{" "}
          </button>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        // <a href="/#">{items.title}</a>
        <NavLink
          role="button"
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