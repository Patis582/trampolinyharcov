import Image from "next/image";
import React from "react";
import Button from "../Button";

const Onas = () => {
  return (
    <div className="md:mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row mx-8 lg:mx-0 gap-12">
        <div className="relative w-full aspect-square mx-auto lg:mx-0 max-w-96 md:w-1/2 md:h-auto md:max-h-none md:aspect-auto flex-shrink-0">
          <Image
            src="/images/o-nas.jpg"
            alt="Klára a Miroslav Patrmanovi - zakladatelé projektu"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="md:flex md:flex-col md:justify-center text-center md:text-left md:w-1/2">
          <h2 className="mb-8">O nás</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Klára a Miroslav Patrmanovi. Společně provozujeme dvě sportovní
            centra v Liberci. Míra je u trampolín již přes 50 let. (závodník,
            trenér, reprezentační trenér, hlavní trenér oddílu Trampolíny
            Liberec) Podporu máme i v našich dětech, které již samy vedou další
            generaci ke zdravému pohybu a radosti z něj. Naši inspirací jsou Dan
            Millman, Tomáš Baťa, Pierre Franckh a sám Život.
          </p>
          <div className="bg-primary/5 rounded-xl p-6 mb-8 border-l-4 border-primary">
            <p className="text-center md:text-left font-medium italic text-gray-800">
              &quot;Chovejme se k lidem tak, jak si přejeme, aby se oni chovali
              k nám.&quot;
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <Button href="#projekt" filled={true}>
              O projektu
            </Button>
            <Button href="#nas-tym" filled={false}>
              Náš tým
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onas;
