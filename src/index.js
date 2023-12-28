import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./index_mobile.css";

import DevPage from "./pages/DevPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NewCommersPage from "./pages/NewCommersPage";
import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
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
    path: "/s",
    element: <SearchPage />,
  },
  {
    path: "/a/:anime_id/:episode_id",
    element: <DevPage />,
  },
  {
    path: "/auto",
    element: (
      <LoginPage auto={{ username: "jotalevi", password: "Roma_2022@" }} />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
