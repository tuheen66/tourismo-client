import { NavLink, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/user");
      return res.data;
    },
  });

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

  return (
    <div className="flex">
      <div className="min-h-screen w-64 bg-blue-300">
        <div className="px-4 mt-4">
          {/* admin dashboard */}

          {isAdmin ? (
            <>
              <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
              <ul>
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/admin-profile"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "#d35400" : "",
                        textDecorationColor: isActive ? "#a9106b" : "none",
                        color: isActive ? "White" : "#374177",
                        padding: "8px 12px",
                        viewTransitionName: isTransitioning ? "slide" : "",
                        borderRadius: isActive ? "5px" : "",
                      };
                    }}
                  >
                    My Profile
                  </NavLink>
                </li>

                <li className="mb-4">
                  <NavLink
                    to="/dashboard/add-packages"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "#d35400" : "",
                        textDecorationColor: isActive ? "#a9106b" : "none",
                        color: isActive ? "White" : "#374177",
                        padding: "8px 12px",
                        viewTransitionName: isTransitioning ? "slide" : "",
                        borderRadius: isActive ? "5px" : "",
                      };
                    }}
                  >
                    Add Packages
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/manage-users"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "#d35400" : "",
                        textDecorationColor: isActive ? "#a9106b" : "none",
                        color: isActive ? "White" : "#374177",
                        padding: "8px 12px",
                        viewTransitionName: isTransitioning ? "slide" : "",
                        borderRadius: isActive ? "5px" : "",
                      };
                    }}
                  >
                    Manage Users
                  </NavLink>
                </li>
                <br />
                <hr />
                <br />
              </ul>
            </>
          ) : isGuide ? (
            <>
              <h2 className="text-xl font-semibold mb-4">
                Tour Guide Dashboard
              </h2>
              <ul className="space-y-8">
                <li className="">
                  <NavLink
                    to="/dashboard/guide-profile"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "#d35400" : "",
                        textDecorationColor: isActive ? "#a9106b" : "none",
                        color: isActive ? "White" : "#374177",
                        padding: "8px 12px",
                        viewTransitionName: isTransitioning ? "slide" : "",
                        borderRadius: isActive ? "5px" : "",
                      };
                    }}
                  >
                    My Profile
                  </NavLink>
                </li>

                <li className="">
                  <NavLink
                    to="/dashboard/assigned-tours"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "#d35400" : "",
                        textDecorationColor: isActive ? "#a9106b" : "none",
                        color: isActive ? "White" : "#374177",
                        padding: "8px 12px",
                        viewTransitionName: isTransitioning ? "slide" : "",
                        borderRadius: isActive ? "5px" : "",
                      };
                    }}
                  >
                    My Assigned Tours
                  </NavLink>
                </li>

                <br />
                <hr />
                <br />
              </ul>
            </>
          ) : (
            <>
              {/* tourist routes */}
              <h2 className="text-xl font-semibold mb-4">Tourist Dashboard</h2>
              <ul className="space-y-8">
                <li className="">
                  <NavLink
                    to="/dashboard/my-profile"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "#d35400" : "",
                        textDecorationColor: isActive ? "#a9106b" : "none",
                        color: isActive ? "White" : "#374177",
                        padding: "8px 12px",
                        viewTransitionName: isTransitioning ? "slide" : "",
                        borderRadius: isActive ? "5px" : "",
                      };
                    }}
                  >
                    My Profile
                  </NavLink>
                </li>

                <li className="">
                  <NavLink
                    to="/dashboard/my-bookings"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "#d35400" : "",
                        textDecorationColor: isActive ? "#a9106b" : "none",
                        color: isActive ? "White" : "#374177",
                        padding: "8px 12px",
                        viewTransitionName: isTransitioning ? "slide" : "",
                        borderRadius: isActive ? "5px" : "",
                      };
                    }}
                  >
                    My Bookings
                  </NavLink>
                </li>

                <li className="">
                  <NavLink
                    to="/dashboard/my-wishlist"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "#d35400" : "",
                        textDecorationColor: isActive ? "#a9106b" : "none",
                        color: isActive ? "White" : "#374177",
                        padding: "8px 12px",
                        viewTransitionName: isTransitioning ? "slide" : "",
                        borderRadius: isActive ? "5px" : "",
                      };
                    }}
                  >
                    My Wishlist
                  </NavLink>
                </li>

                <li className="">
                  <NavLink
                    to="/dashboard/guide-request"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "#d35400" : "",
                        textDecorationColor: isActive ? "#a9106b" : "none",
                        color: isActive ? "White" : "#374177",
                        padding: "8px 12px",
                        viewTransitionName: isTransitioning ? "slide" : "",
                        borderRadius: isActive ? "5px" : "",
                      };
                    }}
                  >
                    Guide Request
                  </NavLink>
                </li>

                <br />
                <hr />
                <br />
              </ul>
            </>
          )}

          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "#d35400" : "",
                    textDecorationColor: isActive ? "#a9106b" : "none",
                    color: isActive ? "White" : "#374177",
                    padding: "8px 12px",
                    viewTransitionName: isTransitioning ? "slide" : "",
                    borderRadius: isActive ? "5px" : "",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
