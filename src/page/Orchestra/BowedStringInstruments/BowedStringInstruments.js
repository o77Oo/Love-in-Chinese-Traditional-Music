import "./BowedStringInstruments.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Bowed1 from "../../../assets//images/B1.jpeg";
import Bowed5 from "../../../assets//images/B5.jpeg";
import Form from "../../../components/Form/Form";
import Font from "react-font";
import React from 'react';

function BowedSringInstruments(props) {
  return (
    <>
      <Header />
      <Font family="Dosis">
        <div className="bowed__wrap">
        <div className="bowed__contentbox1">
            <h2 className="bowed__title">ER HU (二胡)</h2>
            <h3 className="bowed__title1">Orchestra:</h3>{" "}
            <p className="bowed__content">Bowed String</p>
            <h3 className="bowed__title1">Feature: </h3>
            <p className="bowed__content">
              The erhu is played as a solo instrument or as part of an orchestra
              or small ensemble.
            </p>
            <h3 className="bowed__title1">Histroy: </h3>
            <p className="bowed__content">
              It first appeared in China during the Tang Dynasty over 1,400
              years ago. The erhu is believed to have originated from nomadic
              tribes living to the north of China. The “er” in erhu means “two”
              in Chinese because it has two strings. The “hu” in erhu means
              'barbarian' because it originated outside of China. Note that in
              ancient China, barbarian just meant “non-Chinese” and was not
              necessarily a derogatory term."
            </p>
            <h3 className="bowed__title1">Content: </h3>
            <p className="bowed__content">
              The erhu is a Chinese two-stringed bowed instrument, often known
              as a Chinese violin. The sound of the erhu is similar to a violin.
              The erhu is played with a horsehair bow and the sound is produced
              by the vibration of the snake skin on the front of the instrument.
            </p>
          </div>
          <div className="bowed__img">
            <img className="bowed__bowed" src={Bowed1} alt="bowed1"></img>

            <img className="bowed__bowed" src={Bowed5} alt="bowed1"></img>
           
          </div>

          <div className="bowed__contentbox">
            <h2 className="bowed__title">ER HU (二胡)</h2>
            <h3 className="bowed__title1">Orchestra:</h3>{" "}
            <p className="bowed__content">Bowed String</p>
            <h3 className="bowed__title1">Feature: </h3>
            <p className="bowed__content">
              The erhu is played as a solo instrument or as part of an orchestra
              or small ensemble.
            </p>
            <h3 className="bowed__title1">Histroy: </h3>
            <p className="bowed__content">
              It first appeared in China during the Tang Dynasty over 1,400
              years ago. The erhu is believed to have originated from nomadic
              tribes living to the north of China. The “er” in erhu means “two”
              in Chinese because it has two strings. The “hu” in erhu means
              'barbarian' because it originated outside of China. Note that in
              ancient China, barbarian just meant “non-Chinese” and was not
              necessarily a derogatory term."
            </p>
            <h3 className="bowed__title1">Content: </h3>
            <p className="bowed__content">
              The erhu is a Chinese two-stringed bowed instrument, often known
              as a Chinese violin. The sound of the erhu is similar to a violin.
              The erhu is played with a horsehair bow and the sound is produced
              by the vibration of the snake skin on the front of the instrument.
            </p>
          </div>
        </div>
      </Font>
      <Form title="REQUEST MORE INFORMATION" />
      <Footer />
    </>
  );
}

export default BowedSringInstruments;
