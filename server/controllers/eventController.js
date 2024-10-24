import { Event } from "../models/eventSchema.js";
import { Category } from "../models/categorySchema.js";
import { Booking } from "../models/bookingSchema.js";

export const createEvent = async (req, res) => {
  try {
    console.log(req.body)
    const { title, description, image, date, time, location, category, price} = req.body
    if (!title || !date || !category || !location || !time) {
      return res.status(400).json({
        message:
          "Title, Date, Category, Location and Time are required fields.",
      });
    }

    const existingEvent = await Event.findOne({ title });
    if (existingEvent) {
      return res
        .status(400)
        .json({ message: "Event with the same title already exists" });
    }
    const validateCategory = await Category.findOne({ title: category });
    if (!validateCategory) {
      return res
        .status(400)
        .json({ message: "Category not found. Provide a valid category" });
    }

    const event = new Event({
      title,
      description,
      image,
      date,
      time,
      location,
      price,
      category: validateCategory._id,
    });
    console.log(event)
    await event.save();
    return res.status(201).json({
      message: "Event added successfully",
      event
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const associatedBooking = await Booking.deleteMany({ event: id });
    const deletedEvent = await Event.findByIdAndDelete(id);

    if (deletedEvent && associatedBooking.deletedCount === 0) {
      return res.status(200).json({ message: "Event deleted successfully" });
    } else if (deleteEvent && associatedBooking.deletedCount > 0) {
      return res.status(200).json({
        message: `Event deleted with its ${associatedBooking.deletedCount} associated bookings`,
      });
    } else {
      return res.status(400).json({ message: "Event not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const viewEvents = async (req, res) => {
  try {
    const { categoryID } = req.body;
    const events = await Event.find({ category: categoryID });

    if (!events || events.length === 0) {
      return res.status(200).json({ message: "No events found" });
    } else
      return res
        .status(200)
        .json({ message: "Events displayed successfully", events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const viewAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    if (!events || events.length === 0) {
      return res.status(200).json({ message: "No events found" });
    } else
      return res
        .status(200)
        .json({ message: "Events displayed successfully", events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
