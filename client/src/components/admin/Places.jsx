import React from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

const Places = () => {
  return (
    <div>
      <SideNav />

      <main className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-semibold mb-6">Manage Places</h2>

        <Link
          to="/admin/places/new"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mb-6 inline-block"
        >
          Add New Place
        </Link>

        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-700">
                Place
              </th>
              <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-700">
                State
              </th>
              <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-6 border-b border-gray-200">place.name</td>
              <td className="py-4 px-6 border-b border-gray-200">place.state</td>
              <td className="py-4 px-6 border-b border-gray-200">
                <Link
                  to="/admin/places/place._id/edit"
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                |
                <Link
                  to="/admin/places/place._id/delete"
                  className="text-red-600 hover:underline"
                >
                  Delete
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Places;
