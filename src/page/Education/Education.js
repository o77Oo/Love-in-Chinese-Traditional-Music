import { Component } from "react";
import axios from "axios";
import React from "react";
import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";
import HeroE from "../../components/HeroE/HeroE";
import Header from "../../components/Header/Header";
import "./Education.scss";

function Education () {
    return (
      <div className="hero">
          <Header />
          <HeroE />
          <div className="hero__wrap">
              
          </div>
         <Form />
        
      </div>
    );
  }
  
  export default Education;