import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import slide1 from "../assets/images/banner1.jpg";
import slide2 from "../assets/images/banner2.jpg";
import slide3 from "../assets/images/banner3.jpg";
import slide4 from "../assets/images/banner4.jpg";

const Banner = () => {
  return (
    <div className="mx-auto ">
      <Swiper
        loop={true}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        // autoplay
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full relative rounded-xl" src={slide1} alt="" />
          <div className="absolute rounded-xl top-0 right-0 text-gray-900 bg-black opacity-40 w-full h-full "></div>
          <div className="absolute top-[45%] lg:left-[15%] text-white space-y-4 text-center invisible md:visible">
            <h2 className=" md:text-4xl lg:text-5xl font-bold">
              Explore the World with Us
            </h2>
            <p className="text-xl">
              Discover breathtaking landscapes and immerse in unique cultural
              experiences around the globe.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full relative rounded-xl" src={slide2} alt="" />
          <div className="absolute rounded-xl top-0 right-0 text-gray-900 bg-black opacity-40 w-full h-full "></div>
          <div className="absolute top-[45%] lg:left-[15%] text-white space-y-4 text-center invisible md:visible">
            <h2 className=" md:text-4xl lg:text-5xl font-bold">
              Adventure Awaits in Every Destination
            </h2>
            <p className="text-xl">
              Embark on thrilling journeys to unforgettable places, where every
              step leads to new memories.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full relative rounded-xl" src={slide3} alt="" />
          <div className="absolute rounded-xl top-0 right-0 text-gray-900 bg-black opacity-40 w-full h-full "></div>
          <div className="absolute top-[45%] lg:left-[15%] text-white space-y-4 text-center invisible md:visible">
            <h2 className=" md:text-4xl lg:text-5xl font-bold">
              Your Perfect Getaway Starts Here
            </h2>
            <p className="text-xl">
              Escape the routine and find serenity in beautiful destinations
              tailored just for your relaxation.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full relative rounded-xl" src={slide4} alt="" />
          <div className="absolute rounded-xl top-0 right-0 text-gray-900 bg-black opacity-40 w-full h-full "></div>
          <div className="absolute top-[45%] lg:left-[15%] text-white space-y-4 text-center invisible md:visible">
            <h2 className=" md:text-4xl lg:text-5xl font-bold">
              Discover Hidden Gems Everywhere You Go
            </h2>
            <p className="text-xl">
              Uncover the beauty of lesser-known locations and enjoy authentic
              adventures with local insights.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
