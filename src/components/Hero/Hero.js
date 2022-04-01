import "./Hero.scss";
import React from "react";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__wrap">
        <iframe width="90%" height="500rem"
          className="hero__video"
          src={`${props.selectedVideo.video}`}
        ></iframe>
      </div>
    </div>
  );
}

export default Hero;