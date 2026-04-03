import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Task from "./pages/Task";
import SinglePost from "./components/SinglePost";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />, // ✅ handles route errors
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:slug",
        element: <SinglePost />,
      },
      {
        path: "task",
        element: <Task />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />
  ;
};

export default App;