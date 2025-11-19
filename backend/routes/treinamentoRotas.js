import express from 'express';
import { listarTreinamentos, criarTreinamento } from '../controllers/TreinamentoController.js';

const router = express.Router();

router.get('/', listarTreinamentos);
router.post('/', criarTreinamento);

export default router;