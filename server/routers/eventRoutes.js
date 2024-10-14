import express from 'express'
import { createEvent, deleteEvent } from '../controllers/eventController.js';

const router = express.Router();
router.post('/add', createEvent);
router.delete('/delete', deleteEvent);
export default router;