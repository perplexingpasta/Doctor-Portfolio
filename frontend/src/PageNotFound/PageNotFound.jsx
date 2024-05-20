import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <section id="error" className="pt-40 font-montserrat">
        <div className="content">
          <h2 className="header font-bold">404</h2>
          <h4 className="font-medium">Page not found</h4>
          <br />
          <p className="text-lg leading-8">
            Oops! It seems like the page you're trying to access doesn't exist.
          </p>
          <p className="text-lg">
            If you believe there's an issue, feel free to report it and we'll
            look into it.
          </p>
          <div className="flex justify-evenly items-center mt-10 mb-20">
            <div className="btns btn">
              <NavLink to="/">return home</NavLink>
            </div>
            <div className="btns btn">
              <NavLink to="/contact">report issue</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
