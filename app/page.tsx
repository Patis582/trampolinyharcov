import CoToJe from "./components/sections/CoToJe";
import Dotazy from "./components/sections/Dotazy";
import Hero from "./components/sections/Hero";
import Onas from "./components/sections/Onas";
import OProjektu from "./components/sections/OProjektu";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-44">
        <div>
          <NavBar></NavBar>
          <Hero />
        </div>
        <CoToJe />
        <OProjektu/>
        <Dotazy />
        <Onas/>
      </div>
    </>
  );
}
