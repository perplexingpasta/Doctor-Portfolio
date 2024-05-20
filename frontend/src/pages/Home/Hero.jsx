import img1 from "../../assets/home/hero-carousel-images/img1.jpg";
import img2 from "../../assets/home/hero-carousel-images/img2.jpg";
import img3 from "../../assets/home/hero-carousel-images/img3.jpg";
import img4 from "../../assets/home/hero-carousel-images/img4.jpg";
import img5 from "../../assets/home/hero-carousel-images/img5.jpg";
import img6 from "../../assets/home/hero-carousel-images/img6.jpg";
import img7 from "../../assets/home/hero-carousel-images/img7.jpg";
import img8 from "../../assets/home/hero-carousel-images/img8.jpg";
import img9 from "../../assets/home/hero-carousel-images/img9.jpg";
import img10 from "../../assets/home/hero-carousel-images/img10.jpg";

const Hero = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full h-50vh object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full h-50vh object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full h-50vh object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full h-50vh object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full h-50vh object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full h-50vh object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide7" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide7" className="carousel-item relative w-full">
          <img src={img7} className="w-full h-50vh object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide8" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide8" className="carousel-item relative w-full">
          <img src={img8} className="w-full h-50vh object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide7" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide9" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide9" className="carousel-item relative w-full">
          <img src={img9} className="w-full h-50vh object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide8" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide10" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide10" className="carousel-item relative w-full">
          <img src={img10} className="w-full h-50vh object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide9" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
