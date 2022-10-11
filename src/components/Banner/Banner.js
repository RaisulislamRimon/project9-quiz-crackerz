import React, { useState } from "react";
import Toast from "../Toast/Toast";

const Banner = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <div className="container sm:mx-auto mt-8">
      <div className="card mx-auto md:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="md:w-40"
            src="https://placeimg.com/400/400/arch"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New Quiz is released every day!!!</h2>
          <p>Click the subscribe button to get the quiz first.</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => {
                setShowToast(true);
                setTimeout(() => {
                  setShowToast(false);
                }, 3000);
              }}
              className="btn btn-primary"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* showing the toast  */}
      {showToast && <Toast />}
    </div>
  );
};

export default Banner;
