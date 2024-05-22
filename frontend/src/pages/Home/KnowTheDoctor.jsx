// import humanImg from "../../assets/home/human-face.jpg";
// import squareImg from "../../assets/home/square-pfp.jpg";
import squareImg2 from "../../assets/home/square-pfp2.jpg";

const KnowTheDoctor = () => {
  return (
    <div className="flex w-full">
      <div className="h-[32rem] w-1/2">
        <img
          src={squareImg2}
          alt=""
          className="m-auto max-h-full rounded-3xl object-scale-down drop-shadow-md"
          // className="rounded-3xl object-scale-down max-h-full drop-shadow-md m-auto"
        />
      </div>

      <div className="w-1/2">
        <header className="font-montserrat text-4xl font-semibold text-gray-800">
          Dr. Robert Zane
        </header>
        <h3 className="font-montserrat text-3xl font-semibold text-gray-500">
          MBBS, MD, DM, TJAY
        </h3>
        <p className="max-w-[30vw] pt-5 font-montserrat text-3xl font-normal leading-normal  text-gray-500">
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
