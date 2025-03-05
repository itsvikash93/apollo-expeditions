import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";
import { FaArrowRightLong } from "react-icons/fa6";
import Nav from "../navbar/Nav";
import Footer from "../footer/Footer";

const CountryPage = () => {
  const { countrySlug } = useParams();

  const [places, setPlaces] = useState([]);
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(`/countries/${countrySlug}`);
        setCountry(response.data);
        setPlaces(response.data.popularPlaces);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [countrySlug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg_Third">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg_Third">
        <div className="text-red-600 text-xl font-semibold p-6 bg-white rounded-lg shadow-md">
          <span className="mr-2">⚠️</span>Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg_Third flex flex-col">
      <Nav className="absolute" />
      <div className="container mx-auto px-4 pt-18 sm:pt-0 py-8 sm:px-6 sm:mt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl custom-font1 tracking-wide mb-4">
            Discover {country.name}
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore the most popular destinations and hidden gems in{" "}
            {country.name}
            {/* //dynamiccccccccccccccc */}
          </p>
        </div>

        {places && places.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {places.map((place) => (
              <div
                key={place._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl tracking-wider custom-font1  mb-3">
                    {place.name}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {place.description}
                  </p>
                  <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center gap-2">
                    Explore More
                    <FaArrowRightLong className=" mt-[3px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center First mt-8 flex justify-center items-center ">
            <div className="bg-white w-1/3 p-8 shadow-md rounded-lg">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4M12 20V4"
                />
              </svg>
              <p className="text-xl font-medium">
                No popular places available for {country.name}
              </p>
              <p className="mt-2">Please check back later for updates.</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CountryPage;
