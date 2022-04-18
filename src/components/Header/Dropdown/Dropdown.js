import { Link } from "react-router-dom";


const Dropdown = ({ submenus, dropdown }) => {
   
    return (
     <ul className={`dropdown ${!dropdown ? "hide" : ""}`}>
      {submenus.map((submenu, index) => (
       <li key={index} className="menu__items">
        <Link to={submenu.path}>{submenu.title}</Link>
       </li>
      ))}
     </ul>
    );
   };
   
   export default Dropdown;