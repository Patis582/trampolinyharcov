'use client'
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Prispet = () => {
  return (
    <div className="flex flex-col gap-16 items-center md:items-stretch justify-center px-8 md:flex-row lg:px-32">
      <div className="rounded-2xl overflow-hidden w-full max-w-md shadow-md flex flex-col">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={2000}
          className="w-full h-72 lg:h-84"
        >
          <SwiperSlide>
            <Image
              className="object-cover w-full h-72 lg:h-84"
              src={"/images/triko1.jpeg"}
              alt="obrazek"
              width={400}
              height={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="object-cover w-full h-72 lg:h-84"
              src={"/images/triko2.jpeg"}
              alt="obrazek"
              width={400}
              height={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="object-cover w-full h-72 lg:h-84"
              src={"/images/triko3.jpeg"}
              alt="obrazek"
              width={400}
              height={400}
            />
          </SwiperSlide>
        </Swiper>
        <div className="rounded-2xl bg-white p-6 flex-1 flex flex-col">
          <h3>Tričko</h3>
          <p className="mt-4 flex-1">
            Mám zájem o triko Harcov, přičemž část z jeho ceny půjde na
            projektovou dokumentaci a výstavbu nového Trampolínového a
            pohybového centra v Liberci.
          </p>
          <div className="mt-8 flex justify-between items-center">
            <p className="font-bold text-xl">699 kč</p>
            <Button
              target="_blank"
              href="https://docs.google.com/forms/d/1sFaS679WSXnz6Vgur25O71lhO-24hllCICnML7ZibR0/preview"
              filled={false}
            >
              Koupit
            </Button>
          </div>
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden w-full max-w-md shadow-md flex flex-col">
        <Image
          className="object-contain w-full h-72 lg:h-84"
          src={"/images/QR_transparentni_ucet.jpg"}
          alt="obrazek"
          width={400}
          height={400}
        />
        <div className="rounded-2xl bg-white p-6 flex-1 flex flex-col">
          <h3>Transparentní účet</h3>
          <p className="mt-4 flex-1">
            Částka bude použita na projektovou dokumentaci a výstavbu centra
          </p>
          <div className="mt-8 flex justify-between items-center">
            <p className="font-bold text-xl">699 kč</p>
            <Button href="#" filled={false}>
              Přispět
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prispet;
