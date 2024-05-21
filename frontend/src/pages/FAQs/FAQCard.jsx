/* eslint-disable react/prop-types */
const FAQCard = ({ question, answer }) => {
  return (
    <>
      <p className="font-montserrat text-lg font-medium leading-normal text-gray-800 mt-6">
        Q: {question}
      </p>
      <p className="font-montserrat text-lg leading-8 font-medium text-gray-500">
        Ans: {answer}
      </p>
    </>
  );
};

export default FAQCard;
