import React from "react";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";
import SideNav from "./SideNav";

const AddOffer = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    try {
      axios.post("/api/admin/offers", data).then((res) => {
        // console.log(res.data);
        console.log("offer added");
        reset();
      });
    } catch (error) {
      console.error("Error adding offer:", error);
    }
  };
  return (
    <div id="main" className="bg-gray-100 w-full h-screen flex ">
      <SideNav />

      <div className="container h-full w-[80%] pt-10 mx-auto py-8 px-4">
        <h2 className="text-3xl font-semibold mb-6">Add New Offer</h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Offer Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter offer name"
              required
            />
          </div>

          <input
            type="submit"
            value="Add Offer"
            className="bg-[#3D8D7A] text-white py-2 px-4 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default AddOffer;
