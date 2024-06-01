const VisitUs = () => {
  return (
    <div className="flex w-full flex-col font-montserrat md:flex-row">
      {/* MAP */}
      <div className="md:w-1/2">
        <div className="h-[500px] pb-10 md:w-full md:pr-0 lg:ml-24 lg:h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19860.446499044578!2d79.41248396210945!3d28.362942695098035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00170baffbf1f%3A0x38b58aa26e83be05!2sDr.%20Mohit%20Jindal%20E.N.T.%20Clinic!5e0!3m2!1sen!2sin!4v1716206667500!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* TEXT */}
      <div className="flex flex-col items-center justify-center md:ml-16 md:w-1/2 lg:ml-44">
        <header className="pb-2 text-2xl font-semibold text-gray-800 md:text-4xl">
          Visit Us
          <div className="relative w-[12vw] border-t-[5px] border-red-300 md:w-[10vw] md:border-t-[6px] lg:w-[7vw]"></div>
        </header>
        <div className="flex flex-col items-center pt-2 font-normal text-gray-500 md:pt-5 md:text-2xl md:leading-snug lg:leading-relaxed">
          <div className="mb-6 flex flex-col items-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.8rem"
                height="1.8rem"
                viewBox="0 0 24 24"
                className="mr-2 fill-gray-500"
              >
                <rect width="24" height="24" fill="none" />
                <path d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
              </svg>
              <span className="font-semibold">Address:</span>
            </div>
            <div className="text-center md:text-2xl">
              Dr. Mohit Jindal E.N.T Clinic
              <br />
              35 J-14, Rampur Garden <br />
              Bareilly, U.P.
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.6rem"
                height="1.6rem"
                viewBox="0 0 24 24"
                className="mr-2 fill-gray-500"
              >
                <rect width="24" height="24" fill="none" />
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    className="fill-gray-500"
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"
                  />
                </g>
              </svg>
              <span className="font-semibold">Working Hours:</span>
            </div>
            <div className="text-center text-base md:text-2xl">
              Mon - Sat{" "}
              <span className="ml-2 font-normal md:ml-4">9am to 9pm*</span>
              <br />
              Sun{" "}
              <span className="ml-2 font-normal md:ml-[5.4rem]">
                9am to 3pm*
              </span>
            </div>
          </div>
          <p className="mt-6 text-center text-sm md:mt-8 md:text-base md:max-w-[35vw] mx-auto lg:mt-20 lg:text-xl">
            * The clinic might be closed for technical reasons so it&apos;d be
            better if you call and confirm before paying a visit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;

// const VisitUs = () => {
//   return (
//     <div className="flex w-full flex-col font-montserrat md:flex-row">
//       {/* MAP */}
//       <div className="md:w-1/2">
//         <div className="h-[500px] w-screen pb-10 pr-16 md:w-[100%] md:pr-0 lg:ml-24 lg:h-[600px]">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19860.446499044578!2d79.41248396210945!3d28.362942695098035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00170baffbf1f%3A0x38b58aa26e83be05!2sDr.%20Mohit%20Jindal%20E.N.T.%20Clinic!5e0!3m2!1sen!2sin!4v1716206667500!5m2!1sen!2sin"
//             width="100%"
//             height="100%"
//             style={{ border: "0" }}
//             // allowfullscreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>

//       <div className="flex flex-col items-center justify-center md:ml-16 md:w-1/2 lg:ml-44">
//         <header className="text-2xl font-semibold text-gray-800 md:text-4xl">
//           Visit Us
//         </header>
//         <div className="pt-2 font-normal text-gray-500 md:max-w-[100vw] md:pt-5 md:text-2xl md:leading-snug lg:max-w-[30vw] lg:leading-relaxed">
//           <div className="flex flex-row">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="1.8rem"
//               height="1.8rem"
//               viewBox="0 0 24 24"
//               className="my-auto -ml-9 mr-1 fill-gray-500"
//             >
//               <rect width="24" height="24" fill="none" />
//               <path d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
//             </svg>
//             Address:
//           </div>
//           <div className="md:text-2xl">
//             127, Parkstone Avenue <br />
//             Oregon, Jersey <br />
//             NJ, USA
//           </div>
//           <br />
//           <div className="flex flex-row">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="1.6rem"
//               height="1.6rem"
//               viewBox="0 0 24 24"
//               className="-ml-8 mr-1 lg:mt-2"
//             >
//               <rect width="24" height="24" fill="none" />
//               <g fill="none">
//                 <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
//                 <path
//                   className="fill-gray-500"
//                   d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"
//                 />
//               </g>
//             </svg>
//             <div>
//               Working Hours:
//               <p className="text-base font-semibold md:text-2xl">
//                 Mon - Sat{" "}
//                 <span className="ml-10 font-normal md:ml-12 md:leading-snug lg:ml-32">
//                   9am to 9pm*
//                 </span>
//                 <br />
//                 Sun{" "}
//                 <span className="ml-[5.4rem] font-normal md:ml-[7.3rem] md:leading-snug lg:ml-[12.3rem]">
//                   9am to 3pm*
//                 </span>
//               </p>
//             </div>
//           </div>
//           <p className="mt-6 text-sm md:mt-8 md:text-base lg:mt-20 lg:text-xl">
//             * The clinic might be closed for technical reasons so it&apos;d be
//             better if you call and confirm before paying a visit!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisitUs;
