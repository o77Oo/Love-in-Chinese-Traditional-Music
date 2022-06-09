import "./Header.scss";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpeg";
import React from "react";
import Font from "react-font";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Font family="Source Code Pro">
          <div className="header__box">
            <Link to="/">
              <img className="header__logo" src={logo} alt="main" />
            </Link>
            ZIDE STUDIO
          </div>
        </Font>
        <div className="header__navbox">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
