import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';
import { authMiddleware, adminMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', UsuarioController.listarUsuarios); 
router.post('/', UsuarioController.criarUsuario);
router.put('/:id', authMiddleware, adminMiddleware, UsuarioController.atualizarUsuario);
router.delete('/:id', authMiddleware, adminMiddleware, UsuarioController.excluirUsuario);

export default router;