import express from 'express';

const router = express.Router();


router.get('/', listarTreinamentos);
router.post('/', criarTreinamento);
router.delete('/:id', excluirTreinamento);
router.put('/:id', atualizarTreinamento);
router.get('/:id', buscarTreinamentoPorId);

export default router;