"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { client, urlFor } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Button from "../Button";

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
              <Button href="#" filled={false} textWhite>
                Více
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-8 flex justify-center">
        <Button href="#" filled>Celý kalendář</Button>
      </div>
    </div>
  );
};

export default Aktuality;
