import { Router } from 'express';
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
} from '../controllers/auth.controller.js';

import { authRequired } from '../Middlewares/validateToken.js';
import { validateSchema } from '../Middlewares/validator.auth.js';
import { loginSchema, registerSchema } from '../schemas/auth.schema.js';

const router = Router();

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', authRequired, logout);
router.get('/verify', verifyToken);
router.get('/profile', authRequired, profile);

export default router;
