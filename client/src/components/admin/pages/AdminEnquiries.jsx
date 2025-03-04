import axios from "../../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "../SideNav";

const AdminEnquiries = () => {
  const [tripEnquiries, setTripEnquiries] = useState([]);
  const [packageEnquiries, setPackageEnquiries] = useState([]);

  const getEnquiries = () => {
    try {
      axios.get("/admin/enquiries").then((res) => {
        setTripEnquiries(res.data.tripEnquiries);
        setPackageEnquiries(res.data.packageEnquiries);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (type, id) => {
    axios
      .delete(`/admin/enquiries/${id}`, { data: { type } })
      .then((res) => {
        getEnquiries();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEnquiries();
  }, []);

  return (
    <div
      id="main"
      className="bg-gray-100 w-full h-screen flex flex-col sm:flex-row "
    >
      <SideNav />

      <h3 className="sm:hidden">Navigation</h3>

      <div className="container h-full pt-12 w-full sm:w-[80%] mx-auto py-8 px-4 overflow-y-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
          Manage Enquiries
        </h1>
        {tripEnquiries.length > 0 && (
          <div className="">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
              Trip Enquiries
            </h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <thead className="bg-[#3D8D7A] text-white">
                <tr>
                  <th className="py-3 px-6 text-left font-semibold border-b">
                    Name
                  </th>
                  <th className="py-3 px-6 text-left font-semibold border-b">
                    Email
                  </th>
                  <th className="py-3 px-6 text-left font-semibold border-b">
                    Phone
                  </th>
                  <th className="py-3 px-6 text-left font-semibold border-b">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tripEnquiries &&
                  tripEnquiries.map((enquiry) => (
                    <tr
                      key={enquiry._id}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="py-4 px-6">{enquiry.name}</td>
                      <td className="py-4 px-6">{enquiry.email}</td>
                      <td className="py-4 px-6">{enquiry.phone}</td>
                      <td className="py-4 px-6 flex gap-2 ">
                        <Link
                          to={`/admin/enquiries/${enquiry._id}`}
                          state={enquiry}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => handleDelete("trip", enquiry._id)}
                          className="inline-flex items-center cursor-pointer px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors duration-200"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {tripEnquiries.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No enquiries found
              </div>
            )}
          </div>
        )}

        {packageEnquiries.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
              Package Enquiries
            </h2>

            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <thead className="bg-[#3D8D7A] text-white">
                <tr>
                  <th className="py-3 px-6 text-left font-semibold border-b">
                    Name
                  </th>
                  <th className="py-3 px-6 text-left font-semibold border-b">
                    Email
                  </th>
                  <th className="py-3 px-6 text-left font-semibold border-b">
                    Phone
                  </th>

                  <th className="py-3 px-6 text-left font-semibold border-b">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {packageEnquiries &&
                  packageEnquiries.map((enquiry) => (
                    <tr
                      key={enquiry._id}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="py-4 px-6">{enquiry.name}</td>
                      <td className="py-4 px-6">{enquiry.email}</td>
                      <td className="py-4 px-6">{enquiry.phone}</td>

                      <td className="py-4 px-6 flex gap-2 ">
                        <Link
                          to={`/admin/enquiries/${enquiry._id}`}
                          state={enquiry}
                          className="inline-flex items-center cursor-pointer px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => handleDelete("package", enquiry._id)}
                          className="inline-flex items-center cursor-pointer px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors duration-200"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {tripEnquiries.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No enquiries found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminEnquiries;
