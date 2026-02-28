import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Kontakt = () => {
  return (
    <div className="px-8 md:px-16 lg:mx-auto max-w-5xl w-full">
      <div className="mb-12">
        <h2 className="text-center">Kontakt</h2>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Chcete nás kontaktovat? Zvolte si váš preferovaný způsob komunikace.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-secondary flex flex-col p-8 rounded-2xl h-full card-hover border border-transparent hover:border-primary/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white rounded-xl card-hover">
              <MdLocalPhone className="text-contact-icon text-2xl" />
            </div>
            <h3 className="text-xl">Zavolejte nám</h3>
          </div>
          <div className="space-y-2 flex-1">
            <p>
              <a
                className="hover:text-primary transition-colors font-medium"
                href="tel:+420605285590"
              >
                +420 605 285 590
              </a>
              <span className="text-gray-600 text-sm ml-2">
                Klára Patrmanová
              </span>
            </p>
            <p>
              <a
                className="hover:text-primary transition-colors font-medium"
                href="tel:+420604245971"
              >
                +420 604 245 971
              </a>
              <span className="text-gray-600 text-sm ml-2">
                Miroslav Patrman
              </span>
            </p>
          </div>
        </div>

        <div className="bg-secondary flex flex-col p-8 rounded-2xl h-full card-hover border border-transparent hover:border-primary/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white rounded-xl card-hover">
              <MdPlace className="text-contact-icon text-2xl" />
            </div>
            <h3 className="text-xl">Místo</h3>
          </div>
          <a
            className="hover:text-primary transition-colors font-medium"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/50%C2%B046'36.3%22N+15%C2%B005'53.2%22E/@50.7765288,15.0957564,1031m/data=!3m1!1e3!4m4!3m3!8m2!3d50.7767436!4d15.0981189?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
          >
            Liberec Harcov
            <br />
            (bývalá střelnice Harcov)
            <br />
            <span className="text-gray-600 text-sm">
              50.7767436°N, 15.0981189°E
            </span>
          </a>
        </div>

        <div className="bg-secondary flex flex-col p-8 rounded-2xl h-full card-hover border border-transparent hover:border-primary/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white rounded-xl card-hover">
              <IoMdGlobe className="text-contact-icon text-2xl" />
            </div>
            <h3 className="text-xl">Web</h3>
          </div>
          <div className="space-y-2 flex-1">
            <a
              className="hover:text-primary transition-colors font-medium block"
              href="https://www.trampoliny.cz/trampoliny-liberec/"
            >
              Trampoliny Liberec
            </a>
            <a
              className="hover:text-primary transition-colors font-medium block"
              href="https://www.trampoliny.cz/sluzby/"
            >
              Trampoliny Patrman
            </a>
          </div>
        </div>

        <div className="bg-secondary flex flex-col p-8 rounded-2xl h-full card-hover border border-transparent hover:border-primary/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white rounded-xl card-hover">
              <MdEmail className="text-contact-icon text-2xl" />
            </div>
            <h3 className="text-xl">Email</h3>
          </div>
          <div className="space-y-2 flex-1">
            <a
              className="hover:text-primary transition-colors font-medium block"
              href="mailto:kpatrmanova@gmail.com"
            >
              kpatrmanova@gmail.com
            </a>
            <a
              className="hover:text-primary transition-colors font-medium block"
              href="mailto:mirapatrman@gmail.com"
            >
              mirapatrman@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
