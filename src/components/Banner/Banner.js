import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="card md:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="md:w-40" src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New Quiz is released every day!!!</h2>
          <p>Click the subscribe button to get the quiz first.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
