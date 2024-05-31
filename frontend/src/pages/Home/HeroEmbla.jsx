import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "../../assets/home/hero-carousel-images/imgLight1.jpg";
import img2 from "../../assets/home/hero-carousel-images/imgLight2.jpg";
import img3 from "../../assets/home/hero-carousel-images/imgLight3.jpg";
import img4 from "../../assets/home/hero-carousel-images/imgLight4.jpg";
import img5 from "../../assets/home/hero-carousel-images/imgLight5.jpg";
import img6 from "../../assets/home/hero-carousel-images/imgLight6.jpg";
import img7 from "../../assets/home/hero-carousel-images/imgLight7.jpg";
import img8 from "../../assets/home/hero-carousel-images/imgLight8.jpg";
import img9 from "../../assets/home/hero-carousel-images/imgLight9.jpg";
import img10 from "../../assets/home/hero-carousel-images/imgLight10.jpg";
// import img1 from "../../assets/home/hero-carousel-images/imgDark1.jpg";
// import img2 from "../../assets/home/hero-carousel-images/imgDark2.jpg";
// import img3 from "../../assets/home/hero-carousel-images/imgDark3.jpg";
// import img4 from "../../assets/home/hero-carousel-images/imgDark4.jpg";
// import img5 from "../../assets/home/hero-carousel-images/imgDark5.jpg";
// import img6 from "../../assets/home/hero-carousel-images/imgDark6.jpg";
// import img7 from "../../assets/home/hero-carousel-images/imgDark7.jpg";
// import img8 from "../../assets/home/hero-carousel-images/imgDark8.jpg";
// import img9 from "../../assets/home/hero-carousel-images/imgDark9.jpg";
// import img10 from "../../assets/home/hero-carousel-images/imgDark10.jpg";
import { HeroEmblaCard } from "./HeroCard";

export function EmblaCarousel() {
  // THIS IS THE CODE FOR TRANSITION ANIMATION OF THE TEXT ON SITE LOAD
  const textRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textRef.current) {
        textRef.current.classList.add("fade-in-up");
      }
    }, 1000); // This is the delay in milliseconds

    return () => clearTimeout(timer);
  }, []);

  const autoplayOptions = {
    delay: 7000, //delay timer in milliseconds, actually does work
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  const [show, setShow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={textRef}
        className={`absolute left-5 top-[27.8rem] z-10 mb-0 hidden pb-0 pt-5 font-montserrat font-black text-white opacity-0 drop-shadow-solid-black-hero md:block md:text-[9rem] lg:top-[20rem] lg:mt-80 lg:text-[15rem] ${show && "text_hide"}`}
      >
        Hey!
      </header>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container lg:h-[100vh]">
          <HeroEmblaCard src={img1} />
          <HeroEmblaCard src={img2} />
          <HeroEmblaCard src={img3} />
          <HeroEmblaCard src={img4} />
          <HeroEmblaCard src={img5} />
          <HeroEmblaCard src={img6} />
          <HeroEmblaCard src={img7} />
          <HeroEmblaCard src={img8} />
          <HeroEmblaCard src={img9} />
          <HeroEmblaCard src={img10} />
        </div>
      </div>
    </>
  );
}
