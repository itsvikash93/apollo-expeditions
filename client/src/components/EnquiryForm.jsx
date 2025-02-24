import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../utils/axios";

const EnquiryForm = () => {
  const [states, setStates] = useState([]);
  const [places, setPlaces] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const getData = () => {
    axios.get("/states").then((res) => {
      setStates(res.data);
    });
    axios.get("/places").then((res) => {
      setPlaces(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleFormSubmit = (data) => {
    axios.post("/enquiry-form", data).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold text-white">Package Enquiry</h1>
        <p className="text-blue-100 mt-2">
          Fill out the form below to enquire about our travel packages
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="bg-white p-8 rounded-b-lg shadow-lg border border-gray-200"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              required
              className="shadow-sm border-2 border-gray-200 rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              required
              className="shadow-sm border-2 border-gray-200 rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              {...register("phone")}
              required
              className="shadow-sm border-2 border-gray-200 rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="visitDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Preferred Visit Date
            </label>
            <input
              type="date"
              {...register("visitDate")}
              required
              className="shadow-sm border-2 border-gray-200 rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              State
            </label>
            <select
              {...register("state")}
              required
              className="shadow-sm border-2 border-gray-200 rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            >
              <option value="" disabled selected>
                Select your state
              </option>
              {states.map((state) => (
                <option value={state._id} key={state._id}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="place"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Place
            </label>
            <select
              {...register("place")}
              required
              className="shadow-sm border-2 border-gray-200 rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            >
              <option value="" disabled selected>
                Select destination
              </option>
              {places.map((place) => (
                <option value={place._id} key={place._id}>
                  {place.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            {...register("message")}
            rows="4"
            className="shadow-sm border-2 border-gray-200 rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            placeholder="Tell us about your travel plans and any specific requirements..."
          ></textarea>
        </div>

        <input
          type="hidden"
          name="date"
          value="<%= new Date().toISOString() %>"
        />

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-200 transform hover:scale-105"
          >
            Submit Enquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
