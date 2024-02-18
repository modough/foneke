import { Router } from 'express';
import { login, register, updatePlayer, verifyEmail } from '../controllers/playerController.js'

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/update', updatePlayer);
router.post('/verify-email', verifyEmail);

export default router;