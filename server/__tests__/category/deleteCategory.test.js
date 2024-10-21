// __tests__/auth/deleteCategory.test.js

import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../../app";
import { Category } from "../../models/categorySchema";
import { User } from "../../models/userSchema";
import { Booking } from "../../models/bookingSchema"; 
import { Event } from "../../models/eventSchema"; 
import bcrypt from "bcryptjs";

dotenv.config();

let cookie;

// Connecting to the database
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  // Registering admin
  const hashedPassword = await bcrypt.hash("password123", 10);
  await User.create({
    name: "John Doe",
    email: "john@xyz.com",
    phone: "1234567890",
    password: hashedPassword,
    role: "admin",
  });

  // Logging in admin
  const login = await request(app).post("/api/user/login").send({
    email: "john@xyz.com",
    password: "password123",
  });
  cookie = login.headers['set-cookie'];
});

// Cleaning categories after each test
afterEach(async () => {
  await Category.deleteMany({});
  await User.deleteMany({});
});

// Disconnecting db after all test cases
afterAll(async () => {
  await mongoose.disconnect();
});

describe("POST /api/category/delete/:id", () => {
  
  // Test case 1 - Successful category deletion
  test("should delete category successfully", async () => {
    const newCategory = new Category({ 
      title: "Festivals",
      description: "All festivals",
      image: "https://dummyimage.com/600x400/000/fff",
    });
    
    await newCategory.save(); 
    const newEvent = await Event.create({
      title: "Music Festival",
      description: "A grand music festival",
      location: "Central Park",
      category: newCategory._id,
      price: 50,
      date: "2024-10-20",
      time: "15:00",
    });

    const booking = await Booking.create({
      user: new mongoose.Types.ObjectId(), 
      event: newEvent._id,
      category: newCategory._id,
    });

  
    const response = await request(app)
      .delete(`/api/category/delete/${newCategory._id}`)
      .set("Cookie", cookie); 

    expect(response.status).toBe(200);
    const deletedCategory = await Category.findById(newCategory._id);
    const deletedEvent = await Event.findById(newEvent._id);
    const deletedBooking = await Booking.findById(booking._id);

    expect(deletedCategory).toBeNull(); 
    expect(deletedEvent).toBeNull(); 
    expect(deletedBooking).toBeNull(); 
  });

  // Test case 2 - Category not found
  test("should return an error if category does not exist", async () => {
    const noId = "59d0ff689b95b02fec446c55"; // Dummy ID
    const response = await request(app)
      .delete(`/api/category/delete/${noId}`)
      .set("Cookie", cookie); 
    
    expect(response.status).toBe(404); 
  });
});