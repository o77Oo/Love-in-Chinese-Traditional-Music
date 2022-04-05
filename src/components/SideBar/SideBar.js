import "./SideBar.scss";
import { Link } from "react-router-dom";
import Font from "react-font";

function SideBar(props) {
  return (
    <div className="sidebar">
      <h2 className="sidebar__title">NEXT VIDEO</h2>

      {props.videos
        .filter((element) => element.id !== props.selectedVideo.id)
        .map((element) => (
          <div className="sidebar__wrap" key={element.id}>
            <Link className="sidebar__box" to={`/videos/${element.id}`}>
              <div className="sidebar__imgbox">
                <img
                  className="sidebar__image"
                  src={`${process.env.REACT_APP_API_URL}${element.image}`}
                  alt={element.name}
                />
              </div>
              <Font family="PT Sans Narrow">
                <div className="sidebar__content">
                  <h3 className="sidebar__title1">{element.title}</h3>
                  <p className="sidebar__instruments">{element.instruments}</p>
                </div>
              </Font>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default SideBar;
