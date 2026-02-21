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

      {/* Gradienty pro čitelnost textu */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)),
            linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(0,0,0,0))
          `,
        }}
      />

      {/* Obsah hero sekce */}
      <div className="relative z-10 w-full h-full px-8 lg:px-32 flex flex-col justify-center gap-8">
        <div>
          <h1 className="text-white mb-2">Trampoliny Harcov</h1>
          <p className="text-white max-w-lg">
            V Harcově brzy vyroste moderní sportovní centrum zaměřené na skoky
            na trampolíně a další pohybové aktivity. Přidejte se k nám, podpořte
            výstavbu nebo se zapojte do tréninků v našich stávajících halách v
            Liberci.
          </p>
        </div>
        <Button href="#projekt" filled={true}>
          O projektu
        </Button>
      </div>
    </div>
  );
};

export default Hero;
