import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';
import { authMiddleware, adminMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// ROTAS DE USUÁRIOS (somente admin)
router.get('/', authMiddleware, adminMiddleware, UsuarioController.listarUsuarios);
router.post('/', authMiddleware, adminMiddleware, UsuarioController.criarUsuario);
router.put('/:id', authMiddleware, adminMiddleware, UsuarioController.atualizarUsuario);
router.delete('/:id', authMiddleware, adminMiddleware, UsuarioController.excluirUsuario);

export default router;
