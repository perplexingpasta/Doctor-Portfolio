// import humanImg from "../../assets/home/human-face.jpg";
// import squareImg from "../../assets/home/square-pfp.jpg";
import squareImg2 from "../../assets/home/square-pfp2.jpg";

const KnowTheDoctor = () => {
  return (
    <div className="mx-auto flex max-w-[90vw] flex-col pt-20 font-montserrat md:w-full md:flex-row md:pt-24 lg:ml-24 lg:pt-0">
      {/* IMAGE */}
      <div className="max-w-[80vw] md:my-auto md:w-1/2 lg:max-w-[30vw]">
        <img
          src={squareImg2}
          alt="image of the doctor"
          className="rounded-3xl object-scale-down drop-shadow-md"
        />
      </div>

      <div className="pl-2 pt-4 text-base font-semibold text-gray-500 md:w-1/2 md:pl-10 md:pt-0 md:text-2xl lg:pl-16 lg:text-3xl">
        <header className="text-2xl text-gray-800 md:pb-2 md:text-[2.2rem] lg:text-4xl">
          Dr. Robert Zane
        </header>
        <h3>MBBS, MD, DM, TJAY</h3>
        <p className="pt-2 font-normal leading-5 md:pt-5 md:leading-normal lg:max-w-[30vw]  ">
          With over 20 years of experience in the field and having done more
          than 2000 surgeries, Robert is an outstanding and the most meticulous
          surgeon. The attention to detail and his love for 911 GT3RS is
          unmatched. He spends his free time (if any) watching the stars through
          his celestron telescope.
        </p>
      </div>
    </div>
  );
};

export default KnowTheDoctor;
