import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { useParams, Link } from "react-router-dom";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";

const Offers = () => {
  const { offerSlug } = useParams();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(`/offers/${offerSlug}`);
        // console.log(response);
        setPackages(response.data.packages);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPackages();
  }, [offerSlug]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg_Third">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border_First"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg_Third">
        <div className="text-red-600 text-xl font-semibold p-6 bg-white rounded-lg shadow-md">
          <span className="mr-2">⚠️</span>Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg_Third flex flex-col">
      <Nav className="absolute" />
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 sm:mt-24">
        <h1 className="text-3xl sm:text-3xl lg:text-5xl tracking-wide custom-font1 mb-6 sm:mb-8 lg:mb-12 text-center">
          Travel Packages
        </h1>

        {packages.length === 0 && !loading && !error ? (
          <div className="text-center First mt-8 p-8 bg-white rounded-lg shadow-md">
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
              No packages available at this time.
            </p>
            <p className="mt-2">Please check back later for new offerings.</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            {packages.map((pkg) => (
              <div
                key={pkg._id}
                className="bg-white shrink-0 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={pkg.imageUrl}
                    alt={pkg.name}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl custom-font1 tracking-wider mb-3">
                    {pkg.name}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {pkg.description}
                  </p>

                  <Link
                    to={pkg.pdfUrl}
                    className="inline-flex mb-3 items-center justify-center w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-opacity-80 transition duration-200 font-medium"
                  >
                    <HiOutlineDocumentDownload className="mr-1 text-2xl" />
                    Explore More
                  </Link>

                  <Link
                    to={`/contact`}
                    className="inline-flex items-center justify-center w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-opacity-80 transition duration-200 font-medium"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Offers;
