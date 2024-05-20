import Hero from "./Hero";
import KnowTheDoctor from "./KnowTheDoctor";
import Testimonials from "./Testimonials";
// import LocationClinic from "./LocationClinic";
// import MeetTheTeam from "./MeetTheTeam";

const Home = () => {
  return (
    <main className="relative pb-28">

      <section>
        <Hero />
      </section>

      <section className="padding">
        <KnowTheDoctor />
      </section>

      <section className="padding bg-gray-200">
        <Testimonials />
      </section>
      
      {/* <MeetTheTeam />
      <LocationClinic />  */}
    </main>
  );
};

export default Home;
