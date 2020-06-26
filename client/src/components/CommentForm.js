import React from "react";

const CommentForm = () => {
  return (
    <div className="comment-input input-group bg-light rounded border border-primary mb-3">
      <textarea
        name=""
        rows="2"
        className="form-control border border-primary"
      ></textarea>
      <button className="btn btn-outline-primary bg-light">Comment</button>
    </div>
  );
};

export default CommentForm;
