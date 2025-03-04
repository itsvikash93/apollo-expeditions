import React from "react";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";
import SideNav from "./SideNav";

const AddExperience = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (data) => {
    try {
      console.log(data);
      axios
        .post("/admin/experiences", { image: data.image[0].name })
        .then((res) => {
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
          console.log("experience added");
        });
    } catch (error) {
      console.error("Error adding experience:", error);
    }
  };
  return (
    <div id="main" className="bg-gray-100 w-full h-screen flex ">
      <SideNav />

      <div className="container h-full w-full sm:w-[80%] pt-10 mx-auto py-8 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Add New Traveller Experience
        </h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter image URL"
              accept="image/*"
              // required
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          <input
            type="submit"
            value="Add Experience"
            className="bg-[#3D8D7A] cursor-pointer text-white py-2 px-4 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default AddExperience;
