import React from "react";
import { Link } from "react-router-dom";

const SingleTopic = ({ singleQuiz }) => {
  const { id, logo, name, total } = singleQuiz;
  return (
    <div className="mt-16 mb-16  mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl hover:shadow-sky-300 ">
        <figure>
          <img className="bg-gray-400" src={logo} alt={name} />
        </figure>
        <div className="card-body  bg-slate-200">
          <h2 className="card-title text-3xl">{name}</h2>
          <h2>Total questions : {total}</h2>
          <div className="card-actions justify-end">
            <Link to={`/quiz/${id}`}>
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTopic;
