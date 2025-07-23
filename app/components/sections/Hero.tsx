import React from "react";
import background from "../../../public/images/hero-background.jpg";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="mx-4 -mt-8 sm:mx-8">
      <div
        className="w-full h-[80vh] bg-cover bg-center rounded-4xl px-8 lg:px-32 flex flex-col justify-center gap-8"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)),
          linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(0,0,0,0)),
          url(${background.src})
        `,
        }}
      >
        <div>
          <h1 className="text-white mb-2">Trampoliny Harcov</h1>
          <p className="text-white max-w-lg">V Harcově brzy vyroste moderní sportovní centrum zaměřené na skoky na trampolíně a další pohybové aktivity. Přidejte se k nám, podpořte výstavbu nebo se zapojte do tréninků v našich stávajících halách v Liberci.</p>
        </div>
        <div>
            <Button href="#" filled>O projektu</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
