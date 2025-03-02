import React from "react";

const AboutUs = () => {
  return (
    <section className="py-10 bg_Third flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="w-full text-center">
            <h2 className="text-base text-gray-600 font-bold tracking-wide uppercase mb-4">
              About Us
            </h2>
            <h3 className="text-5xl custom-font1 mb-6 mt-2 leading-8 custom-font1 tracking-wide sm:text-4xl">
              Apollo Expeditions
            </h3>
            <p className="text-xl w-[70%] translate-x-48 leading-relaxed text-gray-700">
              We craft extraordinary adventures that blend luxury with thrill.
              Our expert team designs unique expeditions that push boundaries
              while ensuring comfort and unforgettable memories at every step of
              your journey.
            </p>
          </div>
        </div>
      </div>
      <hr className="w-[90%] self-center mt-10 border-1 border-zinc-300" />
    </section>
  );
};

export default AboutUs;
