import Image from "next/image";
import React from "react";
import { FaTree } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const OProjektu = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:px-32 gap-8">
      <div className="flex flex-col px-8 sm:px-16 md:px-32 lg:px-0 gap-8 flex-1">
        <Image
          src={"/images/hala6.jpg"}
          alt="fotka"
          width={400}
          height={800}
          className="w-full object-cover rounded-2xl"
        />
        <div className="h-full flex flex-col justify-start items-center bg-secondary rounded-2xl p-8">
          <FaLocationDot className="text-5xl text-primary" />
          <h3 className="pt-6">Místo</h3>
          <p className="pt-2">
            Místem pro plánovanou stavbu je areál bývalé střelnice v Harcově
            situovaný na severovýchodním okraji Liberce. Střelnice je umístěna v
            úzkém údolí Černého potoka. Údolí vede severojižním směrem, jeho
            svahy jsou zalesněné a dno zatravněné bez vzrostlé zeleně. Rovinatá
            plocha má celkové rozměry cca 30 x 250 m. l. Pozemek je pro dopravu
            přístupný v dolní částí údolí stávajícím sjezdem z ulice Jizerská.
            Po východním okraji prochází celým údolím účelová komunikace šířky
            cca 3 m se štěrkovým povrchem.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-col-reverse px-8 sm:px-16 md:px-32 lg:px-0 gap-8 flex-1">
        <Image
          src={"/images/interier.jpg"}
          alt="fotka"
          width={400}
          height={800}
          className="w-full object-cover rounded-2xl"
        />
        <div className="h-full flex flex-col justify-center items-center bg-secondary rounded-2xl p-8">
          <FaBuilding className="text-5xl text-primary"/>
          <h3 className="pt-6">O centru</h3>
          <p className="pt-2">
            Navrhované sportovní centrum je situováno ve střední části plochy
            bývalé střelnice. Sportovní centrum má jednoduchý obdélníkový
            půdorys o rozměrech 65 x 26,2 m. Tvoří ho tři nestejně velké části,
            které jsou propojeny stavebně i provozně. Malou a velkou sportovní
            halu propojuje střední část, ve které je umístěn hlavní vstup do
            centra a zázemí. Stavba se přizpůsobuje sklonitému tvaru pozemku a v
            podélném řezu je členěna do dvou výškových úrovní. V úrovni 1. P.P.
            je podlaha malé haly a na úrovni 1. N. P. je podlaha větší haly a
            hlavní vstup do centra. Haly mají různou světlou výšku s ohledem na
            výkonnostní úroveň sportu, která v nich bude provozována. Pro hlavní
            náplň centra jsou vyhrazeny dvě sportovní haly. ​Velká hala je
            určena nejen pro gymnastické sporty, parkout a kondiční cvičení a
            malá hala zejména pro skoky na trampolíně. Malá hala má v úrovni
            prvního nadzemního podlaží hlediště pro diváky.
          </p>
        </div>
      </div>

      <div className="flex flex-col px-8 sm:px-16 md:px-32 lg:px-0 gap-8 flex-1">
        <Image
          src={"/images/hala5.jpg"}
          alt="fotka"
          width={400}
          height={800}
          className="w-full object-cover rounded-2xl"
        />
        <div className="h-full flex flex-col justify-start items-center bg-secondary rounded-2xl p-8">
          <FaTree className="text-5xl text-primary"/>
          <h3 className="pt-6">Centrum a okolí</h3>
          <p className="pt-2">
            Předpokládá se využití venkovních ploch pro další sportovní aktivity
            a setkávání. Sportovní centrum se i přes svoji velikost snaží co
            nejvíce začlenit do okolního prostředí a nenarušovat okolí. Pro
            osobu pohybující se po ulici Jizerská není hala plně viditelná,
            protože je od komunikace vzdálena (cca 180 m) a umístěna až za
            zákrutem, které údolí na svém začátku vytváří. Kvůli svému zapuštění
            do terénu vystupuje hala nad okolní terén max. 8,2 m. Opláštění
            budovy je navrženo z dřevěných hranolů a latí bez povrchové úpravy.
            Střecha na obou halách je navržená jako ozeleněná.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OProjektu;
