import React from "react";
import { Link, useLocation } from "react-router-dom";
import SideNav from "./SideNav";

const EnquiryDetails = () => {
  const location = useLocation();
  const enquiry = location.state;
  console.log(enquiry);
  return (
    <div className="bg-gray-100 w-full h-screen flex ">
      <SideNav />
      <div className="container h-full pt-12 w-full sm:w-[80%] mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Enquiry Details</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Details for Enquiry ID: {enquiry._id}
          </h2>
          <p className="mb-4">
            <strong>Name: </strong>
            {enquiry.name}
          </p>
          <p className="mb-4">
            <strong>Email: </strong>
            {enquiry.email}
          </p>
          <p className="mb-4">
            <strong>Phone: </strong>
            {enquiry.phone}
          </p>
          {enquiry.message && (
            <p className="mb-4">
              <strong>Message: </strong>
              {enquiry.message}
            </p>
          )}
          {enquiry.tripTitle && (
            <p className="mb-4">
              <strong>Trip Title: </strong>
              {enquiry.tripTitle}
            </p>
          )}
          {enquiry.packageTitle && (
            <p className="mb-4">
              <strong>Package Title: </strong>
              {enquiry.packageTitle}
            </p>
          )}
          {enquiry.tripLocation && (
            <p className="mb-4">
              <strong>Trip Location: </strong>
              {enquiry.tripLocation}
            </p>
          )}
          {enquiry.tripDate && (
            <p className="mb-4">
              <strong>Trip Date: </strong>
              {enquiry.tripDate}
            </p>
          )}

          <Link
            to="/admin/enquiries"
            className="text-blue-500 hover:text-blue-700"
          >
            Back to Enquiries
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnquiryDetails;
