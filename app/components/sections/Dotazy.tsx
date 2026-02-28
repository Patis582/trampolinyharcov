import React from "react";

const Dotazy = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-7xl mx-auto px-8 lg:px-32 py-12">
        <div className="flex flex-col gap-12 lg:gap-16 lg:flex-row lg:justify-between">
          <div className="lg:max-w-md flex-shrink-0">
            <h2 className="mb-6">Často kladené dotazy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Máte otázku, nebo něčemu nerozumíte? Možná odpověď najdete v často
              kladených dotazech. Nebo nás{" "}
              <a
                href="#kontakt"
                className="text-primary font-medium hover:underline"
              >
                kontaktujte přímo
              </a>
              .
            </p>
          </div>
          <div className="lg:max-w-2xl w-full space-y-3">
            <div className="collapse collapse-arrow border border-gray-200 rounded-xl bg-white hover:border-primary/30 transition-colors">
              <input type="radio" name="my-accordion-1" defaultChecked />
              <div className="collapse-title px-6 py-4 font-semibold text-lg">
                <span className="text-primary mr-3">Q.</span>
                Kdy bude centrum postaveno?
              </div>
              <div className="collapse-content px-6 pb-4 pt-2">
                <p className="text-gray-700 leading-relaxed pl-8">
                  Stavba centra závisí na získání potřebných povolení a
                  financování. Odhadujeme zahájení stavby v roce 2025.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow border border-gray-200 rounded-xl bg-white hover:border-primary/30 transition-colors">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title px-6 py-4 font-semibold text-lg">
                <span className="text-primary mr-3">Q.</span>
                Jaké aktivity bude centrum nabízet?
              </div>
              <div className="collapse-content px-6 pb-4 pt-2">
                <p className="text-gray-700 leading-relaxed pl-8">
                  Centrum bude zaměřené na trampolínové sporty, gymnastiku,
                  parkour a kondiční cvičení pro všechny věkové kategorie.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow border border-gray-200 rounded-xl bg-white hover:border-primary/30 transition-colors">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title px-6 py-4 font-semibold text-lg">
                <span className="text-primary mr-3">Q.</span>
                Jak mohu podpořit projekt?
              </div>
              <div className="collapse-content px-6 pb-4 pt-2">
                <p className="text-gray-700 leading-relaxed pl-8">
                  Můžete nás podpořit sdílením projektu, dobrovolnickou pomocí
                  nebo finančními příspěvky. Navštivte sekci "Možnosti podpory"
                  pro víc informací.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow border border-gray-200 rounded-xl bg-white hover:border-primary/30 transition-colors">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title px-6 py-4 font-semibold text-lg">
                <span className="text-primary mr-3">Q.</span>
                Kde získám více informací?
              </div>
              <div className="collapse-content px-6 pb-4 pt-2">
                <p className="text-gray-700 leading-relaxed pl-8">
                  Více informací najdete v sekci "O projektu" nebo nás můžete
                  kontaktovat přímo v sekci "Kontakt".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dotazy;
