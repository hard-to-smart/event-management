import express from 'express'
import { createCategory, deleteCategory, viewCategories } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/view', viewCategories);
// admin route
router.post('/add', createCategory);
router.delete('/delete', deleteCategory);
export default router