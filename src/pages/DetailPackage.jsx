import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Button, Modal } from "flowbite-react";

import "react-datepicker/dist/react-datepicker.css";

import booking from "../assets/images/book.jpg";
import pkg1 from "../assets/images/pkg1.jpg";
import pkg2 from "../assets/images/pkg2.jpg";
import pkg3 from "../assets/images/pkg3.jpg";
import pkg4 from "../assets/images/pkg4.jpg";
import pkg5 from "../assets/images/pkg5.jpg";
import pkg6 from "../assets/images/pkg6.jpg";
import pkg7 from "../assets/images/pkg7.jpg";
import TourGuidesList from "../components/TourGuidesList";

import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";
import { FaCalendarAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const DetailPackage = () => {
  const detailPackage = useLoaderData();

  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const [startDate, setStartDate] = useState(new Date());

  const [openModal, setOpenModal] = useState(false);

  const {
    tourType,
    tripTitle,
    image,
    description,
    price,
    duration,
    dailyActivities,
  } = detailPackage;

  const { data: users = [], reset } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const price = form.price.value;
    const guide_name = form.guide_name.value;
    const date = startDate;

    const bookingInfo = {
      tripTitle,
      name,
      image,
      email,
      price,
      guide_name,
      date,
      status: "In Review",
    };

    console.log(bookingInfo);

    axiosPublic.post("/bookings", bookingInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        e.target.reset;
        setOpenModal(true);
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-1">
        <img className=" col-span-2 " src={pkg1} alt="" />
        <img className="col-span-1 row-span-2 " src={pkg2} alt="" />
        <img className="col-span-1" src={pkg3} alt="" />
        <img className="col-span-1" src={pkg4} alt="" />
        <img className="col-span-1" src={pkg5} alt="" />
        <img className="col-span-1" src={pkg6} alt="" />
        <img className="col-span-2" src={pkg7} alt="" />
      </div>

      <h2 className="my-12 text-center font-bold text-4xl text-gray-700">
        {tripTitle}{" "}
      </h2>

      <div className="flex mb-12 bg-green-200 p-12 rounded-xl">
        <div className="flex-1">
          <div>
            <img
              className="rounded-xl shadow-xl shadow-slate-600"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="card-body ">
            <h2 className="card-title">Title : {tripTitle}</h2>

            <h2 className="">
              <span className="font-semibold">Type :</span> {tourType}
            </h2>

            <p>
              <span className="font-semibold">Price:</span> ${price}
            </p>

            <p>
              <span className="font-semibold ">Duration :</span> {duration}
            </p>
            <div className="mb-2">
              <p>
                <span className="font-semibold">Daily Activities :</span>
              </p>
              <ul>
                {dailyActivities.map((item) => (
                  <li className="mb-3">{item}</li>
                ))}
              </ul>
            </div>
            <p>
              <span className="font-semibold">Description : </span>
              {description}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 ">
        <TourGuidesList></TourGuidesList>
      </div>

      {/* ================= Book a tour =============== */}

      <div className="flex justify-between items-center gap-12">
        <div className="flex-1 w-full max-w-xl mx-auto my-12 p-4 bg-slate-300 border border-gray-200  shadow-2xl shadow-slate-600 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 rounded-xl ">
          <h5 className="text-2xl font-bold text-gray-700 dark:text-white text-center">
            Book a Tour
          </h5>
          <form onSubmit={handleSubmit}>
            {/* ------------ name ---------------- */}

            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tourist name
              </label>

              <input
                name="name"
                defaultValue={users.name}
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block rounded-lg w-full p-2.5 mb-4 "
                placeholder=""
                required
                disabled
              />
            </div>

            {/* --------------- image link -------------------*/}
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tourist Photo URL
              </label>

              <input
                name="image"
                defaultValue={users.image}
                type="text"
                id="image"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder=""
                required
                disabled
              />
            </div>

            {/* ------------- email ------------------ */}

            <div className="">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tourist Email
              </label>

              <input
                name="email"
                defaultValue={users.email}
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder=""
                required
                disabled
              />
            </div>

            {/* ------------ price ---------------- */}

            <div className="">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>

              <input
                name="price"
                defaultValue={price}
                type="text"
                id="price"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="price"
                required
                disabled
              />
            </div>

            {/* ---------- tour guide -------------- */}

            <div className="mb-4">
              <label
                htmlFor="guide_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Pick your favorite Tour Guide
              </label>
              <select
                id="guide_name"
                name="guide_name"
                className="select w-full "
              >
                <option>Bikash Chandra</option>
                <option>Mohammad Fahim</option>
                <option>Abdul Karim</option>
                <option>Hasan Ali</option>
                <option>Mahmudul Hasan</option>
              </select>
            </div>

            {/* --------------- tour date ----------------------- */}

            <div className="mb-4">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tour Date
              </label>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showIcon
                icon=<FaCalendarAlt></FaCalendarAlt>
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <button
              type="submit"
              className="btn w-full px-6 bg-[#d35400] text-white border-none  hover:text-blue-500 hover:bg-orange-400"
            >
              Book Now
            </button>
          </form>
        </div>

        <div className="flex-1 ">
          <img
            className="w-[80%] mx-auto rounded-xl shadow-xl shadow-slate-500"
            src={booking}
            alt=""
          />
        </div>
      </div>

      <>
        {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
        <Modal className="w-1/2 mx-auto mt-24" dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Body>
            <h2 className="text-3xl font-bold text-center ">
              Booking Successful, <br /> Go to My Bookings page
            </h2>
          </Modal.Body>
          <Modal.Footer className="space-x-3">
            <Link to="/dashboard/my-bookings">
              <Button
                className="bg-orange-500"
                onClick={() => setOpenModal(false)}
              >
                GO
              </Button>
            </Link>
            <Button
              className="bg-gray-400"
              color="gray"
              onClick={() => setOpenModal(false)}
            >
              NO
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default DetailPackage;
