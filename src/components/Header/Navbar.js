import { menuItems } from "./menuItem";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
