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
    date: "2024-10-20",
    time: "15:00",
  });

  await newEvent.save();
  eventId = newEvent._id; 
});

// Cleaning up after each test
afterEach(async () => {
  await Booking.deleteMany({});
});

// Disconnecting db after all tests
afterAll(async () => {
  await mongoose.disconnect();
});

describe("GET /api/booking/view-all", () => {
  // Test case 1 - View all bookings
  test("should return all bookings successfully", async () => {
    const booking = new Booking({
      event: eventId,
      user: userId,
      category: new mongoose.Types.ObjectId(),
    });

    await booking.save();

    const response = await request(app)
      .get("/api/booking/view-all") 
      .set("Cookie", adminCookie); 

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Bookings retrieved successfully");
    
    expect(response.body.bookings).toHaveLength(1); 
  });

  // Test case 2 - Empty array if no bookings exist
  test("should return empty array if no bookings exist", async () => {
    const response = await request(app)
      .get("/api/booking/view-all") 
      .set("Cookie", adminCookie); 

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Bookings retrieved successfully");
    expect(response.body.bookings).toEqual([]); 
  });
});