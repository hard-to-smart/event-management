import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wrapper from "../Wrapper";
import Home from "../pages/client/Home";
import Contact from "../pages/client/Contact";
import Profile from "../pages/client/Profile";
import Categories from "../pages/client/CLCategories";
import SingleCategory from "../pages/client/CLEvents";
import SingleEvent from "../pages/client/SingleEvent";
import ADBookings from "../pages/admin/ADBookings";
import ADProfile from "../pages/admin/ADProfile";
import ADCategories from "../pages/admin/ADCategories";
import ADSingleEvent from "../pages/admin/SingleEvent";
import Dashboard from "../pages/admin/Dashboard";
import ADEvents from "../pages/admin/ADEvents";
import ADUsers from "../pages/admin/ADUsers";
import AdminRoute from "./AdminRoutes";
import PrivateRoute from "./PrivateRoutes";
import CLBookings from "../pages/client/CLBookings";
import CLAllEvents from "../pages/client/CLAllEvents";
import Loading from "../components/loading/Loading";
const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        // Admin routing
        path: "admin",
        children: [
          {
            index: true,
            element: <AdminRoute element={<Dashboard />} />,
          },
          {
            path: "category",
            children: [
              {
                index: true,
                element: <AdminRoute element={<ADCategories />}/>,
              },
              {
                path: ":id",
                children: [
                  {
                    index: true,
                    element: <AdminRoute element={<ADEvents />}/>,
                  },
                  {
                    path: "event/:id",
                    element: <AdminRoute element={<ADSingleEvent />}/>,
                  },
                ],
              },
            ],
          },
          {
            path:'users',
            element: <AdminRoute element={<ADUsers/>}/>
          },
          {
            path: "profile",
            element: <AdminRoute element={<ADProfile />}/>
          },
          {
            path: "bookings",
            element: <AdminRoute element={<ADBookings />}/>,
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
                path: "event/:id",
                element: <SingleEvent />,
              },
            ],
          },
        ],
      },
      {
        path:'/events',
        element: <CLAllEvents/>
      },

      {
        path: "profile",
        element: <PrivateRoute element={<Profile />}/>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: 'mybookings',
        element:<PrivateRoute element={<CLBookings/>}/>,
      },
      {
        path: '*',
        element: <div>NOT FOUND</div>
      }
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={AllRoutes} fallbackElement={<Loading/>}></RouterProvider>;
};
