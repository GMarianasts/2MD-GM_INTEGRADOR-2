import express from 'express';
import { contarColaboradores } from '../controllers/ColaboradorController.js';

const router = express.Router();

router.get('/count', contarColaboradores);

export default router;
