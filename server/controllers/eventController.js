import { Event } from "../models/eventSchema.js";
import { Category } from "../models/categorySchema.js";

export const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      date,
      location,
      time,
      organiser,
      attendees = [],
    } = req.body;

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
    console.log(validateCategory);
    if (!validateCategory) {
      return res
        .status(400)
        .json({ message: "Category not found. Provide a valid category" });
    }

    

    const event = new Event({
      title,
      description,
      category: validateCategory._id,
      date,
      location,
      time,
      organiser,
      attendees,
    });

    await event.save();

    return res.status(201).json({
      message: "Event added successfully",
      event: { id: event._id, title, date, location },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { title } = req.body;
    const deletedEvent = await Event.findOneAndDelete({title})
    if(deletedEvent){
        return res.status(200).json({message: "Event deleted successfully"})
    }
    else{
        return res.status(400).json({message : "Event not found"})
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
