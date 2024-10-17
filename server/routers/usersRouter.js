import express from "express";
import { deleteUser, getUsers } from "../controllers/usersController.js";
import { adminMiddleware } from '../middleware/adminMiddleware.js';

const router = express.Router();
router.get('/view', adminMiddleware, getUsers)
router.delete('/delete/:id', deleteUser)

export default router