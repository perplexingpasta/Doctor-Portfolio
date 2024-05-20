import { useState } from "react";
import image from "C:\\Rishabh\\code\\REACT\\Dr. Robert Zane v2\\frontend\\figma assets\\Registration.jpg";

const Contact = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "male",
    address: "",
    email: "",
    phone: "",
    complaints: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      // the use of spread operator here allows the other fields to remain the same when only one field is changed
      [name]: value,
      // the [] around name makes it dynamic
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:3000/api/auth/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({
          firstname: "",
          lastname: "",
          age: "",
          gender: "",
          address: "",
          email: "",
          phone: "",
          complaints: "",
        });
        // With this, after submitting the form, the form will be cleared
      }

      console.log(response);
    } catch (error) {
      console.log("From contact.jsx", error);
    }
  };

  return (
    <div className="pt-44 pb-28">
      <header className="absolute w-full flex justify-center items-center font-montserrat font-semibold text-4xl">
        Contact Us
      </header>

      <div className="flex w-full pt-24" onSubmit={handleSubmit}>
        <form className="pt-12 px-24 w-1/2 font-montserrat font-semibold text-4xl">
          {/* FIRST NAME */}
          <label className="input input-bordered flex items-center gap-2">
            First Name * :
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="grow"
              placeholder="John"
              required
              value={user.firstname}
              onChange={handleInput}
            />
          </label>

          {/* LAST NAME */}
          <label className="input input-bordered flex items-center gap-2">
            Last Name :
            <input
              type="text"
              className="grow"
              placeholder="Doe"
              name="lastname"
              id="lastname"
              value={user.lastname}
              onChange={handleInput}
            />
          </label>

          {/* AGE */}
          <label className="input input-bordered flex items-center gap-2">
            Age * :
            <input
              type="number"
              className="grow"
              placeholder="30"
              min="0"
              max="110"
              required
              name="age"
              id="age"
              value={user.age}
              onChange={handleInput}
            />
          </label>

          {/* GENDER */}
          <label className="input input-bordered flex items-center gap-2">
            Gender * :
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="px-1">Male </span>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  className="radio checked:bg-red-500"
                  value="male"
                  checked={user.gender === "male"}
                  onChange={handleInput}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="px-1">Female </span>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  className="radio checked:bg-blue-500"
                  value="female"
                  checked={user.gender === "female"}
                  onChange={handleInput}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="px-1">Transgender </span>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  className="radio checked:bg-purple-500"
                  value="transgender"
                  checked={user.gender === "transgender"}
                  onChange={handleInput}
                />
              </label>
            </div>
          </label>

          {/* ADDRESS */}
          <label className="input input-bordered flex items-center gap-2">
            Address :
            <input
              type="text"
              className="grow"
              placeholder="123 Greenstone St."
              name="address"
              id="address"
              value={user.address}
              onChange={handleInput}
            />
          </label>

          {/* EMAIL */}
          <label className="input input-bordered flex items-center gap-2">
            Email :
            <input
              type="email"
              className="grow"
              placeholder="johndoe@test.com"
              name="email"
              id="email"
              value={user.email}
              onChange={handleInput}
            />
          </label>

          {/* CONTACT NUMBER */}
          <label className="input input-bordered flex items-center gap-2">
            Contact Number * :
            <input
              type="number"
              className="grow"
              placeholder="9998886666"
              required
              name="phone"
              id="phone"
              value={user.phone}
              onChange={handleInput}
            />
          </label>

          {/* COMPLAINTS */}
          <label className="input input-bordered flex items-center gap-2">
            Complaints * :
            <input
              type="text"
              className="grow"
              placeholder="Fever and headache for 3 days"
              required
              name="complaints"
              id="complaints"
              value={user.complaints}
              onChange={handleInput}
            />
          </label>

          <p className="font-montserrat text-sm font-medium text-gray-500 ml-6 mt-4">
            * Indicates required fields.
          </p>
          <div className="flex flex-col items-center justify-center">
            <input
              type="submit"
              value="Submit"
              className="btn btn-wide ml-5 mt-5 px-12"
            />
          </div>
        </form>

        {/* IMAGE */}
        <div className="w-1/2">
          <img
            src={image}
            alt="Registration.jpg"
            className="object-cover h-5/6 ml-5"
          />
        </div>
      </div>

      {/* MAP INTEGRATION */}
      <div className="pb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19860.446499044578!2d79.41248396210945!3d28.362942695098035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00170baffbf1f%3A0x38b58aa26e83be05!2sDr.%20Mohit%20Jindal%20E.N.T.%20Clinic!5e0!3m2!1sen!2sin!4v1716206667500!5m2!1sen!2sin"
          width="100%"
          height="800"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer"
        ></iframe>
      </div>

      {/* WHATSAPP INTEGRATION */}
      <div>
        <a
          href="https://wa.me/919012366688"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
