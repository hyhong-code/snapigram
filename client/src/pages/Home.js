import React from "react";

const Home = () => {
  return (
    <div className="container section-top">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body px-4 py-2 text-nowrap overflow-auto">
              <img
                src="https://cdn.dribbble.com/users/2805223/avatars/normal/22a4df5f46555e1c56bc063f52e17155.jpg?1579247942"
                alt="profilePic"
                className="img-fluid rounded-circle border border-primary-light"
                width="50"
              />
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Home;
