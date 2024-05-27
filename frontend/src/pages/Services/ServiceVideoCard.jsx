import * as AspectRatio from "@radix-ui/react-aspect-ratio";

/* eslint-disable react/prop-types */
const ServiceVideoCard = ({
  videoURL,
  videoName,
  videoDesc,
  commonIndications,
}) => {
  return (
    <>
      <div className="mx-auto flex max-w-[80vw] flex-col items-center justify-center rounded-md lg:h-[630px] lg:w-[1120px]">
        <AspectRatio.Root ratio={16 / 9}>
          <iframe
            width="100%"
            height="100%"
            src={videoURL}
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </AspectRatio.Root>
      </div>

      <div className="mx-auto mb-12 font-montserrat md:mb-20 lg:mb-24 lg:max-w-[58vw]">
        <h1 className="pb-2 pt-2 text-lg font-bold md:text-2xl lg:text-3xl">
          {videoName}
        </h1>

        <div className="text-sm text-slate-gray md:text-lg  md:leading-relaxed lg:text-xl">
          <p className="lg:pb-2">
            <span className="font-semibold">Description:</span> {videoDesc}
          </p>

          <p>
            <span className="font-semibold">Common Indications:</span>{" "}
            {commonIndications}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceVideoCard;
