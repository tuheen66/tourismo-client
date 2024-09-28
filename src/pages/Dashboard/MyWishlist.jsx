import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyWishlist = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const { data: wishlist = [], refetch } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/wishlist/${user?.email}`);
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
        axiosPublic.delete(`/wishlist/delete/${id}`).then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your wishlist has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 mt-12 text-center">My Wishlist</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Package Name</th>
              <th>Tour Type</th>
              <th>Tour Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlist?.map((list, index) => (
              <tr key={list._id}>
                <th>{index + 1} </th>
                <td>{list.tripTitle}</td>
                <td>{list.tourType}</td>
                <td>${list.price}</td>

                <td>
                  <Link to={`/detail-package/${list.tripId}`}>
                    <button className="bg-orange-500 px-4 py-2 rounded-lg text-white">
                      View Details
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(list._id);
                    }}
                    className="bg-red-600 px-4 py-2 rounded-lg text-white"
                  >
                    Delete
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

export default MyWishlist;
