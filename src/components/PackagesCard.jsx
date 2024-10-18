import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const PackagesCard = ({ destination }) => {
  const { tripTitle, tourType, price, image, duration, _id } = destination;

  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const wishlistInfo = {
    tripTitle,
    tourType,
    price,
    image,
    duration,
    email: user?.email,
    tripId: _id,
  };

  const handleWishlist = (id) => {
    axiosPublic.post("/wishlist", wishlistInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${tripTitle} has been added to your wishlist`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="relative">
      <div className="card bg-slate-200 shadow-2xl shadow-slate-500">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className=" p-6 ">
          <div className="flex flex-col flex-grow space-y-2 mb-4 h-40">
            <h2 className="card-title">Title : {tripTitle}</h2>

            <h2 className="">
              <span className="font-semibold">Type :</span> {tourType}
            </h2>

            <p>
              <span className="font-semibold">Price:</span> ${price}
            </p>

            <p>
              <span className="font-semibold">Duration :</span> {duration}
            </p>
          </div>

          <Link to={`/detail-package/${destination._id}`}>
            <button className="btn bg-[#d35400] text-white w-full">
              View Package
            </button>
          </Link>
        </div>
      </div>
      {user &&  <button onClick={() => handleWishlist(_id)} className="">
        <FaHeart className="absolute top-5 right-5 text-3xl text-red-600 hover:scale-125 duration-500"></FaHeart>
      </button> }
     
    </div>
  );
};

export default PackagesCard;
