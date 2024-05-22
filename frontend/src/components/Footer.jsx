import copyrightSign from "../assets/icons/copyright-sign.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import logowhite from "../assets/icons/logowhite.svg";

const Footer = () => {
  const socialMedia = [
    { src: facebook, alt: "facebook logo", href: "https://www.facebook.com/" },
    { src: twitter, alt: "twitter logo", href: "https://twitter.com/" },
    {
      src: instagram,
      alt: "instagram logo",
      href: "https://www.instagram.com/",
    },
  ];

  const footerLinks = [
    {
      title: "Help",
      links: [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "Contact", link: "/contact" },
        { name: "FAQs", link: "/faqs" },
        { name: "About Us", link: "/about-us" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { name: "+91 66632-22290", link: "tel:+92554862354" },
        { name: "+91 22290-66632", link: "tel:+92554862354" },
      ],
    },
  ];

  return (
    <footer className="max-container">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="flex flex-1">
            <img src={logowhite} alt="Footer Logo" width={60} height={46} />
            {/* USE LOGO FOR HEADER TEXT INSTEAD */}
            <div className="px-5">
              <h3 className="mb-0 py-0 pt-3 font-montserrat text-3xl font-semibold leading-normal">
                Dr. Robert Zane
              </h3>
              <h3 className="pb-3 font-montserrat text-[18px] font-light leading-normal">
                Tumbleweed eye baby
              </h3>
            </div>
          </a>

          <p className="mt-6 font-montserrat text-base leading-7 text-white-400 sm:max-w-sm">
            Dr. Robert Zane&apos;s official website. <br />
            Created with &lt;3 in India!
          </p>
        </div>

        <div className="flex flex-1 flex-wrap justify-around gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 cursor-pointer font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="Copyright Sign"
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </div>

        <div className="m-0 flex items-center gap-5 p-0">
          {socialMedia.map((icon) => (
            <div
              key={icon}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
            >
              <a href={icon.href} target="_blank">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
