import KnowTheDoctor from "./KnowTheDoctor";
import TestimonialsGoogle from "./TestimonialsGoogle";
import MeetTheTeam from "./MeetTheTeam";
import VisitUs from "./VisitUs";
import { EmblaCarousel } from "./HeroEmbla";
// import Hero from "./Hero";
// import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main className="relative pb-28">
      <section className="hidden lg:contents">
        <EmblaCarousel />
      </section>

      {/* OLD CAROUSEL WITH BUTTONS AND NO AUTOTIMER
      <section>
        <Hero />
      </section> */}

      <section className="padding">
        <KnowTheDoctor />
      </section>

      <section className="padding bg-gray-200">
        <TestimonialsGoogle />
      </section>

      {/* <section className="padding bg-gray-200">
        <Testimonials />
      </section> */}

      <section className="padding">
        <MeetTheTeam />
      </section>

      <section className="padding">
        <VisitUs />
      </section>
    </main>
  );
};

export default Home;
