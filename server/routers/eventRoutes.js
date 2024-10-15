import express from 'express'
import { createEvent, deleteEvent, viewEvents } from '../controllers/eventController.js';

const router = express.Router();

router.get('/view', viewEvents);
// admin route
router.post('/add', createEvent);
router.delete('/delete', deleteEvent);
export default router;