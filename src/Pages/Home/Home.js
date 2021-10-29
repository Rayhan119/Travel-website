import React from "react";
//import banner latestNews,meetdoctor services component
import Banner from "../Banner/Banner";
import LatestNews from "../LatestNews/LatestNews";
import NextAdventure from "../NextAdventure/NextAdventure";
import Offer from "../Offer/Offer";

import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Offer></Offer>
      <LatestNews></LatestNews>
      <NextAdventure></NextAdventure>
    </div>
  );
};

export default Home;
