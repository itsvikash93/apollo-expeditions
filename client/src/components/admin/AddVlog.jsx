import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";

const AddVlog = () => {
  const [offers, setOffers] = useState([]);
  const getOffers = () => {
    axios.get("/api/offers").then((res) => {
      setOffers(res.data);
    });
  };

  useEffect(() => {
    getOffers();
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    try {
      axios.post("/api/admin/vlogs", data).then((res) => {
        reset();
      });
    } catch (error) {
      console.error("Error adding place:", error);
    }
  };
  return (
    <div id="main" className="bg-gray-100 w-full h-screen flex ">
      <SideNav />
      <div className="container h-full w-[80%] mx-auto py-8 px-4">
        <h2 className="text-3xl font-semibold mb-6">Add New Vlog</h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title
            </label>
            <input
              type="text"
              {...register("title")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter title"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description
            </label>
            <textarea
              {...register("description")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              rows="4"
              placeholder="Enter a brief description of the package"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="videoUrl" className="block text-gray-700">
              Video URL
            </label>
            <input
              type="text"
              {...register("videoUrl")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">
              Date
            </label>
            <input
              type="date"
              {...register("date")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="views" className="block text-gray-700">
              Views
            </label>
            <input
              type="text"
              {...register("views")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#3D8D7A] text-white py-2 px-4 rounded"
          >
            Add Vlog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVlog;
