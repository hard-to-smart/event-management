import { Category } from "../models/categorySchema.js";
import { Event } from "../models/eventSchema.js";
import { Booking } from "../models/bookingSchema.js";

export const createCategory = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const exisitingCategory = await Category.findOne({ title });
    if (exisitingCategory) {
      return res
        .status(409)
        .json({ message: "Category with same title exists" });
    }
    const category = new Category({
      title,
      description,
      image,
    });

    await category.save();
    return res.status(201).json({
      message: "Category added successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteCategory = await Category.findById(id);

    if (!deleteCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    await Event.deleteMany({ category: deleteCategory._id });
    await Booking.deleteMany({ category: deleteCategory._id });
    await Category.findByIdAndDelete({ _id: deleteCategory._id });
    return res
      .status(200)
      .json({
        message:
          "Category and all related events / bookings deleted successfully",
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const viewCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res
      .status(200)
      .json({
        message: " Categories displayed successfully",
        categories: categories || [],
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};
