/* eslint-disable react/prop-types */
const FAQCard = ({ question, answer }) => {
  return (
    <>
      <p className="mt-6 leading-normal text-gray-800 font-semibold">
        Q: {question}
      </p>
      <p className="md:leading-6 lg:leading-8 text-gray-800">
        Ans: {answer}
      </p>
    </>
  );
};

export default FAQCard;
