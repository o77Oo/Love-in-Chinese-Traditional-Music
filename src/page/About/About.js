import React from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.scss";
import Font from "react-font";

function About() {
  return (
    <div className="about">
      <Header />
      <Font family="Dosis">
        <section className="about__main">
          <h2 className="about__title">ZIDE STUDIO </h2>
          <p className="about__content">
            Zide Studio is the most unique Chinese style orchestra in China.
            On October 8, 2014, a group of young performers gathered because of
            their love for traditional Chinese culture, and Zide Studio was
            born. As one of the oldest musical instruments in China, the Guqin
            is deep and introverted, and has won the favor of scholars and
            scholars of all dynasties. Today, thousands of years later, the
            Guqin "crossing the ocean" with the video of the Guqin has set
            off a wave of "ancient painting music" all over the world, and is
            loved by millions of foreign friends from different cultural
            backgrounds. In the video of Zide Studio, members dressed in
            elegant traditional Chinese costumes played folk music, with
            delicate makeup, just like people in a painting. Chinese Kunqu Opera
            and classical dance are often combined with music to interpret this
            oriental beauty, attracting countless Chinese and foreign netizens
            to amaze and say, "Chinese culture is so unique and beautiful!"
            Learn Chinese folk music. Guqin is one of the epitome of Chinese
            culture, and music is the common language of people all over the
            world. Zide Studio upholds the original intention of spreading
            Chinese excellent traditional culture, and hopes that Chinese
            traditional elegant art can go down to the altar, into life, and
            into the world.
          </p>
        </section>
      </Font>
      <Form title="CONTACT US" />
      <Footer />
    </div>
  );
}

export default About;
