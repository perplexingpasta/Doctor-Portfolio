import people from "../../assets/home/people.jpg";

const MeetTheTeam = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/2 px-40 py-32 font-montserrat">
        <header className="text-4xl font-semibold text-gray-800">
          Meet the team!
        </header>
        <p className="w-full pt-5 text-3xl font-normal leading-normal text-gray-500">
          This is the amazing team that&apos;s gonna take care of your every
          whim and be at your beck and call whenever you come for a checkup!
        </p>
      </div>
      <div className="mr-24 h-[32rem] w-1/2">
        <img
          src={people}
          alt="an image of happy people"
          className="m-auto max-h-full rounded-3xl object-scale-down drop-shadow-md"
        />
      </div>
    </div>
  );
};

export default MeetTheTeam;
