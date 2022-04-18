
import MenuItems from "../Menultems/MenuItems";
import Font from 'react-font';

const Navbar = () => {
  return (
    <nav className="navbar">
    <Font family='Bebas Neue'>
      <ul className="menu">
        {MenuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
      </Font>
    </nav>
  );
};

export default Navbar;
