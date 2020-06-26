import React from "react";
import AvatarsPanel from "../components/AvatarsPanel";

const Home = () => {
  return (
    <div className="container section-top">
      <div className="row">
        <div className="col-md-8">
          <AvatarsPanel />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Home;
