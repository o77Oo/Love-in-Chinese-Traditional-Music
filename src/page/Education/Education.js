import React from "react";
import Form from "../../components/Form/Form";
import Eduhero from "../../components/Eduhero/Eduhero";
import Header from "../../components/Header/Header";
import "./Education.scss";
import Font from "react-font";

function Education() {
  return (
    <div className="education">
      <Header />

      <Eduhero />
      <Font family="Dosis">
        <section className="education__main">
          <h2 className="education__title">ONLINE TEACHER RECOMMENDATIONS </h2>
          <p className="education__content">
            Interested in lessons for yourself or a family member? Looking for a
            recommendation for a qualified teacher online? ZI DE STUDIO has an
            established network of piano teachers who teach a variety of musical
            styles and offer lessons both in person or remotely using the latest
            technology to provide virtual, distance learning. Whether the
            student is a beginner, intermediate or advanced player, ZI DE STUDIO
            can connect you with a high quality, trusted teacher that meets your
            needs.
          </p>
        </section>
      </Font>
      <Form title="GET A RECOMMENDATION"/>
    </div>
  );
}

export default Education;
