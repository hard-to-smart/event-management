import express from "express";
import { loginUser, registerUser, logoutUser} from "../controllers/userController.js";
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', authMiddleware, logoutUser);


export default router