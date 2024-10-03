import React, { useContext } from "react";
import Button from "../components/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import GoogleSignIn from "../components/GoogleSignIn";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Ooops!",
          text: "Please provide valid email and correct password",
          icon: "error",
          confirmButtonText: "Oh no!",
        });
      });
  };

  return (
    <div className="">
      <div className="w-full max-w-sm mx-auto my-12 p-4 bg-slate-300 border border-gray-200  shadow-2xl shadow-slate-600 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
        <form onSubmit={handleSubmit} className="space-y-6" action="#">
          <h5 className="text-2xl font-bold text-gray-700 dark:text-white text-center">
            Sign In
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 "
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
              type="password"
              name="password"
              id="password"
              placeholder="enter password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm   block w-full p-2.5 "
              required
            />
          </div>

          <Button text="Sign In" type="submit"></Button>

          <div className="flex gap-2 items-center">
        <p>Sign in with </p>
        <GoogleSignIn></GoogleSignIn>
        
      </div>

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/register"
              className="text-[#d35400] hover:underline dark:text-[#d35400]"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
