import "./WindInstruments.scss";
import Header from "../../components/Header/Header";
import Plucked1 from "../../assets/images/1.jpeg";
import Plucked2 from "../../assets/images/2.jpeg";
import Plucked3 from "../../assets/images/3.jpeg";
import Plucked4 from "../../assets/images/4.jpeg";
import Plucked5 from "../../assets/images/5.jpeg";
import Plucked6 from "../../assets/images/6.jpeg";
import Plucked7 from "../../assets/images/7.jpeg";
import Plucked8 from "../../assets/images/8.jpeg";
import Form from "../../components/Form/Form";
import Font from "react-font";

function PluckedInstruments(props) {
  return (
    <>
      <Header />
      <Font family="Dosis">
        <div className="image__wrap">
          <img className="image__plucked" src={Plucked1} alt="plucked1"></img>
          <img className="image__plucked" src={Plucked8} alt="plucked8"></img>

          <div className="image__contentbox">
            <h2 className="image__title"> "Pipa (琵琶)"</h2>
            <div className="image__content">
              <h3 className="image__title1">Chinese Orchestra Section:</h3>{" "}
              <p className="image__content">Plucked String</p>
            </div>
            <div className="image__row">
              <h3 className="image__title1">Feature: </h3>
              <p className="image__content">
                The pipa gives a distinctly Chinese sound to the Chinese
                orchestra, because it is part of the Chinese orchestra's plucked
                string section, a section which does not exist in the Western
                orchestra.
              </p>
            </div>

            <div className="image__row">
              <h3 className="image__title1">Histroy: </h3>
              <p className="image__content">
                The pipa first appeared during the Han Dynasty over 1,800 years
                ago. The current pear-shaped form of the pipa dates from the
                Song Dynasty about 1,000 years ago. The word “pipa” is said to
                either be derived from the sound the instrument makes or from
                the Persian word for lute which is “barbat.”
              </p>
            </div>

            <div className="image__row">
              <h3 className="image__title1">Content: </h3>
              <p className="image__content">
                The pipa is a four-stringed, often known as a Chinese lute. The
                pipa is pear shaped and has from 12 to 28 frets. The pipa is
                played upright with five small plectra attached to the
                fingernails or with one large plectrum.
              </p>
            </div>
          </div>
        </div>
        <div className="image__wrap">
          <div className="image__contentbox">
            <h2 className="image__title"> Guzheng (古箏)</h2>
            <div className="image__content">
              <h3 className="image__title1">Chinese Orchestra Section:</h3>{" "}
              <p className="image__content">Plucked String</p>
            </div>
            <div className="image__row">
              <h3 className="image__title1">Feature: </h3>
              <p className="image__content">
                The guzheng is often played as a solo instrument, in guzheng
                ensembles. The guzheng gives a distinctly Chinese sound to the
                Chinese orchestra, because it is part of the Chinese orchestra's
                plucked string section, a section which does not exist in the
                Western orchestra."
              </p>
            </div>

            <div className="image__row">
              <h3 className="image__title1">Histroy: </h3>
              <p className="image__content">
                The guzheng is one of the oldest native Chinese instruments with
                a more than 2,500-year history. The guzheng first appeared
                during the Warring States Period about 2,500 years ago and its
                current form dates to the Tang Dynasty about 1,400 years ago."
              </p>
            </div>

            <div className="image__row">
              <h3 className="image__title1">Content: </h3>
              <p className="image__content">
                The guzheng, also known as the Chinese zither, is a Chinese
                plucked string instrument with 18 to 21 strings and movable
                bridges. The guzheng is played with fingerpicks worn on one or
                both hands.{" "}
              </p>
            </div>
          </div>

          <img className="image__plucked" src={Plucked4} alt="plucked4"></img>

          <img className="image__plucked" src={Plucked3} alt="plucked3"></img>
        </div>

        <div className="image__wrap">
          <img className="image__plucked" src={Plucked7} alt="plucked7"></img>
          <img className="image__plucked" src={Plucked2} alt="plucked2"></img>

          <div className="image__contentbox">
            <h2 className="image__title"> Ruan (阮)</h2>
            <div className="image__content">
              <h3 className="image__title1">Chinese Orchestra Section:</h3>{" "}
              <p className="image__content">Plucked String</p>
            </div>
            <div className="image__row">
              <h3 className="image__title1">Feature: </h3>
              <p className="image__content">
                The ruan gives a distinctly Chinese sound to the Chinese
                orchestra, because it is part of the Chinese orchestra's plucked
                string section, a section which does not exist in the Western
                orchestra.
              </p>
            </div>

            <div className="image__row">
              <h3 className="image__title1">Histroy: </h3>
              <p className="image__content">
                The ruan is a very old instrument. The earliest ruan first
                appeared during the Han Dynasty over 1,800 years ago. The
                current form of the ruan dates from the Tang Dynasty about 1,400
                years ago.
              </p>
            </div>

            <div className="image__row">
              <h3 className="image__title1">Content: </h3>
              <p className="image__content">
                The ruan is a four-stringed Chinese plucked musical instrument
                with a circular body and a fretted neck with 24 frets. The ruan
                is lower pitched than the pipa. The ruan is either played with
                plectrum, like a guitar pick, or with acrylic nails. The ruan
                comes in five sizes.
              </p>
            </div>
          </div>
        </div>
        <div className="image__wrap">
          <div className="image__contentbox">
            <h2 className="image__title"> Liuqin (柳琴)</h2>
            <div className="image__content">
              <h3 className="image__title1">Chinese Orchestra Section:</h3>{" "}
              <p className="image__content">Plucked String</p>
            </div>
            <div className="image__row">
              <h3 className="image__title1">Feature: </h3>
              <p className="image__content">
                {" "}
                The liuqin gives a distinctly Chinese sound to the Chinese
                orchestra, because it is part of the Chinese orchestra's plucked
                string section, a section which does not exist in the Western
                orchestra.
              </p>
            </div>

            <div className="image__row">
              <h3 className="image__title1">Histroy: </h3>
              <p className="image__content">
                {" "}
                The liuqin is a relatively modern instrument that first appeared
                during the Qing Dynasty about three hundred years ago. The
                liuqin is often played in Chinese opera and Chinese orchestra.
              </p>
            </div>

            <div className="image__row">
              <h3 className="image__title1">Content: </h3>
              <p className="image__content">
                {" "}
                The liuqin is a four-stringed Chinese plucked instrument, often
                known as a Chinese mandolin. The liuqin looks like a miniature
                pipa with a pear-shaped body but is higher pitched that the
                pipa. The liuqin is played diagonally with a pick.
              </p>
            </div>
          </div>
          <img className="image__plucked" src={Plucked5} alt="plucked5"></img>
          <img className="image__plucked" src={Plucked6} alt="plucked6"></img>
        </div>
      </Font>
      <Form title="REQUEST MORE INFORMATION" />
    </>
  );
}

export default PluckedInstruments;
