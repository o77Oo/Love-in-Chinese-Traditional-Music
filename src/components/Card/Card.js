import "./Card.scss";
import Header from "../Header/Header";
import Wind from "../../assets/icons/wind.jpeg";
import BowedString from "../../assets/icons/bowedstring.jpeg";
import Percussion from "../../assets/icons/percussion.jpeg";
import PluckedString from "../../assets/icons/pluckedstring.jpeg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
function Card() {
  return (
    <>
      <Header />
      <div className="cards__box">

        <div className="cards__container">
          <div className="cards__wrapper">
            <h2 className="cards__title">WIND </h2>
            <img className="cards__img" src={Wind} alt="instrument" />
            <Link to="/orchestra/wind">
            <Button />
            </Link>
          </div>
          <div className="cards__wrapper">
            <h2 className="cards__title">BOWEDSTRING </h2>
            <img className="cards__img" src={BowedString} alt="instrument" />
            <Link to="/orchestra/bowedstring">
            <Button />
            </Link>
          </div>
        </div>
        <div className="cards__container1">
          <div className="cards__wrapper">
            <h2 className="cards__title">PERCUSSION </h2>
            <img className="cards__img" src={Percussion} alt="instrument" />
            <Link to="/orchestra/percussion">
            <Button />
            </Link>
          </div>
          <div className="cards__wrapper">
            <h2 className="cards__title">PLUCKEDSTRING </h2>
            <img className="cards__img" src={PluckedString} alt="instrument" />
            <Link to="/orchestra/pluckedstring">
            <Button />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
