import React from "react";
import { FaDownload, FaPlay } from "react-icons/fa";
import Button from "../Button";

const Prezentace = () => {
  return (
    <div className="text-center">
      <div className="text-center mb-6">
        <h2 className="mb-2">Prezentace projektu</h2>
        <p className="text-gray-600 flex items-center justify-center gap-2">
          <FaPlay />
          Klikněte pro zobrazení interaktivní prezentace
        </p>
      </div>
      <div className="px-8 sm:px-16 md:px-32 lg:px-32 lg:mx-auto max-w-7xl mb-8">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-secondary">
          <iframe
            loading="lazy"
            className="absolute inset-0 w-full h-full border-none"
            src="https://www.canva.com/design/DAGcGuwreUU/pnYFAFgJo1VFtTXkHKaKuw/view?embed"
            allowFullScreen={true}
            allow="fullscreen"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          filled
          href="/assets/prezentace-trampoliny-harcov.pdf"
          target="_blank"
          download
          textBlackOnHover
        >
          <FaDownload className="mr-2" />
          Prezentace ke stažení
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
      <div className="mt-8 max-w-2xl mx-auto">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Co najdete v prezentaci:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>📍 Umístění projektu</div>
            <div>🏗️ Plány stavby</div>
            <div>💰 Rozpočet a financování</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prezentace;
