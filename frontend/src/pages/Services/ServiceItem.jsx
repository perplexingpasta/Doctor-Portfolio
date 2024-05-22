/* eslint-disable react/prop-types */
const ServiceItem = ({ title, description }) => {
  return (
    <p className="font-montserrat">
      <span className="font-montserrat text-lg leading-relaxed">{title}</span> :{" "}
      <span className="font-montserrat text-lg leading-relaxed text-slate-gray">
        {description}
      </span>
    </p>
  );
};

export default ServiceItem;
