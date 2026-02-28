import React from "react";
import { FaDownload, FaPlay } from "react-icons/fa";
import Button from "../Button";

const Prezentace = () => {
  return (
    <div className="text-center px-8">
      <div className="text-center mb-12">
        <h2 className="mb-4">Prezentace projektu</h2>
        <p className="text-gray-700 flex items-center justify-center gap-2 text-lg">
          <FaPlay className="text-primary" />
          Projděte si interaktivní prezentaci projektu
        </p>
      </div>
      <div className="lg:mx-auto max-w-5xl mb-12">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg-modern border border-gray-200">
          <iframe
            loading="lazy"
            className="absolute inset-0 w-full h-full border-none"
            src="https://www.canva.com/design/DAGcGuwreUU/pnYFAFgJo1VFtTXkHKaKuw/view?embed"
            allowFullScreen={true}
            allow="fullscreen"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <Button
          filled={true}
          href="/assets/prezentace-trampoliny-harcov.pdf"
          target="_blank"
          download
        >
          <FaDownload className="mr-2" />
          Stáhnout PDF
        </Button>

        <Button
          filled={false}
          href="https://www.canva.com/design/DAGcGuwreUU/pnYFAFgJo1VFtTXkHKaKuw/view?utm_content=DAGcGuwreUU&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
        >
          Otevřít v novém okně
        </Button>
      </div>

      {/* Additional info */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <h3 className="font-semibold mb-4 text-lg">V prezentaci najdete:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-700">
            <div className="flex flex-col items-center gap-3">
              <span className="text-3xl">📍</span>
              <span className="font-medium">Umístění projektu</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-3xl">🏗️</span>
              <span className="font-medium">Architektonické návrhy</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-3xl">💰</span>
              <span className="font-medium">Rozpočet a finance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prezentace;
