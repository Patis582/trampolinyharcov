"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { client, urlFor } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const Aktuality = () => {
  const [aktuality, setAktuality] = useState([]);

  useEffect(() => {
    const fetchAktuality = async () => {
      const data = await client.fetch(`*[_type == "aktualita"]`);
      console.log("Data ze Sanity:", data); // Pro test
      setAktuality(data);
    };

    fetchAktuality();
  }, []);

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
        {aktuality.map((aktualita: any) => (
          <SwiperSlide key={aktualita._id}>
            <div className="h-64 flex items-center justify-center text-white text-xl font-bold bg-cover bg-center" style={{backgroundImage: `url(${urlFor(aktualita.image).url()})`}}>
              {aktualita.title || 'Bez názvu'}
            </div>
          </SwiperSlide>
        ))}
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
