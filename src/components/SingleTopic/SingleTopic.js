import React from "react";

const SingleTopic = ({ singleQuiz }) => {
  const { logo, name, total } = singleQuiz;
  return (
    <div className="mt-16  mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Total questions : {total}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Start Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTopic;
