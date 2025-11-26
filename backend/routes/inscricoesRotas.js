import express from "express";
import { getConnection } from "../config/database.js";

const router = express.Router();

// LISTAR INSCRIÇÕES
router.get("/", async (req, res) => {
    try {
        const conn = await getConnection();

        const [rows] = await conn.query(`
            SELECT i.id, 
                   u.nome AS colaborador,
                   t.titulo AS curso,
                   DATE_FORMAT(i.data_inscricao, '%d/%m/%Y') AS data,
                   i.progresso,
                   i.status
            FROM inscricoes i
            JOIN usuarios u ON u.id = i.usuario_id
            JOIN treinamentos t ON t.id = i.treinamento_id
            ORDER BY i.id DESC
        `);

        res.json(rows);
    } catch (error) {
        console.error("Erro ao buscar inscrições:", error);
        res.status(500).json({ message: "Erro ao buscar inscrições" });
    }
});

// EDITAR INSCRIÇÃO
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { progresso, status } = req.body;

    try {
        const conn = await getConnection();

        const sql = `
          UPDATE inscricoes 
          SET progresso = ?, status = ?
          WHERE id = ?
        `;

        await conn.query(sql, [progresso, status, id]);

        res.json({ message: "Inscrição atualizada com sucesso" });
    } catch (error) {
        console.error("Erro ao atualizar inscrição:", error);
        res.status(500).json({ message: "Erro ao atualizar inscrição" });
    }
});

// DELETAR INSCRIÇÃO
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const conn = await getConnection();
        await conn.query("DELETE FROM inscricoes WHERE id = ?", [id]);

        res.json({ message: "Inscrição removida com sucesso" });
    } catch (error) {
        console.error("Erro ao remover inscrição:", error);
        res.status(500).json({ message: "Erro ao remover inscrição" });
    }
});

export default router;
