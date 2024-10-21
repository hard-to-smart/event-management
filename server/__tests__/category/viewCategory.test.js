// __tests__/auth/viewCategory.test.js

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

beforeAll(async ()=>{
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

})
// cleaning categories after test
afterEach(async () => {
  await Category.deleteMany({});
  await User.deleteMany({});
});

// disconnecting db after all test cases
afterAll(async () => {
  await mongoose.disconnect();
});

describe("GET /api/category/view", async () => {
    // Test case 1 - Successful category display
    test("should return all categories successfully", async () => {
   const response = await request(app).get("/api/category/view")
   expect(response.status).toBe(200);
   expect(response.body.categories).toHaveLength(1);
    });
})

  