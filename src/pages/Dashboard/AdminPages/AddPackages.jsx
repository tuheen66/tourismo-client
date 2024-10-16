import React from "react";

import Button from "../../../components/Button";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddPackages = () => {
  const axiosPublic = useAxiosPublic();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const photo = form.photo.value;
    const tourType = form.tourType.value;
    const price = form.price.value;
    const duration = form.duration.value;
    const activities_1 = form.activities_1.value;
    const activities_2 = form.activities_2.value;
    const activities_3 = form.activities_3.value;
    const activities_4 = form.activities_4.value;
    const activities_5 = form.activities_5.value;
    const description = form.description.value;

    const dailyActivities = [
      activities_1,
      activities_2,
      activities_3,
      activities_4,
      activities_5,
    ];

    const packageInfo = {
      title,
      photo,
      tourType,
      price,
      duration,
      description,
      dailyActivities,
    };

    console.log(packageInfo);

    axiosPublic.post("/packages", packageInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "success!",
          text: "Your Package is uploaded successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
  };

  return (
    <div>
      <div className="mx-4 lg:w-full max-w-xl md:mx-auto my-12 p-4 bg-slate-300 border border-gray-200  shadow-2xl shadow-slate-600  ">
        <h5 className="text-2xl font-bold text-gray-700 dark:text-white text-center">
          Add Packages
        </h5>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Trip Title
            </label>

            <input
              name="title"
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder="Trip Title"
              required
            />
          </div>

          {/* image link */}
          <div>
            <label
              htmlFor="photo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Photo URL
            </label>

            <input
              name="photo"
              type="text"
              id="photo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder="photo URL"
              required
            />
          </div>

          {/* ------------------------------- */}

          <div className="flex justify-between gap-4">
            <div className="flex-1">
              <label
                htmlFor="tourType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tour Type
              </label>

              <input
                name="tourType"
                type="text"
                id="tourType"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Tour Type"
                required
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>

              <input
                name="price"
                type="text"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Price"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="duration"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Duration
              </label>

              <input
                name="duration"
                type="text"
                id="duration"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Duration"
                required
              />
            </div>
          </div>

          {/* ----------------------------------- */}

          <div>
            <label
              htmlFor="activities_1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Daily Activities : Day 1
            </label>

            <input
              name="activities_1"
              type="text"
              id="activities_1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder="Day 1"
              required
            />
          </div>

          <div>
            <label
              htmlFor="activities_2"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Daily Activities : Day 2
            </label>

            <input
              name="activities_2"
              type="text"
              id="activities_2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder="Day 2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="activities_3"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Daily Activities : Day 3
            </label>

            <input
              name="activities_3"
              type="text"
              id="activities_3"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder="Day 3"
              required
            />
          </div>

          <div>
            <label
              htmlFor="activities_4"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Daily Activities : Day 4
            </label>

            <input
              name="activities_4"
              type="text"
              id="activities_4"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder="Day 4"
              required
            />
          </div>

          <div>
            <label
              htmlFor="activities_5"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Daily Activities : Day 5
            </label>

            <input
              name="activities_5"
              type="text"
              id="activities_5"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder="Day 5"
            />
          </div>

          {/* ------------------------------------- */}

          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              name="description"
              type="text"
              id="description"
              className="textarea w-full mb-4"
              placeholder="description"
            ></textarea>
          </div>

          <Button text="Submit" type="submit"></Button>
          <button type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddPackages;
