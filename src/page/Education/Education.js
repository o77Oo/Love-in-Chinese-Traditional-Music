import { Component } from "react";
import axios from "axios";
import React from "react";
import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";
import HeroE from "../../components/Hero-E/Hero-E";
import Header from "../../components/Header/Header";

function Education () {
    return (
      <div className="main">
          <Header />
          <HeroE />
         <Form />
        
      </div>
    );
  }
  
  export default Education;