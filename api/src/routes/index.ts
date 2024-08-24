import { Router } from 'express';
import accountRoutes from './accountRoutes';
import userRoutes from './userRoutes';
import transactionRoutes from './transactionRoutes';
import clientRoutes from './clientRoutes';

const router = Router();

router.use('/accounts', accountRoutes);
router.use('/auth', userRoutes);
router.use('/transactions', transactionRoutes);
router.use('/clients', clientRoutes);

export default router;