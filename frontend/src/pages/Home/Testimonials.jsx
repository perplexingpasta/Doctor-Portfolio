import customer1 from "../../assets/home/customer1.jpeg";
import customer2 from "../../assets/home/customer2.svg";
import customer3 from "../../assets/home/customer3.jpg";

const Testimonials = () => {
  return (
    <div className="font-montserrat">
      <header className="flex w-full items-center justify-center text-2xl font-semibold text-gray-800 md:text-4xl">
        What do our patients think?
      </header>
      <h3 className="flex items-center justify-center font-normal text-gray-500 md:text-3xl">
        Some genuine feedback from our patients!
      </h3>

      <div className="mx-5 flex flex-col items-center px-10 md:flex-row md:justify-between">
        <div className="flex flex-col items-center justify-center py-8">
          <img
            src={customer1}
            alt="Customer Image"
            className="h-[120px] w-[120px] rounded-full object-cover"
          />
          <p className="mt-3 max-w-sm pb-2 text-center text-slate-gray md:mt-6 md:text-lg">
            The attention to detail and the quality of the product was mind
            blowing. Highly recommended!
          </p>
          <h3 className="text-center font-palanquin text-xl font-bold md:text-2xl">
            Morich Brown
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center py-8">
          <img
            src={customer2}
            alt="Customer Image"
            className="h-[120px] w-[120px] rounded-full object-cover"
          />
          <p className="mt-3 max-w-sm pb-2 text-center text-slate-gray md:mt-6 md:text-lg">
            The product not only met but exceeded my expectations. I&apos;ll
            definitely be a returning customer!
          </p>
          <h3 className="text-center font-palanquin text-xl font-bold md:text-2xl">
            Stronie Njork
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center py-8">
          <img
            src={customer3}
            alt="Customer Image"
            className="h-[120px] w-[120px] rounded-full object-cover"
          />
          <p className="mt-3 max-w-sm pb-2 text-center text-slate-gray md:mt-6 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            alias deleniti distinctio dolorem ratione.
          </p>
          <h3 className="text-center font-palanquin text-xl font-bold md:text-2xl">
            Adam Gulliver
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
