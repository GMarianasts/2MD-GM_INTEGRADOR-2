import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';

const router = express.Router();

router.get('/', UsuarioController.listarUsuarios); 
router.post('/', UsuarioController.criarUsuario);
router.put('/:id', UsuarioController.atualizarUsuario);
router.delete('/:id', UsuarioController.excluirUsuario);

export default router;