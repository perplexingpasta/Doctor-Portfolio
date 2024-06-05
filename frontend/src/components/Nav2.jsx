import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logoDark from "../assets/icons/cplogo-dark.svg";
import hamburgerWhite from "../assets/icons/hamburger-white.svg";
import hamburgerDark from "../assets/icons/hamburger-dark.svg";
import closeWhite from "../assets/icons/close-white.svg";
import closeDark from "../assets/icons/close-dark.svg";

const Nav2 = () => {
  const [toggle, setToggle] = useState(false);
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "FAQs",
      href: "/faqs",
    },
    {
      label: "About Us",
      href: "/about-us",
    },
  ];

  const [show, setShow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`padding-x absolute z-10 w-full transition-all ${show && "overflow-hidden rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding backdrop-blur-lg backdrop-filter"}`}
    >
      <nav className="max-container flex items-center justify-between">
        <a href="/" className="flex px-0 py-3">
          <img
            src={logoDark}
            alt="Dr. Robert Zane's Logo"
            className="mt-3 h-10 w-10 md:mt-5 md:h-16 md:w-16"
          />

          <div className="px-5 font-montserrat text-gray-800">
            <h1 className="mb-0 py-0 pt-3 text-xl font-semibold md:text-3xl">
              Dr. Robert Zane
            </h1>
            <h1 className="pb-3 font-montserrat text-[0.8rem] font-light text-gray-700 md:text-lg">
              Tumbleweed eye baby
            </h1>
          </div>
        </a>

        <ul className="flex flex-1 items-center justify-end gap-14 max-lg:hidden">
          {links.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "font-montserrat text-lg font-semibold text-gray-900 lg:text-xl"
                    : "font-montserrat text-lg font-medium text-gray-700 transition-all hover:text-red-300 lg:text-xl"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* HAMBURGER FUNCTIONALITY */}
        <div className="flex flex-1 items-center justify-end lg:hidden">
          <img
            src={
              toggle
                ? show
                  ? closeWhite
                  : closeDark
                : show
                  ? hamburgerDark
                  : hamburgerWhite
            }
            alt=""
            className="mr-4 h-[28px] w-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } sidebar absolute right-0 top-20 mx-4 my-2 min-w-36  rounded-xl bg-gray-950 p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-6">
              {links.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.href}
                    className={`font-montserrat font-medium text-gray-300`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* DIVIDER */}
      <div className="flex flex-1 items-center justify-center">
        <div className="mb-0 mt-0 h-0 w-[85vw] border-t-2 border-gray-700 "></div>
      </div>
    </header>
  );
};

export default Nav2;
