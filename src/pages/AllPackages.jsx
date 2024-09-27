import { useQuery } from "@tanstack/react-query";
import React from "react";
import PackagesCard from "../components/PackagesCard";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AllPackages = () => {

  const axiosPublic = useAxiosPublic();

  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosPublic.get("/packages");
      return res.data;
    },
  });

  return (
    <div>
        <h2 className="text-3xl font-bold my-8 text-center text-gray-700">All Our Tour Packages</h2>
      <div className="grid grid-cols-3 gap-12 mb-12">
        {packages.map((destination) => (
          <PackagesCard
            key={destination.id}
            destination={destination}
          ></PackagesCard>
        ))}
      </div>
    </div>
  );
};

export default AllPackages;
