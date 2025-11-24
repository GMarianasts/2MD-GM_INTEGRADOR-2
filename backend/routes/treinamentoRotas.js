import express from 'express';
import { listarTreinamentos, criarTreinamento, excluirTreinamento, atualizarTreinamento } from '../controllers/TreinamentoController.js';

const router = express.Router();

router.get('/', listarTreinamentos);
router.post('/', criarTreinamento);
router.delete('/:id', excluirTreinamento);
router.put('/:id', atualizarTreinamento);

export default router;