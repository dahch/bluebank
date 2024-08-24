// api/src/routes/transactionRoutes.ts
import { Router } from 'express';
import { createTransaction, getTransaction, updateTransaction, deleteTransaction } from '../controllers/transactionController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createTransaction);
router.get('/:id', authMiddleware, getTransaction);
router.put('/:id', authMiddleware, updateTransaction);
router.delete('/:id', authMiddleware, deleteTransaction);

export default router;