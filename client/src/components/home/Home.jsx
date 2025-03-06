import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import AboutUs from "./Aboutus";
import UpcomingTrip from "./UpcomingTrip";
import Experinces from "./Experinces";
import Associations from "./Associations";
import Nav from "../navbar/Nav";
import Footer from "../footer/Footer";
import axios from "../../utils/axios";
import EnquiryForm from "./EnquiryForm"; // Import Modal

const Home = () => {
  const [upcomingTrips, setUpcomingTrips] = useState([]);
  const [partners, setPartners] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    axios.get("/upcoming-trips").then((res) => {
      setUpcomingTrips(res.data);
      setLoading(false);
    });
    axios.get("/partners").then((res) => {
      setPartners(res.data);
    });
    axios.get("/experiences").then((res) => {
      setExperiences(res.data);
    });
  }, []);

  return (
    <div className="w-full flex flex-col">
      <Nav className="absolute" />
      <Hero />
      <AboutUs />
      <div className="lg:py-10 bg-Secondary flex flex-col">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-8 lg:mb-16">
            <h3 className="mt-2 sm:mt-0 text-4xl custom-font1 tracking-wide ">
              Upcoming Expeditions & Trips
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center flex-shrink-0 gap-8">
            {upcomingTrips.map((trip) => (
              <UpcomingTrip
                key={trip._id}
                trip={trip}
                onBookNow={() => setSelectedTrip(trip)}
              />
            ))}
          </div>
        </div>
        <hr className="w-[90%] self-center mt-10 border-1 border-zinc-300" />
      </div>

      <Experinces experiences={experiences} />
      <Associations partners={partners} />
      <Footer />

      {selectedTrip && (
        <EnquiryForm
          trip={selectedTrip}
          onClose={() => setSelectedTrip(null)}
        />
      )}
    </div>
  );
};

export default Home;
