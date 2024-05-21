/* eslint-disable react/prop-types */
const ServiceItem = ({ title, description }) => {
  return (
    <p className="font-montserrat">
      <span className="font-montserrat text-lg leading-relaxed">
        {title}
      </span> : {" "}
      <span className="font-montserrat text-lg text-slate-gray leading-relaxed">
        {description}
      </span>
    </p>
  );
};

export default ServiceItem;
