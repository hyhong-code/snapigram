import React from "react";

const AvatarsPanel = () => {
  return (
    <div className="card border-primary-light bg-light">
      <div className="card-body px-3 px-md-4 py-1 text-nowrap overflow-auto d-flex">
        <div className="avatar-box d-flex flex-column mr-2">
          <div className="avatar">
            <a href="">
              <img
                src="https://cdn.dribbble.com/users/2805223/avatars/normal/22a4df5f46555e1c56bc063f52e17155.jpg?1579247942"
                alt="profilePic"
                className="img-fluid"
              />
            </a>
          </div>
          <small className="text-xs text-dark mt-1">Jane Doe</small>
        </div>
        <div className="avatar-box d-flex flex-column mr-2">
          <div className="avatar">
            <a href="">
              <img
                src="https://cdn.dribbble.com/users/2805223/avatars/normal/22a4df5f46555e1c56bc063f52e17155.jpg?1579247942"
                alt="profilePic"
                className="img-fluid"
              />
            </a>
          </div>
          <small className="text-xs text-dark mt-1">Jane Doe</small>
        </div>
        <div className="avatar-box d-flex flex-column mr-2">
          <div className="avatar">
            <a href="">
              <img
                src="https://cdn.dribbble.com/users/2805223/avatars/normal/22a4df5f46555e1c56bc063f52e17155.jpg?1579247942"
                alt="profilePic"
                className="img-fluid"
              />
            </a>
          </div>
          <small className="text-xs text-dark mt-1">Jane Doe</small>
        </div>
      </div>
    </div>
  );
};

export default AvatarsPanel;
