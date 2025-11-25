import express from 'express';
import { 
  listarTreinamentos, 
  criarTreinamento, 
  excluirTreinamento, 
  atualizarTreinamento,  
  contarTreinamentosAtivos 
} from '../controllers/TreinamentoController.js';

const router = express.Router();

// 1️⃣ Rotas específicas primeiro
router.get('/ativos/count', contarTreinamentosAtivos);

// 2️⃣ Depois rotas CRUD normais
router.get('/', listarTreinamentos);
router.post('/', criarTreinamento);
router.delete('/:id', excluirTreinamento);
router.put('/:id', atualizarTreinamento);

export default router;