import Hero from "./Hero";
import RegistrationForm from "./RegistrationForm";
// import KnowTheDoctor from "./KnowTheDoctor";
// import LocationClinic from "./LocationClinic";
// import MeetTheTeam from "./MeetTheTeam";
// import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      {/* <KnowTheDoctor />
      <Testimonials />
      <MeetTheTeam />
      <LocationClinic /> */}
      <section className="mt-32"><RegistrationForm /></section>
    </main>
  );
};

export default Home;
