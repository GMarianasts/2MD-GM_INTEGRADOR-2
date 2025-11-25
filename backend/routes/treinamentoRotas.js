import express from 'express';
import { listarTreinamentos, criarTreinamento, excluirTreinamento, atualizarTreinamento, buscarTreinamentoPorId } from '../controllers/TreinamentoController.js';

const router = express.Router();

router.get('/', listarTreinamentos);
router.post('/', criarTreinamento);
router.delete('/:id', excluirTreinamento);
router.put('/:id', atualizarTreinamento);
router.get('/:id', buscarTreinamentoPorId);

export default router;