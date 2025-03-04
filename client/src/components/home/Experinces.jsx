import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const Experinces = ({ experiences }) => {
  return (
    <section className="py-10 bg_Third flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="mt-2 text-5xl leading-8 custom-font1 tracking-wide  sm:text-4xl">
            Traveler's Experiences
          </h3>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {experiences.map((experience, index) => (
            <SwiperSlide
              key={index}
              className={`swiper-slide ${
                index === 1 ? "swiper-slide-center" : ""
              }`}
            >
              <img
                src={experience.imageUrl}
                alt={`Experience ${index + 1}`}
                className={`w-full h-auto rounded-md object-cover ${
                  index === 1 ? "swiper-slide-center" : ""
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr className="w-[90%] self-center mt-10 border-1 border-zinc-300" />
    </section>
  );
};

export default Experinces;
