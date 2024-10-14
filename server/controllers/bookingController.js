import { response } from "express";
import { Booking } from "../models/bookingSchema.js";
import { Event } from "../models/eventSchema.js";
import { User } from "../models/userSchema.js";

export const createBooking = async (req, res) => {
  try {
    const { userId, eventId } = req.body;
    if (
      userId === (await User.findById({ userId })) &&
      eventId === (await Event.findById({ eventId }))
    ) {
      const newBooking = new Booking({
        event: eventId,
        user: userId,
      });
      newBooking.save();
      return response
        .status(201)
        .json({ message: "Event booked successfully" });
    } else {
      return response
        .status(400)
        .json({ message: "Event or User does not exist" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
