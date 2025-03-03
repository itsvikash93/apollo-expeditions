import React from "react";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";
import SideNav from "./SideNav";

const AddCountry = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (data) => {
    try {
      axios.post("/api/admin/countries", data).then((res) => {
        console.log("country added");
        reset();
      });
    } catch (error) {
      console.error("Error adding country:", error);
    }
  };
  return (
    <div id="main" className="bg-gray-100 w-full h-screen flex ">
      <SideNav />

      <div className="container h-full w-[80%] pt-10 mx-auto py-8 px-4">
        <h2 className="text-3xl font-semibold mb-6">Add New Country</h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700">
              Country Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Country name is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter country name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700">
              Country Description
            </label>
            <input
              type="text"
              {...register("description", {
                required: "Country description is required",
              })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter country description"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <input
            type="submit"
            value="Add Country"
            className="bg-[#3D8D7A] cursor-pointer text-white py-2 px-4 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCountry;
