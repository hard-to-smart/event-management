import express from 'express'
import { createBooking, viewBookingById, viewallBookings, approveBooking, rejectBooking } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/create', createBooking);
router.get('/view', viewBookingById);


// admin route
router.get('/view-all', viewallBookings);
router.put('/approve', approveBooking);
router.put('/reject', rejectBooking);

export default router