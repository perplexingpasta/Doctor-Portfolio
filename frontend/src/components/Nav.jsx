import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logowhite.svg";
// import hamburger from "../assets/icons/hamburger.svg";
import hamburgerWhite from "../assets/icons/hamburger-white.svg";
import hamburgerDark from "../assets/icons/hamburger-dark.svg";
// import close from "../assets/icons/close.svg";
import closeWhite from "../assets/icons/close-white.svg";
import closeDark from "../assets/icons/close-dark.svg";

const Nav = () => {
  // // DARK AND LIGHT MODE FUNCTIONALITY
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  // );

  // const handleLightDarkModeToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);

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
          <img
            src={logo}
            alt="Header Logo"
            className="mt-3 h-10 w-10 md:mt-5 md:h-16 md:w-16"
          />

          <div
            className={`px-5 font-montserrat text-gray-800 ${show && "text-gray-200"}`}
          >
            <h3 className="mb-0 py-0 pt-3 text-base font-semibold md:text-3xl">
              Dr. Robert Zane
            </h3>
            <h3
              className={`pb-3 font-montserrat text-[12px] font-light text-gray-700 md:text-[18px] ${show && "text-gray-400"}`}
            >
              Tumbleweed eye baby
            </h3>
          </div>
        </a>

        <ul className="flex flex-1 items-center justify-end gap-14 max-lg:hidden">
          {links.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.href}
                className={`font-montserrat text-lg font-medium leading-normal text-gray-700 hover:text-coral-red lg:text-xl ${show && "text-gray-400"}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* X MARK FROM FONT ICON
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg> */}

        {/* DARK AND LIGHT MODE BUTTON */}
        {/* <label className="flex cursor-pointer gap-2 pl-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            // value="synthwave"
            className="theme-controller toggle"
            onChange={handleLightDarkModeToggle}
            checked={theme === "light" ? false : true}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label> */}

        {/* HAMBURGER FUNCTIONALITY */}
        <div className="flex flex-1 items-center justify-end lg:hidden">
          <img
            src={toggle ? (show ? closeWhite : closeDark) : (show ? hamburgerDark : hamburgerWhite)}
            alt="Hamburger Menu"
            className="mr-4 h-[28px] w-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } sidebar absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl bg-gray-900 p-6`}
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
      <div className="flex flex-1 items-center justify-center">
        <div className="divider mb-0 mt-0 h-0 w-[90vw] "></div>
      </div>
    </header>
  );
};

export default Nav;
