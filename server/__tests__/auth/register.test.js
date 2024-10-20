// __tests__/auth/register.test.js

import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../../app";
import { User } from "../../models/userSchema";

dotenv.config();

// connecting db
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

// cleaning users after test
afterEach(async () => {
  await User.deleteMany({});
});

// disconnecting db after all test cases
afterAll(async () => {
  await mongoose.disconnect();
});


describe("POST /api/user/register", () => {
  // test case 1- successful registration when all correct
  test("should register a new user successfully", async () => {
    const newUser = {
      name: "John Doe",
      email: "john@xyz.com",
      phone: "1234567890",
      password: "password123",
      role: "user",
    };
    const response = await request(app)
      .post("/api/user/register")
      .send(newUser);

    expect(response.status).toBe(201);

    const user = await User.findOne({ email: newUser.email });
    expect(user).toBeTruthy();
  });

  // test case 2- failed registration when field missing
  test("should return 400 if required fields are missing", async () => {
    const response = await request(app).post("/api/user/register").send({name: "Jhon Doe"}); 

    expect(response.status).toBe(400);
  });

    // test case 3- failed registration when email already exists
    test('should return 409 if user already exists', async () => {
      await request(app)
        .post("/api/user/register")
        .send({
          name: 'Jane Doe',
          email: 'jane@xyz.com',
          phone: '0987654321',
          password: 'password123',
          role: 'user',
        });

      const response = await request(app)
        .post('/api/user/register')
        .send({
          name: 'Jao Doe',
          email: 'jane@xyz.com',
          phone: '0987654321',
          password: 'password123',
          role: 'user',
        });

      expect(response.status).toBe(409);
      expect(response.body).toHaveProperty('message', 'User already exists');
    });
});
