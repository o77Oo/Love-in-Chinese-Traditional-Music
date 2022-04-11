import "./PercussionInstruments.scss";
import Header from "../../../components/Header/Header";
import Form from "../../../components/Form/Form";
import Footer from "../../../components/Footer/Footer";
import percussion1 from "../../../assets/images/percussion1.jpeg"
import percussion2 from "../../../assets/images/percussion2.jpeg"
import Font from "react-font";

function PercussionInstruments() {
  return (
    <>
      <Header />
      <Font family="Dosis">
        <div className="percussion__wrap">
        <div className="percussion__contentbox1">
            <h2 className="percussion__title">Dagu (大鼓)/Paigu (排鼓)/Bo (鈸)/Luo (鑼)</h2>
            <h3 className="percussion__title1">Orchestra:</h3>{" "}
            <p className="percussion__content">Percussion </p>
           
            <h3 className="percussion__title1">Content: </h3>
            <p className="percussion__content">
            The dagu is a large drum played with two sticks.
            The Paigu is a set of five tuned drums played with drum sticks.
            The Bo are Chinese clash cymbals.
            The Luo is a Chinese gong.
            </p>
          </div>
          <div className="percussion__img">
            <img className="percussion__percussion" src={percussion1} alt="percussion1"></img>

            <img className="percussion__percussion" src={percussion2} alt="percussion1"></img>
           
          </div>

          <div className="percussion__contentbox">
            <h2 className="percussion__title">Dagu (大鼓)/Paigu (排鼓)/Bo (鈸)/Luo (鑼)</h2>
            <h3 className="percussion__title1">Orchestra:</h3>{" "}
            <p className="percussion__content">Percussion</p>
          
            <h3 className="percussion__title1">Content: </h3>
            <p className="percussion__content">
            The dagu is a large drum played with two sticks.
            The Paigu is a set of five tuned drums played with drum sticks.
            The Bo are Chinese clash cymbals.
            The Luo is a Chinese gong.
            </p>
          </div>
        </div>
      </Font>
      <Form title="REQUEST MORE INFORMATION" />
      <Footer />
    </>
  );
}

export default PercussionInstruments;
