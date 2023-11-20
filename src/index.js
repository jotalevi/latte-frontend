import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import DevPage from "./pages/DevPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NewCommersPage from "./pages/NewCommersPage";
import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewCommersPage />,
  },
  {
    path: "/dev",
    element: <DevPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/a/:anime_id",
    element: <AnimePage />,
  },

  {
    path: "/a/:anime_id/:episode_id",
    element: <DevPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
