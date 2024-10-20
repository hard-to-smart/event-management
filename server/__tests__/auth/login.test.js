// __tests__/auth/login.test.js

import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../../app";
import {User} from "../../models/userSchema"; 
import bcrypt from "bcryptjs";

dotenv.config();

// connecting db
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

// cleaning users after test
afterEach(async () => {
  await User.deleteMany({});
});

// Disconnecting db after all test cases
afterAll(async () => {
  await mongoose.disconnect();
});

describe("POST /api/user/login", () => {
  // Pre Test case- register a user first
  beforeEach(async () => {
    const hashedPassword = await bcrypt.hash("password123", 10);
    await User.create({
      name: "John Doe",
      email: "john@xyz.com",
      phone: "1234567890",
      password: hashedPassword,
      role: "user",
    });
  });

  // Test case 1 - Successful login
  test("should log in a user successfully", async () => {
    const response = await request(app)
      .post("/api/user/login")
      .send({
        email: "john@xyz.com",
        password: "password123",
      });

    expect(response.status).toBe(200);
    expect(response.body.user).toHaveProperty("id");
    expect(response.body.user.email).toBe("john@xyz.com");
  });

  // Test case 2 - User not found
  test("should return an error if user does not exist", async () => {
    const response = await request(app)
      .post("/api/user/login")
      .send({
        email: "nouser@xyz.com",
        password: "password123",
      });

    expect(response.status).toBe(404);
  });

  // Test case 3 - Invalid password
  test("should return an error if password is incorrect", async () => {
    const response = await request(app)
      .post("/api/user/login")
      .send({
        email: "john@xyz.com",
        password: "wrongpassword",
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid password");
  });
});