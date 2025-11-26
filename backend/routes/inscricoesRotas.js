import { Router } from "express";
import InscricaoController from "../controllers/InscricaoController.js";

const router = Router();

router.get("/:id", InscricaoController.visualizar);   
router.put("/:id", InscricaoController.editar);    
router.delete("/:id", InscricaoController.remover);  

export default router;
