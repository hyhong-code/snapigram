import React from "react";

const PostCard = () => {
  return (
    <div class="card border-primary-light mb-4">
      <div className="post-header card-header py-1 d-flex align-items-center">
        <a className="avatar-link d-flex align-items-center" href="">
          <div className="avatar avatar-sm mr-2">
            <img
              src="https://cdn.dribbble.com/users/2805223/avatars/normal/22a4df5f46555e1c56bc063f52e17155.jpg?1579247942"
              alt=""
              className="img-fluid"
            />
          </div>
          <small className="text-dark">@Jane Doe</small>
        </a>
      </div>
      <img
        src="https://www.chopstickchronicles.com/wp-content/uploads/2020/03/Takoyaki-2020-update-34-500x375.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body bg-light">
        <p class="card-text mb-0">
          <strong>Jane Doe:</strong> Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Sapiente, molestias.
        </p>
        <hr className="text-divide my-2" />
        <small className="text-xs d-block">Friday, June 26, 2020</small>
        <div className="mt-2">
          <a href="" className="btn btn-outline-primary-dark mr-2">
            Like <span class="badge bg-accent">9</span>
          </a>
          <a href="" className="btn btn-outline-dark">
            Comment <span class="badge bg-primary-dark">9</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
