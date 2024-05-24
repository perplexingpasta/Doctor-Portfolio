import FAQCard from "./FAQCard";
import { faqData } from "../../indexArrays";

/* eslint-disable react/no-unescaped-entities */
const FAQs = () => {
  return (
    <div className="pb-16 pt-28 font-montserrat md:pb-28 md:pt-40 lg:pt-44">
      <header className="flex flex-col items-center justify-center text-[2.2rem] font-semibold lg:text-4xl ">
        <div>
          FAQs
          <div className="relative w-[12vw] border-t-[5px] border-red-300 md:w-[8vw] md:border-t-[6px] lg:w-[6vw]"></div>
        </div>
      </header>

      {/* QUESTIONS AND ANSWERS */}
      <div className="mx-auto flex max-w-[80vw] flex-col items-center justify-center md:max-w-[72vw] lg:mt-12 lg:max-w-[65vw]">
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
        <div className="text-sm font-medium md:text-base lg:text-lg">
          {faqData.map((faq, index) => (
            <FAQCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
