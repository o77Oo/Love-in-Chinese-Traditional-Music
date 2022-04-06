import { Component } from "react";
import axios from "axios";
import React from "react";
import "./Music.scss";
import Header from "../../components/Header/Header";
import Comments from "../../components/Comments/Comments";
import SideBar from "../../components/SideBar/SideBar";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import Form from "../../components/Form/Form";

class Music extends Component {
  state = {
    videos: [],
    selectedVideo: {},
  };

  // runs once, when the component is first mounted, fetch API data and set state when mounts
  componentDidMount() {
    this.getVideosData();
    console.log(process.env);
  }

  // runs everytime the component updates, including the first time it's mounted
  componentDidUpdate(prevProps, prevState) {
    // check if the param is set in the url, react-router-dom prop
    if (this.props.match.params.id) {
      // if the param id is set and the selected video doesn't match the id, update the selected video
      if (prevState.selectedVideo.id !== this.props.match.params.id) {
        const foundVideo = this.state.videos.find(
          (video) => video.id === this.props.match.params.id
        );
        // update state with selected video
        this.getVideosById(foundVideo.id);
      }
    }
  }

  getVideosData() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/videos`)
      .then((response) => {
        this.setState({
          videos: response.data, //set array of videos
          //first time this runs set the selected video as the first element in the array
        });
        this.getVideosById(response.data[0].id);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  getVideosById(id) {
    axios
      .get(`${process.env.REACT_APP_API_URL}/videos/${id}`)
      .then((response) => {

        console.log(response)
        this.setState({
          selectedVideo: response.data, //set array of videos
        });
       
      })

      .catch((error) => {
        console.log(error);
      });
  }

  createComment=(event,id) => {
  event.preventDefault();

  console.log(id)
  const name = event.target.name.value
  const comment = event.target.comment.value
  // check if name and message inputs have a value
  if (name && comment) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/videos/${id}`, { name: name, comment: comment })
      .then((result) => {
        this.getVideosById(id)
      })
    // reset the form inputs
    event.target.reset();
  } else {
    // if no values are set for the input fields
    alert("please enter a name and comment");
  }
}





render = () => {
  return (
    <>
      <Header />

      <div className="wrap">
        <div className="wrap__left">
          <Hero selectedVideo={this.state.selectedVideo} />
          <Main selectedVideo={this.state.selectedVideo} />
          <Comments selectedVideo={this.state.selectedVideo} createComment={this.createComment}/>
          <div className="wrap__bottom">
          <Form title="PURCHASE ALBUM"/>
          </div>
        </div>
        <div className="wrap__right">
          <SideBar
            videos={this.state.videos}
            selectedVideo={this.state.selectedVideo}
          />
        </div>
       
      </div>
    </>
  );
};
}
export default Music;
