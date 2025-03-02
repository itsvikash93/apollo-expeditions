import React from "react";
import Himalayas from "../../assets/Himalayas.jpg";
import Amazon from "../../assets/Amazon.jpg";
import Africa from "../../assets/Africa.jpeg";
import { useNavigate } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { BsCalendar2 } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const UpcomingTrips = () => {
  const navigate = useNavigate();

  const upcomingTrips = [
    {
      id: 1,
      title: "Himalayan Adventure Trek",
      date: "15-25 Dec 2023",
      location: "Nepal",
      image: Himalayas,
    },
    {
      id: 2,
      title: "Amazon Rainforest Expedition",
      date: "5-15 Jan 2024",
      location: "Brazil",
      image: Amazon,
    },
    {
      id: 3,
      title: "African Safari Tour",
      date: "20-30 Jan 2024",
      location: "Kenya",
      image: Africa,
    },
  ];

  return (
    <section className="py-10 bg-Secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="mt-2 text-5xl leading-8 custom-font1 tracking-wide sm:text-4xl">
            Upcoming Expeditions & Trips
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingTrips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h4 className="text-xl custom-font1 text-Primary mb-2">
                  {trip.title}
                </h4>
                <div className="flex items-center text-Fourth mb-2">
                  <GrLocation className="mr-2 text-2xl" />

                  {trip.location}
                </div>
                <div className="flex items-center text-Fourth mb-4">
                  <BsCalendar2 className=" mr-2 text-[22px]" />
                  {trip.date}
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => navigate("/contact")}
                    className="mt-4 px-6 py-2 bg-black Third flex font-bold rounded-lg transition-transform transform shadow-md"
                  >
                    More Details <FaArrowRightLong className="ml-1 mt-[6px]"/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingTrips;
