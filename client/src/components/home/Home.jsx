import React from "react";
import Hero from "./Hero";
import AboutUs from "./Aboutus";
import UpcomingTrips from "./UpcomingTrips";
import Experinces from "./Experinces";
import Associations from "./Associations";
import Nav from "../navbar/Nav"
import Footer from "../footer/Footer"

const Home = () => {
  return (
    <div className="w-full">
      <Nav />
      <Hero />
      <AboutUs />
      <UpcomingTrips />
      <Experinces />
      <Associations />
      <Footer />
    </div>
  );
};
export default Home;
