import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

const Hero = () => {
  return (
    <div className="-mt-8 sm:mx-8 relative h-[80vh] overflow-hidden sm:rounded-4xl">
      {/* Hlavní LCP obrázek */}
      <Image
        src="/images/hero-background.jpg"
        alt="Trampolíny Harcov - Moderní sportovní centrum"
        fill
        priority
        fetchPriority="high"
        quality={90}
        className="object-cover"
      />

      {/* Gradienty pro čitelnost textu - zlepšený kontrast */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: `
            linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%),
            linear-gradient(to top, rgba(0,0,0,0.4), transparent)
          `,
        }}
      />

      {/* Obsah hero sekce */}
      <div className="relative z-10 w-full h-full px-8 lg:px-32 flex flex-col justify-center gap-10">
        <div className="max-w-2xl">
          <h1 className="text-white mb-4 font-bold">Trampoliny Harcov</h1>
          <p className="text-white/95 max-w-lg text-lg leading-relaxed">
            V Harcově brzy vyroste moderní sportovní centrum zaměřené na skoky
            na trampolíně a další pohybové aktivity. Přidejte se k nám, podpořte
            výstavbu nebo se zapojte do tréninků v našich stávajících halách v
            Liberci.
          </p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Button href="#projekt" filled={true}>
            O projektu
          </Button>
          <Button href="#podporit" filled={false} textWhite={true}>
            Podpořit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
