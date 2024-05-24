import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <section id="error" className="pt-40 font-montserrat">
        <div className="content">
          <h2 className="header text-[9rem] font-bold md:text-[13rem] lg:text-[16rem] 2xl:text-[12vw]">404</h2>
          <h4 className="pt-4 text-xl md:text-[2rem] md:font-medium">
            Page not found
          </h4>
          <br />
          <p className="mx-auto max-w-[70vw] md:text-lg md:leading-8">
            Oops! It seems like the page you&apos;re trying to access
            doesn&apos;t exist.
          </p>
          <p className="mx-auto max-w-[70vw] md:text-lg">
            If you believe there&apos;s an issue, feel free to report it and
            we&apos;ll look into it.
          </p>
          <div className="mb-20 mt-10 flex flex-col items-center justify-evenly md:mt-10 md:flex-row">
            <div className="btns btn mt-6 rounded-full md:my-[25px]">
              <NavLink to="/">return home</NavLink>
            </div>
            <div className="btns btn mt-6 rounded-full md:my-[25px]">
              <NavLink to="/contact">report issue</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
