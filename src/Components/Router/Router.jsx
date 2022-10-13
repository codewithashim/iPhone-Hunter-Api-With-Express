import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../Home/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch("http://localhost:7000/phones/");
        },
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () => {
          return fetch("http://localhost:7000/phones/");
        },
        element: <Home></Home>,
      },
    ],
  },
]);

export default route;
