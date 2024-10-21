import { response } from "express";
import { Booking } from "../models/bookingSchema.js";
import { Event } from "../models/eventSchema.js";
import { User } from "../models/userSchema.js";

export const createBooking = async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event does not exist" });
    }
    // if (user && event && categoryId) {
      const categoryId = event.category

      const newBooking = await Booking.create({
        event: eventId,
        user: userId,
        category: categoryId,
      });

      return res.status(201).json({ message: "Event booked successfully" });
    } 
    // else {
    //   return res.status(404).json({ message: "Event/User/Category does not exist" });
    // }
  // }
   catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};


export const viewallBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user").populate("event").populate("category")
    console.log(bookings);
    // if (!bookings || bookings.length === 0) {
    //   return res.status(404).json({ message: "No bookings found" });
    // }
    return res
      .status(200)
      .json({ message: "Bookings retrieved successfully", bookings: bookings || [],});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const viewUserBookings = async (req, res) => {
  try {
    console.log("in controller")
    const { userId } = req.query;
    console.log(userId)
    const bookings = await Booking.find({ user: userId }).populate('event')
    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found" });
    }
    return res
      .status(200)
      .json({ message: "All bookings retrieved successfully", bookings });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};


export const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { action } = req.body;

    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    if (!action || !['approved', 'rejected'].includes(action)) {
      return res.status(400).json({ message: "Invalid status value" });
    }
    
    booking.status = action;
    await booking.save();

    return res
      .status(200)
      .json({ message: "Booking updated successfully", booking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};
