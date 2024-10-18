import express from 'express'
import { createBooking, viewBookingById, viewallBookings, approveBooking, rejectBooking, updateBooking } from '../controllers/bookingController.js';
import {adminMiddleware} from '../middleware/adminMiddleware.js'
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createBooking);

router.get('/view', authMiddleware, viewBookingById);

// admin route
router.get('/view-all' , adminMiddleware, viewallBookings);
router.put('/:id',adminMiddleware, updateBooking);

export default router