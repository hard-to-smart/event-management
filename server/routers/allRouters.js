import express from 'express'
import userRoutes from './userRouter.js'
import categoryRoutes from './categoryRoutes.js'
import eventRoutes from './eventRoutes.js'
import bookingRoutes from './bookingRoutes.js'

const router = express.Router();

router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/event', eventRoutes);
router.use('/booking', bookingRoutes);
export default router