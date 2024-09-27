import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosPublic = useAxiosPublic();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/user");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosPublic.patch(`/user/admin/${user._id}`).then((res) => {
      console.log(res.data);
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is made an Admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleMakeGuide = (user) => {
    axiosPublic.patch(`/user/guide/${user._id}`).then((res) => {
      console.log(res.data);
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is made a Tour Guide`,
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
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask h-16 w-16">
                        <img
                          src={user.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.name}
                  <br />
                </td>

                <td>{user.email}</td>
                <td>{user.guide_request}</td>

                <th className="capitalize">{user.role}</th>

                <td>
                  <div className="join join-vertical">
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn join-item bg-slate-500 text-white"
                    >
                      Make Admin
                    </button>

                    <button
                      onClick={() => handleMakeGuide(user)}
                      className="btn join-item bg-orange-500 text-white"
                    >
                      Make Guide
                    </button>
                  </div>
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
