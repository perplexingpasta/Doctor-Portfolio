/* eslint-disable react/prop-types */
const ServiceItem = ({ title, description }) => {
  return (
    <p className="font-montserrat text-sm md:text-base md:leading-relaxed lg:text-lg lg:leading-6">
      <span>{title}</span> :{" "}
      <span className="text-gray-700">{description}</span>
    </p>
  );
};

export default ServiceItem;
