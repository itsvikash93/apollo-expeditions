import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { useParams, Link } from "react-router-dom";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";
import Package from "./Package";
import EnquiryForm from "./EnquiryForm";
const Offers = () => {
  const { offerSlug } = useParams();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(`/offers/${offerSlug}`);
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
      <div className="px-4 pt-18 sm:pt-0 py-8 sm:px-6 sm:mt-24">
        <h1 className="text-3xl sm:text-3xl lg:text-5xl tracking-wide custom-font1 mb-6 sm:mb-8 lg:mb-12 text-center">
          Travel Packages
        </h1>

        {packages.length === 0 && !loading && !error ? (
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
                No packages available at this time.
              </p>
              <p className="mt-2">Please check back later for new offerings.</p>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-wrap justify-center gap-4 flex-shrink-0">
            {packages.map((pkg) => (
              <Package
                key={pkg._id}
                pkg={pkg}
                onBookNow={() => setSelectedPackage(pkg)}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />

      {selectedPackage && (
        <EnquiryForm
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </div>
  );
};

export default Offers;
