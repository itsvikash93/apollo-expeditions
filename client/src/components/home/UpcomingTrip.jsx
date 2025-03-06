import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsCalendar2 } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const UpcomingTrip = ({ trip, onBookNow }) => {
  return (
    <div className="w-full sm:w-[48%] lg:w-[26%] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-103">
      <div className="relative h-48">
        <img
          src={trip.imageUrl}
          alt={trip.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="py-4 px-5">
        <h4 className="text-xl custom-font1 text-Primary">{trip.title}</h4>
        <h4 className="text-lg text-Primary mb-2">{trip.description}</h4>
        <div className="flex items-center text-Fourth mb-2">
          <GrLocation className="mr-2 text-xl" />
          <h5 className="text-lg">{trip.location}</h5>
        </div>
        <div className="flex items-center text-Fourth mb-2">
          <BsCalendar2 className="mr-2 text-lg" />
          <h5 className="text-lg">{trip.date}</h5>
        </div>
        <div className="flex items-center text-Fourth mb-4">
          <FaIndianRupeeSign className="mr-2 text-lg" />
          <h5 className="text-lg">5000/-</h5>
        </div>
        <div className="flex justify-between">
          <Link
            to={trip.pdfUrl}
            target="_blank"
            className="mt-4 px-3 sm:px-5 py-2 bg-black Third cursor-pointer r font-bold rounded-lg shadow-md"
          >
            <span className="text-white">More Details</span>
          </Link>
          <button
            onClick={onBookNow}
            className="mt-4  px-3 sm:px-5 py-2 bg-orange-500 Third  cursor-pointer  font-bold rounded-lg shadow-md"
          >
            <span className="text-white">Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTrip;
