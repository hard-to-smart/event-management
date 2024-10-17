import express from 'express'
import { createBooking, viewBookingById, viewallBookings, approveBooking, rejectBooking, updateBooking } from '../controllers/bookingController.js';
import {adminMiddleware} from '../middleware/adminMiddleware.js'
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// router.post('/create', authMiddleware, createBooking);
router.post('/create', createBooking);

router.get('/view', viewBookingById);

// admin route
router.get('/view-all' , viewallBookings);
router.put('/:id', updateBooking);

export default router