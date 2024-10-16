import express from 'express'
import { createEvent, deleteEvent, viewEvents } from '../controllers/eventController.js';
import { adminMiddleware } from '../middleware/adminMiddleware.js';

const router = express.Router();

router.get('/view', viewEvents);
// admin route
router.post('/add', adminMiddleware, createEvent);
router.delete('/delete', adminMiddleware ,deleteEvent);
export default router;