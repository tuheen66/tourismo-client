import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";

import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const TourType = () => {
  const packages = useLoaderData();

  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const wishlist = packages.find((item) => item._id);

  const wishlistInfo = {
    tripTitle: wishlist.tripTitle,
    tourType: wishlist.tourType,
    price: wishlist.price,
    image: wishlist.image,
    duration: wishlist.duration,
    email: user?.email,
    tripId: wishlist._id,
  };

  console.log(wishlist);

  const handleWishlist = (id) => {
    axiosPublic.post("/wishlist", wishlistInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${wishlist.tripTitle} has been added to your wishlist`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (res.data.message === "Wishlist already added") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${wishlist.tripTitle} has already been added`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="grid grid-cols-3">
      {packages.map((item) => (
        <div key={item._id} className="relative">
          <div className="card bg-slate-200  shadow-2xl shadow-slate-500">
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className=" p-6 ">
              <div className="flex flex-col flex-grow space-y-2 mb-4 h-40">
                <h2 className="card-title">Title : {item.tripTitle}</h2>

                <h2 className="">
                  <span className="font-semibold">Type :</span> {item.tourType}
                </h2>

                <p>
                  <span className="font-semibold">Price:</span> ${item.price}
                </p>
              </div>

              <Link to={`/detail-package/${item._id}`}>
                <button className="btn bg-[#d35400] text-white w-full">
                  View Package
                </button>
              </Link>
            </div>
          </div>
          <button onClick={() => handleWishlist(item._id)} className="">
            <FaHeart className="absolute top-5 right-5 text-3xl text-red-600 hover:scale-125 duration-500"></FaHeart>
          </button>
        </div>
      ))}
    </div>
  );
};

export default TourType;
