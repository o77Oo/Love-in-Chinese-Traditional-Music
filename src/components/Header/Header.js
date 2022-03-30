import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpeg";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
  
        <header className="header">
            <div className="header__container">
        <div className="header__box">
          {/* <Link to="/"> */}
            <img className="header__logo" src={logo} alt="main" />
          {/* </Link> */}
        </div>

        <ul className="header__nav">
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
              Music
            </NavLink>
          </li>
          
        </ul>
      </div>
        </header>
      
    );
  }
  
  export default Header;
  