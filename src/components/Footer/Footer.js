import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpeg";
import Facebook from "../../assets/icons/facebook.jpg";
import Ins from "../../assets/icons/ins.jpg";
import Youtube from "../../assets/icons/youtube.jpg";
import React from "react";
import Font from "react-font";

function Header() {
  return (
    <div className="footer">
      <div className="footer__left">
        <Link to="/">
          <img className="footer__logo" src={logo} alt="main" />
        </Link>
        <Font family="Source Code Pro">
          <p className="footer__title"> ZIDE STUDIO</p>
        </Font>
      </div>
      <div className="footer__right">
        <a target="facebook" href="https://www.facebook.com/ZiDeGuqinStudio">
          <img className="footer__logo" src={Facebook} alt="facebook" />{" "}
        </a>
        <a target="ins" href="https://www.instagram.com/zide.guqin.studio/">
          <img className="footer__logo" src={Ins} alt="ins" />{" "}
        </a>
        <a
          target="youtube"
          href="https://www.youtube.com/channel/UCltmf0pqjXyLtNsF2vek_wQ"
        >
          <img className="footer__logo" src={Youtube} alt="youtube" />{" "}
        </a>
      </div>
    </div>
  );
}

export default Header;
