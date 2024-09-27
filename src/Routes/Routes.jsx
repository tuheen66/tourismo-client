import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Community from "../pages/Community";
import Blogs from "../pages/Blogs";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/Dashboard/MyProfile";
import Dashboard from "../Layout/Dashboard";
import AllPackages from "../pages/AllPackages";
import DetailPackage from "../pages/DetailPackage";
import AddPackages from "../pages/Dashboard/AdminPages/AddPackages";
import ManageUsers from "../pages/Dashboard/AdminPages/ManageUsers";
import GuideRequest from "../pages/Dashboard/GuideRequest";
import AdminProfile from "../pages/Dashboard/AdminPages/AdminProfile";
import GuideProfile from "../pages/Dashboard/GuidesPages/GuideProfile";
import TourGuideProfile from "../pages/TourGuideProfile";
import MyBookings from "../pages/Dashboard/MyBookings";
import AssignedTours from "../pages/Dashboard/GuidesPages/AssignedTours";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
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
        path: "/all-packages",
        element: <AllPackages></AllPackages>,
      },
      {
        path: "/detail-package/:id",
        element: <DetailPackage></DetailPackage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/packages/${params.id}`),
      },

      {
        path: "/tour-guide-profile/:id",
        element: <TourGuideProfile></TourGuideProfile>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/guides/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "admin-profile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "add-packages",
        element: <AddPackages></AddPackages>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },

      // tourist routes

      {
        path: "my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "my-bookings",
        element: <MyBookings></MyBookings>,
      },

      {
        path: "guide-request",
        element: <GuideRequest></GuideRequest>,
      },
      // guide routes

      {
        path: "assigned-tours",
        element: <AssignedTours></AssignedTours>,
      },
      {
        path: "guide-profile",
        element: <GuideProfile></GuideProfile>,
      },
    ],
  },
]);
