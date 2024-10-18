import express from 'express'
import { createCategory, deleteCategory, viewCategories } from '../controllers/categoryController.js';
import { adminMiddleware } from '../middleware/adminMiddleware.js';

const router = express.Router();
router.get('/view', viewCategories);
// admin route
router.post('/add', adminMiddleware, createCategory);
router.delete('/delete/:id', adminMiddleware, deleteCategory);
export default router