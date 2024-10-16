import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import allRouters from './routers/allRouters.js';
import cookieParser from "cookie-parser";
import cors from 'cors';
import multer from "multer";
const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Full URL: ${req.originalUrl}`);
  next();
});

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));

dbConnection();

app.use('/api', allRouters);

allRouters.stack.forEach((route, i) => {
  if (route.route) {
    console.log(`Route ${i}: ${route.route.path}`);
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
