import React from "react";
import { useLoaderData } from "react-router-dom";

const TourGuideProfile = () => {
  const tourGuides = useLoaderData();

  const {  name, email, educations, skills, experiences, image } = tourGuides;

  return (
    <div >
      <h2 className="text-2xl text-center font-bold mb-8 mt-12">Profile of {name}</h2>

      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between bg-slate-300 p-12 lg:w-[70%] mx-auto rounded-xl mb-12 ">
        <div className="space-y-2">
          <p className="text-lg">
            <span className="font-semibold ">Name : </span>
            {name}
          </p>
          <p className="text-lg">
            <span className="font-semibold ">Email : </span>
            {email}
          </p>

          <div>
            <h3 className="font-semibold text-lg">Education:</h3>
            <ul>
              {educations?.map((education, index) => (
                <li>
                  <span className="font-semibold mr-1">{index + 1}.</span>{" "}
                  {education}{" "}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Skills:</h3>
            <ul>
              {skills?.map((skill, index) => (
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
              {experiences?.map((experience, index) => (
                <li>
                  <span className="font-semibold mr-1">{index + 1}.</span>{" "}
                  {experience}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <img className="w-72 rounded-xl shadow-xl shadow-slate-700" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TourGuideProfile;
