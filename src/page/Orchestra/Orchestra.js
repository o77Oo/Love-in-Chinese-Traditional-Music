import React from "react";
import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";
import Font from "react-font";

function Orchestra(props) {
  return (
    <div className="main">
      <Font family="Dosis">
        <Card />
      </Font>
      <Form title="REQUEST MORE INFORMATION"/>
    </div>
  );
}

export default Orchestra;
