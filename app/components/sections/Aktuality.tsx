"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { client, urlFor } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Button from "../Button";
import { useAktuality } from "@/app/hooks/useAktuality";
import { aktualita } from "@/sanity/schemaTypes/aktualita";

const Aktuality = () => {
  const { aktuality, loading, error } = useAktuality();

  if (loading) {
    return (
      <div className="mx-auto">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-8 min-w-0 w-full">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto p-8 min-w-0 w-full">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination]}
        className="rounded-xl overflow-hidden"
      >
        {aktuality.map((aktualita: any) => (
          <SwiperSlide key={aktualita._id}>
            <div
              className="h-96 flex items-start justify-end flex-col gap-4 text-white bg-cover bg-center px-12 md:px-16 py-8"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3)),
                url(${urlFor(aktualita.image).url()})`,
              }}
            >
              <div>
                <h3>{aktualita.title || "Bez názvu"}</h3>
                <p className="line-clamp-4 lg:line-clamp-3">{aktualita.text}</p>
              </div>
              <Button href={`/aktualita/${aktualita._id}`} filled={false} textWhite>
                Více
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-8 flex justify-center">
        <Button href="#galerie" filled textBlackOnHover>
          Fotky z proběhnutých akcí
        </Button>
      </div>
    </div>
  );
};

export default Aktuality;
