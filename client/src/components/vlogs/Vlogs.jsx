import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";

const Vlogs = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("/api/vlogs");
        setVideos(response.data);
      } catch (err) {
        setError("Failed to load vlogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);


  return (

    <div className="w-full min-h-screen bg_Third ">
      <Nav className="absolute" />
      <div className="w-full min-h-screen bg_Third px-4 sm:px-6 lg:px-8 py-8 mt-16 sm:mt-20 lg:mt-24">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl tracking-wide custom-font1 mb-6 sm:mb-8 lg:mb-10 text-center">
          logo Blue Planet Documentaries
        </h1>

        {/* Show loading indicator */}
        {loading && (
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-Second"></div>
          </div>
        )}

        {/* Show error message */}
        {error && (
          <div className="text-center text-red-600 font-semibold text-lg p-6 bg_Third shadow-md rounded-lg">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video.videoUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3">{video.title}</h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">{video.description}</p>

                  <div className="flex justify-between items-center text-xs text-gray-500">
                  </div>
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

export default Vlogs;
