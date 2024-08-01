import React from "react";
import Header from "./Header";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";

const Body = () => {
  let appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
