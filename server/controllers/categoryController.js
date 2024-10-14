import { Category } from "../models/categorySchema.js";
import { Event } from "../models/eventSchema.js";

export const createCategory = async (req, res) => {
  try {
    const { title, description } = req.body;
    const exisitingCategory = await Category.findOne({ title });
    if (exisitingCategory) {
      return res
        .status(400)
        .json({ message: "Category with same title exists" });
    }
    const category = new Category({
      title,
      description,
    });

    await category.save();
    return res.status(201).json({
      message: "Category added successfully",
      category: { id: category._id, title, description },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { title } = req.body;

    const deleteCategory = await Category.findOne({ title });

    if (!deleteCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    await Event.deleteMany({category: deleteCategory._id});
    await Category.deleteOne({
      _id: deleteCategory._id
    })
    return res.status(201).json({ message: "Category and all related events deleted successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};