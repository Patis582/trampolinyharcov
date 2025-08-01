import React from "react";

const Dotazy = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-7xl mx-auto px-8 lg:px-32">
        <div className="flex flex-col gap-8 py-8 lg:flex-row lg:justify-between">
          <div className="lg:max-w-md">
            <h2>Často kladené dotazy</h2>
            <p className="mt-4">
              Máte otázku, nebo něčemu nerozumíte? Možná odpověď najdete v často
              kladených dotazech
            </p>
          </div>
          <div className="lg:max-w-2xl">
            <div className="collapse collapse-arrow border-b border-gray-300 rounded-none">
              <input type="radio" name="my-accordion-1" defaultChecked />
              <div className="collapse-title px-0">
                <h3>Kdy bude centrum postaveno?</h3>
              </div>
              <div className="collapse-content -mt-3 px-0">
                <p>
                  Stavba centra závisí na získání potřebných povolení a
                  financování. Odhadujeme zahájení stavby v roce 2025.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-b border-gray-300 rounded-none">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title px-0">
                <h3>Jaké aktivity bude centrum nabízet?</h3>
              </div>
              <div className="collapse-content -mt-3 px-0">
                <p>
                  Centrum bude zaměřené na trampolínové sporty, gymnastiku,
                  parkour a kondiční cvičení pro všechny věkové kategorie.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-b border-gray-300 rounded-none">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title px-0">
                <h3>Jak mohu podpořit projekt?</h3>
              </div>
              <div className="collapse-content -mt-3 px-0">
                <p>
                  Můžete nás podpořit sdílením projektu, dobrovolnickou pomocí
                  nebo finančními příspěvky. Kontaktujte nás pro více informací.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-b border-gray-300 rounded-none">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title px-0">
                <h3>Kde získám více informací?</h3>
              </div>
              <div className="collapse-content -mt-3 px-0">
                <p>
                  Více informací najdete na našich webových stránkách nebo nás
                  můžete kontaktovat přímo prostřednictvím kontaktního
                  formuláře.
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
