import people from "../../assets/home/people.jpg";

const MeetTheTeam = () => {
  return (
    <div className="flex w-full flex-col-reverse font-montserrat md:flex-row md:pt-16">
      {/* TEXT ELEMENT */}
      <div className="flex flex-col items-center justify-center pt-6 md:w-1/2 md:pr-8 lg:px-40 lg:py-32">
        <header className="text-2xl font-semibold text-gray-800 md:text-4xl">
          Meet the team!
        </header>
        <p className="w-full pt-2 font-normal text-gray-500 md:pt-5 md:text-2xl md:leading-normal">
          This is the amazing team that&apos;s gonna take care of your every
          whim and be at your beck and call whenever you come for a checkup!
        </p>
      </div>

      {/* IMAGE */}
      <div className="mx-auto flex max-w-[100vw] md:w-1/2 lg:mr-24">
        <img
          src={people}
          alt="an image of happy people"
          className="rounded-3xl object-scale-down drop-shadow-md"
        />
      </div>
    </div>
  );
};

export default MeetTheTeam;
