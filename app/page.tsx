import Aktuality from "./components/sections/Aktuality";
import CoToJe from "./components/sections/CoToJe";
import Dotazy from "./components/sections/Dotazy";
import Footer from "./components/sections/Footer";
import Galerie from "./components/sections/Galerie";
import Hero from "./components/sections/Hero";
import Kontakt from "./components/sections/Kontakt";
import NasTym from "./components/sections/NasTym";
import Onas from "./components/sections/Onas";
import OProjektu from "./components/sections/OProjektu";
import Parametry from "./components/sections/Parametry";
import Prezentace from "./components/sections/Prezentace";
import Prispet from "./components/sections/Prispet";

export default function Home() {
  return (
    <div className="flex flex-col gap-44 lg:gap-75">
      <div id="hero">
        <Hero />
      </div>
      <div id="co-to-je">
        <CoToJe />
      </div>
      <div id="projekt">
        <OProjektu />
      </div>
      <div>
        <Prezentace/>
      </div>
      <div id="dotazy">
        <Dotazy />
      </div>
      <div id="o-nas">
        <Onas />
      </div>
      <div id="podporit">
        <Prispet />
      </div>
      <div id="aktuality">
        <Aktuality />
      </div>
      <div id="galerie">
        <Galerie />
      </div>
      <div id="nas-tym">
        <NasTym />
      </div>
      <div id="kontakt">
        <Kontakt />
      </div>
    </div>
  );
}
