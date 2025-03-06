import React from "react";

const AboutUs = () => {
  return (
    <section className="py-10 bg_Third flex flex-col w-full">
      <div className=" px-4 lg:px-6 ">
        <div className="w-full text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl custom-font1 tracking-wide uppercase mb-4">
            About Us
          </h2>
          <h3 className="text-4xl custom-font1 mb-6 mt-2 tracking-wide">
            Apollo Expeditions
          </h3>
          <p className="text-xl text-center sm:w-[60%] leading-relaxed text-gray-700">
            We craft extraordinary adventures that blend luxury with thrill. Our
            expert team designs unique expeditions that push boundaries while
            ensuring comfort and unforgettable memories at every step of your
            journey.
          </p>
        </div>
      </div>
      <hr className="w-[90%] self-center mt-10 border-1 border-zinc-300" />
    </section>
  );
};

export default AboutUs;
