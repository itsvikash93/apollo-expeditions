import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const AddPackage = () => {
  const navigate = useNavigate();
  const [offers, setOffers] = useState([]);
  const getOffers = () => {
    axios.get("/offers").then((res) => {
      setOffers(res.data);
    });
  };

  useEffect(() => {
    getOffers();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (data) => {
    try {
      const formData = {
        ...data,
        image: data.image[0].name,
        pdf: data.pdf[0].name,
      };
      axios.post("/admin/packages", formData).then(async (res) => {
        const res1 = await axios.put(res.data.imageUrl, data.image[0], {
          headers: {
            "Content-Type": "image/jpeg",
          },
        });

        const res2 = await axios.put(res.data.pdfUrl, data.pdf[0], {
          headers: {
            "Content-Type": "application/pdf",
          },
        });

        if (res1.status === 200 && res2.status === 200) {
          reset();
          navigate("/admin/packages");
        }
      });
    } catch (error) {
      console.error("Error adding place:", error);
    }
  };
  return (
    <div id="main" className="bg-gray-100 w-full h-screen flex ">
      <SideNav />
      <div className="container h-full w-[80%] mx-auto py-8 px-4 overflow-y-auto">
        <h2 className="text-3xl font-semibold mb-6">Add New Package</h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700">
              Package Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Package name is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter package name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="offer" className="block font-medium text-gray-700">
              Offer and Package
            </label>
            <select
              {...register("offer", { required: "Offer is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
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
            {errors.offer && (
              <p className="text-red-500 text-sm">{errors.offer.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              rows="4"
              placeholder="Enter a brief description of the package"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              accept="image/*"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="pdf" className="block font-medium text-gray-700">
              PDF
            </label>
            <input
              type="file"
              {...register("pdf", { required: "PDF is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              accept="application/pdf"
            />
            {errors.pdf && (
              <p className="text-red-500 text-sm">{errors.pdf.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#3D8D7A] cursor-pointer text-white py-2 px-4 rounded "
          >
            Add Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
