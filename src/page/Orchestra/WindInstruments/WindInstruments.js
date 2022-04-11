import "./WindInstruments.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Form from "../../../components/Form/Form";
import dizi from "../../../assets/images/dizi.jpg";
import suona from "../../../assets/images/suona.jpg";
import Font from "react-font";

function WindInstruments() {
  return (
    <>
      <Header />
      <Font family="Dosis">
        <div className="wind__wrap">
          <div className="wind__box">
            <img className="wind__wind" src={dizi} alt="dizi"></img>
         
          <div className="wind__contentbox">
            <h2 className="wind__title">Dizi (笛子)</h2>
            <h3 className="wind__title1">Orchestra:</h3>{" "}
            <p className="wind__content">Wind </p>
            
            <h3 className="bowed__title1">Histroy: </h3>
            <p className="bowed__content">
              The dizi is one of the oldest native Chinese instruments. The dizi
              in its current form is over 2,500 years old.
            </p>
            <h3 className="wind__title1">Content: </h3>
            <p className="wind__content">
              The dizi is a Chinese transverse flute usually made out of bamboo.
              In addition to the finger-holes, the dizi has a an additional hole
              between the embouchure and finger-holes for the dimo (笛膜) or di
              membrane, made from a thin shaving of reed glued over this hole.
              The dimo-covered hole produces a resonating effect on the sound,
              making it brighter and louder.
            </p>
          </div>
          </div>
          <div className="wind__box">
            <img className="wind__wind" src={suona} alt="suona"></img>
        

          <div className="wind__contentbox">
            <h2 className="wind__title">Suona (唢呐)</h2>
            <h3 className="wind__title1">Orchestra:</h3>{" "}
            <p className="wind__content">Wind </p>
            <h3 className="bowed__title1">Histroy: </h3>
            <p className="bowed__content">
              The suona originated in either Central Asia, India, or Arabia and
              came to China via the Silk Road over 1,500 years ago. By the time
              of the Ming Dynasty about 700 years ago, the suona was already
              well established in China.
            </p>
            <h3 className="wind__title1">Content: </h3>
            <p className="wind__content">
              The suona is a Chinese double-reeded horn. It has a loud and
              high-pitched sound often used for outdoor performances, festivals,
              ceremonies, and rituals. The suona comes in different sizes.
            </p>
          </div>
        </div>
        </div>
      </Font>
      <Form title="REQUEST MORE INFORMATION" />
      <Footer />
    </>
  );
}

export default WindInstruments;
