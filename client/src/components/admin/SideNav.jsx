import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <nav className="bg-[#A3D1C6] text-[#00000]  px-4 pt-10 w-[20%] h-full">
      <h1 className=" text-3xl font-bold">Admin Dashboard</h1>
      <div className="text-xl mt-5">
        <Link
          to="/admin/dashboard"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Dashboard
        </Link>
        <Link
          to="/admin/offers/add"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Add Offers
        </Link>
        <Link
          to="/admin/packages/add"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Add Packages
        </Link>
        <Link
          to="/admin/countries/add"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Add Countries
        </Link>
        <Link
          to="/admin/popular-places/add"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Add Popular Places
        </Link>
        <Link
          to="/admin/vlogs/add"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Add Vlogs
        </Link>
        <Link
          to="/admin/enquiries"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Manage Enquiries
        </Link>
        <Link
          to="/logout"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
