import { response } from "express";
import { Booking } from "../models/bookingSchema.js";
import { Event } from "../models/eventSchema.js";
import { User } from "../models/userSchema.js";

export const createBooking = async (req, res) => {
  try {
    console.log("inside create booking");
    const { userId, eventId } = req.body;
    console.log(userId, eventId, "inside booking controller");

    const user = await User.findById(userId);
    const event = await Event.findById(eventId);
    if (user && event) {
      const newBooking = await Booking.create({
        event: eventId,
        user: userId,
      });
      return res.status(200).json({ message: "Event booked successfully" });
    } else {
      return res.status(400).json({ message: "Event or User does not exist" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

// not tested yet on postman
export const viewallBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user").populate("event");
    console.log(bookings);
    // console.log(newBookings,"abc");
    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found" });
    }
    return res
      .status(200)
      .json({ message: "Bookings retrieved successfully", bookings });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const viewBookingById = async (req, res) => {
  try {
    const bookings = await Booking.findById({ user: req.user._id }).populate({
      path: "event",
      select: "title date location time",
    });
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

export const rejectBooking = async (req, res) => {
  try {
    const { bookingId } = req.body;
    const booking = await Booking.findById({ _id: bookingId });
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    booking.status = "rejected";
    await booking.save();
    return res.status(200).json({ message: "Booking rejected successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const approveBooking = async (req, res) => {
  try {
    const { bookingId } = req.body;
    const booking = await Booking.findById({ _id: bookingId });
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    booking.status = "approved";
    await booking.save();
    return res.status(200).json({ message: "Booking approved successfully" });
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

    if (action) {
      booking.status = action;
    }

    await booking.save();

    return res
      .status(200)
      .json({ message: "Booking updated successfully", booking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};
