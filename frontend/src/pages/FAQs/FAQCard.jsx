/* eslint-disable react/prop-types */
const FAQCard = ({ question, answer }) => {
  return (
    <>
      <p className="mt-6 font-montserrat text-lg font-medium leading-normal text-gray-800">
        Q: {question}
      </p>
      <p className="font-montserrat text-lg font-medium leading-8 text-gray-500">
        Ans: {answer}
      </p>
    </>
  );
};

export default FAQCard;
