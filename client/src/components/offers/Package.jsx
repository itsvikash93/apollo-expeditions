import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { BsCalendar2 } from "react-icons/bs";


const Package = ({ pkg, onBookNow }) => {
  return (
    <div className="w-full sm:w-[48%] lg:w-[26%] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-103">
      <div className="relative h-56">
        <img
          src={pkg.imageUrl}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="py-4 px-5">
        <h4 className="text-xl custom-font1 text-Primary">{pkg.title}</h4>
        <h4 className="text-lg text-Primary mb-2">{pkg.description}</h4>
        <div className="flex items-center text-Fourth mb-2">
          <GrLocation className="mr-2 text-xl" />
          <h5 className="text-lg">{pkg.location}</h5>
        </div>
        <div className="flex items-center text-Fourth mb-4">
          <BsCalendar2 className="mr-2 text-lg" />
          <h5 className="text-lg">{pkg.date}</h5>
        </div>
        <div className="flex justify-between">
          <Link
            to={pkg.pdfUrl}
            target="_blank"
            className="mt-4 px-3 sm:px-5 py-2 bg-black Third flex gap-2 cursor-pointer justify-center items-center font-bold rounded-lg shadow-md"
          >
            <span className="text-white">More Details</span>
            <FaArrowRightLong />
          </Link>
          <button
            onClick={onBookNow}
            className="mt-4 block px-3 sm:px-5 py-2 bg-green-700 Third flex gap-2 cursor-pointer justify-center items-center font-bold rounded-lg shadow-md"
          >
            <span className="text-white">Book Now</span>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package;
