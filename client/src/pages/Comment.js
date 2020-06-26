import React from "react";
import CommentCard from "../components/CommentCard";
import UserComment from "../components/UserComment";
import CommentForm from "../components/CommentForm";
import { Link } from "react-router-dom";

const Comment = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <Link
              to="/home"
              href=""
              className="btn btn-outline-light mb-3 px-4"
            >
              Back
            </Link>
            <CommentCard />
            <CommentForm />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
