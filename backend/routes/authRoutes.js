import express from 'express';
import { signup, login, getUser } from '../controllers/authController.js';

const router = express.Router();

// Signup and login routes
router.post('/signup', signup);
router.post('/login', login);
router.get('/user', getUser); // This will fetch user info based on token

export default router;
