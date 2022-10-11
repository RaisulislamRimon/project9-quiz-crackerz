import React from "react";
import { useLoaderData } from "react-router-dom";
import AllTopics from "../AllTopics/AllTopics";
import Banner from "../Banner/Banner";

const Home = () => {
  const quiz = useLoaderData();
  return (
    <div>
      <Banner />
      <AllTopics quiz={quiz} />
    </div>
  );
};

export default Home;
