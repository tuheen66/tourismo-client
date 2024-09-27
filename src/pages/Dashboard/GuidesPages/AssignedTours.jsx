import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AssignedTours = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const { data: assignedTours = [], refetch } = useQuery({
    queryKey: ["assignedTours", user?.displayName],
    queryFn: async () => {
      const res = await axiosPublic.get(`/booking/${user?.displayName}`);
      return res.data;
    },
  });

  const handleAccept = (tours) => {
    axiosPublic.patch(`/booking/accept/${tours._id}`).then((res) => {
      console.log(res.data);
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${tours.tripTitle} is accepted`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleReject = (tours) => {
    axiosPublic.patch(`/booking/reject/${tours._id}`).then((res) => {
      console.log(res.data);
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${tours.tripTitle} is rejected`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 mt-12 text-center">My Bookings</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Package Name</th>
              <th>Tourist's Name</th>
              <th>Tour Date</th>
              <th>Tour Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assignedTours.map((tours, index) => (
              <tr key={tours._id}>
                <th>{index + 1} </th>
                <td>{tours.tripTitle}</td>
                <td>{tours.name}</td>
                <td>{tours.date}</td>
                <td>${tours.price}</td>

                <td>
                  <button
                    onClick={() => handleAccept(tours)}
                    className="bg-green-500 px-4 py-2 rounded-lg text-white"
                  >
                    Accept
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleReject(tours)}
                    className="bg-red-500 px-4 py-2 rounded-lg text-white"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}

            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedTours;
