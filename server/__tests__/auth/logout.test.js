// __tests__/auth/logout.test.js

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

describe("GET /api/user/logout", () => {

  // Test case to register a user for login tests
  beforeEach(async () => {
    const hashedPassword = await bcrypt.hash("password123", 10);
    await User.create({
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      password: hashedPassword,
      role: "user",
    });
  });

  // Test case - Successful logout
  test("should log out a user successfully", async () => {
    const login = await request(app)
      .post("/api/user/login")
      .send({
        email: "john@example.com",
        password: "password123",
      });

    expect(login.status).toBe(200);
    
    const response = await request(app)
      .get("/api/user/logout")

    expect(response.status).toBe(200);
    
  });

});