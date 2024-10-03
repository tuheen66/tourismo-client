import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import GoogleSignIn from "../components/GoogleSignIn";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const email = data.email;
    const password = data.password;
    const name = data.name;
    const image = res.data.data.display_url;

    if (res.data.success) {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);

          updateProfile(result.user, {
            displayName: name,
            photoURL: image,
          }).then(() => {
            const userInfo = {
              name,
              email,
              image,
              role: "tourist",
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Registration successful",
                  showConfirmButton: false,
                  timer: 1500,
                });

                // navigate(from, { replace: true });
              }
            });
          });
        })

        .catch((error) => {
          console.error(error);
          Swal.fire({
            title: " Oops!",
            text: " Your password must be at least 6 characters long",
            icon: "error",
            button: "oh no!",
          });
        });
    }

    // console.log(data);
    // console.log(res.data.data.display_url);
  };

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="w-full max-w-xl mx-auto my-12 p-4 bg-slate-300 border border-gray-200  shadow-2xl shadow-slate-600 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <h5 className="text-2xl font-bold text-gray-700 dark:text-white text-center">
        Sign Up
      </h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your name
          </label>

          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 "
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>

          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 "
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>

          <input
            {...register("password", { required: true })}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 "
            placeholder="Enter password"
            required
          />
        </div>

        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload Image
          </label>
          <input
            {...register("image", { required: true })}
            className="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-8"
            id="file_input"
            type="file"
          />
        </div>

        <Button text="Sign Up" type="submit"></Button>
        <button type="submit" />
      </form>
      <div className="flex gap-2 items-center">
        <p>Sign in with </p>
        
        <GoogleSignIn></GoogleSignIn>
      </div>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-4">
        Already have an account? {""}
        <Link
          to="/login"
          className="text-[#d35400] hover:underline dark:text-[#d35400]"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Register;
