// import "./Hero-E.scss";
import React from "react";
import Banner from "../../assets/images/banner.jpg"

function HeroE() {
  return (
    <div className="hero">
      <div className="hero__wrap">
        <img
          className="hero__img"
          src={Banner}
          alt="banner"
        ></img>
      </div>
    </div>
  );
}

export default HeroE;