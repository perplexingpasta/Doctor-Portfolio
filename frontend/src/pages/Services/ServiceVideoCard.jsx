/* eslint-disable react/prop-types */
const ServiceVideoCard = ({
  videoURL,
  videoName,
  videoDesc,
  commonIndications,
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <iframe
          width="1120"
          height="630"
          src={videoURL}
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mx-auto mb-24 max-w-[58vw]">
        <h3 className="pt-2 font-montserrat text-3xl font-bold">{videoName}</h3>
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          <span className="font-semibold">Description:</span> {videoDesc}
        </p>
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          <span className="font-semibold">Common Indications:</span>{" "}
          {commonIndications}
        </p>
      </div>
    </>
  );
};

export default ServiceVideoCard;
