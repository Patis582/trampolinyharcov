"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaHandHoldingHeart, FaSignal, FaShirt } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Prispet = () => {
  return (
    <div className="flex flex-col gap-12 lg:gap-16 items-center lg:px-32 px-8">
      <div className="max-w-4xl text-center flex flex-col gap-6">
        <h2 className="text-center">Možnosti podpory</h2>
        <p className="text-lg">
          Váš dar nebo partnerství nám pomůže vybudovat moderní zázemí pro sport
          v Liberci. Každý příspěvek nás posouvá blíže k cíli.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col items-center text-center">
            <div className="text-5xl text-primary mb-4">
              <FaHandHoldingHeart />
            </div>
            <h4 className="font-bold mb-3 text-base">Finanční podpora</h4>
            <p className="text-sm text-gray-600 flex-1">
              Libovolný příspěvek na náš transparentní účet na podporu výstavby
              a provozu centra.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col items-center text-center">
            <div className="text-5xl text-primary mb-4">
              <FaSignal />
            </div>
            <h4 className="font-bold mb-3 text-base">Banner v halách</h4>
            <p className="text-sm text-gray-600 flex-1">
              Pro firmy nabízíme možnost umístění reklamního banneru v našich
              stávajících i nových halách.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col items-center text-center">
            <div className="text-5xl text-primary mb-4">
              <FaShirt />
            </div>
            <h4 className="font-bold mb-3 text-base">Zakoupení trika</h4>
            <p className="text-sm text-gray-600 flex-1">
              Podpořte nás zakoupením stylového trička Harcov. Část výtěžku jde
              přímo na projekt.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-16 items-center md:items-stretch justify-center w-full md:flex-row">
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
            <div className="mt-8 flex justify-end items-center">
              {/* TODO: Doplnit URL transparentního účtu */}
              <Button href="#" filled={false}>
                Přispět
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prispet;
