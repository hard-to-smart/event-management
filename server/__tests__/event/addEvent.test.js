// __tests__/event/createEvent.test.js

import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../../app"; 
import { Event } from "../../models/eventSchema"; 
import { Category } from "../../models/categorySchema"; 
import { User } from "../../models/userSchema"; 
import bcrypt from "bcryptjs";

dotenv.config();

let adminCookie;
let categoryId; 

// Connecting to the database
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  // sample category 
  const category = new Category({
    title: "Music",
    description: "All about music events",
    image: "https://dummyimage.com/600x400/000/fff",
  });
  await category.save();
  categoryId = category._id; 

  // Registering admin
  const hashedPasswordAdmin = await bcrypt.hash("adminpassword", 10);
  await User.create({
    name: "Admin",
    email: "admin@xyz.com",
    phone: "0987654321",
    password: hashedPasswordAdmin,
    role: "admin", 
  });

  // Logging in admin
  const adminLogin = await request(app).post("/api/user/login").send({
    email: "admin@xyz.com",
    password: "adminpassword",
  });
  adminCookie = adminLogin.headers['set-cookie'];
});

// Cleaning up after each test
afterEach(async () => {
  await Event.deleteMany({});
  await Category.deleteMany({});
});

// Disconnecting db after all tests
afterAll(async () => {
  await mongoose.disconnect();
});

describe("POST /api/event/add", () => {
  // Test case 1 - Successful event creation
  test("should create a new event successfully", async () => {
    const newEvent = {
      title: "Music Festival",
      description: "A grand music festival",
      location: "Central Park",
      date: "2024-11-21", 
      time: "15:00",
      category: categoryId, 
      price: 50, 
    };

    const response = await request(app)
      .post("/api/event/add")
      .set("Cookie", adminCookie)
      .send(newEvent);

    expect(response.status).toBe(201);

    const createdEvent = await Event.findById(response.body.event.id);
    expect(createdEvent).toBeTruthy();
    expect(createdEvent.title).toBe(newEvent.title);
  });

  // Test case 2 - Missing required fields
  test("should return an error if required fields are missing", async () => {
    const newEvent = {
      description: "A grand music festival",
      location: "Central Park",
      date: "2024-11-21",
      time: "15:00",
    };

    const response = await request(app)
      .post("/api/event/add")
      .set("Cookie", adminCookie)
      .send(newEvent);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      "Title, Date, Category, Location and Time are required fields."
    );
  });

  // Test case 3 - Event with the same title already exists
  test("should return an error if event with the same title exists", async () => {
    const existingEvent = {
      title: "Music Festival",
      description: "A grand music festival",
      location: "Central Park",
      date: "2024-11-21",
      time: "15:00",
      category: categoryId,
    };

    await request(app)
      .post("/api/event/add")
      .set("Cookie", adminCookie)
      .send(existingEvent); 

    const response = await request(app)
      .post("/api/event/add")
      .set("Cookie", adminCookie)
      .send(existingEvent); 

    expect(response.status).toBe(400);
  });

  // Test case 4 - Invalid category
  test("should return an error if category does not exist", async () => {
    const newEvent = {
      title: "Invalid Category Event",
      description: "An event with an invalid category",
      location: "Central Park",
      date: "2024-11-21",
      time: "15:00",
      category: new mongoose.Types.ObjectId(), 
    };

    const response = await request(app)
      .post("/api/event/add")
      .set("Cookie", adminCookie)
      .send(newEvent);

    expect(response.status).toBe(400);
  });
});