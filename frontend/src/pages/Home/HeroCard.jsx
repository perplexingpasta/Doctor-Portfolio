/* eslint-disable react/prop-types */
export const HeroCard = ({ id, src, prev, next }) => {
  return (
    <>
      <div id={id} className="carousel-item relative w-full">
        <img src={src} className="w-full h-[100vh] object-cover" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={prev} className="btn btn-circle">
            ❮
          </a>
          <a href={next} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </>
  );
};

export const HeroEmblaCard = ({ src }) => {
  return (
    <>
      <div className="embla__slide"><img src={src} alt="carousel-image" className='object-contain'/></div>
    </>
  );
};


