
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
import Update from "../pages/Update";
import CountryDetails from "../pages/CountryDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children : [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('https://tourism-management-server-orpin.vercel.app/spots')
        },
        {
            path: '/all-spot',
            element: <AllTourist></AllTourist>,
            loader: ()=> fetch('https://tourism-management-server-orpin.vercel.app/spots')
        },
        {
            path: '/my-list/:email',
            element: <PrivateRoute> <MyList></MyList></PrivateRoute>,
            loader: ({params})=> fetch(`https://tourism-management-server-orpin.vercel.app/email/${params.email}`) 
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
            loader: ()=> fetch('https://tourism-management-server-orpin.vercel.app/spots')
        }, 
        {
            path: '/update/:id',
            element: <PrivateRoute><Update></Update></PrivateRoute>,
            loader: ({params})=> fetch(`https://tourism-management-server-orpin.vercel.app/spots/${params.id}`)

        },
        {
            path: '/countries/:country',
            element: <CountryDetails></CountryDetails>,
            loader: ({params})=> fetch(`https://tourism-management-server-orpin.vercel.app/country/${params.country}`)
        }
      ]
    },
  ]);