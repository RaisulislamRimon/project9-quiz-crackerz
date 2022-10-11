import React from "react";

const AllTopics = ({ quiz }) => {
  console.log(quiz.data);
  return (
    <div>
      <h1>All Topics : {quiz.data.length} </h1>
    </div>
  );
};

export default AllTopics;
