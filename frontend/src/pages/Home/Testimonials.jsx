import customer1 from "../../assets/home/customer1.jpeg";
import customer2 from "../../assets/home/customer2.svg";
import customer3 from "../../assets/home/customer3.jpg";

const Testimonials = () => {
  return (
    <div>
      <header className="w-full flex justify-center items-center font-montserrat font-semibold text-gray-800 text-4xl">
        What do our patients think?
      </header>
      <h3 className="font-montserrat flex justify-center items-center font-normal text-3xl text-gray-500">
        Some genuine feedback from our amazing patients!
      </h3>

      <div className="flex justify-around items-center mt-8">
        <div className="flex justify-center items-center flex-col">
          <img
            src={customer1}
            alt="Customer Image"
            className="rounded-full object-cover w-[120px] h-[120px]"
          />
          <p className="mt-6 max-w-sm text-center info-text">
            The attention to detail and the quality of the product was mind
            blowing. Highly recommended!
          </p>
          <h3 className="font-palanquin font-bold text-3xl text-center">
            Morich Brown
          </h3>
        </div>

        <div className="flex justify-center items-center flex-col">
          <img
            src={customer2}
            alt="Customer Image"
            className="rounded-full object-cover w-[120px] h-[120px]"
          />
          <p className="mt-6 max-w-sm text-center info-text">
            The product not only met but exceeded my expectations. I&apos;ll
            definitely be a returning customer!
          </p>
          <h3 className="font-palanquin font-bold text-3xl text-center">
            Stronie Njork
          </h3>
        </div>

        <div className="flex justify-center items-center flex-col">
          <img
            src={customer3}
            alt="Customer Image"
            className="rounded-full object-cover w-[120px] h-[120px]"
          />
          <p className="mt-6 max-w-sm text-center info-text">A professional.</p>
          <h3 className="font-palanquin font-bold text-3xl text-center">
            Adam Gulliver
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
