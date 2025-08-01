import Aktuality from "./components/sections/Aktuality";
import CoToJe from "./components/sections/CoToJe";
import Dotazy from "./components/sections/Dotazy";
import Hero from "./components/sections/Hero";
import Onas from "./components/sections/Onas";
import OProjektu from "./components/sections/OProjektu";
import Prispet from "./components/sections/Prispet";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-44 lg:gap-75 bg-background">
        <Hero />
        <CoToJe />
        <OProjektu />
        <Dotazy />
        <Onas />
        <Prispet />
        <Aktuality />
      </div>
    </>
  );
}
