import customer1 from "../../assets/home/customer1.jpeg";
import customer2 from "../../assets/home/customer2.svg";
import customer3 from "../../assets/home/customer3.jpg";

const Testimonials = () => {
  return (
    <div>
      <header className="flex w-full items-center justify-center font-montserrat text-4xl font-semibold text-gray-800">
        What do our patients think?
      </header>
      <h3 className="flex items-center justify-center font-montserrat text-3xl font-normal text-gray-500">
        Some genuine feedback from our amazing patients!
      </h3>

      <div className="mx-5 mt-8 flex items-center justify-around px-10">
        <div className="flex flex-col items-center justify-center">
          <img
            src={customer1}
            alt="Customer Image"
            className="h-[120px] w-[120px] rounded-full object-cover"
          />
          <p className="info-text mt-6 max-w-sm text-center">
            The attention to detail and the quality of the product was mind
            blowing. Highly recommended!
          </p>
          <h3 className="text-center font-palanquin text-3xl font-bold">
            Morich Brown
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src={customer2}
            alt="Customer Image"
            className="h-[120px] w-[120px] rounded-full object-cover"
          />
          <p className="info-text mt-6 max-w-sm text-center">
            The product not only met but exceeded my expectations. I&apos;ll
            definitely be a returning customer!
          </p>
          <h3 className="text-center font-palanquin text-3xl font-bold">
            Stronie Njork
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src={customer3}
            alt="Customer Image"
            className="h-[120px] w-[120px] rounded-full object-cover"
          />
          <p className="info-text mt-6 max-w-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            alias deleniti distinctio dolorem ratione neque?.
          </p>
          <h3 className="text-center font-palanquin text-3xl font-bold">
            Adam Gulliver
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
