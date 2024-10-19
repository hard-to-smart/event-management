import express from 'express'
import { createEvent, deleteEvent, viewAllEvents, viewEvents } from '../controllers/eventController.js';
import { adminMiddleware } from '../middleware/adminMiddleware.js';

const router = express.Router();

router.post('/view', viewEvents);
router.get('/view-all', viewAllEvents);
// admin route
router.post('/add', adminMiddleware, createEvent);
router.delete('/delete/:id', adminMiddleware, deleteEvent);
export default router;