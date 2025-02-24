import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);

  const getEnquiries = () => {
    try {
      axios.get("/api/admin/enquiries").then((res) => {
        setEnquiries(res.data);
      });
      // console.log(enquiries);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnquiries();
  }, []);

  return (
    <div id="main" className="bg-gray-100 w-full h-screen flex ">
      <SideNav />

      <div className="container h-full pt-12 w-[80%] mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Manage Enquiries
        </h1>
        <div className="overflow-x-auto">
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
                  State
                </th>
                <th className="py-3 px-6 text-left font-semibold border-b">
                  Place
                </th>
                <th className="py-3 px-6 text-left font-semibold border-b">
                  Visit Date
                </th>
                <th className="py-3 px-6 text-left font-semibold border-b">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {enquiries &&
                enquiries.map((enquiry) => (
                  <tr
                    key={enquiry._id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="py-4 px-6">{enquiry.name}</td>
                    <td className="py-4 px-6">{enquiry.email}</td>
                    <td className="py-4 px-6">{enquiry.phone}</td>
                    <td className="py-4 px-6">
                      {enquiry.state ? (
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {enquiry.state.name}
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          N/A
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {enquiry.place ? (
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {enquiry.place.name}
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          N/A
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-600">{enquiry.visitDate}</span>
                    </td>
                    <td className="py-4 px-6">
                      <Link
                        to={`/admin/enquiries/${enquiry._id}`}
                        state={enquiry}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {enquiries.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No enquiries found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Enquiries;
