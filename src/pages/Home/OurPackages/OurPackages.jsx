import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PackagesCard from "../../../components/PackagesCard";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const OurPackages = () => {
  const axiosPublic = useAxiosPublic();

  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosPublic.get("/packages");
      return res.data;
    },
  });

  const tourSpots = packages.slice(0, 3);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {tourSpots.map((destination) => (
          <PackagesCard
            key={destination.id}
            destination={destination}
          ></PackagesCard>
        ))}
      </div>

      <div className="flex justify-center my-8">
        <Link to="/all-packages">
          <button className="btn bg-[#d35400] text-white">
            View All Packages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurPackages;
