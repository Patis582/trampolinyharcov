import Image from "next/image";
import React from "react";
import Button from "../Button";

const Onas = () => {
  return (
    <div className="flex flex-col mx-8 md:flex-row gap-8 max-w-7xl">
        <Image
          src={"/images/hero-background.jpg"}
          alt="obrazek"
          width={524}
          height={524}
          className="rounded-2xl w-full md:h-full object-cover"
        />
      <div className="text-center md:flex md:flex-col md:text-left">
        <h2 className="mb-4">O nás</h2>
        <p className="mb-8">
          Klára a Miroslav Patrmanovi. Společně provozujeme dvě sportovní centra
          v Liberci. Míra je u trampolín již přes 50 let. (závodník, trenér,
          reprezentační trenér, hlavní trenér oddílu Trampolíny Liberec) Podporu
          máme i v našich dětech, které již samy vedou další generaci ke
          zdravému pohybu a radosti z něj. Naši inspirací jsou Dan Millman,
          Tomáš Baťa, Pierre Franckh a sám Život.. Naše motto: "Chovejme se k
          lidem tak, jak si přejeme, aby se oni chovali k nám."
        </p>
        <Button href="#" filled={false}>
          O projektu
        </Button>
      </div>
    </div>
  );
};

export default Onas;
