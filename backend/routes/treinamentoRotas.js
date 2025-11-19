import express from 'express';
// ADICIONEI O criarTreinamento AQUI NA IMPORTAÇÃO V
import { listarTreinamentos, criarTreinamento } from '../controllers/TreinamentoController.js';

const router = express.Router();

// Rota GET para http://localhost:3001/api/treinamentos
router.get('/', listarTreinamentos);
router.post('/', criarTreinamento);

export default router;