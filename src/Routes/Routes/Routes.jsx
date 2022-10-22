import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layouts/Root";
import Login from "../../Login/Login";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home";

import News from "../../Pages/News/News/News";
import TermsAndConditions from "../../Pages/Others/TermsAndConditons/TermsAndConditions";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Register from "../../Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://beleievers-news-portal-server.vercel.app/news"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/termsAndConditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://beleievers-news-portal-server.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://beleievers-news-portal-server.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);
