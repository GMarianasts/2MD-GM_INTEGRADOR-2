import express from 'express';
import { contarTreinamentosAtivos } from '../controllers/TreinamentoController.js';
import { getConnection } from '../config/database.js';

const router = express.Router();

router.get('/ativos/count', contarTreinamentosAtivos);

export default router;
