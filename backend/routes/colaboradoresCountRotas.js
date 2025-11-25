import express from "express";
import UsuarioCountController from "../controllers/UsuarioCountController.js";

const router = express.Router();

router.get("/", UsuarioCountController.contarColaboradores);

export default router;
