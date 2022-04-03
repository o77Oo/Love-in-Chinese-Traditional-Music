import "./Header.scss";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpeg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__box">
          <Link to="/">
            <img className="header__logo" src={logo} alt="main" />
          </Link>
          ZI DE STUDIO
        </div>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;
