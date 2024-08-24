import express from 'express';
import { getAllClients, getClientById,createClient, updateClient, deleteClient } from '../controllers/clientControllers';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', authMiddleware, getAllClients);
router.post('/', authMiddleware, createClient);
router.get('/:id', authMiddleware, getClientById);
router.put('/:id', authMiddleware, updateClient);
router.delete('/:id', authMiddleware, deleteClient);

export default router;