import { Router } from 'express';
import { login, register, updateUser, verifyEmail } from '../controllers/userController.js'

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/update', updateUser);
router.post('/verify-email', verifyEmail);

export default router;