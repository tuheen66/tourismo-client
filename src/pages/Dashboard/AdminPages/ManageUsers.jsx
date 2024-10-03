import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const ManageUsers = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/user", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });

  const handleMakeAdmin = (currentUser) => {
    axiosPublic.patch(`/user/admin/${currentUser._id}`).then((res) => {
      console.log(res.data);
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${currentUser.name} is made an Admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleMakeGuide = (currentUser) => {
    axiosPublic.patch(`/user/guide/${currentUser._id}`).then((res) => {
      console.log(res.data);
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${currentUser.name} is made a Tour Guide`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Guide Request</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((currentUser, index) => (
              <tr key={currentUser._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask h-16 w-16">
                        <img
                          src={currentUser.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {currentUser.name}
                  <br />
                </td>

                <td>{currentUser.email}</td>
                <td>{currentUser.guide_request}</td>

                <th className="capitalize">{currentUser.role}</th>

                <td>
                  {currentUser.role === "admin" ||
                  currentUser.role === "guide" ? (
                    <div className="join join-vertical">
                      <button
                        disabled
                        onClick={() => handleMakeAdmin(currentUser)}
                        className="btn join-item bg-slate-500 text-white"
                      >
                        Make Admin
                      </button>

                      <button
                        disabled
                        onClick={() => handleMakeGuide(currentUser)}
                        className="btn join-item bg-orange-500 text-white"
                      >
                        Make Guide
                      </button>
                    </div>
                  ) : (
                    <div className="join join-vertical">
                      <button
                        onClick={() => handleMakeAdmin(currentUser)}
                        className="btn join-item bg-slate-500 text-white"
                      >
                        Make Admin
                      </button>

                      <button
                        onClick={() => handleMakeGuide(currentUser)}
                        className="btn join-item bg-orange-500 text-white"
                      >
                        Make Guide
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
