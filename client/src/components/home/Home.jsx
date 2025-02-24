import React from "react";
import Hero from "./Hero";
import AboutUs from "./Aboutus";
import Experinces from "./Experinces";
import Associations from "./Associations";
import UpcomingTrips from "./UpcomingTrips";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";
const Home = () => {
  return (
    <div className="flex flex-col bg_Third">
      <Nav className="absolute" />
      <div>
        <Hero />
        <AboutUs />
        <UpcomingTrips />
        <Experinces />
        <Associations />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
