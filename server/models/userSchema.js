import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required"]
    },
    email: {
        type: String,
        required: [true, "Email Required"]
    },
    phone: {
        type: String,
        required: [true, "Phone number Required"]
    },
    password: {
        type: String,
        required: [true, "Password Required"]
    }
})

export const User =  mongoose.model("user", userSchema)