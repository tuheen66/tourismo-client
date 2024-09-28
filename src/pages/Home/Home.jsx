import React from "react";
import Banner from "../../components/Banner";

import TravelGuide from "./TravelGuide/TravelGuide";
import ReviewCards from "../../components/ReviewCards";
import TourTypes from "../../components/TourTypes";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TravelGuide></TravelGuide>
      <ReviewCards></ReviewCards>
      <TourTypes></TourTypes>
    </div>
  );
};

export default Home;
