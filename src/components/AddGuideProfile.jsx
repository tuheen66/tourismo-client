import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Button } from "flowbite-react";


const AddGuideProfile = () => {
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

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const education = form.education.value;
    const skill_1 = form.skill_1.value;
    const skill_2 = form.skill_2.value;
    const skill_3 = form.skill_3.value;
    const experience_1 = form.experience_1.value;
    const experience_2 = form.experience_2.value;
    const experience_3 = form.experience_3.value;

    const educations = education.split(",");
    const skills = [skill_1, skill_2, skill_3];
    const experiences = [experience_1, experience_2, experience_3];

    const profileInfo = {
      name,
      email,
      image,
      educations,
      skills,
      experiences,
    };

    console.log(profileInfo);

    axiosPublic.post("/tour-guide-profile", profileInfo).then((res) => {
      console.log(res.data);

      if (res.data.insertedId) {
        e.target.reset();
        Swal.fire({
          title: "success!",
          text: "Your Profile is uploaded successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
  };

  return (
    <div>
      <div className="w-full max-w-xl mx-auto my-12 p-4 bg-slate-300 border border-gray-200  shadow-2xl shadow-slate-600 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 rounded-xl ">
        <h5 className="text-2xl font-bold text-gray-700 dark:text-white text-center">
          Update Profile
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

          {/* ------------------------------- */}

          <div className="">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>

            <input
              name="email"
              defaultValue={users.email}
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder=""
              required
            />
          </div>

          <div className="">
            <label
              htmlFor="education"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Education
            </label>

            <input
              name="education"
              type="text"
              id="education"
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder="education"
              required
            />
          </div>

          <div className="">
            <label
              htmlFor="skill_1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Skill 1
            </label>

            <input
              name="skill_1"
              type="text"
              id="skill_1"
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder="Skill 1"
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="skill_2"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Skill 2
            </label>

            <input
              name="skill_2"
              type="text"
              id="skill_2"
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder="Skill 2"
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="skill_3"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Skill 3
            </label>

            <input
              name="skill_3"
              type="text"
              id="skill_3"
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder="Skill 3"
              required
            />
          </div>

          {/* ----------------------------------- */}

          <div>
            <label
              htmlFor="experience_1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Experience 1
            </label>

            <input
              name="experience_1"
              type="text"
              id="experience_1"
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder=" Experience 1"
              required
            />
          </div>

          <div>
            <label
              htmlFor="experience_2"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Experience 2
            </label>

            <input
              name="experience_2"
              type="text"
              id="experience_2"
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder=" Experience 2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="experience_3"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Experience 3
            </label>

            <input
              name="experience_3"
              type="text"
              id="experience_3"
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
              placeholder="Experience 3"
              required
            />
          </div>

          <Button text="Submit" type="submit"></Button>
          <button type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddGuideProfile;
