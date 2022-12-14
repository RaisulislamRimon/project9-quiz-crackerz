import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const AllQuiz = () => {
  const quiz = useLoaderData();
  const { name } = quiz.data;
  const questions = quiz.data.questions;
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">
        Quiz Topic : {name}
      </h1>
      <h2 className="text-2xl font-bold text-center my-4">
        Total Questions : {questions.length}
      </h2>
      {questions.map((ques) => (
        <SingleQuiz key={ques.id} ques={ques}></SingleQuiz>
      ))}
    </div>
  );
};

export default AllQuiz;
