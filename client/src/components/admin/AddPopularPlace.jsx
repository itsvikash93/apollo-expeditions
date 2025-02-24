import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";

const AddPopularPlace = () => {
  const [countries, setCountries] = useState([]);
  const getCountries = () => {
    axios.get("/api/countries").then((res) => {
      setCountries(res.data);
    });
  };

  useEffect(() => {
    getCountries();
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    try {
      const formData = {
        ...data,
        image: data.image[0].name,
      };
      axios.post("/api/admin/popular-places", formData).then((res) => {
        axios
          .put(res.data.imageUrl, data.image[0], {
            headers: {
              "Content-Type": "image/jpeg",
            },
          })
          .then((res) => {
            console.log("image uploaded");
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
        <h2 className="text-3xl font-semibold mb-6">Add New Popular Place</h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Place Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter place name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700">
              Country
            </label>
            <select
              {...register("country")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="" disabled selected>
                Select Country
              </option>
              {countries.map((country) => (
                <option value={country._id} key={country._id}>
                  {country.name}
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
              placeholder="Enter a brief description of the place"
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
            <label htmlFor="rating" className="block text-gray-700">
              Rating (1-5)
            </label>
            <input
              type="number"
              {...register("rating")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              min="1"
              max="5"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#3D8D7A] text-white py-2 px-4 rounded"
          >
            Add Place
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPopularPlace;
