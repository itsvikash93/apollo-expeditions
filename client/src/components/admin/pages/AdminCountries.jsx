import React, { useState } from "react";
import SideNav from "../SideNav";
import { useEffect } from "react";
import axios from "../../../utils/axios";
import { Link } from "react-router-dom";
const AdminCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/countries").then((res) => {
      setCountries(res.data);
      setLoading(false);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/admin/countries/${id}`).then((res) => {
      setCountries(countries.filter((country) => country._id !== id));
    });
  };
  return (
    <div id="main" className="bg-gray-100 w-full h-screen flex ">
      <SideNav />
      <div className="container h-full w-[80%] mx-auto py-8 px-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Countries</h1>
          <Link
            to="/admin/countries/add"
            className="bg-[#3D8D7A] text-white px-4 py-2 rounded-md"
          >
            Add Country
          </Link>
        </div>
        {countries.length === 0 ? (
          <div className="flex justify-center items-center mt-10">
            <h1 className="text-2xl font-bold">No countries found, add one</h1>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap mt-4 gap-4">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              ) : (
                countries.map((country) => (
                  <div
                    key={country._id}
                    className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-102 w-full md:w-1/3"
                  >
                    <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                      {country.name}
                    </h2>
                    <p className="text-md text-gray-700 mt-2">
                      {country.description}
                    </p>
                    <div className="flex gap-4 mt-4">
                      <button
                        onClick={() => handleDelete(country._id)}
                        className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                      >
                        Delete
                      </button>
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

export default AdminCountries;
