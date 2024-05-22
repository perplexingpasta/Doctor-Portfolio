import people from "../../assets/home/people.jpg";

const MeetTheTeam = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/2 font-montserrat px-40 py-32">
        <header className="font-semibold text-4xl text-gray-800">
          Meet the team!
        </header>
        <p className="font-normal leading-normal pt-5 text-3xl text-gray-500 w-full">
          This is the amazing team that&apos;s gonna take care of your every whim and be at your beck and call whenever you come for a checkup!
        </p>
      </div>
      <div className="w-1/2 h-[32rem] mr-24">
        <img
          src={people}
          alt="an image of happy people"
          className="rounded-3xl object-scale-down max-h-full drop-shadow-md m-auto"
        />
      </div>
    </div>
  );
};

export default MeetTheTeam;
