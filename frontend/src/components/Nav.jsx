import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
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

  return (
    <header className="padding-x absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="px-0 py-3 flex">
          <img src={logo} alt="Header Logo" width={70} height={70} />

        <div className="px-5">
          <h3 className="font-montserrat font-semibold text-3xl leading-normal py-0 mb-0 pt-3">
            Dr. Robert Zane
          </h3>
          <h3 className="font-montserrat font-light text-[18px] leading-normal pb-3">
            Tumbleweed eye baby
          </h3>
        </div> 
        </a>

        <ul className="flex-1 flex justify-end items-center gap-14 max-lg:hidden">
          {links.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.href}
                className="font-montserrat font-medium leading-normal text-lg text-slate-gray hover:text-coral-red"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* HAMBURGER FUNCTIONALITY */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : hamburger}
            alt="Hamburger Menu"
            className="w-[28px] h-[28px] object-contain mr-4"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-start flex-1 gap-6">
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
      <div className="divider mt-0 mb-0 h-0"></div>
    </header>
  );
};

export default Nav;
