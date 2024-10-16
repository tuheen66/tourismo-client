import { useContext } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const { data: myBookings = [], refetch } = useQuery({
    queryKey: ["myBookings", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookings/${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/booking/delete/${id}`).then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your booking has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 mt-12 text-center">My Bookings</h2>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Package Name</th>
              <th>Tour Guide Name</th>
              <th>Tour Date</th>
              <th>Tour Price</th>
              <th>Booking Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myBookings.map((booking, index) => (
              <tr key={booking._id}>
                <th>{index + 1} </th>
                <td>{booking.tripTitle}</td>
                <td>{booking.guide_name}</td>
                <td>
                  {/* {booking.date} */}
                  {String(new Date(booking.date).getDate()).padStart(2, "0")}-
                  {String(new Date(booking.date).getMonth() + 1).padStart(
                    2,
                    "0"
                  )}
                  -{new Date(booking.date).getFullYear()}
                </td>

                <td>${booking.price}</td>
                <td>{booking.status}</td>
                <td>
                  {booking.status === "In Review" ||
                  booking.status === "Rejected" ? (
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="bg-red-500 px-4 py-2 rounded-lg text-white"
                    >
                      Cancel
                    </button>
                  ) : (
                    <button className="bg-green-500 px-4 py-2 rounded-lg text-white">
                      Pay
                    </button>
                  )}
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

export default MyBookings;
