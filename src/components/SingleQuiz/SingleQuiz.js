import React from "react";

const SingleQuiz = (props) => {
  const { id, question } = props.ques;
  console.log(question, id);
  return (
    <div className="container mx-auto">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Quiz : {question}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleQuiz;
