import { Router } from 'express';
import { register, login, getUsers, getUser, updateUser, deleteUser } from '../controllers/userController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', authMiddleware, getUsers);
router.get('/users/:id', authMiddleware, getUser);
router.put('/users/:id', authMiddleware, updateUser);
router.delete('/users/:id', authMiddleware, deleteUser);

export default router;