import React from "react";
import "./Comments.scss";


function Comments(props) {
 
  return (
    <>
      <div className="comments">
        <h2 className="comments__title"> Comments</h2>

        <div className="comments__container">
          <div className="comments__wrap">
            {/* <img
              className="comments__image"
              src={Mohan}
              alt="current-customer"
            /> */}
          </div>

          <form className="form" onSubmit={(event)=>{props.createComment(event,props.selectedVideo.id)}}>
          <input
              className="form__comment"
              name="name"
              placeholder="  Add your name"
           />
            <textarea
              className="form__comment"
              name="comment"
              placeholder="  Add your comment"
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
      </div>
    </>
  );
}

export default Comments;