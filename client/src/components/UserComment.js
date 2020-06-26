import React from "react";

const UserComment = () => {
  return (
    <div className="card bg-light border border-primary-light mx-4 mb-3">
      <div className="card-body py-2">
        <p className="mb-0">
          <a href="" className="name-link mr-1">
            <strong>Jane Doe: </strong>
          </a>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum
          alias accusamus expedita.
        </p>
        <hr className="my-1" />
        <small className="text-xs d-block my-0">Friday, June 26, 2020</small>
      </div>
    </div>
  );
};

export default UserComment;
