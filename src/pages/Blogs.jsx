import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

import blog from '../assets/images/blog.jpg'

const Blogs = () => {
  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get("/blogs.json");
      return res.data;
    },
  });

  return (
    <div>
       <div
        className="mx-auto min-h-[250px] md:min-h-[350px] lg:min-h-[450px] rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${blog})`,
        }}
      >
        <div className="flex justify-center ">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white items-center my-20 md:my-40 lg:my-52">
            Blogs
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
        >
          <img
            src={blog.blogImg}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                src={blog.writerImg}
                alt={blog.writer}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h3 className="text-lg font-semibold">{blog.writer}</h3>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Blogs;
