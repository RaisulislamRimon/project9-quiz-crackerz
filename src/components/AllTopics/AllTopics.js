import React from "react";
import SingleTopic from "../SingleTopic/SingleTopic";

const AllTopics = ({ quiz }) => {
  return (
    <div>
      <h1 className="text-4xl md:font-bold md:text-cyan-400 lg:text-black text-center my-5 p-10 md:p-8">
        Take a quiz and get a chance to get your dream job.
      </h1>
      <div className="container mx-auto grid md:grid-cols-1 lg:grid-cols-2 ">
        {
          // quiz.data.map(singleQuiz => <h1 key={singleQuiz.id}>{singleQuiz.name}</h1>)
          quiz.data.map((singleQuiz) => (
            <SingleTopic
              key={singleQuiz.id}
              singleQuiz={singleQuiz}
            ></SingleTopic>
          ))
        }
      </div>
    </div>
  );
};

export default AllTopics;
