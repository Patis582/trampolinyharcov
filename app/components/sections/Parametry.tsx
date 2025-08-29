import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaTree } from "react-icons/fa";

const Parametry = () => {
  return (
    <div className="grid grid-cols-1 px-8 gap-8">
      <Image
        src={"/images/hero-background.jpg"}
        alt="fotka"
        height={472}
        width={472}
        className="w-full object-cover rounded-2xl"
      />
      <div className="p-8 border-2 border-gray-200 rounded-2xl">
        <div className="flex gap-4 items-center mb-8">
          <FaLocationDot width={24} height={24} />
          <h3>Lokace</h3>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <FaTree className="text-primary" />
            <span>V přírodě mezi stromy</span>
          </div>
          <div className="flex items-center gap-4">
            <FaLocationDot className="text-primary" />
            <span>Na pozemku o velikosti 3200m2</span>
          </div>
          <p className="text-gray-500">
            Místem pro plánovan ou stavbu je areál bývalé střelnice v Harcově
            situovaný na severovýchodním okraji Liberce. Střelnice je umístěna v
            úzkém údolí Černého potoka. Údolí vede severojižním směrem, jeho
            svahy jsou zalesněné a dno zatravněné bez vzrostlé zeleně. Rovinatá
            plocha má celkové rozměry cca 30 x 250 m. l.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parametry;
