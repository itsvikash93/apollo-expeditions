import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const Experinces = ({ experiences }) => {
  return (
    <section className="py-5 sm:py-10 bg_Third flex flex-col w-full ">
      <div className="px-4 sm:px-6">
        <div className="text-center mb-5 sm:mb-16">
          <h3 className="mt-2 text-4xl custom-font1 tracking-wide sm:text-4xl">
            Traveler's Experiences
          </h3>
        </div>

        <div className="w-full">
          <Swiper
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1 }, // Mobile
              640: { slidesPerView: 1 }, // Small screens
              768: { slidesPerView: 2 }, // Tablets
              1024: { slidesPerView: 3 }, // Large screens
            }}
            modules={[Pagination, Autoplay]}
          >
            {experiences.map((experience, index) => (
              <SwiperSlide key={index} className="w-full">
                <img
                  src={experience.imageUrl}
                  alt={`Experience ${index + 1}`}
                  className="w-full h-auto rounded-md object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <hr className="w-[90%] self-center mt-10 border-1 border-zinc-300" />
    </section>
  );
};

export default Experinces;
