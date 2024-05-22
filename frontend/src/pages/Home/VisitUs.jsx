const VisitUs = () => {
  return (
    <div className="flex w-full font-montserrat">
      <div className="w-1/2">
        <div className="pb-10 ml-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19860.446499044578!2d79.41248396210945!3d28.362942695098035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00170baffbf1f%3A0x38b58aa26e83be05!2sDr.%20Mohit%20Jindal%20E.N.T.%20Clinic!5e0!3m2!1sen!2sin!4v1716206667500!5m2!1sen!2sin"
            width="800"
            height="550"
            style={{ border: "0" }}
            // allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="w-1/2 ml-32">
        <header className="font-semibold text-4xl text-gray-800">
          Visit Us
        </header>
        <p className="font-normal leading-normal pt-5 text-3xl text-gray-500  max-w-[30vw]">
          Check out the map for our address.
          <br />
          <br />
          The opening hours are as follows:
          <p className="font-semibold">
            Mon - Sat <span className="font-normal ml-32 leading-relaxed">9am to 9pm*</span>
          </p>
          <p className="font-semibold">
            Sun <span className="font-normal ml-52 leading-relaxed">9am to 3pm*</span>
          </p>
          <p className="text-xl mt-44">* The clinic might be closed for technical reasons so it&apos;d be better if you call and confirm before paying a visit!</p>
          
        </p>
      </div>
    </div>
  );
};

export default VisitUs;
