import React from "react";
import walking from "../assets/images/types/walking.jpg";
import adventure from "../assets/images/types/adventure.jpg";
import air_ride from "../assets/images/types/air_ride.jpg";
import cruise from "../assets/images/types/cruise.jpg";
import culture from "../assets/images/types/culture.jpg";
import hiking from "../assets/images/types/hiking.jpg";
import relaxation from "../assets/images/types/relaxation.jpg";
import sports from "../assets/images/types/sports.jpg";
import wildlife from "../assets/images/types/wildlife.jpg";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import axios from "axios";

const TourTypes = () => {
  const axiosPublic = useAxiosPublic();

  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axios.get("/tourTypes.json");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="my-8 text-center text-4xl font-bold text-gray-700">
        Find a tour by Tour Type
      </h2>

      <div className="my-12 flex flex-wrap justify-center gap-12">
        {packages.map((item) => (
          <div
            key={item.id}
            
          >
            <Link to={`/tour-type/${item.tourType}`}>
              <div className=" py-6 px-8 flex flex-col items-center border-2 border-slate-400 rounded-full ">
                <img className="w-24 " src={item.image} alt="" />
                <p className="text-sm">{item.tourType}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* <div className="my-12 flex flex-wrap justify-center gap-12">
        <Link to={`tour-type/${packages.Walking}`}>
          <div className=" py-6 px-8 flex flex-col items-center border-2 border-slate-400 rounded-full ">
            <img className="w-24 " src={walking} alt="" />
            <p className="text-sm">Walking</p>
          </div>
        </Link>

        <div className=" py-6 px-8 flex flex-col items-center  border-2 border-slate-400 rounded-full ">
          <img className="w-24 " src={adventure} alt="" />
          <p className="text-sm">Adventure</p>
        </div>

        <div className=" py-6 px-8 flex flex-col items-center border-2 border-slate-400 rounded-full ">
          <img className="w-24 " src={air_ride} alt="" />
          <p className="text-sm">Air Ride</p>
        </div>
        <div className=" py-6 px-8 flex flex-col items-center border-2 border-slate-400 rounded-full ">
          <img className="w-24" src={cruise} alt="" />
          <p className="text-sm">Cruise</p>
        </div>
        <div className=" py-6 px-8 flex flex-col items-center border-2 border-slate-400 rounded-full ">
          <img className="w-24" src={culture} alt="" />
          <p className="text-sm">Culture</p>
        </div>
        <div className=" py-6 px-8 flex flex-col items-center border-2 border-slate-400 rounded-full ">
          <img className="w-24" src={hiking} alt="" />
          <p className="text-sm">Hiking</p>
        </div>
        <div className=" py-6 px-8 flex flex-col items-center border-2 border-slate-400 rounded-full ">
          <img className="w-24 " src={relaxation} alt="" />
          <p className="text-sm">Relaxation</p>
        </div>
        <div className=" py-6 px-8 flex flex-col items-center border-2 border-slate-400 rounded-full ">
          <img className="w-24" src={sports} alt="" />
          <p className="text-sm">Sports</p>
        </div>
        <div className=" py-6 px-8 flex flex-col items-center border-2 border-slate-400 rounded-full ">
          <img className="w-24" src={wildlife} alt="" />
          <p className="text-sm">Wildlife</p>
        </div>
      </div> */}
    </div>
  );
};

export default TourTypes;
