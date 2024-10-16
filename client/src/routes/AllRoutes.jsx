import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wrapper from "../Wrapper";
import Home from "../pages/client/Home";
import Contact from "../pages/client/Contact";
import Profile from "../pages/client/Profile";
import Categories from "../pages/client/CLCategories";
import SingleCategory from "../pages/client/CLEvents";
import SingleEvent from "../pages/client/SingleEvent";
import Login from "../components/Login";
import Register from "../components/Register";
import ADBookings from "../pages/admin/Bookings";
import ADProfile from "../pages/admin/Profile";
import ADCategories from "../pages/admin/ADCategories";
import ADSingleEvent from "../pages/admin/SingleEvent";
import Dashboard from "../pages/admin/Dashboard";
import ADEvents from "../pages/admin/ADEvents";

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        // Admin routing
        path: "admin",
        // element: <AdminRoutes element={<Dashboard />} />,
        // element: <AdminRoutes/>
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "category",
            children: [
              {
                index: true,
                element: <ADCategories />,
              },
              {
                path: ":id",
                children: [
                  {
                    index: true,
                    element: <ADEvents />,
                  },
                  {
                    path: "events/:eventId",
                    element: <ADSingleEvent />,
                  },
                ],
              },
            ],
          },
          {
            path: "profile",
            element: <ADProfile />,
          },
          {
            path: "bookings",
            element: <ADBookings />,
          },
        ],
      },
      {
        // User routing
        index: true,
        element: <Home />,
      },
      {
        path: "category",
        children: [
          {
            index: true,
            element: <Categories />,
          },
          {
            path: ":id",
            children: [
              {
                index: true,
                element: <SingleCategory />,
              },
              {
                path: "event/:eventId",
                element: <SingleEvent />,
              },
            ],
          },
        ],
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // {
      //   path: "login",
      //   element: <Login />,
      // },
      // {
      //   path: "register",
      //   element: <Register />,
      // },
      {
        path: '*',
        element: <div>NOT FOUND</div>
      }
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={AllRoutes}></RouterProvider>;
};
