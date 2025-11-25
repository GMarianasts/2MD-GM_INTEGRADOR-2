import { getConnection } from "../config/database.js";

async function contarColaboradores(req, res) {
    try {
        const conn = await getConnection();

        const [rows] = await conn.query(`
            SELECT COUNT(*) AS total 
            FROM usuarios
            WHERE nivel_acesso = 'Colaborador'
        `);

        conn.release();

        return res.json({ total: rows[0].total });

    } catch (erro) {
        console.error("Erro ao contar colaboradores:", erro);
        return res.status(500).json({ erro: "Erro ao contar colaboradores" });
    }
}

export default { contarColaboradores };
