import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.png";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

// #d35400

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/user");
      return res.data;
    },
  });

  // find admin
  const adminUsers = users.filter((user) => user.role === "admin");
  const adminUserEmails = adminUsers.map((userEmail) => userEmail.email);
  const isAdmin = adminUserEmails.includes(user?.email);

  // find tour guides

  const { data: guides = [] } = useQuery({
    queryKey: ["guides"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tour-guide");
      return res.data;
    },
  });

  const guideEmails = guides.map((guide) => guide.email);
  const isGuide = guideEmails.includes(user?.email);

  const handleLogout = () => {
    logOut();
  };

  const navItems = (
    <div className="flex flex-col lg:flex-row lg:gap-2 lg:justify-center lg:items-center ">
      <li>
        <NavLink
          to="/"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "600" : "",
              backgroundColor: isActive ? "#d35400" : "",
              textDecorationColor: isActive ? "#a9106b" : "none",
              color: isActive ? "White" : "#374177",
              padding: "6px 12px",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderRadius: isActive ? "0" : "",
              borderRadius: isActive ? "5px" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/community"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "600" : "",
              backgroundColor: isActive ? "#d35400" : "",
              textDecorationColor: isActive ? "#a9106b" : "none",
              color: isActive ? "White" : "#374177",
              padding: "6px 12px",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderRadius: isActive ? "0" : "",
              borderRadius: isActive ? "5px" : "",
            };
          }}
        >
          Community
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "600" : "",
              backgroundColor: isActive ? "#d35400" : "",
              textDecorationColor: isActive ? "#a9106b" : "none",
              color: isActive ? "White" : "#374177",
              padding: "6px 12px",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderRadius: isActive ? "0" : "",
              borderRadius: isActive ? "5px" : "",
            };
          }}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "600" : "",
              backgroundColor: isActive ? "#d35400" : "",
              textDecorationColor: isActive ? "#a9106b" : "none",
              color: isActive ? "White" : "#374177",
              padding: "6px 12px",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderRadius: isActive ? "0" : "",
              borderRadius: isActive ? "5px" : "",
            };
          }}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "600" : "",
              backgroundColor: isActive ? "#d35400" : "",
              textDecorationColor: isActive ? "#a9106b" : "none",
              color: isActive ? "White" : "#374177",
              padding: "6px 12px",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderRadius: isActive ? "0" : "",
              borderRadius: isActive ? "5px" : "",
            };
          }}
        >
          Contact Us
        </NavLink>
      </li>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-slate-300 rounded-full mb-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200  z-10 mt-3 w-40 p-2 shadow opacity-10 "
            >
              {navItems}
            </ul>
          </div>
          <img className="w-16 rounded-full" src={logo} alt="" />
          <Link
            to="/"
            className="btn btn-ghost text-2xl uppercase font-bold text-[#3a0a24]"
          >
            Tourismo
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
        </div>

        {user ? (
          <>
            <div className=" navbar-end ">
              <div className="  dropdown dropdown-end">
                <div tabIndex={0} className="m-1 ">
                  <img
                    className="w-16 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-300 w-72 p-2 shadow space-y-4 z-10 opacity-30"
                >
                  <li>
                    {isAdmin ? (
                      <NavLink to="dashboard/admin-profile">Dashboard</NavLink>
                    ) : isGuide ? (
                      <NavLink to="dashboard/guide-profile">Dashboard</NavLink>
                    ) : (
                      <NavLink to="dashboard/my-profile">Dashboard</NavLink>
                    )}
                  </li>
                  <li className="text-[#374177]">
                    <a>Offer Announcements</a>
                  </li>
                  <li className=" text-[#374177]">
                    <p>
                      <span className="font-semibold">Name:</span>
                      {user?.displayName}
                    </p>
                  </li>
                  <li className=" text-[#374177]">
                    <p>
                      <span className="font-semibold">Email:</span>
                      {user?.email}
                    </p>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn px-6 bg-[#d35400] text-white  hover:text-blue-500 hover:bg-orange-400"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-end">
              <Link to="/login">
                <button className="btn px-6 bg-[#d35400] text-white  hover:text-blue-500 hover:bg-orange-400">
                  Sign In
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
