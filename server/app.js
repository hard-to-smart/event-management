import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import allRouters from './routers/allRouters.js';
import cookieParser from "cookie-parser";
import cors from 'cors';
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));


dbConnection();

app.use('/api', allRouters);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
