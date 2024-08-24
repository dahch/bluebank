import { Router } from 'express';
import { createAccount, deleteAccount, getAccount, updateAccount } from '../controllers/accountController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createAccount);
router.get('/:id', authMiddleware,getAccount);
router.put('/:id', authMiddleware,updateAccount);
router.delete('/:id', authMiddleware,deleteAccount);

export default router;
