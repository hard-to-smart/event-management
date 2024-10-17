import { User } from "../models/userSchema.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res
      .status(200)
      .json({ message: "Users Fetched successfully", users });
  } catch (error) {
    return res.status(400).json({ message: "Server Error", error });
  }
};

export const deleteUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      console.log(req.params.id)
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      await user.deleteOne();
      return res.status(200).json({ message: "User deleted" });
    } catch (error) {
      return res.status(400).json({ message: "Server Error", error });
    }
  };
  

