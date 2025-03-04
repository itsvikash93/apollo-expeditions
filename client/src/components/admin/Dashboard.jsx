import React from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import SideNavMobile from "./SideNavMobile";
const Dashboard = () => {
  return (
    <div id="main" className="bg-[#F5F5F5] w-full h-screen flex flex-col sm:flex-row">
      <SideNav />
      <SideNavMobile />

      <div className="container mx-auto sm:pt-10 px-4 w-full sm:w-[80%] h-full">
        <h2 className="text-3xl font-semibold mb-6">
          Welcome to the Admin Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold">Manage Enquiries</h3>
            <p className="text-gray-700 text-xl mt-4">totalEnquires</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold">Add States</h3>
            <p className="text-gray-700 text-xl mt-4">AddStates</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold">Add Places</h3>
            <p className="text-gray-700 text-xl mt-4">AddPlaces</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
