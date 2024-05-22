import ServiceItem from "./ServiceItem";
import ServiceVideoCard from "./ServiceVideoCard";
import {
  earServices,
  noseServices,
  throatServices,
  headAndNeckServices,
  additionalServices,
} from "../../indexArrays";

const Services = () => {
  return (
    <div className="pt-44 pb-28">
      <header className="absolute w-full flex justify-center items-center font-montserrat font-semibold text-4xl">
        Services
      </header>
      <div className="flex flex-col items-center justify-center mt-20 max-w-[75vw] mx-auto">
        <div className="mt-6 font-montserrat font-medium">
          <p className="leading-normal text-xl text-gray-800">
            Here are some of the most common ENT services that are available at our
            clinic.
          </p>
          <div>
            <p className="leading-normal pt-8 font-semibold text-xl text-gray-800">
              Ear Services:
            </p>
            {earServices.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div>
            <p className="leading-normal pt-8 font-semibold text-xl text-gray-800">
              Nose Services:
            </p>
            {noseServices.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div>
            <p className="leading-normal pt-8 font-semibold text-xl text-gray-800">
              Throat Services:
            </p>
            {throatServices.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div>
            <p className="leading-normal pt-8 font-semibold text-xl text-gray-800">
              Head & Neck Services:
            </p>
            {headAndNeckServices.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div>
            <p className="leading-normal pt-8 font-semibold text-xl text-gray-800">
              Additional Services:
            </p>
            {additionalServices.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div className="mt-32">
          <header className="w-full flex justify-center items-center font-montserrat font-semibold text-4xl text-gray-900 pb-16">
            Common Procedures
          </header>
          <ServiceVideoCard
            key={1}
            videoURL={
              "https://www.youtube-nocookie.com/embed/zoduap_DJoE?si=RcKWou21fcJ9FIJ6"
            }
            videoName={"Tonsillectomy"}
            videoDesc={
              "The surgical removal of the tonsils, which are two small glands located at the back of the throat."
            }
            commonIndications={
              "Chronic tonsillitis, sleep apnea, and recurrent throat infections."
            }
          />
          <ServiceVideoCard
            key={2}
            videoURL={
              "https://www.youtube-nocookie.com/embed/uAaqn7ShCh8?si=1gGi7slliPBt3g-b"
            }
            videoName={"Septoplasty"}
            videoDesc={
              "A surgical procedure to correct a deviated septum, which is the partition between the two nasal cavities."
            }
            commonIndications={
              "Nasal obstruction, difficulty breathing through the nose, and chronic sinusitis."
            }
          />
          <ServiceVideoCard
            key={3}
            videoURL={
              "https://www.youtube-nocookie.com/embed/TkNDbuCLzyk?si=UC6mogaeAdUQNCWT"
            }
            videoName={"Myringotomy with Tube Insertion"}
            videoDesc={
              "A procedure involving a small incision in the eardrum to drain fluid and relieve pressure. Small tubes may be inserted to keep the middle ear aerated."
            }
            commonIndications={
              "Chronic ear infections (otitis media) and persistent fluid buildup in the ear."
            }
          />

          <ServiceVideoCard
            key={4}
            videoURL={
              "https://www.youtube-nocookie.com/embed/qKTRyowwaLA?si=ZtrBHEkrunxld5rQ"
            }
            videoName={"Endoscopic Sinus Surgery"}
            videoDesc={
              "A minimally invasive surgery using an endoscope to remove blockages and improve drainage in the sinuses."
            }
            commonIndications={
              "Chronic sinusitis that doesn't respond to medical treatment, nasal polyps, and sinus infections."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
