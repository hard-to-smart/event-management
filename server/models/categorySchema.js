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
    required: true
  }
},  {timestamps: true},
);

export const Category = mongoose.model("category", categorySchema);
