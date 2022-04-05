import { Component } from "react";
import axios from "axios";
import React from "react";
import Form from "../../components/Form/Form"
import Card from "../../components/Card/Card"
import Button from "../../components/Button/Button";
import Font from "react-font";




function Orchestra (props) {
  return (
    <div className="main">
      <Font family="Dosis">
      <Card />
      </Font>
       <Form />
     
     
    </div>
  );
}

export default Orchestra;