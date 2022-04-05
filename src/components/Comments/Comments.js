import React from "react";
import Font from "react-font";
import "./Comments.scss";

function Comments(props) {
  return (
    <>
      <div className="comments">
      <Font family="Dosis">
        <h2 className="comments__title"> COMMENTS</h2>
       
        <div className="comments__container">
          <div className="comments__wrap"></div>

          <form
            className="form"
            onSubmit={(event) => {
              props.createComment(event, props.selectedVideo.id);
            }}
          >
            <input
              className="form__comment"
              name="name"
              placeholder="  ADD YOUR NAME"
            />
            <textarea
              className="form__comment"
              name="comment"
              placeholder="  ADD YOUR COMMENT"
            ></textarea>
            <button type="submit" className="form__button" alt="plus">
              COMMENT
            </button>
          </form>
        </div>

        <ul className="comments__contentbox">
          {props.selectedVideo.comments &&
            props.selectedVideo.comments.map((comment, index) => (
              <li key={index} className="comments__content">
               
                <div className="comments__box">
                  <div className="comments__wrap1">
                    <p className="comments__name">{comment.name}</p>
                    <p className="comments__timestamp">
                      {new Date(comment.timestamp).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="comments__wrap2">
                    <p className="comments__comment">{comment.comment}</p>
                  </div>
                </div>
             
              </li>
            ))}
        </ul>
        </Font>
      </div>
    </>
  );
}

export default Comments;
