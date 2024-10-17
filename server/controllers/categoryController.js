import { Category } from "../models/categorySchema.js";
import { Event } from "../models/eventSchema.js";

export const createCategory = async (req, res) => {
  try {
    const { title, description, image} = req.body;
    const exisitingCategory = await Category.findOne({ title });
    if (exisitingCategory) {
      return res
        .status(400)
        .json({ message: "Category with same title exists" });
    }
    const category = new Category({
      title,
      description,
      image
    });

    await category.save();
    return res.status(201).json({
      message: "Category added successfully",
      category: { id: category._id, title, description, image},
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

export const viewCategories = async (req, res) => {
  try{
    const categories = await Category.find()
    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "No categories found" });
    }
    return res.status(200).json({ message: " Categories displayed successfully", categories});
  }
  catch(error){
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
}