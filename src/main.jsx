import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout } from "@components/templates";
import "./index.css";
import { About, Choice, Detail, Genre, Home, NotFound, Search } from "./pages";

const route = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "movie/:id",
        element: <Detail />,
      },
      {
        path: "search/:nama",
        element: <Search />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/genre/:id/:name",
        element: <Genre />,
      },
      {
        path: "/:choice",
        element: <Choice />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
);
