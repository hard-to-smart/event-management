import { User } from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
// add user
export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, role, password } = req.body;
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const exisitingUser = await User.findOne({ email });
    if (exisitingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // keeping salt 10

    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
    });

    await user.save();
    
    return res.status(201).json({
      message: "User created successfully",
      user: { id: user._id, name, email, phone },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};
// login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = generateToken(user);
    res
      .cookie("auth_token", token, {
        httpOnly: false,
        secure: "false",
        sameSite: "none",
        maxAge: 3600000,
      })
      .status(200)
      .json({
        message: "Login successful",
        user: { id: user._id, email ,role: user.role, name: user.name , phone: user.phone},
      });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

// logout user
export const logoutUser = async (req, res) =>{
  try{
    res.clearCookie("auth_token");
    res.status(200).json({message: 'User logged out successfully'});
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
}