import React, { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const story = e.target.story.value;
    const rating = e.target.rating.value;

    const storyInfo = {
      name,
      image,
      story,
      rating,
    };

    axiosPublic.post("/reviews", storyInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "success!",
          text: "Your Story is added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
  };

  return (
    <div className=" ">
      <div className="flex flex-col space-y-4 items-center w-[50%] mx-auto">
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
      </div>

      {/* story form */}
      <div className=" w-[50%] mx-auto">
        <div className="w-full max-w-xl mx-auto my-12 p-4 bg-slate-300 border border-gray-200  shadow-2xl shadow-slate-600 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 rounded-xl ">
          <h5 className="text-2xl font-bold text-gray-700 dark:text-white text-center">
            Add your story
          </h5>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>

              <input
                name="name"
                defaultValue={users.name}
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block rounded-lg w-full p-2.5 mb-4 "
                placeholder=""
                required
              />
            </div>

            {/* image link */}
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Photo URL
              </label>

              <input
                name="image"
                defaultValue={users.image}
                type="text"
                id="image"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder=""
                required
              />
            </div>

            <div>
              <label
                htmlFor="story"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Add your story
              </label>
              <textarea
                name="story"
                className="textarea w-full mb-4"
                placeholder="Add your story"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="rating"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rating out of 5
              </label>

              <input
                name="rating"
                type="text"
                id="rating"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-1/4 p-2.5 mb-4 "
                placeholder=""
                required
              />
            </div>

            <button className="btn w-full px-6 mt-4 bg-[#d35400] text-white border-none  hover:text-blue-500 hover:bg-orange-400">
              Add Your Story
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
