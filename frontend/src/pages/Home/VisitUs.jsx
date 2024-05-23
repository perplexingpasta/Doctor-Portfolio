const VisitUs = () => {
  return (
    <div className="flex w-full flex-col font-montserrat md:flex-row">
      {/* MAP */}
      <div className="md:w-1/2">
        <div className="h-[450px] w-screen pb-10 pr-16 md:w-[100%]  md:pr-0 lg:ml-24 lg:h-[550px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19860.446499044578!2d79.41248396210945!3d28.362942695098035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00170baffbf1f%3A0x38b58aa26e83be05!2sDr.%20Mohit%20Jindal%20E.N.T.%20Clinic!5e0!3m2!1sen!2sin!4v1716206667500!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            // allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:ml-16 md:w-1/2 lg:ml-44">
        <header className="text-2xl font-semibold text-gray-800 dark:text-gray-200 md:text-4xl">
          Visit Us
        </header>
        <p className="pt-2 font-normal text-gray-500 dark:text-gray-400 md:max-w-[100vw] md:pt-5 md:text-2xl md:leading-snug lg:max-w-[30vw] lg:leading-relaxed">
          Check out the map for our address.
          <br />
          The opening hours are as follows:
          <p className="text-base font-semibold md:text-2xl">
            Mon - Sat{" "}
            <span className="ml-10 font-normal md:ml-12 md:leading-snug lg:ml-32 lg:leading-relaxed">
              9am to 9pm*
            </span>
          </p>
          <p className="text-base font-semibold md:text-2xl">
            Sun{" "}
            <span className="ml-[5.4rem] font-normal md:ml-[7.3rem] md:leading-snug lg:ml-[12.3rem] lg:leading-relaxed">
              9am to 3pm*
            </span>
          </p>
          <p className="mt-6 text-sm md:mt-8 md:text-base lg:mt-44 lg:text-xl">
            * The clinic might be closed for technical reasons so it&apos;d be
            better if you call and confirm before paying a visit!
          </p>
        </p>
      </div>
    </div>
  );
};

export default VisitUs;
