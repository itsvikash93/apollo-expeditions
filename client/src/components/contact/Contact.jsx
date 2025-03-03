import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import qr from "../../assets/QR.jpg";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <Nav className="absolute" />

      <div className="mt-24 h-full min-h-96 flex flex-col">
        {/* Header */}
        <h1 className=" text-center text-5xl tracking-wide custom-font1">
          Contact Us
        </h1>

        {/* Main Container */}
        <div className="flex h-[60vh] mt-5 px-8">
          {/* Left Section: Contact Details */}
          <div className="w-1/2 p-6 pl-20 mt-10 ml-36 rounded-lg bg_Third text-First ">
            <h2 className="text-3xl font-semibold text-gray-500">
              Get in Touch
            </h2>

            <div className="mt-4 flex flex-col gap-2 font-semibold">
              <p className="text-2xl">Jeevraj Sharma</p>
              <p className="text-md "> Founder & Manager</p>

              <div className="flex items-center gap-2">
                <FaEnvelope />
                <a
                  href="mailto:apolloexpeditions@outlook.in"
                  className="hover:underline First"
                >
                  apolloexpeditions@outlook.in
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:12346552" className="hover:underline First">
                  +91 99830 65030
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <p>Jaipur, Rajasthan (IN) | Dehradun, Uttarakhand (IN)</p>
              </div>

              <div className="mt-4 flex items-center">
                <img
                  src={qr}
                  alt="QR Code"
                  className="w-24 h-24 rounded-md shadow-md"
                />
                <p className=" ml-2 text-sm text-gray-500">
                  Scan this QR code to Whatsapp us
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="w-1/2 p-8 px-28 rounded-lg bg_Third ">
            <form className="p-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="p-2 mt-1 block w-full rounded-md border shadow-sm  sm:text-sm text-First bg-transparent"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contactNo"
                  className="block text-sm font-medium"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  name="contactNo"
                  id="contactNo"
                  className="p-2 mt-1 block w-full rounded-md border shadow-sm sm:text-sm text-First bg-transparent"
                  placeholder="Your contact number"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="p-2 mt-1 block w-full rounded-md border shadow-sm sm:text-sm text-First bg-transparent"
                  placeholder="Your email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="p-2 mt-1 block w-full rounded-md border border-First shadow-sm focus:ring-Second focus:border-Second sm:text-sm text-First bg-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md font-semibold text-white bg-gray-600 py-2 px-4 text-sm  transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="h-80 w-full p-5 flex justify-center">
          <iframe
            className="w-[80%] h-48 rounded-lg shadow-lg bg_Third"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.0912000170235!2d75.77204642392776!3d26.89770575847155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4664a38ea91%3A0x26446774d817f6!2sShayam%20Nagar!5e0!3m2!1sen!2sin!4v1740378852424!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
