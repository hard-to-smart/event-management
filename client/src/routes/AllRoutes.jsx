import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wrapper from "../Wrapper";
import Home from "../pages/client/Home";
import Contact from "../pages/client/Contact";
import Profile from "../pages/client/Profile";
import Categories from "../pages/client/Categories";
import SingleCategory from "../pages/client/SingleCategory";
import SingleEvent from "../pages/client/SingleEvent";
import Login from "../components/Login";
import Register from "../components/Register";
import RequestMngmnt from "../pages/admin/RequestMngmnt";
import CategoryMngmnt from "../pages/admin/CategoryMngmnt";
const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category",
        element: <Categories />,
        // children: [
        //   {
        //     path: ":id",
        //     children: [
        //       {
        //         index: true,
        //         element: <SingleCategory />,
        //       },
        //       {
        //         path: "event/:eventId",
        //         element: <SingleEvent />,
        //       },
        //     ],
        //   },
        // ],
      },
      {
        path: "category/:id",
        element: <SingleCategory />,
      },
      {
        path: "category/:id/event/:eventId",
        element: <SingleEvent />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      },
      {
        path:'requests',
        element:<RequestMngmnt/>
      },
      {
        path:'categorymngmnt',
        element:<CategoryMngmnt/>
      },
      
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={AllRoutes}></RouterProvider>;
};
