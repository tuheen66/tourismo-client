import React from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

const TourGuidesList = () => {
  const axiosPublic = useAxiosPublic();

  const { data: guides = [] } = useQuery({
    queryKey: ["guides"],
    queryFn: async () => {
      const res = await axiosPublic.get("/guides");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-center my-12 text-3xl font-bold text-gray-800">
        Meet Our Tour Guides
      </h2>

      <div className="overflow-x-auto bg-green-200 p-4 rounded-xl">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {guides.map((guide, index) => (
              <tr key={guide._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask h-16 w-16">
                        <img
                          src={guide.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {guide.name}
                  <br />
                </td>

                <td>{guide.email}</td>

                <td>
                  <Link to={`/tour-guide-profile/${guide._id}`}>
                    <Buttons text="View Details"></Buttons>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourGuidesList;
