import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event name is required"],
    },
    description: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    date: {
      type: Date,
      required: [true, "Event date is required"],
    },
    location: {
      type: String,
      required: [true, "Event location is required"],
    },
    time: {
      type: String,
      required: [true, "Event time is required"],
    },
    image:{
      type:String,
      default:'https://static.thenounproject.com/png/1077596-200.png',

    }
  },
  { timestamps: true }
);

export const Event = mongoose.model("event", eventSchema);
