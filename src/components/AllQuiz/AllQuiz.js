import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const Quiz = () => {
  const quiz = useLoaderData();
  console.log(quiz);
  const { id, logo, name } = quiz.data;
  console.log(id, logo, name);
  const questions = quiz.data.questions;
  console.log(questions.length);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Quiz Topic : {name}</h1>
      <h2 className="text-2xl font-bold text-center my-4">
        Total Questions : {questions.length}
      </h2>
      {questions.map((ques) => (
        <SingleQuiz key={ques.id} ques={ques}></SingleQuiz>
      ))}
    </div>
  );
};

export default Quiz;
