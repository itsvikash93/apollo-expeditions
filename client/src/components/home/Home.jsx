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
  const [loading, setLoading] = useState(true);
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    axios.get("/upcoming-trips").then((res) => {
      setUpcomingTrips(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full flex flex-col">
      <Nav className="absolute" />
      <Hero />
      <AboutUs />
      <div className="py-10 bg-Secondary flex flex-col">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="mt-2 text-5xl leading-8 custom-font1 tracking-wide sm:text-4xl">
              Upcoming Expeditions & Trips
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <Experinces />
      <Associations />
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
