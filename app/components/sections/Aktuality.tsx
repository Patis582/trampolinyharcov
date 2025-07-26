"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Aktuality = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination]}
        className="rounded-xl overflow-hidden"
      >
        <SwiperSlide>
          <div className="h-64 bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-green-500 flex items-center justify-center text-white text-3xl font-bold">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-red-500 flex items-center justify-center text-white text-3xl font-bold">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Aktuality;
