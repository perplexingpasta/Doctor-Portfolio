import img1 from "../../assets/home/hero-carousel-images/img1.jpg";
import img2 from "../../assets/home/hero-carousel-images/img2.jpg";
// import img3 from "../../assets/home/hero-carousel-images/img3.jpg";
import img4 from "../../assets/home/hero-carousel-images/img4.jpg";
import img5 from "../../assets/home/hero-carousel-images/img5.jpg";
import img6 from "../../assets/home/hero-carousel-images/img6.jpg";
import img7 from "../../assets/home/hero-carousel-images/img7.jpg";
import img8 from "../../assets/home/hero-carousel-images/img8.jpg";
import img9 from "../../assets/home/hero-carousel-images/img9.jpg";
import img10 from "../../assets/home/hero-carousel-images/img10.jpg";
import { HeroCard } from "./HeroCard";

const Hero = () => {
  return (
    <div>
      <div className="carousel w-full">
        <HeroCard
          key={1}
          id={"slide1"}
          src={img1}
          prev={"#slide10"}
          next={"#slide2"}
        />
        <HeroCard
          key={2}
          id={"slide2"}
          src={img2}
          prev={"#slide1"}
          next={"#slide4"}
        />
        {/* // <HeroCard
        //   key={3}
        //   id={"slide3"}
        //   src={img3}
        //   prev={"#slide2"}
        //   next={"#slide4"}
        // /> */}
        <HeroCard
          key={4}
          id={"slide4"}
          src={img4}
          prev={"#slide2"}
          next={"#slide5"}
        />
        <HeroCard
          key={5}
          id={"slide5"}
          src={img5}
          prev={"#slide4"}
          next={"#slide6"}
        />
        <HeroCard
          key={6}
          id={"slide6"}
          src={img6}
          prev={"#slide5"}
          next={"#slide7"}
        />
        <HeroCard
          key={7}
          id={"slide7"}
          src={img7}
          prev={"#slide6"}
          next={"#slide8"}
        />
        <HeroCard
          key={8}
          id={"slide8"}
          src={img8}
          prev={"#slide7"}
          next={"#slide9"}
        />
        <HeroCard
          key={9}
          id={"slide9"}
          src={img9}
          prev={"#slide8"}
          next={"#slide10"}
        />
        <HeroCard
          key={10}
          id={"slide10"}
          src={img10}
          prev={"#slide9"}
          next={"#slide1"}
        />
      </div>
    </div>
  );
};

export default Hero;

// ORIGINAL CODE W REPETITION AND NO CARD USAGE
// import img1 from "../../assets/home/hero-carousel-images/img1.jpg";
// import img2 from "../../assets/home/hero-carousel-images/img2.jpg";
// import img3 from "../../assets/home/hero-carousel-images/img3.jpg";
// import img4 from "../../assets/home/hero-carousel-images/img4.jpg";
// import img5 from "../../assets/home/hero-carousel-images/img5.jpg";
// import img6 from "../../assets/home/hero-carousel-images/img6.jpg";
// import img7 from "../../assets/home/hero-carousel-images/img7.jpg";
// import img8 from "../../assets/home/hero-carousel-images/img8.jpg";
// import img9 from "../../assets/home/hero-carousel-images/img9.jpg";
// import img10 from "../../assets/home/hero-carousel-images/img10.jpg";

// const Hero = () => {
//   return (
//     <div>
//       <div className="carousel w-full">
//         <div id="slide1" className="carousel-item relative w-full">
//           <img src={img1} className="w-full h-50vh object-cover" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide4" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide2" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide2" className="carousel-item relative w-full">
//           <img src={img2} className="w-full h-50vh object-cover" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide1" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide3" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide3" className="carousel-item relative w-full">
//           <img src={img3} className="w-full h-50vh object-cover" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide2" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide4" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide4" className="carousel-item relative w-full">
//           <img src={img4} className="w-full h-50vh object-cover" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide3" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide5" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide5" className="carousel-item relative w-full">
//           <img src={img5} className="w-full h-50vh object-cover" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide4" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide6" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide6" className="carousel-item relative w-full">
//           <img src={img6} className="w-full h-50vh object-cover" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide5" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide7" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide7" className="carousel-item relative w-full">
//           <img src={img7} className="w-full h-50vh object-cover" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide6" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide8" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide8" className="carousel-item relative w-full">
//           <img src={img8} className="w-full h-50vh object-cover" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide7" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide9" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide9" className="carousel-item relative w-full">
//           <img src={img9} className="w-full h-50vh object-cover" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide8" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide10" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide10" className="carousel-item relative w-full">
//           <img src={img10} className="w-full h-50vh object-cover" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide9" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide1" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
