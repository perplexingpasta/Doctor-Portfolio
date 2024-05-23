import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logowhite.svg";
import hamburger from "../assets/icons/hamburger.svg";
import close from "../assets/icons/close.svg";

const Nav = () => {
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
    <header className={`padding-x absolute z-10 w-full ${show && "nav_black"}`}>
      <nav className="max-container flex items-center justify-between">
        <a href="/" className="flex px-0 py-3">
          <img src={logo} alt="Header Logo" className="mt-3 h-10 w-10 md:w-16 md:h-16 md:mt-5" />

          <div className="px-5 font-montserrat text-gray-200">
            <h3 className="mb-0 py-0 pt-3 text-base font-semibold md:text-3xl">
              Dr. Robert Zane
            </h3>
            <h3 className="pb-3 font-montserrat text-[12px] font-light text-gray-300 md:text-[18px]">
              Tumbleweed eye baby
            </h3>
          </div>
        </a>

        <ul className="flex flex-1 items-center justify-end gap-14 max-lg:hidden">
          {links.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.href}
                className="font-montserrat text-lg font-medium leading-normal text-gray-300 hover:text-coral-red"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* HAMBURGER FUNCTIONALITY */}
        <div className="flex flex-1 items-center justify-end lg:hidden">
          <img
            src={toggle ? close : hamburger}
            alt="Hamburger Menu"
            className="mr-4 h-[28px] w-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } bg-black-gradient sidebar absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-6">
              {links.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`font-montserrat font-medium text-gray-300`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex flex-1 items-center justify-center">
        <div className="divider mb-0 mt-0 h-0 w-[90vw] "></div>
      </div>
    </header>
  );
};

export default Nav;
