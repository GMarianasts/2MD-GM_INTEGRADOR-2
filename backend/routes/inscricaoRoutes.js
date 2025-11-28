import express from "express";
import InscricaoController from "../controllers/InscricaoController.js";

const router = express.Router();

router.get("/", InscricaoController.listar);
router.post("/", InscricaoController.criar);
router.get("/usuario/:id", InscricaoController.listarPorUsuario);
router.delete("/:id", InscricaoController.excluir); // 👈 ou excluirInscricao (depende do nome)

export default router;
