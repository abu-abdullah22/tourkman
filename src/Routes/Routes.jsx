
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layout/Root";
import AllTourist from "../pages/AllTourist";
import MyList from "../pages/MyList";
import AddSpot from "../pages/AddSpot";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/spots')
        },
        {
            path: '/all-spot',
            element: <AllTourist></AllTourist>
        },
        {
            path: '/my-list',
            element: <MyList></MyList>
        },
        {
            path: '/add-spot',
            element: <AddSpot></AddSpot>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
  ]);