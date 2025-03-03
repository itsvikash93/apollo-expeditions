import React, { useState, useEffect } from "react";
import SideNav from "../SideNav";
import axios from "../../../utils/axios";
import { Link } from "react-router-dom";

const AdminPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/packages").then((res) => {
      setPackages(res.data);
      setLoading(false);
    });
  }, []);

  // Group places by country
  const groupedPackages = packages.reduce((acc, pkg) => {
    const offerName = pkg.offersAndPackages.name;
    if (!acc[offerName]) {
      acc[offerName] = [];
    }
    acc[offerName].push(pkg);
    return acc;
  }, {});

  const handleDelete = (id) => {
    axios.delete(`/admin/packages/${id}`).then((res) => {
      setPackages(packages.filter((pkg) => pkg._id !== id));
    });
  };

  return (
    <div id="main" className="bg-gray-100 w-full h-screen flex">
      <SideNav />
      <div className="container h-full w-[80%] mx-auto py-8 px-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Packages</h1>
          <Link
            to="/admin/packages/add"
            className="bg-[#3D8D7A] text-white px-4 py-2 rounded-md"
          >
            Add Package
          </Link>
        </div>
        {packages.length === 0 ? (
          <div className="flex justify-center items-center mt-10">
            <h1 className="text-2xl font-bold">No packages found, add one</h1>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap mt-4 gap-6">
              {loading ? (
                <div className="flex justify-center items-center mt-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              ) : (
                Object.keys(groupedPackages).map((offer) => (
                  <div key={offer} className="w-full">
                    <h2 className="text-2xl font-bold text-gray-700 mt-6">
                      {offer}
                    </h2>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {groupedPackages[offer].map((pkg) => (
                        <div
                          key={pkg._id}
                          className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        >
                          <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                            {pkg.name}
                          </h3>
                          <p className="text-md text-gray-700 mt-2">
                            {pkg.description}
                          </p>
                          <div className="flex gap-4 mt-4">
                            <button
                              onClick={() => handleDelete(pkg._id)}
                              className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminPackages;
