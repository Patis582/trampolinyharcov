import React from "react";
import Button from "@/app/components/Button";

const CoToJe = () => {
  return (
    <div className="flex flex-col items-center mx-8 gap-12 py-4">
      <div className="max-w-3xl text-center flex flex-col gap-8">
        <div>
          <h2 className="text-center mb-6">
            Trampolínové
            <br className="hidden sm:block" /> a pohybové centrum
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Cílem našeho projektu je vytvořit multifunkční sportovní centrum
            lokalizované v přírodě, které nabídne moderní a profesionální zázemí
            pro pohybové nadšence všech věkových kategorií a dovedností. V obou
            halách, kde nyní trénujeme jsme v nájmu a budoucnost naší další
            možnosti trénovat v nich je velmi nejistá.
          </p>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button href="#projekt" filled={true}>
            Více o projektu
          </Button>
          <Button href="#o-nas" filled={false}>
            Náš tým
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoToJe;
