function Main(props) {
    return (
      <div className="main">
        <div className="main__content">
          <h1 className="main__title">{props.selectedVideo.title}</h1>
          <div className="main__wrap">
              <h2 className="main__instruments">{props.selectedVideo.instruments}</h2>
              <p className="main__timestamp">
                {new Date(props.selectedVideo.timestamp).toLocaleDateString()}
              </p>
          </div>
          <p className="main__artist">{props.selectedVideo.artist}</p>
          <p className="main__story">{props.selectedVideo.story}</p>
        </div>
      </div>
    );
  }
  
  export default Main;
  