import React from "react";
import Button from "@/app/components/Button";

const CoToJe = () => {
  return (
    <div className="flex flex-col items-center mx-8 gap-12 py-4">
      <div className="max-w-3xl text-center flex flex-col gap-8">
        <div>
          <h2 className="text-center mb-6">
            Sportovní areál
            <br className="hidden sm:block" />Harcov
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            V Liberci - Harcově tvoříme sportovní areál pro širokou veřejnost, jehož součástí budou venkovní prvky pro pohybové aktivity (volejbal, basket, workout, trampolína, slackline...) a v budoucnu také Trampolínové a pohybové centrum zaměřené na gymnastiku, parkour a trampolíny.          </p>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button href="#projekt" filled={true}>
            Více o projektu
          </Button>
          <Button href="#o-nas" filled={false}>
            O nás
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoToJe;
