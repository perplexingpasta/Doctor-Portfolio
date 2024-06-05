import { NavLink } from "react-router-dom";
import copyrightSign from "../assets/icons/copyright-sign.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import logoWhite from "../assets/icons/cplogo-white.svg";

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
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
        { label: "FAQs", href: "/faqs" },
        { label: "About Us", href: "/about-us" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { label: "+91 66632-22290", href: "tel:+92554862354" },
        { label: "+91 22290-66632", href: "tel:+92554862354" },
      ],
    },
  ];

  return (
    <footer className="max-container">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="flex flex-1">
            <img src={logoWhite} alt="Footer Logo" width={60} height={46} />
            {/* USE LOGO FOR HEADER TEXT INSTEAD */}
            <div className="px-5">
              <h1 className="mb-0 py-0 pt-3 font-montserrat text-3xl font-semibold leading-normal">
                Dr. Robert Zane
              </h1>
              <h1 className="pb-3 font-montserrat text-lg font-light leading-normal">
                Tumbleweed eye baby
              </h1>
            </div>
          </a>

          <p className="mt-6 font-montserrat text-base leading-7 text-white-400 sm:max-w-sm">
            Dr. Robert Zane&apos;s official website. <br />
            Created with &lt;3 in India!
          </p>
        </div>

        {/* NAVLINKS */}
        <div className="flex flex-1 flex-wrap justify-around gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h1 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                {section.title}
              </h1>
              <ul>
                {section.links.map((item) => (
                  <li
                    className="mt-3 cursor-pointer font-montserrat text-base leading-normal text-white-400 transition-all hover:scale-110 hover:text-red-300"
                    key={item.label}
                  >
                    <NavLink to={item.href}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 items-center justify-start gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt=""
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </div>

        {/* SOCIAL MEDIA HANDLES */}
        <div className="m-0 flex items-center gap-5 pt-6 sm:p-0 md:p-0 md:pb-5">
          {socialMedia.map((icon) => (
            <div
              key={icon}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-red-300 transition-all hover:scale-110"
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
