import FAQCard from "./FAQCard";
import { faqData } from "../../indexArrays";

/* eslint-disable react/no-unescaped-entities */
const FAQs = () => {
  return (
    <div className="pb-28 pt-44">
      <header className="absolute flex w-full items-center justify-center font-montserrat text-4xl font-semibold ">
        FAQs
      </header>

      {/* QUESTIONS AND ANSWERS */}
      <div className="mx-auto mt-20 flex max-w-[65vw] flex-col items-center justify-center">
        {/* <div className="mt-6">
          <p className="font-montserrat text-lg font-medium leading-normal text-gray-800">
            Q: Why do we exist?
          </p>
          <p className="font-montserrat text-lg leading-8 font-medium text-gray-500">
            Ans: Maybe just to suffer or procreate? It's just the universe
            experiencing itself; in a sense it's beautiful. Play stardew valley
            and stop thinking such useless thoughts.
          </p>
        </div> */}
        <div>
          {faqData.map((faq, index) => (
            <FAQCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
