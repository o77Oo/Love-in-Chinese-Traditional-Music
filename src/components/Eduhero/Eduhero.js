import "./Eduhero.scss";
import React from "react";
import Font from "react-font";

function Eduhero() {
  return (
    <div className="front">
    
        <Font family="Source Code Pro">
          <h2 className="front__title">ZI DE STUDIO</h2>
        </Font>
        <Font family="Bebas Neue">
          <h1 className="front__header">LEARNING RECOMMENDATIONS</h1>
        </Font>
        <a href="#info">
        <button className="front__button"> GET A RECOMMENDATION</button>
        </a>
    </div>
  );
}

export default Eduhero;
