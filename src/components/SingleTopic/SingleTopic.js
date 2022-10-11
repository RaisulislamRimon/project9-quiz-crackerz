import React from "react";

const SingleTopic = ({ singleQuiz }) => {
  const { logo, name, total } = singleQuiz;
  return (
    <div className="mt-16  mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl hover:shadow-sky-300 ">
        <figure>
          <img src={logo} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{name}</h2>
          <p>Total questions : {total}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              Start Now
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTopic;
