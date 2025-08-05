"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const NasTym = () => {
  return (
    <div className="bg-secondary">
      <div className="mx-8 lg:mx-auto py-16 max-w-5xl">
        <style jsx global>{`
          .team-swiper .swiper-slide {
            height: auto;
            display: flex;
          }
          .team-swiper .swiper-slide > div {
            flex: 1;
          }
        `}</style>
        <h2 className="text-center mb-8 ">Náš tým</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
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
          className="w-full team-swiper"
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
                Miroslav
                <br />
                Patrman
              </h3>
              <p className="mt-2">
                Hlavní trenér oddílu
                <br />
                Vizionář a
                <br />
                koordinátor projektu
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
                Klára
                <br />
                Patrmanová
              </h3>
              <p className="mt-2">
                Manažerka
                <br />
                Koordinátorka
                <br />
                projektů a dotací
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
                Monika
                <br />
                Patrmanová
              </h3>
              <p className="mt-2">
                Trenérka závodních
                <br />
                družstev
                <br />
                Koordinátor
                <br />
                sportovních soutěží
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
                Gabriel
                <br />
                Tichý
              </h3>
              <p className="mt-2">
                Trenér závodních
                <br />
                družstev
                <br />
                Kondiční trenér
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
                Sůvová
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
                Eliška
                <br />
                Patrmanová
              </h3>
              <p className="mt-2">
                Fyzioterapeutka
                <br />
                Trenérka
                <br />
                Transformativní
                <br />
                koučka
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
                Kamila
                <br />
                Brücklerová
              </h3>
              <p className="mt-2">
                Správce
                <br />
                členské základny
                <br />
                Trenérka
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
                Křiklavová
              </h3>
              <p className="mt-2">Vedoucí recepce</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NasTym;
