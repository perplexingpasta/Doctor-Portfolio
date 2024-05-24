/* eslint-disable react/prop-types */
export const HeroCard = ({ id, src, prev, next }) => {
  return (
    <>
      <div id={id} className="carousel-item relative w-full">
        <img src={src} className="h-[100vh] w-full object-cover" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
      <div className="embla__slide">
        <img src={src} alt="" className="object-contain" />
      </div>
    </>
  );
};
