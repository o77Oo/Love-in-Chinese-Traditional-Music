import { menuItems } from "./menuItem";

import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <nav>
    
      <ul className="menu">
      {menuItems.map((menu, index) => {
     return <MenuItems items={menu} key={index} />;
 
    })}

       {/* <li className="header__item">
        <NavLink
          className="header__link"
          activeClassName="header__link--active"
          to="/aboutus"
          exact
        >
          About Us
        </NavLink>
      </li>
        <li className="header__item">
          <NavLink
            className="header__link"
            activeClassName="header__link--active"
            to="/orchestra"
          >
            Orchestra
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            className="header__link"
            activeClassName="header__link--active"
            to="/"
          >
            Music & Love
          </NavLink>
        </li>

        <li className="header__item">
          <NavLink
            className="header__link"
            activeClassName="header__link--active"
            to="/education"
            exact
          >
            Education
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            className="header__link"
            activeClassName="header__link--active"
            to="/contactus"
            exact
          >
            Contact Us
          </NavLink>
        </li>  */}
     
      </ul>
    </nav>
  );
};

export default Navbar;
