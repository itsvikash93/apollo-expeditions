import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Package = ({ pkg, onBookNow }) => {
  return (
    <div className="bg-white rounded-lg w-[23vw] shadow-xl overflow-hidden transition-transform duration-300 hover:scale-103">
      <div className="relative h-48">
        <img
          src={pkg.imageUrl}
          alt={pkg.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="py-4 px-5">
        <h4 className="text-xl custom-font1 text-Primary">{pkg.name}</h4>
        <h4 className="text-lg text-Primary mb-2">{pkg.description}</h4>

        <div className="flex justify-between">
          <Link
            to={pkg.pdfUrl}
            target="_blank"
            className="mt-4 px-5 py-2 bg-black Third flex gap-2 cursor-pointer justify-center align-center font-bold rounded-lg shadow-md"
          >
            <span className="text-white">More Details</span>
            <FaArrowRightLong />
          </Link>
          <button
            onClick={onBookNow}
            className="mt-4 px-5 py-2 bg-green-700 Third flex gap-2 cursor-pointer justify-center align-center font-bold rounded-lg shadow-md"
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
