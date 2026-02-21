import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Kontakt = () => {
  return (
    <div className="px-8 md:px-16 lg:mx-auto max-w-5xl w-full">
      <h2 className="text-center mb-8">Kontakt</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-secondary flex flex-col p-8 rounded-2xl h-full">
          <div className="flex items-center gap-2 mb-4">
            <MdLocalPhone className="text-contact-icon text-2xl" />
            <h3>Zavolejte nám</h3>
          </div>
          <p>
            <a
              className="hover:text-primary transition-colors"
              href="tel:+420605285590"
            >
              +420 605 285 590
            </a>{" "}
            - Klára Patrmanová
          </p>
          <p>
            <a
              className="hover:text-primary transition-colors"
              href="tel:+420604245971"
            >
              +420 604 245 971
            </a>{" "}
            - Miroslav Patrman
          </p>
        </div>
        <div className="bg-secondary flex flex-col p-8 rounded-2xl h-full">
          <div className="flex items-center gap-2 mb-4">
            <MdPlace className="text-contact-icon text-2xl" />
            <h3>Místo</h3>
          </div>
          <a
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/50%C2%B046'36.3%22N+15%C2%B005'53.2%22E/@50.7765288,15.0957564,1031m/data=!3m1!1e3!4m4!3m3!8m2!3d50.7767436!4d15.0981189?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
          >
            Liberec Harcov (bývalá střelnice Harcov) 50.7767436N, 15.0981189E
          </a>
        </div>
        <div className="bg-secondary flex flex-col p-8 rounded-2xl h-full">
          <div className="flex items-center gap-2 mb-4">
            <IoMdGlobe className="text-contact-icon text-2xl" />
            <h3>Web</h3>
          </div>
          <a
            className="hover:text-primary transition-colors"
            href="https://www.trampoliny.cz/trampoliny-liberec/"
          >
            Trampoliny Liberec
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="https://www.trampoliny.cz/sluzby/"
          >
            Trampoliny Patrman
          </a>
        </div>
        <div className="bg-secondary flex flex-col p-8 rounded-2xl h-full">
          <div className="flex items-center gap-2 mb-4">
            <MdEmail className="text-contact-icon text-2xl" />
            <h3>Email</h3>
          </div>
          <a
            className="hover:text-primary transition-colors"
            href="mailto:kpatrmanova@gmail.com"
          >
            kpatrmanova@gmail.com
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="mailto:mirapatrman@gmail.com"
          >
            mirapatrman@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
