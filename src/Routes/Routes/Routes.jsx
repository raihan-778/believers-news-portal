import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layouts/Root";
import Login from "../../Login/Login";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home";

import News from "../../Pages/News/News/News";
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
        loader: () => fetch("http://localhost:5000/news"),
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
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);
