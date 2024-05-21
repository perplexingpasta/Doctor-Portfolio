/* eslint-disable react/prop-types */
const ServiceVideoCard = ({
  videoURL,
  videoName,
  videoDesc,
  commonIndications,
}) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
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
      <div className="mb-24 max-w-[58vw] mx-auto">
        <h3 className="font-montserrat font-bold text-3xl pt-2">{videoName}</h3>
        <p className="font-montserrat text-xl text-slate-gray leading-normal">
          <span className="font-semibold">Description:</span> {videoDesc}
        </p>
        <p className="font-montserrat text-xl text-slate-gray leading-normal">
          <span className="font-semibold">Common Indications:</span>{" "}
          {commonIndications}
        </p>
      </div>
    </>
  );
};

export default ServiceVideoCard;
