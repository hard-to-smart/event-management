import { Event } from "../models/eventSchema.js";
import { Category } from "../models/categorySchema.js";

export const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      image,
      date,
      time,
      location,
      category
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
      image,
      date,
      time,
      location,
      category: validateCategory._id
    });

    await event.save();

    return res.status(201).json({
      message: "Event added successfully",
      event: { id: event._id, title, date, location , image},
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)
    const deletedEvent = await Event.findByIdAndDelete(id)
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

export const viewEvents = async (req, res) => {
  try {
    const { categoryID } = req.body; 
    const events = await Event.find({ category: categoryID });

    if (!events || events.length === 0) {
      return res.status(200).json({ message: "No events found" });
    }

    else return res.status(200).json({ message: "Events displayed successfully", events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
