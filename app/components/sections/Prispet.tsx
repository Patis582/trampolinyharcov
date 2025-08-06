import Image from "next/image";
import React from "react";
import Button from "../Button";

const Prispet = () => {
  return (
    <div className="flex flex-col gap-16 items-center justify-center px-8 md:flex-row lg:px-32">
      <div className="rounded-2xl overflow-hidden w-full max-w-lg shadow-md">
        <Image
          className="object-cover w-full h-72 lg:h-84 -mb-4"
          src={"/images/triko1.jpeg"}
          alt="obrazek"
          width={400}
          height={400}
        />
        <div className="rounded-2xl bg-white p-6 z-50 relative">
          <h3>Tričko</h3>
          <p className="mt-4">
            Mám zájem o triko Harcov, přičemž část z jeho ceny půjde na
            projektovou dokumentaci a výstavbu nového Trampolínového a
            pohybového centra v Liberci.
          </p>
          <div className=" mt-8 flex justify-between">
            <p className="font-bold text-xl">699 kč</p>
            <Button href="#" filled={false}>
              Koupit
            </Button>
          </div>
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden w-full max-w-lg shadow-md">
        <Image
          className="object-cover w-full h-72 lg:h-84 -mb-4"
          src={"/images/hero-background.jpg"}
          alt="obrazek"
          width={400}
          height={400}
        />
        <div className="rounded-2xl bg-white p-6 z-50 relative">
          <h3>Transparentní účet</h3>
          <p className="mt-4">
            Částka bude použita na projektovou dokumentaci a výstavbu centra
          </p>
          <div className=" mt-8 flex justify-between">
            <p className="font-bold text-xl">699 kč</p>
            <Button href="#" filled={false}>
              Koupit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prispet;
