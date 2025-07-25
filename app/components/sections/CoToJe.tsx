import React from "react";
import Button from "@/app/components/Button";

const CoToJe = () => {
  return (
    <div className="flex flex-col items-center mx-8 gap-8">
      <div>
        <h2 className="text-center">Trampolínové <br /> a pohybové centrum</h2>
        <p className="text-center mt-4 max-w-124">
          Cílem našeho projektu je vytvořit multifunkční sportovní centrum
          lokalizované v přírodě, které nabídne moderní a profesionální zázemí
          pro pohybové nadšence všech věkových kategorií a dovedností. V obou
          halách, kde nyní trénujeme jsme v nájmu a budoucnost naší další
          možnosti trénovat v nich je velmi nejistá.
        </p>
      </div>
      <Button href="#" filled={false}>
        O projektu
      </Button>
    </div>
  );
};

export default CoToJe;
