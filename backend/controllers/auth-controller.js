import { User } from "../models/user-model.js";

export const home = async (req, res) => {
  try {
    res.status(200).send("boolean tapir");
  } catch (error) {
    console.log(error);
  }
};

export const contact = async (req, res, next) => {
  try {
    console.log(req.body);
    const {
      firstname,
      lastname,
      age,
      gender,
      address,
      email,
      phone,
      complaints,
    } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "Email already in use." });
    }
    // This would've had checked the email if it exists

    const userCreated = await User.create({
      firstname,
      lastname,
      age,
      gender,
      address,
      email,
      phone,
      complaints,
    });

    res.status(201).json({
      msg: userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).send("Internal Server Error.");
    next(error);
  }
};
