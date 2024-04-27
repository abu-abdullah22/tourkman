
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layout/Root";
import AllTourist from "../pages/AllTourist";
import MyList from "../pages/MyList";
import AddSpot from "../pages/AddSpot";
import Register from "../pages/Register";
import Login from "../pages/Login";
import SpotDetails from "../pages/SpotDetails";
import PrivateRoute from "../pages/PrivateRoute";
import Error from "../pages/Error";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children : [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/spots')
        },
        {
            path: '/all-spot',
            element: <AllTourist></AllTourist>,
            loader: ()=> fetch('http://localhost:5000/spots')
        },
        {
            path: '/my-list',
            element: <PrivateRoute> <MyList></MyList></PrivateRoute>
        },
        {
            path: '/add-spot',
            element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/details/:id',
            element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
            loader: ()=> fetch('http://localhost:5000/spots')
        }
      ]
    },
  ]);