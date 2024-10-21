// __tests__/booking/createBooking.test.js

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
let userCookie;
let eventId;
let userId;

// Connecting to the database
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  // Registering and logging in admin
  const hashedPasswordAdmin = await bcrypt.hash("adminpassword", 10);
  await User.create({
    name: "Admin",
    email: "admin@xyz.com",
    phone: "1234567890",
    password: hashedPasswordAdmin,
    role: "admin",
  });

  const adminLogin = await request(app).post("/api/user/login").send({
    email: "admin@xyz.com",
    password: "adminpassword",
  });
  adminCookie = adminLogin.headers['set-cookie'];

  // Registering a user
  const hashedPasswordUser = await bcrypt.hash("userpassword", 10);
  const user = await User.create({
    name: "John Doe",
    email: "user@xyz.com",
    phone: "0987654321",
    password: hashedPasswordUser,
    role: "user",
  });
  // logging user
  const userLogin = await request(app).post("/api/user/login").send({
    email: "user@xyz.com",
    password: "userpassword",
  });
  userCookie = userLogin.headers['set-cookie'];
  userId = user._id; 

  // Creating an event
  const newEvent = new Event({
    title: "Music Festival",
    description: "A grand music festival",
    location: "Central Park",
    category: new mongoose.Types.ObjectId(), 
    price: 50,
    date: new Date("2024-10-20"),
    time: "15:00",
  });

  const savedEvent = await newEvent.save();
  eventId = savedEvent._id; 
});

// Cleaning up after each test
afterEach(async () => {
  await Booking.deleteMany({});
});

// Disconnecting db after all tests
afterAll(async () => {
  await mongoose.disconnect();
});

describe("POST /api/booking/create", () => {
    // test case 1 - booking successful
  test("should create a booking successfully", async () => {
    const response = await request(app)
      .post("/api/booking/create")
      .set("Cookie", userCookie) 
      .send({ userId, eventId });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Event booked successfully");
    
    const bookingExists = await Booking.findOne({ user: userId, event: eventId });
    
    expect(bookingExists).toBeTruthy();
  });

  // test case 2 - error if user does not exist
  test("should return an error if user does not exist", async () => {
    const response = await request(app)
      .post("/api/booking/create")
      .set("Cookie", userCookie)
      .send({ userId: new mongoose.Types.ObjectId(), eventId }); 

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("User does not exist");
  });

   // test case 3 - error if event does not exist
  test("should return an error if event does not exist", async () => {
    const response = await request(app)
      .post("/api/booking/create")
      .set("Cookie", userCookie)
      .send({ userId, eventId: "59d0ff689b95b02fec446c55" });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Event does not exist");
  });
});