import express from 'express'
import { createCategory, deleteCategory } from '../controllers/categoryController.js';

const router = express.Router();
router.post('/add', createCategory);
router.delete('/delete', deleteCategory);
export default router