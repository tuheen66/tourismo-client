import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const GoogleSignIn = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        image: result.user?.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-sm  font-semibold"
      >
        GOOGLE <FcGoogle></FcGoogle>{" "}
      </button>
    </div>
  );
};

export default GoogleSignIn;
