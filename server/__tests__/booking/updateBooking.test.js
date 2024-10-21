// __tests__/booking/viewAllBookings.test.js

import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../../app";
import { User } from "../../models/userSchema";
import { Event } from "../../models/eventSchema";
import { Booking } from "../../models/bookingSchema";
import bcrypt from "bcryptjs";

dotenv.config();

let adminCookie;
let eventId;
let adminId;
let userCookie;
let userId;
let bookingId;
// Connecting to the database
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  // Registering admin
  const hashedPasswordAdmin = await bcrypt.hash("adminpassword", 10);
  const admin = await User.create({
    name: "Admin",
    email: "admin@xyz.com",
    phone: "0987654321",
    password: hashedPasswordAdmin,
    role: "admin",
  });

  adminId = admin._id;

  // Logging in admin
  const adminLogin = await request(app).post("/api/user/login").send({
    email: "admin@xyz.com",
    password: "adminpassword",
  });

  adminCookie = adminLogin.headers["set-cookie"];

  // Registering a user
  const hashedPasswordUser = await bcrypt.hash("userpassword", 10);
  const user = await User.create({
    name: "John Doe",
    email: "user@xyz.com",
    phone: "0987654321",
    password: hashedPasswordUser,
    role: "user",
  });

  // Logging in user
  const userLogin = await request(app).post("/api/user/login").send({
    email: "user@xyz.com",
    password: "userpassword",
  });

  userCookie = userLogin.headers["set-cookie"];
  userId = user._id;

  // Creating an event
  const newEvent = new Event({
    title: "Music Festival",
    description: "A grand music festival",
    location: "Central Park",
    category: new mongoose.Types.ObjectId(),
    price: 50,
    date: "2024-10-20",
    time: "15:00",
  });

  await newEvent.save();
  eventId = newEvent._id;

  // Creating a booking
  const booking = new Booking({
    event: eventId,
    user: userId,
    category: new mongoose.Types.ObjectId(),
  });

  const savedBooking = await booking.save();
  bookingId = savedBooking._id; 
});

//Deleting booking after all tests completed
afterAll(async () => {
  await Booking.deleteMany({});
});

// Disconnecting db after all tests
afterAll(async () => {
  await mongoose.disconnect();
});

describe("PUT /api/booking/:id", () => {
  // Test case 1 - Approve booking successfully
  test("should update booking status to approved", async () => {
    const response = await request(app)
      .put(`/api/booking/${bookingId}`) 
      .set("Cookie", adminCookie)
      .send({ action: "approved" }); 

    expect(response.status).toBe(200);

    const updatedBooking = await Booking.findById(bookingId);
    expect(updatedBooking.status).toBe("approved");
  });

  // Test case 2 - Reject booking successfully
  test("should update booking status to rejected", async () => {
    const response = await request(app)
      .put(`/api/booking/${bookingId}`)
      .set("Cookie", adminCookie)
      .send({ action: "rejected" }); 

    expect(response.status).toBe(200);
    const updatedBooking = await Booking.findById(bookingId);
    expect(updatedBooking.status).toBe("rejected");
  });

  // Test case 3 - Error when invalid status is provided
  test("should return an error if invalid status is provided", async () => {
    const response = await request(app)
      .put(`/api/booking/${bookingId}`)
      .set("Cookie", adminCookie)
      .send({ action: "invalid-status" }); 

    expect(response.status).toBe(400); 
  });

  // Test case 4 - Booking does not exist
  test("should return an error if booking does not exist", async () => {
    const response = await request(app)
      .put(`/api/booking/${new mongoose.Types.ObjectId()}`)
      .set("Cookie", adminCookie)
      .send({ action: "approved" });

    expect(response.status).toBe(404);
  });
});
