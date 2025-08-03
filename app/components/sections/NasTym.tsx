"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const NasTym = () => {
  return (
    <div className="bg-secondary">
      <div className="mx-8 lg:mx-auto py-16 max-w-5xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          speed={2000}
          navigation={true}
          className="w-full"
        >
          <SwiperSlide>
            <div className="bg-white rounded-2xl flex flex-col items-center text-center p-8 h-full">
              <Image
                src={"/images/suova.png"}
                alt="tym foto"
                width={144}
                height={144}
                className="mx-auto"
              />
              <h3 className="mt-4">
                Michaela
                <br />
                Suova
              </h3>
              <p className="mt-2">
                Komunikace
                <br />s partenry
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-2xl flex flex-col items-center text-center p-8 h-full">
              <Image
                src={"/images/suova.png"}
                alt="tym foto"
                width={144}
                height={144}
                className="mx-auto"
              />
              <h3 className="mt-4">
                Michaela
                <br />
                Suova
              </h3>
              <p className="mt-2">
                Komunikace
                <br />s partenry
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-2xl flex flex-col items-center text-center p-8 h-full">
              <Image
                src={"/images/suova.png"}
                alt="tym foto"
                width={144}
                height={144}
                className="mx-auto"
              />
              <h3 className="mt-4">
                Michaela
                <br />
                Suova
              </h3>
              <p className="mt-2">
                Komunikace
                <br />s partenry
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-2xl flex flex-col items-center text-center p-8 h-full">
              <Image
                src={"/images/suova.png"}
                alt="tym foto"
                width={144}
                height={144}
                className="mx-auto"
              />
              <h3 className="mt-4">
                Michaela
                <br />
                Suova
              </h3>
              <p className="mt-2">
                Komunikace
                <br />s partenry
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-2xl flex flex-col items-center text-center p-8 h-full">
              <Image
                src={"/images/suova.png"}
                alt="tym foto"
                width={144}
                height={144}
                className="mx-auto"
              />
              <h3 className="mt-4">
                Michaela
                <br />
                Suova
              </h3>
              <p className="mt-2">
                Komunikace
                <br />s partenry
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NasTym;
