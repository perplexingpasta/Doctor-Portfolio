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
      <section className="hidden md:contents">
        <EmblaCarousel />
      </section>

      {/* OLD CAROUSEL WITH BUTTONS AND NO AUTOTIMER
      <section>
        <Hero />
      </section> */}

      <section className="padding lg:py-28">
        <KnowTheDoctor />
      </section>

      {/* here max-md:pb6 means that from 0px to just below md width, it will have a padding of 6 so basically all phones and sm || while md:max-lg:pb-16 means only the md range, no sm or lg or above that will have pb of 16 */}
      <section className="padding bg-gray-200 max-md:pb-6 md:max-lg:pb-16 md:max-lg:pt-20">
        <TestimonialsGoogle />
      </section>

      {/* <section className="padding bg-gray-200">
        <Testimonials />
      </section> */}

      <section className="padding md:-mt-12 lg:mt-0">
        <MeetTheTeam />
      </section>

      <section className="padding md:-mb-24 md:-mt-16 lg:mb-0 lg:mt-0">
        <VisitUs />
      </section>
    </main>
  );
};

export default Home;
