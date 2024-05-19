import image from "C:\\Rishabh\\code\\REACT\\Dr. Robert Zane v2\\frontend\\figma assets\\Registration.jpg";

const Contact = () => {
  return (
    <div className="pt-52">
      <header className="absolute w-full flex justify-center items-center font-montserrat font-semibold text-3xl leading-normal">
        Patient Info
      </header>
      <div className="flex w-full pt-16">
        <form className="pt-12 px-24 w-1/2 font-montserrat font-semibold text-4xl">
          {/* FIRST NAME */}
          <label className="input input-bordered flex items-center gap-2">
            First Name *
            <input type="text" className="grow" placeholder="Travis" required />
          </label>

          {/* LAST NAME */}
          <label className="input input-bordered flex items-center gap-2">
            Last Name
            <input type="text" className="grow" placeholder="Scott" />
          </label>

          {/* AGE */}
          <label className="input input-bordered flex items-center gap-2">
            Age *
            <input
              type="number"
              className="grow"
              placeholder="33"
              min="0"
              max="110"
              required
            />
          </label>

          {/* GENDER */}
          <label className="input input-bordered flex items-center gap-2">
            Gender *
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Male </span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-coral-red-500"
                  checked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Female </span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  // checked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Transgender </span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-purple-500"
                  // checked
                />
              </label>
            </div>
          </label>

          {/* ADDRESS */}
          <label className="input input-bordered flex items-center gap-2">
            Address
            <input
              type="text"
              className="grow"
              placeholder="123 Greenstone Avenue"
            />
          </label>

          {/* EMAIL */}
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              type="email"
              className="grow"
              placeholder="scotttravis@cactusjack.com"
            />
          </label>

          {/* CONTACT NUMBER */}
          <label className="input input-bordered flex items-center gap-2">
            Contact Number *
            <input
              type="number"
              className="grow"
              placeholder="111 222 3333"
              required
            />
          </label>

          {/* COMPLAINTS */}
          <label className="input input-bordered flex items-center gap-2">
            Complaints *
            <input
              type="text"
              className="grow"
              placeholder="Fever and headache for 3 days, reduced hearing in right ear"
              required
            />
          </label>

          <input type="submit" value="Submit" className="btn ml-5 mt-5 px-12" />
        </form>

        <div className="w-1/2">
          <img src={image} alt="Registration.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
