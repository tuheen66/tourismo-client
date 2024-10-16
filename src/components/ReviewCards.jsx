import React, { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const ReviewCards = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });

  return (
    <div>
      <div></div>

      <div className="lg:p-4">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          loop="true"
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div
                className="space-y-4 bg-slate-300 px-8 py-16 md:px-16 md:py-8 rounded-full"
                key={review._id}
              >
                <div className="flex items-center gap-4 mb-4 justify-center">
                  <div className="w-24 mask mask-squircle">
                    <img src={review.image} alt="" />
                  </div>
                  <h2>
                    <h2 className="text-2xl font-semibold">{review.name} </h2>
                  </h2>
                </div>
                <p>{review.story} </p>
                <div className="flex justify-center">
                  <Rating
                    style={{ maxWidth: 250 }}
                    value={review.rating}
                    readOnly
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="space-y-4">
        {reviews.map((review) => (
          <div className="space-y-4 bg-slate-300 p-8 " key={review._id}>
            <div className="flex items-center gap-4 mb-4 justify-center">
              <div className="w-24 mask mask-squircle">
                <img src={review.image} alt="" />
              </div>
              <h2>
                <h2 className="text-2xl font-semibold">{review.name} </h2>
              </h2>
            </div>
            <p>{review.story} </p>
            <div className="flex justify-center">
              <Rating
                style={{ maxWidth: 250 }}
                value={review.rating}
                readOnly
              />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ReviewCards;
