import React from "react";
import SingleTopic from "../SingleTopic/SingleTopic";

const AllTopics = ({ quiz }) => {
  console.log(quiz.data);
  return (
    <div>
      {
        // quiz.data.map(singleQuiz => <h1 key={singleQuiz.id}>{singleQuiz.name}</h1>)
        quiz.data.map((singleQuiz) => (
          <SingleTopic key={singleQuiz.id}>{singleQuiz.name}</SingleTopic>
        ))
      }
    </div>
  );
};

export default AllTopics;
