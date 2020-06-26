import React from "react";
import AvatarsPanel from "../components/AvatarsPanel";
import PostCard from "../components/PostCard";

const Home = () => {
  return (
    <section className="">
      <div className="container home-container">
        <button className="btn btn-round text-light">
          <i className="fas fa-plus"></i>
        </button>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <AvatarsPanel />
            <div className="mt-4 px-3">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
