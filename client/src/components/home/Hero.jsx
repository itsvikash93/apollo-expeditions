import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Explore the ancient Brihadishwara Temple",
    },
    {
      src: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Discover the beauty of Tanjore",
    },
    {
      src: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Unwind in the serene surroundings",
    },
  ];

  return (
    <>
      <div className="relative top-0 h-[80vh] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full relative">
              <img
                src={image.src}
                alt={`Hero Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-80 -translate-y-1/2 Third text-center">
                <h2 className="text-7xl custom-font tracking-wider w-[90%]">{image.text}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="h-20 w-[150%] bg_Third absolute -left-10 -bottom-10 z-10 blur-md"></div> */}
      </div>
    </>
  );
};

export default Hero;
