import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Category type is required"],
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    default:'https://static.thenounproject.com/png/1077596-200.png',
    required: false,
  }
},  {timestamps: true},
);

export const Category = mongoose.model("Category", categorySchema);
