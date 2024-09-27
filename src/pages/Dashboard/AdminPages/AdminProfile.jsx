
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const AdminProfile = () => {
    const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="ml-20  flex flex-col space-y-4 items-center w-[50%]">
      <h2 className="text-2xl font-bold mb-8 mt-12">My Profile</h2>
      <img className="w-40" src={users.image} alt="" />
      <p className="text-lg">
        <span className="font-semibold ">Name : </span>
        {users.name}
      </p>
      <p className="text-lg">
        <span className="font-semibold ">Email : </span>
        {users.email}
      </p>
      {users.role}
    </div>
  );
};
   

export default AdminProfile;