import React from "react";
import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Font from "react-font";

function Orchestra(props) {
  return (
    <div className="main">
      <Font family="Dosis">
        <Card />
      </Font>
      <Form title="REQUEST MORE INFORMATION"/>
      <Footer />
    </div>
  );
}

export default Orchestra;
