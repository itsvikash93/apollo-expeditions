import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";

const AddPackage = () => {
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
      const formData = {
        ...data,
        image: data.image[0].name,
        pdf: data.pdf[0].name,
      };
      axios.post("/api/admin/packages", formData).then((res) => {
        axios
          .put(res.data.imageUrl, data.image[0], {
            headers: {
              "Content-Type": "image/jpeg",
            },
          })
          .then((res) => {
            console.log("image uploaded");
          });
        axios
          .put(res.data.pdfUrl, data.pdf[0], {
            headers: {
              "Content-Type": "application/pdf",
            },
          })
          .then((res) => {
            console.log("pdf uploaded");
          });
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
        <h2 className="text-3xl font-semibold mb-6">Add New Package</h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Package Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter package name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="offer" className="block text-gray-700">
              Offer and Package
            </label>
            <select
              {...register("offer")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="" disabled selected>
                Select Offer and Package
              </option>
              {offers.map((offer) => (
                <option value={offer._id} key={offer._id}>
                  {offer.name}
                </option>
              ))}
            </select>
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
            <label htmlFor="image" className="block text-gray-700">
              Image
            </label>
            <input
              type="file"
              {...register("image")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              accept="image/*"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pdf" className="block text-gray-700">
              PDF
            </label>
            <input
              type="file"
              {...register("pdf")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              accept="application/pdf"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#3D8D7A] text-white py-2 px-4 rounded "
          >
            Add Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
