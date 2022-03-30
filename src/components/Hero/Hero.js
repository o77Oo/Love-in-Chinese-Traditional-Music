import "./Hero.scss";
import React from "react";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__wrap">
        <video
          className="hero__video"
          poster={`${process.env.REACT_APP_API_URL}${props.selectedVideo.image}`}
          controls
        ></video>
      </div>
    </div>
  );
}

export default Hero;