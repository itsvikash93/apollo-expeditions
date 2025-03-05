import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";


import { motion, AnimatePresence } from "framer-motion";

const SideNavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#A3D1C6] text-[#000] px-4 py-5 block sm:hidden min-h-fit relative w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin</h1>
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? (
            <MdClose className="text-3xl" />
          ) : (
            <GiHamburgerMenu className="text-2xl" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl px-4 py-5 absolute z-[100] left-0 w-full bg-[#A3D1C6]"
          >
            <Link
              to="/admin/dashboard"
              className="block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full hover:bg-[#5A9B8A] transition"
            >
              Dashboard
            </Link>
            <Link
              to="/admin/offers"
              className="block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full hover:bg-[#5A9B8A] transition"
            >
              Offers & Packages
            </Link>
            <Link
              to="/admin/experiences"
              className="block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full hover:bg-[#5A9B8A] transition"
            >
              Traveller Experiences
            </Link>
            <Link
              to="/admin/partners"
              className="block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full hover:bg-[#5A9B8A] transition"
            >
              Partners
            </Link>
            <Link
              to="/admin/upcoming-trips"
              className="block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full hover:bg-[#5A9B8A] transition"
            >
              Upcoming Trips
            </Link>
            <Link
              to="/admin/packages"
              className="block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full hover:bg-[#5A9B8A] transition"
            >
              Packages
            </Link>
            <Link
              to="/admin/countries"
              className="block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full hover:bg-[#5A9B8A] transition"
            >
              Countries
            </Link>
            <Link
              to="/admin/popular-places"
              className="block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full hover:bg-[#5A9B8A] transition"
            >
              Popular Places
            </Link>
            <Link
              to="/admin/vlogs"
              className="block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full hover:bg-[#5A9B8A] transition"
            >
              Vlogs
            </Link>
            <Link
              to="/admin/enquiries"
              className="block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full hover:bg-[#5A9B8A] transition"
            >
              Manage Enquiries
            </Link>
            <Link
              to="/logout"
              className="block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full hover:bg-[#5A9B8A] transition"
            >
              Logout
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default SideNavMobile;
