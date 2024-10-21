// __tests__/auth/addCategory.test.js

import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../../app";
import { Category } from "../../models/categorySchema";
import { User } from "../../models/userSchema";
import bcrypt from "bcryptjs";

dotenv.config();

let cookie;

// connecting db
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

//registering admin
beforeAll(async () => {
  const hashedPassword = await bcrypt.hash("password123", 10);
  await User.create({
    name: "John Doe",
    email: "john@xyz.com",
    phone: "1234567890",
    password: hashedPassword,
    role: "admin",
  });
});

// Logging in admin
beforeAll(async () => {
  const login = await request(app).post("/api/user/login").send({
    email: "john@xyz.com",
    password: "password123",
  });
  cookie = login.headers['set-cookie'];
});

// cleaning categories after test
afterEach(async () => {
  await Category.deleteMany({});
  await User.deleteMany({});
});

// disconnecting db after all test cases
afterAll(async () => {
  await mongoose.disconnect();
});

describe("POST /api/category/add", () => {
  // Test case 1 - Successful category creation
  test("should create a new category successfully", async () => {
    const newCategory = {
      title: "Festivals",
      description: "All festivals",
      image: "https://dummyimage.com/600x400/000/fff",
    };

    const response = await request(app)
      .post("/api/category/add")
      .set("Cookie", cookie)
      .send(newCategory);

    expect(response.status).toBe(201);

    const createdCategory = await Category.findById(response.body.category.id);
    expect(createdCategory).toBeTruthy();
    expect(createdCategory.title).toBe(newCategory.title);
  });

    // Test case 2 - Category already exists
    test("should return an error if category with the same title exists", async () => {
      const existingCategory = {
        title: "Festivals",
        description: "All festivals",
        image: "https://dummyimage.com/600x400/000/fff",
      };

      await request(app)
        .post("/api/category/add")
        .set("Cookie", cookie)
        .send(existingCategory);

      const response = await request(app)
        .post("/api/category/add")
        .set("Cookie", cookie)
        .send(existingCategory);

      expect(response.status).toBe(409);
    });
});
