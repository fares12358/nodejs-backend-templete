import express from 'express';
import { forgotPassword, loginUser, logoutUser, refreshTokenHandler, registerUser, resetPassword } from '../controllers/AuthControlles.js';

const router = express.Router();

// POST /api/auth/login
router.post('/login', loginUser);
// POST /api/auth/register
router.post('/register', registerUser); 
// POST /api/auth/refresh-token
router.post('/refresh-token', refreshTokenHandler);
// POST /api/auth/forgot-password
router.post('/forgot-password', forgotPassword);
// POST /api/auth/reset-password
router.post('/reset-password', resetPassword);
// POST /api/auth/logout
router.post('/logout', logoutUser);
export default router;
