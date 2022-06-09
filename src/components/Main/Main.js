import "./Main.scss";
import Font from "react-font";
import React from "react";

function Main(props) {
  return (
    <div className="main">
      <Font family="PT Sans Narrow">
        <h1 className="main__title">{props.selectedVideo.title}</h1>

        <p className="main__artist">{props.selectedVideo.artist}</p>
      </Font>
    </div>
  );
}

export default Main;
