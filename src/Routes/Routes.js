import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/Home/Home";
import PageError from "../Pages/ErrorPage/ErrorPage";
import LoginPage from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <PageError />,
  },
]);

export default router;
