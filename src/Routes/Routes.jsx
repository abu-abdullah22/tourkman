
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layout/Root";
import AllTourist from "../pages/AllTourist";
import MyList from "../pages/MyList";
import AddSpot from "../pages/AddSpot";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path: '/',
            element: <Home></Home>
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
        }
      ]
    },
  ]);