import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import AllQuiz from "./components/AllQuiz/AllQuiz";
import Main from "./layouts/Main";
import NotFound from "./components/NotFound/NotFound";
import Blog from "./components/Blog/Blog";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home />,
        },
        {
          path: "/quiz/:id",
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <AllQuiz />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
