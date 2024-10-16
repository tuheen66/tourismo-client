import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import AddGuideProfile from "../../../components/AddGuideProfile";

const GuideProfile = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const { data: guide_profile = [] } = useQuery({
    queryKey: ["guide_profile", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/guide-profile/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="mx-4  justify-center  flex flex-col space-y-4 items-center lg:w-[70%] lg:mx-auto mb-12 ">
        <h2 className="text-2xl font-bold mb-8 mt-12">My Profile</h2>

        <div className="flex flex-col-reverse md:flex-row p-4 gap-4  md:justify-between bg-slate-300 lg:p-12 w-full rounded-xl ">
          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-semibold ">Name : </span>
              {guide_profile.name}
            </p>
            <p className="text-lg">
              <span className="font-semibold ">Email : </span>
              {guide_profile.email}
            </p>

            <div>
              <h3 className="font-semibold text-lg">Education:</h3>
              <ul>
                {guide_profile?.educations?.map((education, index) => (
                  <li key={index}>
                    <span className="font-semibold mr-1">{index + 1}.</span>{" "}
                    {education}{" "}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Skills:</h3>
              <ul>
                {guide_profile?.skills?.map((skill, index) => (
                  <li>
                    <span className="font-semibold mr-1">{index + 1}.</span>{" "}
                    {skill}{" "}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Experiences:</h3>
              <ul>
                {guide_profile?.experiences?.map((experience, index) => (
                  <li>
                    <span className="font-semibold mr-1">{index + 1}.</span>{" "}
                    {experience}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto">
            <img className="w-72 rounded-xl" src={guide_profile.image} alt="" />
          </div>
        </div>
      </div>
      <div className="mx-4">
        <AddGuideProfile></AddGuideProfile>
      </div>
    </div>
  );
};

export default GuideProfile;
