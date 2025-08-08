import Image from "next/image";
import React from "react";
import Button from "../Button";

const Onas = () => {
  return (
    <div className="md:mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row mx-8 lg:mx-0 gap-8 ">
        <div className="relative w-full aspect-square mx-auto lg:mx-0 max-w-96 md:w-1/2 md:h-auto md:max-h-none md:aspect-auto">
          <Image
            src="/images/o-nas.jpg"
            alt="obrazek"
            fill
            className="object-cover rounded-2xl center"
          />
        </div>
        <div className="text-center md:flex md:flex-col md:text-left md:w-1/2">
          <h2 className="mb-4">O nás</h2>
          <p className="mb-8">
            Klára a Miroslav Patrmanovi. Společně provozujeme dvě sportovní centra v Liberci. Míra je u
            trampolín již přes 50 let. (závodník, trenér, reprezentační trenér,
            hlavní trenér oddílu Trampolíny Liberec) Podporu máme i v našich
            dětech, které již samy vedou další generaci ke zdravému pohybu a
            radosti z něj. Naši inspirací jsou Dan Millman, Tomáš Baťa, Pierre
            Franckh<br/> a sám Život..<br/>Naše motto:<br/>"Chovejme se k lidem tak,<br/>jak si
            přejeme, <br/>aby se oni chovali k nám."
          </p>
          <Button href="#projekt" filled={false}>
            O projektu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onas;
