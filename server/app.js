import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv"
import allRouters from './routers/allRouters.js'
const app = express();
dotenv.config();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`Full URL: ${req.originalUrl}`);
    next();
  });
dbConnection();

app.use('/api', allRouters)
allRouters.stack.forEach((route, i) => {
    if (route.route) {
      console.log(`Route ${i}: ${route.route.path}`);
    }
  });
  
export default app;
