import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    status:{
        type: String, 
        enum: ['pending', 'rejected', 'approved'],
        default: 'pending'
    },
    event:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    }
}, {timestamps: true})

export const Booking = mongoose.model('booking', bookingSchema)