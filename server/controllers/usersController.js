import { User } from "../models/userSchema.js";
import { Booking } from "../models/bookingSchema.js";

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
      const id = req.params.id;
      const associatedBooking = await Booking.deleteMany({user: id})
      const deletedUser = await User.findByIdAndDelete(id);
      
      if (deletedUser && associatedBooking.deletedCount > 0) {
        return res.status(200).json({
          message: `User deleted successfully with ${associatedBooking.deletedCount} associated bookings`
        });
      } else if (deletedUser && associatedBooking.deletedCount === 0) {
        return res.status(200).json({
          message: "User deleted successfully"
        });
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Server Error", error });
    }
  };