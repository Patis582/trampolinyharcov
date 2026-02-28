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

      <div className="flex flex-col gap-20 items-center md:items-stretch justify-center w-full md:flex-row">
        <div className="rounded-2xl overflow-hidden w-full max-w-md shadow-md-modern card-hover flex flex-col bg-white">
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
                alt="Tričko Harcov - barevné provedení 1"
                width={400}
                height={400}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-cover w-full h-72 lg:h-84"
                src={"/images/triko2.jpeg"}
                alt="Tričko Harcov - barevné provedení 2"
                width={400}
                height={400}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-cover w-full h-72 lg:h-84"
                src={"/images/triko3.jpeg"}
                alt="Tričko Harcov - barevné provedení 3"
                width={400}
                height={400}
              />
            </SwiperSlide>
          </Swiper>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="mb-2">Tričko Harcov</h3>
            <p className="mt-4 flex-1 text-gray-700 leading-relaxed">
              Podpořte projekt zakoupením stylového trička. Část z každé nákupu
              jde přímo na výstavbu nového Trampolínového a pohybového centra v
              Liberci.
            </p>
            <div className="mt-8 flex justify-between items-center gap-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-gray-600 text-sm mb-1">Cena za kus</p>
                <p className="font-bold text-2xl text-primary">699 kč</p>
              </div>
              <Button
                target="_blank"
                href="https://docs.google.com/forms/d/1sFaS679WSXnz6Vgur25O71lhO-24hllCICnML7ZibR0/preview"
                filled={true}
              >
                Koupit
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden w-full max-w-md shadow-md-modern card-hover flex flex-col bg-white">
          <div className="bg-primary/5 p-8 h-72 lg:h-84 flex items-center justify-center">
            <Image
              className="object-contain w-full h-full max-w-xs"
              src={"/images/QR_transparentni_ucet.jpg"}
              alt="QR kód pro překlad na transparentní účet"
              width={400}
              height={400}
            />
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="mb-2">Transparentní účet</h3>
            <p className="mt-4 flex-1 text-gray-700 leading-relaxed">
              Pošlete libovolný příspěvek. Každá koruna pomáhá realizovat
              projekt a vybudovat moderní centrum.
            </p>
            <div className="mt-8 flex justify-end pt-4 border-t border-gray-100">
              {/* TODO: Doplnit URL transparentního účtu */}
              <Button href="#" filled={true}>
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
