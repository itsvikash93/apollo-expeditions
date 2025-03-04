import React from "react";

const Associations = ({ partners }) => {
  return (
    <section className="py-10 bg_Third">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="mt-2 text-5xl tracking-wide custom-font1 leading-8 sm:text-4xl">
            Our Associations & Partnerships
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {partners.map((partner) => (
            <div
              key={partner._id}
              className="flex flex-col items-center bg-white rounded-lg p-8 shadow-md transition-transform duration-300 hover:scale-105"
            >
              <img
                src={partner.imageUrl}
                alt={partner.name}
                className="h-24 w-auto mb-6 object-contain rounded-full"
              />
              <h4 className="text-xl custom-font1 mb-2">{partner.name}</h4>
              <p className="text-gray-600 text-center">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associations;
