import express from 'express'
import { createBooking, viewBookingById, viewallBookings, approveBooking, rejectBooking } from '../controllers/bookingController.js';
import {adminMiddleware} from '../middleware/adminMiddleware.js'
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createBooking);
router.get('/view', authMiddleware, viewBookingById);


// admin route
router.get('/view-all' , adminMiddleware, viewallBookings);
router.put('/approve', approveBooking);
router.put('/reject', rejectBooking);

export default router