import React, { useState } from "react";
import CorrectAnsToast from "../CorrectAnsToast/CorrectAnsToast";
import WrongAnsToast from "../WrongAnsToast/WrongAnsToast";

const SingleQuiz = (props) => {
  const { question, options, correctAnswer } = props.ques;
  const [toggle, setToggle] = useState(false);
  const [correctAns, setCorrectAns] = useState("");
  const result = (e) => {
    if (e === correctAnswer) {
      setCorrectAns("Correct Answer");
      // setToggle(true);
    } else {
      setCorrectAns("Wrong Answer");
      // setToggle(true);
    }
  };
  // console.log(question, id);
  // console.log(props.ques.options);
  return (
    <div className="container mx-auto">
      <div className="card w-full bg-base-100 shadow-lg shadow-slate-400 border border-blue-300 my-10 ">
        <div className="card-body  ">
          <div className="lg:inline-flex  lg:relative">
            <h2 className="card-title md:mx-20">
              Question :{" "}
              {
                question.replace(/(<([^>]+)>)/gi, " ")
                // &&
                // question.replace("&nbsp;"," ")
              }
            </h2>
            <span className="absolute top-0  right-0 lg:right-10">
              <label className="swap">
                <input type="checkbox" onClick={() => setToggle(!toggle)} />
                <div className="swap-on">
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
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                </div>
                <div className="swap-off">
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
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </label>
            </span>
          </div>
          <div>
            {toggle && (
              <h3 className="bg-green-600 text-violet-200 py-2 mx-20 my-2 rounded-md text-center">
                <span className="font-bold">Correct answer</span> :{" "}
                {correctAnswer}
              </h3>
            )}
          </div>
          <div>
            {options.map((option, index) => {
              return (
                <div
                  // onClick={() => setCorrectAns(option)}
                  onClick={() => result(option)}
                  className="form-control border border-cyan-200 hover:bg-sky-200 rounded-lg p-2 mt-1
                  mx-5"
                  key={index}
                >
                  <label className="cursor-pointer label">
                    <span className="label-text md:text-base">
                      {/* {option.replace(/(<([^>]+)>)/gi, " ")} */}
                      {option}
                    </span>
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      className="radio radio-primary"
                    />
                    <span className="radio-mark"></span>
                  </label>
                </div>
              );
            })}
          </div>
          {correctAns && <CorrectAnsToast />}
          {correctAns === "Wrong Answer" && <WrongAnsToast />}
        </div>
      </div>
    </div>
  );
};

export default SingleQuiz;
