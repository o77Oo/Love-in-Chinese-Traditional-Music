import { Component } from "react";
import axios from "axios";
import React from "react";
import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";
import HeroE from "../../components/Eduhero/Eduhero";
import Header from "../../components/Header/Header";
import "./Education.scss";

function Education() {
  return (
    <div className="education">
      <Header />

      <HeroE />
      <section className="education__main">
      <h2 className="education__title">ONLINE TEACHER RECOMMENDATIONS </h2>
      <p className="education__content">
        Interested in lessons for yourself or a family member? Looking for a
        recommendation for a qualified teacher online? ZI DE STUDIO has an
        established network of piano teachers who teach a variety of musical
        styles and offer lessons both in person or remotely using the latest
        technology to provide virtual, distance learning. Whether the student is
        a beginner, intermediate or advanced player, ZI DE STUDIO can connect
        you with a high quality, trusted teacher that meets your needs.
      </p>
      </section>
      <Form />
    </div>
  );
}

export default Education;
