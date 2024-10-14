import { User } from "../models/userSchema.js";
import bcrypt from 'bcrypt';
export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const exisitingUser = await User.findOne({ email });
    if (exisitingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({
      name,
      email,
      phone,
      password,
    });

    await user.save();

    // const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
    //     expiresIn: '1h',
    //   });

    return res.status(201).json({
      message: "User created successfully",
      user: { id: user._id, name, email,phone },
    });
    // return res.status(201).json({
    //   message: "User created successfully",
    //   user: { id: user._id, name, email,phone },
    //   token,
    // });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // const isPasswordMatch = await bcrypt.compare(password, user.password);
    const isPasswordMatch = password === user.password;
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    //         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    //             expiresIn: '1h',
    //           });

    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, email },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};
