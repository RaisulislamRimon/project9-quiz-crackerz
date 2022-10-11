import React from "react";
import SingleTopic from "../SingleTopic/SingleTopic";

const AllTopics = ({ quiz }) => {
  return (
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
  );
};

export default AllTopics;
