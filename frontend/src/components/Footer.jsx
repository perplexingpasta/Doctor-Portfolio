import copyrightSign from "../assets/icons/copyright-sign.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import logowhite from "../assets/icons/logowhite.svg";

const Footer = () => {
  const socialMedia = [
    { src: facebook, alt: "facebook logo", href: "https://www.facebook.com/" },
    { src: twitter, alt: "twitter logo", href: "https://twitter.com/" },
    { src: instagram, alt: "instagram logo", href: "https://www.instagram.com/" },
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
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="flex flex-1">
            <img src={logowhite} alt="Footer Logo" width={60} height={46} />
            {/* USE LOGO FOR HEADER TEXT INSTEAD */}
            <div className="px-5">
              <h3 className="font-montserrat font-semibold text-3xl leading-normal py-0 mb-0 pt-3">
                Dr. Robert Zane
              </h3>
              <h3 className="font-montserrat font-light text-[18px] leading-normal pb-3">
                Tumbleweed eye baby
              </h3>
            </div>
          </a>

          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Dr. Robert Zane&apos;s official website. <br />
            Created with &lt;3 in India!
          </p>
        </div>

        <div className="flex flex-1 justify-around lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
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

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copyright Sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-5 m-0 p-0">
          {socialMedia.map((icon) => (
            <div
              key={icon}
              className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
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
