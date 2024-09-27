import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const GuideRequest = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  const handleGuideRequest = () => {
    axiosPublic.patch(`/guide-request/${user.email}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your guid request has been sent to the Admin for approval",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {users.guide_request === "approved" ? (
        <h2 className="bg-slate-400 text-slate-700 text-2xl font-bold px-12 py-8">
          Your Guide request has been approved
        </h2>
      ) : (
        <button
          onClick={handleGuideRequest}
          className="bg-slate-400 text-slate-700 text-2xl font-bold px-12 py-8"
        >
          Request for Tour Guide
        </button>
      )}
    </div>
  );
};

export default GuideRequest;
