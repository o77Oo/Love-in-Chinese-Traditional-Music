import "./BowedStringInstruments.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpeg";
import Bowed1 from "../../assets//images/B1.jpeg"
import Bowed2 from "../../assets//images/B2.jpeg"
import Bowed3 from "../../assets//images/B3.jpeg"
import Bowed4 from "../../assets//images/B4.jpeg"
import Bowed5 from "../../assets//images/B5.jpeg"
import Bowed6 from "../../assets//images/B6.jpeg"
import Bowed7 from "../../assets//images/B7.jpeg"
import Form from "../../components/Form/Form";
import Font from "react-font";

function BowedSringInstruments() {
  return (
    <>
<Header />
<Font family="Dosis">
<div className="image__wrap1">
  <div className="image__box">
        <img className="image__bowed" src={Bowed1} alt="bowed1"></img>
      
        <img className="image__bowed" src={Bowed5} alt="bowed1"></img>
        <img className="image__bowed" src={Bowed6} alt="bowed1"></img>
        {/* <img className="image__plucked" src={Bowed4} alt="bowed8"></img> */}
       </div>
      
          
          <div className="image__contentbox">
          <h2 className="image__title">ER HU (二胡)</h2>
            <h3 className="image__title1">Orchestra:</h3> <p className="image__content">Bowed String</p>
         
            <h3 className="image__title1">Feature: </h3><p className="image__content">The erhu is played as a solo instrument or as part of an orchestra or small ensemble.</p>

         
            <h3 className="image__title1">Histroy: </h3><p className="image__content">It first appeared in China during the Tang Dynasty over 1,400 years ago. The erhu is believed to have originated from nomadic tribes living to the north of China. The “er” in erhu means “two” in Chinese because it has two strings. The “hu” in erhu means 'barbarian' because it originated outside of China. Note that in ancient China, barbarian just meant “non-Chinese” and was not necessarily a derogatory term."</p>

         
            <h3 className="image__title1">Content: </h3><p className="image__content">The erhu is a Chinese two-stringed bowed instrument, often known as a Chinese violin. The sound of the erhu is similar to a violin. The erhu is played with a horsehair bow and the sound is produced by the vibration of the snake skin on the front of the instrument.</p></div>

    
      </div>
      </Font>
      <Form />
</>
  );
}

export default BowedSringInstruments;